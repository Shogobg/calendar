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
/******/ 		"examples/antd-month-calendar": 0
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
/******/ 	deferredModules.push([1,"common"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./examples/antd-month-calendar.js":
/*!*****************************************!*\
  !*** ./examples/antd-month-calendar.js ***!
  \*****************************************/
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
/* harmony import */ var rc_calendar_src_MonthCalendar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rc-calendar/src/MonthCalendar */ "./src/MonthCalendar.jsx");
/* harmony import */ var rc_calendar_src_Picker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rc-calendar/src/Picker */ "./src/Picker.jsx");
/* harmony import */ var rc_calendar_src_locale_zh_CN__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rc-calendar/src/locale/zh_CN */ "./src/locale/zh_CN.js");
/* harmony import */ var rc_calendar_src_locale_en_US__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rc-calendar/src/locale/en_US */ "./src/locale/en_US.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var moment_locale_zh_cn__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! moment/locale/zh-cn */ "./node_modules/moment/locale/zh-cn.js");
/* harmony import */ var moment_locale_zh_cn__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(moment_locale_zh_cn__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var moment_locale_en_gb__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! moment/locale/en-gb */ "./node_modules/moment/locale/en-gb.js");
/* harmony import */ var moment_locale_en_gb__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(moment_locale_en_gb__WEBPACK_IMPORTED_MODULE_10__);
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











var format = 'YYYY-MM';
var cn = location.search.indexOf('cn') !== -1;
var now = moment__WEBPACK_IMPORTED_MODULE_8___default()();

if (cn) {
  now.locale('zh-cn').utcOffset(8);
} else {
  now.locale('en-gb').utcOffset(0);
}

var defaultCalendarValue = now.clone();
defaultCalendarValue.add(-1, 'month');

var Demo = /*#__PURE__*/function (_React$Component) {
  _inherits(Demo, _React$Component);

  var _super = _createSuper(Demo);

  function Demo(props) {
    var _this;

    _classCallCheck(this, Demo);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "onChange", function (value) {
      console.log("DatePicker change: ".concat(value && value.format(format)));

      _this.setState({
        value: value
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onShowTimeChange", function (e) {
      _this.setState({
        showTime: e.target.checked
      });
    });

    _defineProperty(_assertThisInitialized(_this), "toggleDisabled", function () {
      _this.setState({
        disabled: !_this.state.disabled
      });
    });

    _this.state = {
      showTime: true,
      disabled: false,
      value: props.defaultValue
    };
    return _this;
  }

  _createClass(Demo, [{
    key: "render",
    value: function render() {
      var state = this.state;
      var calendar = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(rc_calendar_src_MonthCalendar__WEBPACK_IMPORTED_MODULE_4__["default"], {
        locale: cn ? rc_calendar_src_locale_zh_CN__WEBPACK_IMPORTED_MODULE_6__["default"] : rc_calendar_src_locale_en_US__WEBPACK_IMPORTED_MODULE_7__["default"],
        style: {
          zIndex: 1000
        }
      });
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        style: {
          width: 240,
          margin: 20
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        style: {
          marginBottom: 10
        }
      }, "\xA0\xA0\xA0\xA0", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
        checked: state.disabled,
        onChange: this.toggleDisabled,
        type: "checkbox"
      }), " disabled")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        style: {
          boxSizing: 'border-box',
          position: 'relative',
          display: 'block',
          lineHeight: 1.5,
          marginBottom: 22
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(rc_calendar_src_Picker__WEBPACK_IMPORTED_MODULE_5__["default"], {
        animation: "slide-up",
        disabled: state.disabled,
        calendar: calendar,
        value: state.value,
        onChange: this.onChange
      }, function (_ref) {
        var value = _ref.value;
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
          style: {
            width: 200
          },
          readOnly: true,
          disabled: state.disabled,
          value: value && value.format(format),
          placeholder: "\u8BF7\u9009\u62E9\u65E5\u671F"
        });
      })));
    }
  }]);

  return Demo;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

_defineProperty(Demo, "propTypes", {
  defaultValue: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object
});

function onStandaloneSelect(value) {
  console.log('month-calendar select', value && value.format(format));
}

function onStandaloneChange(value) {
  console.log('month-calendar change', value && value.format(format));
}

function disabledDate(value) {
  return value.year() > now.year() || value.year() === now.year() && value.month() > now.month();
}

function onMonthCellContentRender(value) {
  // console.log('month-calendar onMonthCellContentRender', (value && value.format(format)));
  return "".concat(value.month() + 1, "\u6708");
}

react_dom__WEBPACK_IMPORTED_MODULE_2___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
  style: {
    zIndex: 1000,
    position: 'relative',
    width: 600,
    margin: '0 auto'
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(rc_calendar_src_MonthCalendar__WEBPACK_IMPORTED_MODULE_4__["default"], {
  locale: cn ? rc_calendar_src_locale_zh_CN__WEBPACK_IMPORTED_MODULE_6__["default"] : rc_calendar_src_locale_en_US__WEBPACK_IMPORTED_MODULE_7__["default"],
  style: {
    zIndex: 1000
  },
  disabledDate: disabledDate,
  onSelect: onStandaloneSelect,
  onChange: onStandaloneChange,
  monthCellContentRender: onMonthCellContentRender,
  defaultValue: defaultCalendarValue,
  renderFooter: function renderFooter() {
    return 'extra footer';
  }
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
  style: {
    marginTop: 200
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Demo, {
  defaultValue: now
}))), document.getElementById('__react-content'));

/***/ }),

/***/ "./src/MonthCalendar.jsx":
/*!*******************************!*\
  !*** ./src/MonthCalendar.jsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rc_util_es_KeyCode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rc-util/es/KeyCode */ "./node_modules/rc-util/es/KeyCode.js");
/* harmony import */ var react_lifecycles_compat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-lifecycles-compat */ "./node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js");
/* harmony import */ var _calendar_CalendarHeader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./calendar/CalendarHeader */ "./src/calendar/CalendarHeader.jsx");
/* harmony import */ var _calendar_CalendarFooter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./calendar/CalendarFooter */ "./src/calendar/CalendarFooter.jsx");
/* harmony import */ var _mixin_CalendarMixin__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mixin/CalendarMixin */ "./src/mixin/CalendarMixin.js");
/* harmony import */ var _mixin_CommonMixin__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./mixin/CommonMixin */ "./src/mixin/CommonMixin.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_8__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? Object(arguments[i]) : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys.push.apply(ownKeys, Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

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











var MonthCalendar = /*#__PURE__*/function (_React$Component) {
  _inherits(MonthCalendar, _React$Component);

  var _super = _createSuper(MonthCalendar);

  function MonthCalendar(props) {
    var _this;

    _classCallCheck(this, MonthCalendar);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "onKeyDown", function (event) {
      var keyCode = event.keyCode;
      var ctrlKey = event.ctrlKey || event.metaKey;
      var stateValue = _this.state.value;
      var disabledDate = _this.props.disabledDate;
      var value = stateValue;

      switch (keyCode) {
        case rc_util_es_KeyCode__WEBPACK_IMPORTED_MODULE_2__["default"].DOWN:
          value = stateValue.clone();
          value.add(3, 'months');
          break;

        case rc_util_es_KeyCode__WEBPACK_IMPORTED_MODULE_2__["default"].UP:
          value = stateValue.clone();
          value.add(-3, 'months');
          break;

        case rc_util_es_KeyCode__WEBPACK_IMPORTED_MODULE_2__["default"].LEFT:
          value = stateValue.clone();

          if (ctrlKey) {
            value.add(-1, 'years');
          } else {
            value.add(-1, 'months');
          }

          break;

        case rc_util_es_KeyCode__WEBPACK_IMPORTED_MODULE_2__["default"].RIGHT:
          value = stateValue.clone();

          if (ctrlKey) {
            value.add(1, 'years');
          } else {
            value.add(1, 'months');
          }

          break;

        case rc_util_es_KeyCode__WEBPACK_IMPORTED_MODULE_2__["default"].ENTER:
          if (!disabledDate || !disabledDate(stateValue)) {
            _this.onSelect(stateValue);
          }

          event.preventDefault();
          return 1;

        default:
          return undefined;
      }

      if (value !== stateValue) {
        _this.setValue(value);

        event.preventDefault();
        return 1;
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handlePanelChange", function (_, mode) {
      if (mode !== 'date') {
        _this.setState({
          mode: mode
        });
      }
    });

    _this.state = {
      mode: 'month',
      value: props.value || props.defaultValue || moment__WEBPACK_IMPORTED_MODULE_8___default()(),
      selectedValue: props.selectedValue || props.defaultSelectedValue
    };
    return _this;
  }

  _createClass(MonthCalendar, [{
    key: "render",
    value: function render() {
      var props = this.props,
          state = this.state;
      var mode = state.mode,
          value = state.value;
      var children = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "".concat(props.prefixCls, "-month-calendar-content")
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "".concat(props.prefixCls, "-month-header-wrap")
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_calendar_CalendarHeader__WEBPACK_IMPORTED_MODULE_4__["default"], {
        prefixCls: props.prefixCls,
        mode: mode,
        value: value,
        locale: props.locale,
        disabledMonth: props.disabledDate,
        monthCellRender: props.monthCellRender,
        monthCellContentRender: props.monthCellContentRender,
        onMonthSelect: this.onSelect,
        onValueChange: this.setValue,
        onPanelChange: this.handlePanelChange
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_calendar_CalendarFooter__WEBPACK_IMPORTED_MODULE_5__["default"], {
        prefixCls: props.prefixCls,
        renderFooter: props.renderFooter
      }));
      return this.renderRoot({
        className: "".concat(props.prefixCls, "-month-calendar"),
        children: children
      });
    }
  }]);

  return MonthCalendar;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

_defineProperty(MonthCalendar, "propTypes", _objectSpread({}, _mixin_CalendarMixin__WEBPACK_IMPORTED_MODULE_6__["calendarMixinPropTypes"], _mixin_CommonMixin__WEBPACK_IMPORTED_MODULE_7__["propType"], {
  monthCellRender: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  value: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  defaultValue: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  selectedValue: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  defaultSelectedValue: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  disabledDate: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
}));

_defineProperty(MonthCalendar, "defaultProps", _extends({}, _mixin_CommonMixin__WEBPACK_IMPORTED_MODULE_7__["defaultProp"], _mixin_CalendarMixin__WEBPACK_IMPORTED_MODULE_6__["calendarMixinDefaultProps"]));

/* harmony default export */ __webpack_exports__["default"] = (Object(react_lifecycles_compat__WEBPACK_IMPORTED_MODULE_3__["polyfill"])(Object(_mixin_CalendarMixin__WEBPACK_IMPORTED_MODULE_6__["calendarMixinWrapper"])(Object(_mixin_CommonMixin__WEBPACK_IMPORTED_MODULE_7__["commonMixinWrapper"])(MonthCalendar))));

/***/ }),

/***/ 1:
/*!***********************************************!*\
  !*** multi ./examples/antd-month-calendar.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./examples/antd-month-calendar.js */"./examples/antd-month-calendar.js");


/***/ })

/******/ });
//# sourceMappingURL=antd-month-calendar.js.map