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
/******/ 		"examples/antd-range-calendar": 0
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
/******/ 	deferredModules.push([2,"common"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./examples/antd-range-calendar.js":
/*!*****************************************!*\
  !*** ./examples/antd-range-calendar.js ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rc_calendar_src_Picker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rc-calendar/src/Picker */ "./src/Picker.jsx");
/* harmony import */ var rc_calendar_src_RangeCalendar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rc-calendar/src/RangeCalendar */ "./src/RangeCalendar.js");
/* harmony import */ var rc_calendar_src_locale_zh_CN__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rc-calendar/src/locale/zh_CN */ "./src/locale/zh_CN.js");
/* harmony import */ var rc_calendar_src_locale_en_US__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rc-calendar/src/locale/en_US */ "./src/locale/en_US.js");
/* harmony import */ var rc_time_picker_es_Panel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rc-time-picker/es/Panel */ "./node_modules/rc-time-picker/es/Panel.js");
/* harmony import */ var rc_calendar_assets_index_less__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rc-calendar/assets/index.less */ "./assets/index.less");
/* harmony import */ var rc_calendar_assets_index_less__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(rc_calendar_assets_index_less__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var rc_time_picker_assets_index_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rc-time-picker/assets/index.css */ "./node_modules/rc-time-picker/assets/index.css");
/* harmony import */ var rc_time_picker_assets_index_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(rc_time_picker_assets_index_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var moment_locale_zh_cn__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! moment/locale/zh-cn */ "./node_modules/moment/locale/zh-cn.js");
/* harmony import */ var moment_locale_zh_cn__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(moment_locale_zh_cn__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var moment_locale_en_gb__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! moment/locale/en-gb */ "./node_modules/moment/locale/en-gb.js");
/* harmony import */ var moment_locale_en_gb__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(moment_locale_en_gb__WEBPACK_IMPORTED_MODULE_11__);
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












var cn = location.search.indexOf('cn') !== -1;

if (cn) {
  moment__WEBPACK_IMPORTED_MODULE_9___default.a.locale('zh-cn');
} else {
  moment__WEBPACK_IMPORTED_MODULE_9___default.a.locale('en-gb');
}

var now = moment__WEBPACK_IMPORTED_MODULE_9___default()();

if (cn) {
  now.utcOffset(8);
} else {
  now.utcOffset(0);
}

var defaultCalendarValue = now.clone();
defaultCalendarValue.add(-1, 'month');
var timePickerElement = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(rc_time_picker_es_Panel__WEBPACK_IMPORTED_MODULE_6__["default"], {
  defaultValue: [moment__WEBPACK_IMPORTED_MODULE_9___default()('00:00:00', 'HH:mm:ss'), moment__WEBPACK_IMPORTED_MODULE_9___default()('23:59:59', 'HH:mm:ss')]
});

function newArray(start, end) {
  var result = [];

  for (var i = start; i < end; i++) {
    result.push(i);
  }

  return result;
}

function disabledDate(current) {
  var date = moment__WEBPACK_IMPORTED_MODULE_9___default()();
  date.hour(0);
  date.minute(0);
  date.second(0);
  return current.isBefore(date); // can not select days before today
}

function disabledTime(time, type) {
  console.log('disabledTime', time, type);

  if (type === 'start') {
    return {
      disabledHours: function disabledHours() {
        var hours = newArray(0, 60);
        hours.splice(20, 4);
        return hours;
      },
      disabledMinutes: function disabledMinutes(h) {
        if (h === 20) {
          return newArray(0, 31);
        } else if (h === 23) {
          return newArray(30, 60);
        }

        return [];
      },
      disabledSeconds: function disabledSeconds() {
        return [55, 56];
      }
    };
  }

  return {
    disabledHours: function disabledHours() {
      var hours = newArray(0, 60);
      hours.splice(2, 6);
      return hours;
    },
    disabledMinutes: function disabledMinutes(h) {
      if (h === 20) {
        return newArray(0, 31);
      } else if (h === 23) {
        return newArray(30, 60);
      }

      return [];
    },
    disabledSeconds: function disabledSeconds() {
      return [55, 56];
    }
  };
}

var formatStr = 'YYYY-MM-DD HH:mm:ss';

function format(v) {
  return v ? v.format(formatStr) : '';
}

function isValidRange(v) {
  return v && v[0] && v[1];
}

function onStandaloneChange(value) {
  console.log('onChange');
  console.log(value[0] && format(value[0]), value[1] && format(value[1]));
}

function onStandaloneSelect(value) {
  console.log('onSelect');
  console.log(format(value[0]), format(value[1]));
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
      value: [],
      hoverValue: []
    });

    _defineProperty(_assertThisInitialized(_this), "onChange", function (value) {
      console.log('onChange', value);

      _this.setState({
        value: value
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onHoverChange", function (hoverValue) {
      _this.setState({
        hoverValue: hoverValue
      });
    });

    return _this;
  }

  _createClass(Demo, [{
    key: "render",
    value: function render() {
      var state = this.state;
      var calendar = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(rc_calendar_src_RangeCalendar__WEBPACK_IMPORTED_MODULE_3__["default"], {
        hoverValue: state.hoverValue,
        onHoverChange: this.onHoverChange,
        showWeekNumber: false,
        dateInputPlaceholder: ['start', 'end'],
        defaultValue: [now, now.clone().add(1, 'months')],
        locale: cn ? rc_calendar_src_locale_zh_CN__WEBPACK_IMPORTED_MODULE_4__["default"] : rc_calendar_src_locale_en_US__WEBPACK_IMPORTED_MODULE_5__["default"],
        disabledTime: disabledTime,
        timePicker: timePickerElement
      });
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(rc_calendar_src_Picker__WEBPACK_IMPORTED_MODULE_2__["default"], {
        value: state.value,
        onChange: this.onChange,
        animation: "slide-up",
        calendar: calendar
      }, function (_ref) {
        var value = _ref.value;
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
          placeholder: "please select",
          style: {
            width: 350
          },
          disabled: state.disabled,
          readOnly: true,
          className: "ant-calendar-picker-input ant-input",
          value: isValidRange(value) && "".concat(format(value[0]), " - ").concat(format(value[1])) || ''
        }));
      });
    }
  }]);

  return Demo;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "calendar"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  style: {
    margin: 10
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(rc_calendar_src_RangeCalendar__WEBPACK_IMPORTED_MODULE_3__["default"], {
  showToday: false,
  showWeekNumber: true,
  dateInputPlaceholder: ['start', 'end'],
  locale: cn ? rc_calendar_src_locale_zh_CN__WEBPACK_IMPORTED_MODULE_4__["default"] : rc_calendar_src_locale_en_US__WEBPACK_IMPORTED_MODULE_5__["default"],
  showOk: false,
  showClear: true,
  format: formatStr,
  onChange: onStandaloneChange,
  onSelect: onStandaloneSelect,
  disabledDate: disabledDate,
  timePicker: timePickerElement,
  disabledTime: disabledTime,
  renderFooter: function renderFooter() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "extra footer");
  }
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  style: {
    margin: 20
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Demo, null))), document.getElementById('__react-content'));

/***/ }),

/***/ 2:
/*!***********************************************!*\
  !*** multi ./examples/antd-range-calendar.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./examples/antd-range-calendar.js */"./examples/antd-range-calendar.js");


/***/ })

/******/ });
//# sourceMappingURL=antd-range-calendar.js.map