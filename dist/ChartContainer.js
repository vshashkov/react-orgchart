"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _service = require("./service");
var _jsonDigger = _interopRequireDefault(require("json-digger"));
var _html2canvas = _interopRequireDefault(require("html2canvas"));
var _jspdf = _interopRequireDefault(require("jspdf"));
var _ChartNode = _interopRequireDefault(require("./ChartNode"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var propTypes = {
  datasource: _propTypes.default.object.isRequired,
  pan: _propTypes.default.bool,
  zoom: _propTypes.default.bool,
  zoomoutLimit: _propTypes.default.number,
  zoominLimit: _propTypes.default.number,
  containerClass: _propTypes.default.string,
  chartClass: _propTypes.default.string,
  NodeTemplate: _propTypes.default.elementType,
  draggable: _propTypes.default.bool,
  collapsible: _propTypes.default.bool,
  multipleSelect: _propTypes.default.bool,
  onClickNode: _propTypes.default.func,
  onClickChart: _propTypes.default.func,
  onZoomChange: _propTypes.default.func,
  onDropNode: _propTypes.default.func
};
var defaultProps = {
  pan: false,
  zoom: false,
  zoomoutLimit: 0.5,
  zoominLimit: 7,
  containerClass: "",
  chartClass: "",
  draggable: false,
  collapsible: true,
  multipleSelect: false
};
var ChartContainer = (0, _react.forwardRef)(function (_ref, ref) {
  var datasource = _ref.datasource,
    pan = _ref.pan,
    zoom = _ref.zoom,
    zoomoutLimit = _ref.zoomoutLimit,
    zoominLimit = _ref.zoominLimit,
    containerClass = _ref.containerClass,
    chartClass = _ref.chartClass,
    NodeTemplate = _ref.NodeTemplate,
    draggable = _ref.draggable,
    collapsible = _ref.collapsible,
    multipleSelect = _ref.multipleSelect,
    onClickNode = _ref.onClickNode,
    onClickChart = _ref.onClickChart,
    onZoomChange = _ref.onZoomChange,
    onDropNode = _ref.onDropNode;
  var container = (0, _react.useRef)();
  var chart = (0, _react.useRef)();
  var downloadButton = (0, _react.useRef)();
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    panning = _useState2[0],
    setPanning = _useState2[1];
  var _useState3 = (0, _react.useState)("default"),
    _useState4 = _slicedToArray(_useState3, 2),
    cursor = _useState4[0],
    setCursor = _useState4[1];
  var _useState5 = (0, _react.useState)(false),
    _useState6 = _slicedToArray(_useState5, 2),
    exporting = _useState6[0],
    setExporting = _useState6[1];
  var _useState7 = (0, _react.useState)(""),
    _useState8 = _slicedToArray(_useState7, 2),
    dataURL = _useState8[0],
    setDataURL = _useState8[1];
  var _useState9 = (0, _react.useState)(""),
    _useState10 = _slicedToArray(_useState9, 2),
    download = _useState10[0],
    setDownload = _useState10[1];
  var _useState11 = (0, _react.useState)({
      oldX: 0,
      oldY: 0,
      x: 0,
      y: 0,
      z: 1
    }),
    _useState12 = _slicedToArray(_useState11, 2),
    position = _useState12[0],
    setPosition = _useState12[1];
  var _useState13 = (0, _react.useState)(1),
    _useState14 = _slicedToArray(_useState13, 2),
    scale = _useState14[0],
    setScale = _useState14[1];
  var debouncedScale = (0, _service.useDebouncedState)(scale);
  var attachRel = (0, _react.useCallback)(function (data, flags) {
    if (!!data && data.length) {
      data.forEach(function (item) {
        attachRel(item, flags === "00" ? flags : "1" + (data.length > 1 ? 1 : 0));
      });
    }
    data = Object.assign({}, data);
    data.relationship = flags + (data.children && data.children.length > 0 ? 1 : 0);
    if (data.children) {
      data.children.forEach(function (item) {
        attachRel(item, "1" + (data.children.length > 1 ? 1 : 0));
      });
    }
    return data;
  }, []);
  var _useState15 = (0, _react.useState)(datasource),
    _useState16 = _slicedToArray(_useState15, 2),
    ds = _useState16[0],
    setDS = _useState16[1];
  (0, _react.useEffect)(function () {
    setDS(datasource);
  }, [datasource]);
  var dsDigger = new _jsonDigger.default(datasource, "id", "children");
  var clickChartHandler = function clickChartHandler(event) {
    if (!event.target.closest(".oc-node")) {
      if (onClickChart) {
        onClickChart();
      }
      _service.selectNodeService.clearSelectedNodes();
    }
  };
  var panEndHandler = function panEndHandler() {
    setCursor("default");
  };
  var panStartHandler = function panStartHandler(e) {
    if (e.target.closest(".oc-node")) {
      setPanning(false);
      return;
    } else {
      e.preventDefault();
      setPanning(true);
      setPosition(_objectSpread(_objectSpread({}, position), {}, {
        oldX: e.clientX,
        oldY: e.clientY
      }));
    }
  };
  (0, _react.useEffect)(function () {
    var mouseup = function mouseup() {
      setPanning(false);
    };
    var mousemove = function mousemove(event) {
      if (panning) {
        setPosition(_objectSpread(_objectSpread({}, position), {}, {
          x: position.x + event.clientX - position.oldX,
          y: position.y + event.clientY - position.oldY,
          oldX: event.clientX,
          oldY: event.clientY
        }));
      }
    };
    window.addEventListener('mouseup', mouseup);
    window.addEventListener('mousemove', mousemove);
    return function () {
      window.removeEventListener('mouseup', mouseup);
      window.removeEventListener('mousemove', mousemove);
    };
  });
  var zoomHandler = function zoomHandler(e) {
    if (e.deltaY) {
      var sign = Math.sign(e.deltaY) / 100;
      var _scale = 1 - sign;
      var rect = container.current.getBoundingClientRect();
      var chartEl = container.current.getBoundingClientRect();
      var targetScale = position.z * _scale;
      if (targetScale > zoomoutLimit && targetScale < zoominLimit) {
        setPosition(_objectSpread(_objectSpread({}, position), {}, {
          x: position.x * _scale - (rect.width / 2 - e.clientX + rect.x) * sign,
          y: position.y * _scale - (chartEl.height * rect.width / chartEl.width / 2 - e.clientY + rect.y) * sign,
          z: targetScale
        }));
        setScale(targetScale);
      }
    }
  };
  (0, _react.useEffect)(function () {
    onZoomChange && onZoomChange(debouncedScale);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedScale]);
  var exportPDF = function exportPDF(canvas, exportFilename) {
    var canvasWidth = Math.floor(canvas.width);
    var canvasHeight = Math.floor(canvas.height);
    var doc = canvasWidth > canvasHeight ? new _jspdf.default({
      orientation: "landscape",
      unit: "px",
      format: [canvasWidth, canvasHeight]
    }) : new _jspdf.default({
      orientation: "portrait",
      unit: "px",
      format: [canvasHeight, canvasWidth]
    });
    doc.addImage(canvas.toDataURL("image/jpeg", 1.0), "JPEG", 0, 0);
    doc.save(exportFilename + ".pdf");
  };
  var exportPNG = function exportPNG(canvas, exportFilename) {
    var isWebkit = ("WebkitAppearance" in document.documentElement.style);
    var isFf = !!window.sidebar;
    var isEdge = navigator.appName === "Microsoft Internet Explorer" || navigator.appName === "Netscape" && navigator.appVersion.indexOf("Edge") > -1;
    if (!isWebkit && !isFf || isEdge) {
      window.navigator.msSaveBlob(canvas.msToBlob(), exportFilename + ".png");
    } else {
      setDataURL(canvas.toDataURL());
      setDownload(exportFilename + ".png");
      downloadButton.current.click();
    }
  };
  var changeHierarchy = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(draggedItemData, dropTargetId) {
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return dsDigger.removeNode(draggedItemData.id);
            case 2:
              _context.next = 4;
              return dsDigger.addChildren(dropTargetId, draggedItemData);
            case 4:
              setDS(_objectSpread({}, dsDigger.ds));
              return _context.abrupt("return", _objectSpread({}, dsDigger.ds));
            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return function changeHierarchy(_x, _x2) {
      return _ref2.apply(this, arguments);
    };
  }();
  (0, _react.useImperativeHandle)(ref, function () {
    return {
      exportTo: function exportTo(exportFilename, exportFileextension) {
        exportFilename = exportFilename || "OrgChart";
        exportFileextension = exportFileextension || "png";
        setExporting(true);
        var originalScrollLeft = container.current.scrollLeft;
        container.current.scrollLeft = 0;
        var originalScrollTop = container.current.scrollTop;
        container.current.scrollTop = 0;
        (0, _html2canvas.default)(chart.current, {
          width: chart.current.clientWidth,
          height: chart.current.clientHeight,
          onclone: function onclone(clonedDoc) {
            clonedDoc.querySelector(".orgchart").style.background = "none";
            clonedDoc.querySelector(".orgchart").style.transform = "";
          }
        }).then(function (canvas) {
          if (exportFileextension.toLowerCase() === "pdf") {
            exportPDF(canvas, exportFilename);
          } else {
            exportPNG(canvas, exportFilename);
          }
          setExporting(false);
          container.current.scrollLeft = originalScrollLeft;
          container.current.scrollTop = originalScrollTop;
        }, function () {
          setExporting(false);
          container.current.scrollLeft = originalScrollLeft;
          container.current.scrollTop = originalScrollTop;
        });
      },
      expandAllNodes: function expandAllNodes() {
        chart.current.querySelectorAll(".oc-node.hidden, .oc-hierarchy.hidden, .isSiblingsCollapsed, .isAncestorsCollapsed").forEach(function (el) {
          el.classList.remove("hidden", "isSiblingsCollapsed", "isAncestorsCollapsed");
        });
      },
      setZoom: function setZoom(newScale) {
        if (newScale < zoomoutLimit) {
          newScale = zoomoutLimit;
        }
        if (newScale > zoominLimit) {
          newScale = zoominLimit;
        }
        setPosition(function (position) {
          return _objectSpread(_objectSpread({}, position), {}, {
            z: newScale
          });
        });
      },
      getChart: function getChart() {
        return ds.children;
      },
      resetPosition: function resetPosition() {
        setPosition({
          oldX: 0,
          oldY: 0,
          x: 0,
          y: 0,
          z: 0
        });
      }
    };
  });
  var dsWithAttachedRel = (0, _react.useMemo)(function () {
    return attachRel(ds, "00");
  }, [attachRel, ds]);
  return /*#__PURE__*/_react.default.createElement("div", {
    ref: container,
    className: "orgchart-container " + containerClass,
    onWheel: zoom ? zoomHandler : undefined,
    onMouseUp: pan && panning ? panEndHandler : undefined
  }, /*#__PURE__*/_react.default.createElement("div", {
    ref: chart,
    className: "orgchart " + chartClass,
    style: {
      transform: "translate(".concat(position.x, "px, ").concat(position.y, "px) scale(").concat(position.z, ")"),
      cursor: cursor
    },
    onClick: clickChartHandler,
    onMouseDown: pan ? panStartHandler : undefined
  }, /*#__PURE__*/_react.default.createElement("ul", null, !!dsWithAttachedRel && dsWithAttachedRel.length ? dsWithAttachedRel.map(function (_ds) {
    return /*#__PURE__*/_react.default.createElement(_ChartNode.default, {
      datasource: _ds,
      NodeTemplate: NodeTemplate,
      draggable: draggable,
      collapsible: collapsible,
      multipleSelect: multipleSelect,
      changeHierarchy: changeHierarchy,
      onClickNode: onClickNode,
      onDropNode: onDropNode
    });
  }) : /*#__PURE__*/_react.default.createElement(_ChartNode.default, {
    datasource: dsWithAttachedRel,
    NodeTemplate: NodeTemplate,
    draggable: draggable,
    collapsible: collapsible,
    multipleSelect: multipleSelect,
    changeHierarchy: changeHierarchy,
    onClickNode: onClickNode,
    onDropNode: onDropNode
  }))), /*#__PURE__*/_react.default.createElement("a", {
    className: "oc-download-btn hidden",
    ref: downloadButton,
    href: dataURL,
    download: download
  }, "\xA0"), /*#__PURE__*/_react.default.createElement("div", {
    className: "oc-mask ".concat(exporting ? "" : "hidden")
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "oci oci-spinner spinner"
  })));
});
ChartContainer.propTypes = propTypes;
ChartContainer.defaultProps = defaultProps;
ChartContainer.selectNodeService = _service.selectNodeService;
ChartContainer.dragNodeService = _service.dragNodeService;
var _default = ChartContainer;
exports.default = _default;