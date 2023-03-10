"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.selectNodeService = exports.dragNodeService = void 0;
exports.useDebouncedState = useDebouncedState;
var _react = require("react");
var _rxjs = require("rxjs");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
var selectedNodes = [];
var dragNodeSubject = new _rxjs.Subject();
var selectedNodesSubject = new _rxjs.Subject();
var dragNodeService = {
  sendDragInfo: function sendDragInfo(id) {
    return dragNodeSubject.next({
      draggedNodeId: id
    });
  },
  clearDragInfo: function clearDragInfo() {
    return dragNodeSubject.next();
  },
  getDragInfo: function getDragInfo() {
    return dragNodeSubject.asObservable();
  }
};
exports.dragNodeService = dragNodeService;
var selectNodeService = {
  toggleSelectNode: function toggleSelectNode(node) {
    var index = selectedNodes.find(function (n) {
      return n.id === node.id;
    });
    if (index) {
      selectedNodes = _toConsumableArray(selectedNodes.filter(function (find) {
        return find.id !== node.id;
      }));
    } else {
      selectedNodes = [].concat(_toConsumableArray(selectedNodes), [node]);
    }
    selectedNodesSubject.next(selectedNodes);
  },
  clearSelectedNodes: function clearSelectedNodes() {
    selectedNodes = [];
    selectedNodesSubject.next(selectedNodes);
  },
  getSelectedNodes: function getSelectedNodes() {
    return selectedNodesSubject.asObservable();
  }
};
exports.selectNodeService = selectNodeService;
function useDebouncedState(value) {
  var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 300;
  // State and setters for debounced value
  var _useState = (0, _react.useState)(value),
    _useState2 = _slicedToArray(_useState, 2),
    debouncedValue = _useState2[0],
    setDebouncedValue = _useState2[1];
  (0, _react.useEffect)(function () {
    // Set debouncedValue to value (passed in) after the specified delay
    var handler = setTimeout(function () {
      setDebouncedValue(value);
    }, delay);

    // Return a cleanup function that will be called every time ...
    // ... useEffect is re-called. useEffect will only be re-called ...
    // ... if value changes (see the inputs array below).
    // This is how we prevent debouncedValue from changing if value is ...
    // ... changed within the delay period. Timeout gets cleared and restarted.
    // To put it in context, if the user is typing within our app's ...
    // ... search box, we don't want the debouncedValue to update until ...
    // ... they've stopped typing for more than 500ms.
    return function () {
      clearTimeout(handler);
    };
  },
  // Only re-call effect if value changes
  // You could also add the "delay" var to inputs array if you ...
  // ... need to be able to change that dynamically.
  [delay, value]);
  return debouncedValue;
}