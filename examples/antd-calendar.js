/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"examples/antd-calendar": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,"common"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./examples/antd-calendar.js":
/*!***********************************!*\
  !*** ./examples/antd-calendar.js ***!
  \***********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var rc_calendar_assets_index_less__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rc-calendar/assets/index.less */ "./assets/index.less");
/* harmony import */ var rc_calendar_assets_index_less__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rc_calendar_assets_index_less__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rc_calendar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rc-calendar */ "./index.js");
/* harmony import */ var rc_calendar_src_Picker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rc-calendar/src/Picker */ "./src/Picker.jsx");
/* harmony import */ var rc_calendar_src_locale_zh_CN__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rc-calendar/src/locale/zh_CN */ "./src/locale/zh_CN.js");
/* harmony import */ var rc_calendar_src_locale_en_US__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rc-calendar/src/locale/en_US */ "./src/locale/en_US.js");
/* harmony import */ var rc_time_picker_assets_index_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rc-time-picker/assets/index.css */ "./node_modules/rc-time-picker/assets/index.css");
/* harmony import */ var rc_time_picker_assets_index_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(rc_time_picker_assets_index_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var rc_time_picker_es_Panel__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rc-time-picker/es/Panel */ "./node_modules/rc-time-picker/es/Panel.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var moment_locale_zh_cn__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! moment/locale/zh-cn */ "./node_modules/moment/locale/zh-cn.js");
/* harmony import */ var moment_locale_zh_cn__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(moment_locale_zh_cn__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var moment_locale_en_gb__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! moment/locale/en-gb */ "./node_modules/moment/locale/en-gb.js");
/* harmony import */ var moment_locale_en_gb__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(moment_locale_en_gb__WEBPACK_IMPORTED_MODULE_12__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* eslint react/no-multi-comp:0, no-console:0 */













var format = 'YYYY-MM-DD HH:mm:ss';
var cn = location.search.indexOf('cn') !== -1;
var now = moment__WEBPACK_IMPORTED_MODULE_10___default()();

if (cn) {
  now.locale('zh-cn').utcOffset(8);
} else {
  now.locale('en-gb').utcOffset(0);
}

function getFormat(time) {
  return time ? format : 'YYYY-MM-DD';
}

var defaultCalendarValue = now.clone();
defaultCalendarValue.add(-1, 'month');
var timePickerElement = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(rc_time_picker_es_Panel__WEBPACK_IMPORTED_MODULE_9__["default"], {
  defaultValue: moment__WEBPACK_IMPORTED_MODULE_10___default()('00:00:00', 'HH:mm:ss')
});

function disabledTime(date) {
  console.log('disabledTime', date);

  if (date && date.date() === 15) {
    return {
      disabledHours: function disabledHours() {
        return [3, 4];
      }
    };
  }

  return {
    disabledHours: function disabledHours() {
      return [1, 2];
    }
  };
}

function disabledDate(current) {
  if (!current) {
    // allow empty select
    return false;
  }

  var date = moment__WEBPACK_IMPORTED_MODULE_10___default()();
  date.hour(0);
  date.minute(0);
  date.second(0);
  return current.valueOf() < date.valueOf(); // can not select days before today
}

var Demo = /*#__PURE__*/function (_React$Component) {
  _inherits(Demo, _React$Component);

  var _super = _createSuper(Demo);

  function Demo(props) {
    var _this;

    _classCallCheck(this, Demo);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "onChange", function (value) {
      console.log('DatePicker change: ', value && value.format(format));

      _this.setState({
        value: value
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onShowTimeChange", function (e) {
      _this.setState({
        showTime: e.target.checked
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onShowDateInputChange", function (e) {
      _this.setState({
        showDateInput: e.target.checked
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onOpenChange", function (open) {
      _this.setState({
        open: open
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onFocus", function () {
      if (!_this.state.open && _this.state.isMouseDown) {
        // focus from a "click" event, let the picker trigger automatically open the calendar
        _this.setState({
          isMouseDown: false
        });
      } else {
        // focus not caused by "click" (such as programmatic or via keyboard)
        _this.setState({
          open: true
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onMouseDown", function () {
      _this.setState({
        isMouseDown: true
      });
    });

    _defineProperty(_assertThisInitialized(_this), "getCalendarContainer", function () {
      return _this.calendarContainerRef.current;
    });

    _defineProperty(_assertThisInitialized(_this), "toggleDisabled", function () {
      _this.setState({
        disabled: !_this.state.disabled
      });
    });

    _this.calendarContainerRef = react__WEBPACK_IMPORTED_MODULE_1___default.a.createRef();
    _this.state = {
      showTime: true,
      showDateInput: true,
      disabled: false,
      open: false,
      value: props.defaultValue
    };
    return _this;
  }

  _createClass(Demo, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var state = this.state;
      var calendar = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(rc_calendar__WEBPACK_IMPORTED_MODULE_4__["default"], {
        locale: cn ? rc_calendar_src_locale_zh_CN__WEBPACK_IMPORTED_MODULE_6__["default"] : rc_calendar_src_locale_en_US__WEBPACK_IMPORTED_MODULE_7__["default"],
        style: {
          zIndex: 1001
        },
        dateInputPlaceholder: "please input",
        format: getFormat(state.showTime),
        disabledTime: state.showTime ? disabledTime : null,
        timePicker: state.showTime ? timePickerElement : null,
        defaultValue: this.props.defaultCalendarValue,
        showDateInput: state.showDateInput,
        disabledDate: disabledDate,
        focusablePanel: false
      });
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        style: {
          width: 400,
          margin: 20
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        style: {
          marginBottom: 10
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
        type: "checkbox",
        checked: state.showTime,
        onChange: this.onShowTimeChange
      }), "showTime"), "\xA0\xA0\xA0\xA0", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
        type: "checkbox",
        checked: state.showDateInput,
        onChange: this.onShowDateInputChange
      }), "showDateInput"), "\xA0\xA0\xA0\xA0", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
        checked: state.disabled,
        onChange: this.toggleDisabled,
        type: "checkbox"
      }), "disabled")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        style: {
          boxSizing: 'border-box',
          position: 'relative',
          display: 'block',
          lineHeight: 1.5,
          marginBottom: 22
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(rc_calendar_src_Picker__WEBPACK_IMPORTED_MODULE_5__["default"], {
        animation: "slide-up",
        calendar: calendar,
        value: state.value,
        onChange: this.onChange,
        getCalendarContainer: this.getCalendarContainer,
        onOpenChange: this.onOpenChange,
        open: state.open,
        style: {
          zIndex: 1001
        }
      }, function (_ref) {
        var value = _ref.value;
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
          tabIndex: "0",
          onMouseDown: _this2.onMouseDown,
          onFocus: _this2.onFocus
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
          placeholder: "please select",
          style: {
            width: 250
          },
          disabled: state.disabled,
          readOnly: true,
          tabIndex: "-1",
          className: "ant-calendar-picker-input ant-input",
          value: value && value.format(getFormat(state.showTime)) || ''
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          ref: _this2.calendarContainerRef
        }));
      })));
    }
  }]);

  return Demo;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

_defineProperty(Demo, "propTypes", {
  defaultValue: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,
  defaultCalendarValue: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object
});

var multiFormats = ['DD/MM/YYYY', 'DD/MM/YY', 'DDMMYY', 'D/M/YY'];

var DemoMultiFormat = /*#__PURE__*/function (_React$Component2) {
  _inherits(DemoMultiFormat, _React$Component2);

  var _super2 = _createSuper(DemoMultiFormat);

  function DemoMultiFormat(props) {
    var _this3;

    _classCallCheck(this, DemoMultiFormat);

    _this3 = _super2.call(this, props);

    _defineProperty(_assertThisInitialized(_this3), "onChange", function (value) {
      console.log('Calendar change: ', value && value.format(format));

      _this3.setState({
        value: value
      });
    });

    _this3.state = {
      value: now
    };
    return _this3;
  }

  _createClass(DemoMultiFormat, [{
    key: "render",
    value: function render() {
      var state = this.state;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        style: {
          width: 400,
          margin: 20
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        style: {
          marginBottom: 10
        }
      }, "Accepts multiple input formats", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("small", null, multiFormats.join(', ')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(rc_calendar__WEBPACK_IMPORTED_MODULE_4__["default"], {
        locale: cn ? rc_calendar_src_locale_zh_CN__WEBPACK_IMPORTED_MODULE_6__["default"] : rc_calendar_src_locale_en_US__WEBPACK_IMPORTED_MODULE_7__["default"],
        style: {
          zIndex: 1000
        },
        dateInputPlaceholder: "please input",
        format: multiFormats,
        value: state.value,
        onChange: this.onChange,
        focusablePanel: false
      }));
    }
  }]);

  return DemoMultiFormat;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

function onStandaloneSelect(value) {
  console.log('onStandaloneSelect');
  console.log(value && value.format(format));
}

function onStandaloneChange(value) {
  console.log('onStandaloneChange');
  console.log(value && value.format(format));
}

react_dom__WEBPACK_IMPORTED_MODULE_2___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
  style: {
    zIndex: 1000,
    position: 'relative',
    width: 900,
    margin: '20px auto'
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
  style: {
    margin: 10
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(rc_calendar__WEBPACK_IMPORTED_MODULE_4__["default"], {
  showWeekNumber: false,
  locale: cn ? rc_calendar_src_locale_zh_CN__WEBPACK_IMPORTED_MODULE_6__["default"] : rc_calendar_src_locale_en_US__WEBPACK_IMPORTED_MODULE_7__["default"],
  defaultValue: now,
  disabledTime: disabledTime,
  showToday: true,
  format: getFormat(true),
  showOk: false,
  timePicker: timePickerElement,
  onChange: onStandaloneChange,
  disabledDate: disabledDate,
  onSelect: onStandaloneSelect,
  renderFooter: function renderFooter(mode) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, mode, " extra footer");
  }
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
  style: {
    "float": 'left',
    width: 300
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Demo, {
  defaultValue: now
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
  style: {
    "float": 'right',
    width: 300
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Demo, {
  defaultCalendarValue: defaultCalendarValue
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
  style: {
    clear: 'both'
  }
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(DemoMultiFormat, null)))), document.getElementById('__react-content'));

/***/ }),

/***/ 0:
/*!*****************************************!*\
  !*** multi ./examples/antd-calendar.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./examples/antd-calendar.js */"./examples/antd-calendar.js");


/***/ })

/******/ });
//# sourceMappingURL=antd-calendar.js.map