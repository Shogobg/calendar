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
/******/ 		"examples/full-calendar": 0
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
/******/ 	deferredModules.push([5,"common"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./examples/full-calendar.js":
/*!***********************************!*\
  !*** ./examples/full-calendar.js ***!
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
/* harmony import */ var rc_calendar_src_FullCalendar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rc-calendar/src/FullCalendar */ "./src/FullCalendar.jsx");
/* harmony import */ var rc_select_assets_index_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rc-select/assets/index.css */ "./node_modules/rc-select/assets/index.css");
/* harmony import */ var rc_select_assets_index_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rc_select_assets_index_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var rc_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rc-select */ "./node_modules/rc-select/es/index.js");
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











var format = 'YYYY-MM-DD';
var cn = location.search.indexOf('cn') !== -1;
var now = moment__WEBPACK_IMPORTED_MODULE_8___default()();

if (cn) {
  now.locale('zh-cn').utcOffset(8);
} else {
  now.locale('en-gb').utcOffset(0);
}

var defaultCalendarValue = now.clone();
defaultCalendarValue.add(-1, 'month');

function onSelect(value) {
  console.log('select', value.format(format));
}

var Demo = /*#__PURE__*/function (_React$Component) {
  _inherits(Demo, _React$Component);

  var _super = _createSuper(Demo);

  function Demo() {
    var _this;

    _classCallCheck(this, Demo);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      type: 'month'
    });

    _defineProperty(_assertThisInitialized(_this), "onTypeChange", function (type) {
      _this.setState({
        type: type
      });
    });

    return _this;
  }

  _createClass(Demo, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        style: {
          zIndex: 1000,
          position: 'relative'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(rc_calendar_src_FullCalendar__WEBPACK_IMPORTED_MODULE_3__["default"], {
        style: {
          margin: 10
        },
        Select: rc_select__WEBPACK_IMPORTED_MODULE_5__["default"],
        fullscreen: false,
        onSelect: onSelect,
        defaultValue: now,
        locale: cn ? rc_calendar_src_locale_zh_CN__WEBPACK_IMPORTED_MODULE_6__["default"] : rc_calendar_src_locale_en_US__WEBPACK_IMPORTED_MODULE_7__["default"]
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(rc_calendar_src_FullCalendar__WEBPACK_IMPORTED_MODULE_3__["default"], {
        style: {
          margin: 10
        },
        Select: rc_select__WEBPACK_IMPORTED_MODULE_5__["default"],
        fullscreen: true,
        defaultValue: now,
        onSelect: onSelect,
        type: this.state.type,
        onTypeChange: this.onTypeChange,
        locale: cn ? rc_calendar_src_locale_zh_CN__WEBPACK_IMPORTED_MODULE_6__["default"] : rc_calendar_src_locale_en_US__WEBPACK_IMPORTED_MODULE_7__["default"]
      }));
    }
  }]);

  return Demo;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

react_dom__WEBPACK_IMPORTED_MODULE_2___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Demo, null), document.getElementById('__react-content'));

/***/ }),

/***/ "./src/FullCalendar.jsx":
/*!******************************!*\
  !*** ./src/FullCalendar.jsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_lifecycles_compat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-lifecycles-compat */ "./node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js");
/* harmony import */ var _date_DateTable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./date/DateTable */ "./src/date/DateTable.jsx");
/* harmony import */ var _month_MonthTable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./month/MonthTable */ "./src/month/MonthTable.js");
/* harmony import */ var _mixin_CalendarMixin__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mixin/CalendarMixin */ "./src/mixin/CalendarMixin.js");
/* harmony import */ var _mixin_CommonMixin__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mixin/CommonMixin */ "./src/mixin/CommonMixin.js");
/* harmony import */ var _full_calendar_CalendarHeader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./full-calendar/CalendarHeader */ "./src/full-calendar/CalendarHeader.jsx");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_8__);
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? Object(arguments[i]) : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys.push.apply(ownKeys, Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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











var FullCalendar = /*#__PURE__*/function (_React$Component) {
  _inherits(FullCalendar, _React$Component);

  var _super = _createSuper(FullCalendar);

  function FullCalendar(props) {
    var _this;

    _classCallCheck(this, FullCalendar);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "onMonthSelect", function (value) {
      _this.onSelect(value, {
        target: 'month'
      });
    });

    _defineProperty(_assertThisInitialized(_this), "setType", function (type) {
      if (!('type' in _this.props)) {
        _this.setState({
          type: type
        });
      }

      _this.props.onTypeChange(type);
    });

    var _type;

    if ('type' in props) {
      _type = props.type;
    } else {
      _type = props.defaultType;
    }

    _this.state = {
      type: _type,
      value: props.value || props.defaultValue || moment__WEBPACK_IMPORTED_MODULE_8___default()(),
      selectedValue: props.selectedValue || props.defaultSelectedValue
    };
    return _this;
  }

  _createClass(FullCalendar, [{
    key: "render",
    value: function render() {
      var props = this.props;
      var locale = props.locale,
          prefixCls = props.prefixCls,
          fullscreen = props.fullscreen,
          showHeader = props.showHeader,
          headerComponent = props.headerComponent,
          headerRender = props.headerRender,
          disabledDate = props.disabledDate;
      var _this$state = this.state,
          value = _this$state.value,
          type = _this$state.type;
      var header = null;

      if (showHeader) {
        if (headerRender) {
          header = headerRender(value, type, locale);
        } else {
          var TheHeader = headerComponent || _full_calendar_CalendarHeader__WEBPACK_IMPORTED_MODULE_7__["default"];
          header = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TheHeader, _extends({
            key: "calendar-header"
          }, props, {
            prefixCls: "".concat(prefixCls, "-full"),
            type: type,
            value: value,
            onTypeChange: this.setType,
            onValueChange: this.setValue
          }));
        }
      }

      var table = type === 'date' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_date_DateTable__WEBPACK_IMPORTED_MODULE_3__["default"], {
        dateRender: props.dateCellRender,
        contentRender: props.dateCellContentRender,
        locale: locale,
        prefixCls: prefixCls,
        onSelect: this.onSelect,
        value: value,
        disabledDate: disabledDate
      }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_month_MonthTable__WEBPACK_IMPORTED_MODULE_4__["default"], {
        cellRender: props.monthCellRender,
        contentRender: props.monthCellContentRender,
        locale: locale,
        onSelect: this.onMonthSelect,
        prefixCls: "".concat(prefixCls, "-month-panel"),
        value: value,
        disabledDate: disabledDate
      });
      var children = [header, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        key: "calendar-body",
        className: "".concat(prefixCls, "-calendar-body")
      }, table)];
      var className = ["".concat(prefixCls, "-full")];

      if (fullscreen) {
        className.push("".concat(prefixCls, "-fullscreen"));
      }

      return this.renderRoot({
        children: children,
        className: className.join(' ')
      });
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, state) {
      var newState = {};
      var value = nextProps.value,
          selectedValue = nextProps.selectedValue;

      if ('type' in nextProps) {
        newState = {
          type: nextProps.type
        };
      }

      if ('value' in nextProps) {
        newState.value = value || nextProps.defaultValue || Object(_mixin_CalendarMixin__WEBPACK_IMPORTED_MODULE_5__["getNowByCurrentStateValue"])(state.value);
      }

      if ('selectedValue' in nextProps) {
        newState.selectedValue = selectedValue;
      }

      return newState;
    }
  }]);

  return FullCalendar;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

_defineProperty(FullCalendar, "propTypes", _objectSpread({}, _mixin_CalendarMixin__WEBPACK_IMPORTED_MODULE_5__["calendarMixinPropTypes"], _mixin_CommonMixin__WEBPACK_IMPORTED_MODULE_6__["propType"], {
  defaultType: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  type: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  prefixCls: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  locale: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  onTypeChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  fullscreen: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  monthCellRender: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  dateCellRender: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  showTypeSwitch: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  Select: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  headerComponents: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array,
  headerComponent: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  // The whole header component
  headerRender: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  showHeader: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  disabledDate: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  value: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  defaultValue: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  selectedValue: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  defaultSelectedValue: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
}));

_defineProperty(FullCalendar, "defaultProps", _objectSpread({}, _mixin_CalendarMixin__WEBPACK_IMPORTED_MODULE_5__["calendarMixinDefaultProps"], _mixin_CommonMixin__WEBPACK_IMPORTED_MODULE_6__["defaultProp"], {
  defaultType: 'date',
  fullscreen: false,
  showTypeSwitch: true,
  showHeader: true,
  onTypeChange: function onTypeChange() {}
}));

Object(react_lifecycles_compat__WEBPACK_IMPORTED_MODULE_2__["polyfill"])(FullCalendar);
/* harmony default export */ __webpack_exports__["default"] = (Object(_mixin_CalendarMixin__WEBPACK_IMPORTED_MODULE_5__["calendarMixinWrapper"])(Object(_mixin_CommonMixin__WEBPACK_IMPORTED_MODULE_6__["commonMixinWrapper"])(FullCalendar)));

/***/ }),

/***/ "./src/full-calendar/CalendarHeader.jsx":
/*!**********************************************!*\
  !*** ./src/full-calendar/CalendarHeader.jsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util */ "./src/util/index.js");
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





function noop() {}

var CalendarHeader = /*#__PURE__*/function (_Component) {
  _inherits(CalendarHeader, _Component);

  var _super = _createSuper(CalendarHeader);

  function CalendarHeader() {
    _classCallCheck(this, CalendarHeader);

    return _super.apply(this, arguments);
  }

  _createClass(CalendarHeader, [{
    key: "onYearChange",
    value: function onYearChange(year) {
      var newValue = this.props.value.clone();
      newValue.year(parseInt(year, 10));
      this.props.onValueChange(newValue);
    }
  }, {
    key: "onMonthChange",
    value: function onMonthChange(month) {
      var newValue = this.props.value.clone();
      newValue.month(parseInt(month, 10));
      this.props.onValueChange(newValue);
    }
  }, {
    key: "yearSelectElement",
    value: function yearSelectElement(year) {
      var _this$props = this.props,
          yearSelectOffset = _this$props.yearSelectOffset,
          yearSelectTotal = _this$props.yearSelectTotal,
          prefixCls = _this$props.prefixCls,
          Select = _this$props.Select;
      var start = year - yearSelectOffset;
      var end = start + yearSelectTotal;
      var options = [];

      for (var index = start; index < end; index++) {
        options.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Select.Option, {
          key: "".concat(index)
        }, index));
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Select, {
        className: "".concat(prefixCls, "-header-year-select"),
        onChange: this.onYearChange.bind(this),
        dropdownStyle: {
          zIndex: 2000
        },
        dropdownMenuStyle: {
          maxHeight: 250,
          overflow: 'auto',
          fontSize: 12
        },
        optionLabelProp: "children",
        value: String(year),
        showSearch: false
      }, options);
    }
  }, {
    key: "monthSelectElement",
    value: function monthSelectElement(month) {
      var props = this.props;
      var t = props.value.clone();
      var prefixCls = props.prefixCls;
      var options = [];
      var Select = props.Select;

      for (var index = 0; index < 12; index++) {
        t.month(index);
        options.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Select.Option, {
          key: "".concat(index)
        }, Object(_util__WEBPACK_IMPORTED_MODULE_2__["getMonthName"])(t)));
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Select, {
        className: "".concat(prefixCls, "-header-month-select"),
        dropdownStyle: {
          zIndex: 2000
        },
        dropdownMenuStyle: {
          maxHeight: 250,
          overflow: 'auto',
          overflowX: 'hidden',
          fontSize: 12
        },
        optionLabelProp: "children",
        value: String(month),
        showSearch: false,
        onChange: this.onMonthChange.bind(this)
      }, options);
    }
  }, {
    key: "changeTypeToDate",
    value: function changeTypeToDate() {
      this.props.onTypeChange('date');
    }
  }, {
    key: "changeTypeToMonth",
    value: function changeTypeToMonth() {
      this.props.onTypeChange('month');
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          value = _this$props2.value,
          locale = _this$props2.locale,
          prefixCls = _this$props2.prefixCls,
          type = _this$props2.type,
          showTypeSwitch = _this$props2.showTypeSwitch,
          headerComponents = _this$props2.headerComponents;
      var year = value.year();
      var month = value.month();
      var yearSelect = this.yearSelectElement(year);
      var monthSelect = type === 'month' ? null : this.monthSelectElement(month);
      var switchCls = "".concat(prefixCls, "-header-switcher");
      var typeSwitcher = showTypeSwitch ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: switchCls
      }, type === 'date' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "".concat(switchCls, "-focus")
      }, locale.month) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        onClick: this.changeTypeToDate.bind(this),
        className: "".concat(switchCls, "-normal")
      }, locale.month), type === 'month' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "".concat(switchCls, "-focus")
      }, locale.year) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        onClick: this.changeTypeToMonth.bind(this),
        className: "".concat(switchCls, "-normal")
      }, locale.year)) : null;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "".concat(prefixCls, "-header")
      }, typeSwitcher, monthSelect, yearSelect, headerComponents);
    }
  }]);

  return CalendarHeader;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

CalendarHeader.propTypes = {
  value: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  locale: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  yearSelectOffset: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  yearSelectTotal: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  onValueChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  onTypeChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  Select: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  prefixCls: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  type: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  showTypeSwitch: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  headerComponents: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array
};
CalendarHeader.defaultProps = {
  yearSelectOffset: 10,
  yearSelectTotal: 20,
  onValueChange: noop,
  onTypeChange: noop
};
/* harmony default export */ __webpack_exports__["default"] = (CalendarHeader);

/***/ }),

/***/ 5:
/*!*****************************************!*\
  !*** multi ./examples/full-calendar.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./examples/full-calendar.js */"./examples/full-calendar.js");


/***/ })

/******/ });
//# sourceMappingURL=full-calendar.js.map