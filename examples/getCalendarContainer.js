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
/******/ 		"examples/getCalendarContainer": 0
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
/******/ 	deferredModules.push([6,"common"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./examples/getCalendarContainer.js":
/*!******************************************!*\
  !*** ./examples/getCalendarContainer.js ***!
  \******************************************/
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
/* harmony import */ var rc_calendar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rc-calendar */ "./index.js");
/* harmony import */ var rc_calendar_src_Picker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rc-calendar/src/Picker */ "./src/Picker.jsx");
/* harmony import */ var rc_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rc-dialog */ "./node_modules/rc-dialog/es/DialogWrap.js");
/* harmony import */ var rc_dialog_assets_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rc-dialog/assets/index.css */ "./node_modules/rc-dialog/assets/index.css");
/* harmony import */ var rc_dialog_assets_index_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(rc_dialog_assets_index_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var rc_calendar_src_locale_zh_CN__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rc-calendar/src/locale/zh_CN */ "./src/locale/zh_CN.js");
/* harmony import */ var rc_calendar_src_locale_en_US__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rc-calendar/src/locale/en_US */ "./src/locale/en_US.js");
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













var format = 'YYYY-MM-DD';
var cn = location.search.indexOf('cn') !== -1;
var now = moment__WEBPACK_IMPORTED_MODULE_9___default()();

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

  function Demo() {
    var _this;

    _classCallCheck(this, Demo);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      open: false,
      destroy: false
    });

    _defineProperty(_assertThisInitialized(_this), "open", function () {
      _this.setVisible(true);
    });

    _defineProperty(_assertThisInitialized(_this), "close", function () {
      _this.setVisible(false);
    });

    _defineProperty(_assertThisInitialized(_this), "destroy", function () {
      _this.setState({
        destroy: true
      });
    });

    return _this;
  }

  _createClass(Demo, [{
    key: "getCalendarContainer",
    value: function getCalendarContainer() {
      return this.d || document.getElementById('d');
    }
  }, {
    key: "setVisible",
    value: function setVisible(open) {
      this.setState({
        open: open
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      if (this.state.destroy) {
        return null;
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
        onClick: this.open
      }, "open"), "\xA0", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
        onClick: this.destroy
      }, "destroy"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(rc_dialog__WEBPACK_IMPORTED_MODULE_5__["default"], {
        visible: this.state.open,
        onClose: this.close
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        id: "d",
        ref: function ref(n) {
          return _this2.d = n;
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        style: {
          marginTop: 20
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(rc_calendar_src_Picker__WEBPACK_IMPORTED_MODULE_4__["default"], {
        getCalendarContainer: this.getCalendarContainer,
        calendar: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(rc_calendar__WEBPACK_IMPORTED_MODULE_3__["default"], {
          locale: cn ? rc_calendar_src_locale_zh_CN__WEBPACK_IMPORTED_MODULE_7__["default"] : rc_calendar_src_locale_en_US__WEBPACK_IMPORTED_MODULE_8__["default"]
        })
      }, function (_ref) {
        var value = _ref.value;
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
          style: {
            width: 250
          },
          readOnly: true,
          value: value && value.format(format) || ''
        }));
      }))));
    }
  }]);

  return Demo;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

react_dom__WEBPACK_IMPORTED_MODULE_2___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Demo, null), document.getElementById('__react-content'));

/***/ }),

/***/ "./node_modules/@ant-design/css-animation/es/Event.js":
/*!************************************************************!*\
  !*** ./node_modules/@ant-design/css-animation/es/Event.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var START_EVENT_NAME_MAP = {
  transitionstart: {
    transition: 'transitionstart',
    WebkitTransition: 'webkitTransitionStart',
    MozTransition: 'mozTransitionStart',
    OTransition: 'oTransitionStart',
    msTransition: 'MSTransitionStart'
  },

  animationstart: {
    animation: 'animationstart',
    WebkitAnimation: 'webkitAnimationStart',
    MozAnimation: 'mozAnimationStart',
    OAnimation: 'oAnimationStart',
    msAnimation: 'MSAnimationStart'
  }
};

var END_EVENT_NAME_MAP = {
  transitionend: {
    transition: 'transitionend',
    WebkitTransition: 'webkitTransitionEnd',
    MozTransition: 'mozTransitionEnd',
    OTransition: 'oTransitionEnd',
    msTransition: 'MSTransitionEnd'
  },

  animationend: {
    animation: 'animationend',
    WebkitAnimation: 'webkitAnimationEnd',
    MozAnimation: 'mozAnimationEnd',
    OAnimation: 'oAnimationEnd',
    msAnimation: 'MSAnimationEnd'
  }
};

var startEvents = [];
var endEvents = [];

function detectEvents() {
  var testEl = document.createElement('div');
  var style = testEl.style;

  if (!('AnimationEvent' in window)) {
    delete START_EVENT_NAME_MAP.animationstart.animation;
    delete END_EVENT_NAME_MAP.animationend.animation;
  }

  if (!('TransitionEvent' in window)) {
    delete START_EVENT_NAME_MAP.transitionstart.transition;
    delete END_EVENT_NAME_MAP.transitionend.transition;
  }

  function process(EVENT_NAME_MAP, events) {
    for (var baseEventName in EVENT_NAME_MAP) {
      if (EVENT_NAME_MAP.hasOwnProperty(baseEventName)) {
        var baseEvents = EVENT_NAME_MAP[baseEventName];
        for (var styleName in baseEvents) {
          if (styleName in style) {
            events.push(baseEvents[styleName]);
            break;
          }
        }
      }
    }
  }

  process(START_EVENT_NAME_MAP, startEvents);
  process(END_EVENT_NAME_MAP, endEvents);
}

if (typeof window !== 'undefined' && typeof document !== 'undefined') {
  detectEvents();
}

function addEventListener(node, eventName, eventListener) {
  node.addEventListener(eventName, eventListener, false);
}

function removeEventListener(node, eventName, eventListener) {
  node.removeEventListener(eventName, eventListener, false);
}

var TransitionEvents = {
  // Start events
  startEvents: startEvents,

  addStartEventListener: function addStartEventListener(node, eventListener) {
    if (startEvents.length === 0) {
      window.setTimeout(eventListener, 0);
      return;
    }
    startEvents.forEach(function (startEvent) {
      addEventListener(node, startEvent, eventListener);
    });
  },
  removeStartEventListener: function removeStartEventListener(node, eventListener) {
    if (startEvents.length === 0) {
      return;
    }
    startEvents.forEach(function (startEvent) {
      removeEventListener(node, startEvent, eventListener);
    });
  },


  // End events
  endEvents: endEvents,

  addEndEventListener: function addEndEventListener(node, eventListener) {
    if (endEvents.length === 0) {
      window.setTimeout(eventListener, 0);
      return;
    }
    endEvents.forEach(function (endEvent) {
      addEventListener(node, endEvent, eventListener);
    });
  },
  removeEndEventListener: function removeEndEventListener(node, eventListener) {
    if (endEvents.length === 0) {
      return;
    }
    endEvents.forEach(function (endEvent) {
      removeEventListener(node, endEvent, eventListener);
    });
  }
};

/* harmony default export */ __webpack_exports__["default"] = (TransitionEvents);

/***/ }),

/***/ "./node_modules/@ant-design/css-animation/es/index.js":
/*!************************************************************!*\
  !*** ./node_modules/@ant-design/css-animation/es/index.js ***!
  \************************************************************/
/*! exports provided: isCssAnimationSupported, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isCssAnimationSupported", function() { return isCssAnimationSupported; });
/* harmony import */ var _Event__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Event */ "./node_modules/@ant-design/css-animation/es/Event.js");
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };



var isCssAnimationSupported = _Event__WEBPACK_IMPORTED_MODULE_0__["default"].endEvents.length !== 0;
var capitalPrefixes = ['Webkit', 'Moz', 'O',
// ms is special .... !
'ms'];
var prefixes = ['-webkit-', '-moz-', '-o-', 'ms-', ''];

function getStyleProperty(node, name) {
  // old ff need null, https://developer.mozilla.org/en-US/docs/Web/API/Window/getComputedStyle
  var style = window.getComputedStyle(node, null);
  var ret = '';
  for (var i = 0; i < prefixes.length; i++) {
    ret = style.getPropertyValue(prefixes[i] + name);
    if (ret) {
      break;
    }
  }
  return ret;
}

function fixBrowserByTimeout(node) {
  if (isCssAnimationSupported) {
    var transitionDelay = parseFloat(getStyleProperty(node, 'transition-delay')) || 0;
    var transitionDuration = parseFloat(getStyleProperty(node, 'transition-duration')) || 0;
    var animationDelay = parseFloat(getStyleProperty(node, 'animation-delay')) || 0;
    var animationDuration = parseFloat(getStyleProperty(node, 'animation-duration')) || 0;
    var time = Math.max(transitionDuration + transitionDelay, animationDuration + animationDelay);
    // sometimes, browser bug
    node.rcEndAnimTimeout = setTimeout(function () {
      node.rcEndAnimTimeout = null;
      if (node.rcEndListener) {
        node.rcEndListener();
      }
    }, time * 1000 + 200);
  }
}

function clearBrowserBugTimeout(node) {
  if (node.rcEndAnimTimeout) {
    clearTimeout(node.rcEndAnimTimeout);
    node.rcEndAnimTimeout = null;
  }
}

var cssAnimation = function cssAnimation(node, transitionName, endCallback) {
  var nameIsObj = (typeof transitionName === 'undefined' ? 'undefined' : _typeof(transitionName)) === 'object';
  var className = nameIsObj ? transitionName.name : transitionName;
  var activeClassName = nameIsObj ? transitionName.active : transitionName + '-active';
  var end = endCallback;
  var start = void 0;
  var active = void 0;

  if (endCallback && Object.prototype.toString.call(endCallback) === '[object Object]') {
    end = endCallback.end;
    start = endCallback.start;
    active = endCallback.active;
  }

  if (node.rcEndListener) {
    node.rcEndListener();
  }

  node.rcEndListener = function (e) {
    if (e && e.target !== node) {
      return;
    }

    if (node.rcAnimTimeout) {
      clearTimeout(node.rcAnimTimeout);
      node.rcAnimTimeout = null;
    }

    clearBrowserBugTimeout(node);

    node.classList.remove(className);
    node.classList.remove(activeClassName);

    _Event__WEBPACK_IMPORTED_MODULE_0__["default"].removeEndEventListener(node, node.rcEndListener);
    node.rcEndListener = null;

    // Usually this optional end is used for informing an owner of
    // a leave animation and telling it to remove the child.
    if (end) {
      end();
    }
  };

  _Event__WEBPACK_IMPORTED_MODULE_0__["default"].addEndEventListener(node, node.rcEndListener);

  if (start) {
    start();
  }
  node.classList.add(className);

  node.rcAnimTimeout = setTimeout(function () {
    node.rcAnimTimeout = null;
    node.classList.add(activeClassName);
    if (active) {
      active();
    }
    fixBrowserByTimeout(node);
  }, 0);

  return {
    stop: function stop() {
      if (node.rcEndListener) {
        node.rcEndListener();
      }
    }
  };
};

cssAnimation.style = function (node, style, callback) {
  if (node.rcEndListener) {
    node.rcEndListener();
  }

  node.rcEndListener = function (e) {
    if (e && e.target !== node) {
      return;
    }

    if (node.rcAnimTimeout) {
      clearTimeout(node.rcAnimTimeout);
      node.rcAnimTimeout = null;
    }

    clearBrowserBugTimeout(node);

    _Event__WEBPACK_IMPORTED_MODULE_0__["default"].removeEndEventListener(node, node.rcEndListener);
    node.rcEndListener = null;

    // Usually this optional callback is used for informing an owner of
    // a leave animation and telling it to remove the child.
    if (callback) {
      callback();
    }
  };

  _Event__WEBPACK_IMPORTED_MODULE_0__["default"].addEndEventListener(node, node.rcEndListener);

  node.rcAnimTimeout = setTimeout(function () {
    for (var s in style) {
      if (style.hasOwnProperty(s)) {
        node.style[s] = style[s];
      }
    }
    node.rcAnimTimeout = null;
    fixBrowserByTimeout(node);
  }, 0);
};

cssAnimation.setTransition = function (node, p, value) {
  var property = p;
  var v = value;
  if (value === undefined) {
    v = property;
    property = '';
  }
  property = property || '';
  capitalPrefixes.forEach(function (prefix) {
    node.style[prefix + 'Transition' + property] = v;
  });
};

cssAnimation.isCssAnimationSupported = isCssAnimationSupported;



/* harmony default export */ __webpack_exports__["default"] = (cssAnimation);

/***/ }),

/***/ "./node_modules/rc-dialog/assets/index.css":
/*!*************************************************!*\
  !*** ./node_modules/rc-dialog/assets/index.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/rc-dialog/es/Dialog.js":
/*!*********************************************!*\
  !*** ./node_modules/rc-dialog/es/Dialog.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/babel-runtime/helpers/extends.js");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var rc_util_es_KeyCode__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rc-util/es/KeyCode */ "./node_modules/rc-util/es/KeyCode.js");
/* harmony import */ var rc_util_es_Dom_contains__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rc-util/es/Dom/contains */ "./node_modules/rc-util/es/Dom/contains.js");
/* harmony import */ var rc_animate__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rc-animate */ "./node_modules/rc-dialog/node_modules/rc-animate/es/Animate.js");
/* harmony import */ var _LazyRenderBox__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./LazyRenderBox */ "./node_modules/rc-dialog/es/LazyRenderBox.js");










var uuid = 0;
/* eslint react/no-is-mounted:0 */
function getScroll(w, top) {
    var ret = w['page' + (top ? 'Y' : 'X') + 'Offset'];
    var method = 'scroll' + (top ? 'Top' : 'Left');
    if (typeof ret !== 'number') {
        var d = w.document;
        ret = d.documentElement[method];
        if (typeof ret !== 'number') {
            ret = d.body[method];
        }
    }
    return ret;
}
function setTransformOrigin(node, value) {
    var style = node.style;
    ['Webkit', 'Moz', 'Ms', 'ms'].forEach(function (prefix) {
        style[prefix + 'TransformOrigin'] = value;
    });
    style['transformOrigin'] = value;
}
function offset(el) {
    var rect = el.getBoundingClientRect();
    var pos = {
        left: rect.left,
        top: rect.top
    };
    var doc = el.ownerDocument;
    var w = doc.defaultView || doc.parentWindow;
    pos.left += getScroll(w);
    pos.top += getScroll(w, true);
    return pos;
}

var Dialog = function (_React$Component) {
    babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default()(Dialog, _React$Component);

    function Dialog(props) {
        babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, Dialog);

        var _this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _React$Component.call(this, props));

        _this.inTransition = false;
        _this.onAnimateLeave = function () {
            var afterClose = _this.props.afterClose;
            // need demo?
            // https://github.com/react-component/dialog/pull/28

            if (_this.wrap) {
                _this.wrap.style.display = 'none';
            }
            _this.inTransition = false;
            _this.switchScrollingEffect();
            if (afterClose) {
                afterClose();
            }
        };
        _this.onDialogMouseDown = function () {
            _this.dialogMouseDown = true;
        };
        _this.onMaskMouseUp = function () {
            if (_this.dialogMouseDown) {
                _this.timeoutId = setTimeout(function () {
                    _this.dialogMouseDown = false;
                }, 0);
            }
        };
        _this.onMaskClick = function (e) {
            // android trigger click on open (fastclick??)
            if (Date.now() - _this.openTime < 300) {
                return;
            }
            if (e.target === e.currentTarget && !_this.dialogMouseDown) {
                _this.close(e);
            }
        };
        _this.onKeyDown = function (e) {
            var props = _this.props;
            if (props.keyboard && e.keyCode === rc_util_es_KeyCode__WEBPACK_IMPORTED_MODULE_6__["default"].ESC) {
                e.stopPropagation();
                _this.close(e);
                return;
            }
            // keep focus inside dialog
            if (props.visible) {
                if (e.keyCode === rc_util_es_KeyCode__WEBPACK_IMPORTED_MODULE_6__["default"].TAB) {
                    var activeElement = document.activeElement;
                    var sentinelStart = _this.sentinelStart;
                    if (e.shiftKey) {
                        if (activeElement === sentinelStart) {
                            _this.sentinelEnd.focus();
                        }
                    } else if (activeElement === _this.sentinelEnd) {
                        sentinelStart.focus();
                    }
                }
            }
        };
        _this.getDialogElement = function () {
            var props = _this.props;
            var closable = props.closable;
            var prefixCls = props.prefixCls;
            var dest = {};
            if (props.width !== undefined) {
                dest.width = props.width;
            }
            if (props.height !== undefined) {
                dest.height = props.height;
            }
            var footer = void 0;
            if (props.footer) {
                footer = react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("div", { className: prefixCls + '-footer', ref: _this.saveRef('footer') }, props.footer);
            }
            var header = void 0;
            if (props.title) {
                header = react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("div", { className: prefixCls + '-header', ref: _this.saveRef('header') }, react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("div", { className: prefixCls + '-title', id: _this.titleId }, props.title));
            }
            var closer = void 0;
            if (closable) {
                closer = react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("button", { type: "button", onClick: _this.close, "aria-label": "Close", className: prefixCls + '-close' }, props.closeIcon || react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("span", { className: prefixCls + '-close-x' }));
            }
            var style = babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, props.style, dest);
            var sentinelStyle = { width: 0, height: 0, overflow: 'hidden', outline: 'none' };
            var transitionName = _this.getTransitionName();
            var dialogElement = react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_LazyRenderBox__WEBPACK_IMPORTED_MODULE_9__["default"], { key: "dialog-element", role: "document", ref: _this.saveRef('dialog'), style: style, className: prefixCls + ' ' + (props.className || ''), visible: props.visible, forceRender: props.forceRender, onMouseDown: _this.onDialogMouseDown }, react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("div", { tabIndex: 0, ref: _this.saveRef('sentinelStart'), style: sentinelStyle, "aria-hidden": "true" }), react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("div", { className: prefixCls + '-content' }, closer, header, react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("div", babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({ className: prefixCls + '-body', style: props.bodyStyle, ref: _this.saveRef('body') }, props.bodyProps), props.children), footer), react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("div", { tabIndex: 0, ref: _this.saveRef('sentinelEnd'), style: sentinelStyle, "aria-hidden": "true" }));
            return react__WEBPACK_IMPORTED_MODULE_4__["createElement"](rc_animate__WEBPACK_IMPORTED_MODULE_8__["default"], { key: "dialog", showProp: "visible", onLeave: _this.onAnimateLeave, transitionName: transitionName, component: "", transitionAppear: true }, props.visible || !props.destroyOnClose ? dialogElement : null);
        };
        _this.getZIndexStyle = function () {
            var style = {};
            var props = _this.props;
            if (props.zIndex !== undefined) {
                style.zIndex = props.zIndex;
            }
            return style;
        };
        _this.getWrapStyle = function () {
            return babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, _this.getZIndexStyle(), _this.props.wrapStyle);
        };
        _this.getMaskStyle = function () {
            return babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, _this.getZIndexStyle(), _this.props.maskStyle);
        };
        _this.getMaskElement = function () {
            var props = _this.props;
            var maskElement = void 0;
            if (props.mask) {
                var maskTransition = _this.getMaskTransitionName();
                maskElement = react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_LazyRenderBox__WEBPACK_IMPORTED_MODULE_9__["default"], babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({ style: _this.getMaskStyle(), key: "mask", className: props.prefixCls + '-mask', hiddenClassName: props.prefixCls + '-mask-hidden', visible: props.visible }, props.maskProps));
                if (maskTransition) {
                    maskElement = react__WEBPACK_IMPORTED_MODULE_4__["createElement"](rc_animate__WEBPACK_IMPORTED_MODULE_8__["default"], { key: "mask", showProp: "visible", transitionAppear: true, component: "", transitionName: maskTransition }, maskElement);
                }
            }
            return maskElement;
        };
        _this.getMaskTransitionName = function () {
            var props = _this.props;
            var transitionName = props.maskTransitionName;
            var animation = props.maskAnimation;
            if (!transitionName && animation) {
                transitionName = props.prefixCls + '-' + animation;
            }
            return transitionName;
        };
        _this.getTransitionName = function () {
            var props = _this.props;
            var transitionName = props.transitionName;
            var animation = props.animation;
            if (!transitionName && animation) {
                transitionName = props.prefixCls + '-' + animation;
            }
            return transitionName;
        };
        _this.close = function (e) {
            var onClose = _this.props.onClose;

            if (onClose) {
                onClose(e);
            }
        };
        _this.saveRef = function (name) {
            return function (node) {
                _this[name] = node;
            };
        };
        _this.titleId = 'rcDialogTitle' + uuid++;
        _this.switchScrollingEffect = props.switchScrollingEffect || function () {};
        return _this;
    }

    Dialog.prototype.componentDidMount = function componentDidMount() {
        this.componentDidUpdate({});
        // if forceRender is true, set element style display to be none;
        if ((this.props.forceRender || this.props.getContainer === false && !this.props.visible) && this.wrap) {
            this.wrap.style.display = 'none';
        }
    };

    Dialog.prototype.componentDidUpdate = function componentDidUpdate(prevProps) {
        var _props = this.props,
            visible = _props.visible,
            mask = _props.mask,
            focusTriggerAfterClose = _props.focusTriggerAfterClose;

        var mousePosition = this.props.mousePosition;
        if (visible) {
            // first show
            if (!prevProps.visible) {
                this.openTime = Date.now();
                this.switchScrollingEffect();
                this.tryFocus();
                var dialogNode = react_dom__WEBPACK_IMPORTED_MODULE_5__["findDOMNode"](this.dialog);
                if (mousePosition) {
                    var elOffset = offset(dialogNode);
                    setTransformOrigin(dialogNode, mousePosition.x - elOffset.left + 'px ' + (mousePosition.y - elOffset.top) + 'px');
                } else {
                    setTransformOrigin(dialogNode, '');
                }
            }
        } else if (prevProps.visible) {
            this.inTransition = true;
            if (mask && this.lastOutSideFocusNode && focusTriggerAfterClose) {
                try {
                    this.lastOutSideFocusNode.focus();
                } catch (e) {
                    this.lastOutSideFocusNode = null;
                }
                this.lastOutSideFocusNode = null;
            }
        }
    };

    Dialog.prototype.componentWillUnmount = function componentWillUnmount() {
        var _props2 = this.props,
            visible = _props2.visible,
            getOpenCount = _props2.getOpenCount;

        if ((visible || this.inTransition) && !getOpenCount()) {
            this.switchScrollingEffect();
        }
        clearTimeout(this.timeoutId);
    };

    Dialog.prototype.tryFocus = function tryFocus() {
        if (!Object(rc_util_es_Dom_contains__WEBPACK_IMPORTED_MODULE_7__["default"])(this.wrap, document.activeElement)) {
            this.lastOutSideFocusNode = document.activeElement;
            this.sentinelStart.focus();
        }
    };

    Dialog.prototype.render = function render() {
        var props = this.props;
        var prefixCls = props.prefixCls,
            maskClosable = props.maskClosable;

        var style = this.getWrapStyle();
        // clear hide display
        // and only set display after async anim, not here for hide
        if (props.visible) {
            style.display = null;
        }
        return react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("div", { className: prefixCls + '-root' }, this.getMaskElement(), react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("div", babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({ tabIndex: -1, onKeyDown: this.onKeyDown, className: prefixCls + '-wrap ' + (props.wrapClassName || ''), ref: this.saveRef('wrap'), onClick: maskClosable ? this.onMaskClick : null, onMouseUp: maskClosable ? this.onMaskMouseUp : null, role: "dialog", "aria-labelledby": props.title ? this.titleId : null, style: style }, props.wrapProps), this.getDialogElement()));
    };

    return Dialog;
}(react__WEBPACK_IMPORTED_MODULE_4__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Dialog);

Dialog.defaultProps = {
    className: '',
    mask: true,
    visible: false,
    keyboard: true,
    closable: true,
    maskClosable: true,
    destroyOnClose: false,
    prefixCls: 'rc-dialog',
    focusTriggerAfterClose: true
};

/***/ }),

/***/ "./node_modules/rc-dialog/es/DialogWrap.js":
/*!*************************************************!*\
  !*** ./node_modules/rc-dialog/es/DialogWrap.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/babel-runtime/helpers/extends.js");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Dialog */ "./node_modules/rc-dialog/es/Dialog.js");
/* harmony import */ var rc_util_es_PortalWrapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rc-util/es/PortalWrapper */ "./node_modules/rc-util/es/PortalWrapper.js");




// fix issue #10656
/*
* getContainer remarks
* Custom container should not be return, because in the Portal component, it will remove the
* return container element here, if the custom container is the only child of it's component,
* like issue #10656, It will has a conflict with removeChild method in react-dom.
* So here should add a child (div element) to custom container.
* */
/* harmony default export */ __webpack_exports__["default"] = (function (props) {
    var visible = props.visible,
        getContainer = props.getContainer,
        forceRender = props.forceRender;
    // 渲染在当前 dom 里；

    if (getContainer === false) {
        return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Dialog__WEBPACK_IMPORTED_MODULE_2__["default"], babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, props, { getOpenCount: function getOpenCount() {
                return 2;
            } }));
    }
    return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](rc_util_es_PortalWrapper__WEBPACK_IMPORTED_MODULE_3__["default"], { visible: visible, forceRender: forceRender, getContainer: getContainer }, function (childProps) {
        return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Dialog__WEBPACK_IMPORTED_MODULE_2__["default"], babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, props, childProps));
    });
});

/***/ }),

/***/ "./node_modules/rc-dialog/es/LazyRenderBox.js":
/*!****************************************************!*\
  !*** ./node_modules/rc-dialog/es/LazyRenderBox.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/babel-runtime/helpers/extends.js");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);




var __rest = undefined && undefined.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};


var LazyRenderBox = function (_React$Component) {
    babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default()(LazyRenderBox, _React$Component);

    function LazyRenderBox() {
        babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, LazyRenderBox);

        return babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _React$Component.apply(this, arguments));
    }

    LazyRenderBox.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps) {
        if (nextProps.forceRender) {
            return true;
        }
        return !!nextProps.hiddenClassName || !!nextProps.visible;
    };

    LazyRenderBox.prototype.render = function render() {
        var _a = this.props,
            className = _a.className,
            hiddenClassName = _a.hiddenClassName,
            visible = _a.visible,
            forceRender = _a.forceRender,
            restProps = __rest(_a, ["className", "hiddenClassName", "visible", "forceRender"]);
        var useClassName = className;
        if (!!hiddenClassName && !visible) {
            useClassName += " " + hiddenClassName;
        }
        return react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("div", babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, restProps, { className: useClassName }));
    };

    return LazyRenderBox;
}(react__WEBPACK_IMPORTED_MODULE_4__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (LazyRenderBox);

/***/ }),

/***/ "./node_modules/rc-dialog/node_modules/rc-animate/es/Animate.js":
/*!**********************************************************************!*\
  !*** ./node_modules/rc-dialog/node_modules/rc-animate/es/Animate.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rc_util_es_unsafeLifecyclesPolyfill__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rc-util/es/unsafeLifecyclesPolyfill */ "./node_modules/rc-util/es/unsafeLifecyclesPolyfill.js");
/* harmony import */ var _ChildrenUtils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ChildrenUtils */ "./node_modules/rc-dialog/node_modules/rc-animate/es/ChildrenUtils.js");
/* harmony import */ var _AnimateChild__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AnimateChild */ "./node_modules/rc-dialog/node_modules/rc-animate/es/AnimateChild.js");
/* harmony import */ var _util_animate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./util/animate */ "./node_modules/rc-dialog/node_modules/rc-animate/es/util/animate.js");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* eslint react/prop-types: 0 */






var defaultKey = 'rc_animate_' + Date.now();

function getChildrenFromProps(props) {
  var children = props.children;
  if (react__WEBPACK_IMPORTED_MODULE_0___default.a.isValidElement(children)) {
    if (!children.key) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.cloneElement(children, {
        key: defaultKey
      });
    }
  }
  return children;
}

function noop() {}

var Animate = function (_React$Component) {
  _inherits(Animate, _React$Component);

  function Animate(props) {
    _classCallCheck(this, Animate);

    var _this = _possibleConstructorReturn(this, (Animate.__proto__ || Object.getPrototypeOf(Animate)).call(this, props));

    _initialiseProps.call(_this);

    _this.currentlyAnimatingKeys = {};
    _this.keysToEnter = [];
    _this.keysToLeave = [];

    _this.state = {
      children: Object(_ChildrenUtils__WEBPACK_IMPORTED_MODULE_2__["toArrayChildren"])(getChildrenFromProps(props))
    };

    _this.childrenRefs = {};
    return _this;
  } // eslint-disable-line

  _createClass(Animate, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      var showProp = this.props.showProp;
      var children = this.state.children;
      if (showProp) {
        children = children.filter(function (child) {
          return !!child.props[showProp];
        });
      }
      children.forEach(function (child) {
        if (child) {
          _this2.performAppear(child.key);
        }
      });
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var _this3 = this;

      this.nextProps = nextProps;
      var nextChildren = Object(_ChildrenUtils__WEBPACK_IMPORTED_MODULE_2__["toArrayChildren"])(getChildrenFromProps(nextProps));
      var props = this.props;
      // exclusive needs immediate response
      if (props.exclusive) {
        Object.keys(this.currentlyAnimatingKeys).forEach(function (key) {
          _this3.stop(key);
        });
      }
      var showProp = props.showProp;
      var currentlyAnimatingKeys = this.currentlyAnimatingKeys;
      // last props children if exclusive
      var currentChildren = props.exclusive ? Object(_ChildrenUtils__WEBPACK_IMPORTED_MODULE_2__["toArrayChildren"])(getChildrenFromProps(props)) : this.state.children;
      // in case destroy in showProp mode
      var newChildren = [];
      if (showProp) {
        currentChildren.forEach(function (currentChild) {
          var nextChild = currentChild && Object(_ChildrenUtils__WEBPACK_IMPORTED_MODULE_2__["findChildInChildrenByKey"])(nextChildren, currentChild.key);
          var newChild = void 0;
          if ((!nextChild || !nextChild.props[showProp]) && currentChild.props[showProp]) {
            newChild = react__WEBPACK_IMPORTED_MODULE_0___default.a.cloneElement(nextChild || currentChild, _defineProperty({}, showProp, true));
          } else {
            newChild = nextChild;
          }
          if (newChild) {
            newChildren.push(newChild);
          }
        });
        nextChildren.forEach(function (nextChild) {
          if (!nextChild || !Object(_ChildrenUtils__WEBPACK_IMPORTED_MODULE_2__["findChildInChildrenByKey"])(currentChildren, nextChild.key)) {
            newChildren.push(nextChild);
          }
        });
      } else {
        newChildren = Object(_ChildrenUtils__WEBPACK_IMPORTED_MODULE_2__["mergeChildren"])(currentChildren, nextChildren);
      }

      // need render to avoid update
      this.setState({
        children: newChildren
      });

      nextChildren.forEach(function (child) {
        var key = child && child.key;
        if (child && currentlyAnimatingKeys[key]) {
          return;
        }
        var hasPrev = child && Object(_ChildrenUtils__WEBPACK_IMPORTED_MODULE_2__["findChildInChildrenByKey"])(currentChildren, key);
        if (showProp) {
          var showInNext = child.props[showProp];
          if (hasPrev) {
            var showInNow = Object(_ChildrenUtils__WEBPACK_IMPORTED_MODULE_2__["findShownChildInChildrenByKey"])(currentChildren, key, showProp);
            if (!showInNow && showInNext) {
              _this3.keysToEnter.push(key);
            }
          } else if (showInNext) {
            _this3.keysToEnter.push(key);
          }
        } else if (!hasPrev) {
          _this3.keysToEnter.push(key);
        }
      });

      currentChildren.forEach(function (child) {
        var key = child && child.key;
        if (child && currentlyAnimatingKeys[key]) {
          return;
        }
        var hasNext = child && Object(_ChildrenUtils__WEBPACK_IMPORTED_MODULE_2__["findChildInChildrenByKey"])(nextChildren, key);
        if (showProp) {
          var showInNow = child.props[showProp];
          if (hasNext) {
            var showInNext = Object(_ChildrenUtils__WEBPACK_IMPORTED_MODULE_2__["findShownChildInChildrenByKey"])(nextChildren, key, showProp);
            if (!showInNext && showInNow) {
              _this3.keysToLeave.push(key);
            }
          } else if (showInNow) {
            _this3.keysToLeave.push(key);
          }
        } else if (!hasNext) {
          _this3.keysToLeave.push(key);
        }
      });
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      var keysToEnter = this.keysToEnter;
      this.keysToEnter = [];
      keysToEnter.forEach(this.performEnter);
      var keysToLeave = this.keysToLeave;
      this.keysToLeave = [];
      keysToLeave.forEach(this.performLeave);
    }
  }, {
    key: 'isValidChildByKey',
    value: function isValidChildByKey(currentChildren, key) {
      var showProp = this.props.showProp;
      if (showProp) {
        return Object(_ChildrenUtils__WEBPACK_IMPORTED_MODULE_2__["findShownChildInChildrenByKey"])(currentChildren, key, showProp);
      }
      return Object(_ChildrenUtils__WEBPACK_IMPORTED_MODULE_2__["findChildInChildrenByKey"])(currentChildren, key);
    }
  }, {
    key: 'stop',
    value: function stop(key) {
      delete this.currentlyAnimatingKeys[key];
      var component = this.childrenRefs[key];
      if (component) {
        component.stop();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this4 = this;

      var props = this.props;
      this.nextProps = props;
      var stateChildren = this.state.children;
      var children = null;
      if (stateChildren) {
        children = stateChildren.map(function (child) {
          if (child === null || child === undefined) {
            return child;
          }
          if (!child.key) {
            throw new Error('must set key for <rc-animate> children');
          }
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            _AnimateChild__WEBPACK_IMPORTED_MODULE_3__["default"],
            {
              key: child.key,
              ref: function ref(node) {
                _this4.childrenRefs[child.key] = node;
              },
              animation: props.animation,
              transitionName: props.transitionName,
              transitionEnter: props.transitionEnter,
              transitionAppear: props.transitionAppear,
              transitionLeave: props.transitionLeave
            },
            child
          );
        });
      }
      var Component = props.component;
      if (Component) {
        var passedProps = props;
        if (typeof Component === 'string') {
          passedProps = _extends({
            className: props.className,
            style: props.style
          }, props.componentProps);
        }
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          Component,
          passedProps,
          children
        );
      }
      return children[0] || null;
    }
  }]);

  return Animate;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

Animate.isAnimate = true;
Animate.defaultProps = {
  animation: {},
  component: 'span',
  componentProps: {},
  transitionEnter: true,
  transitionLeave: true,
  transitionAppear: false,
  onEnd: noop,
  onEnter: noop,
  onLeave: noop,
  onAppear: noop
};

var _initialiseProps = function _initialiseProps() {
  var _this5 = this;

  this.performEnter = function (key) {
    // may already remove by exclusive
    if (_this5.childrenRefs[key]) {
      _this5.currentlyAnimatingKeys[key] = true;
      _this5.childrenRefs[key].componentWillEnter(_this5.handleDoneAdding.bind(_this5, key, 'enter'));
    }
  };

  this.performAppear = function (key) {
    if (_this5.childrenRefs[key]) {
      _this5.currentlyAnimatingKeys[key] = true;
      _this5.childrenRefs[key].componentWillAppear(_this5.handleDoneAdding.bind(_this5, key, 'appear'));
    }
  };

  this.handleDoneAdding = function (key, type) {
    var props = _this5.props;
    delete _this5.currentlyAnimatingKeys[key];
    // if update on exclusive mode, skip check
    if (props.exclusive && props !== _this5.nextProps) {
      return;
    }
    var currentChildren = Object(_ChildrenUtils__WEBPACK_IMPORTED_MODULE_2__["toArrayChildren"])(getChildrenFromProps(props));
    if (!_this5.isValidChildByKey(currentChildren, key)) {
      // exclusive will not need this
      _this5.performLeave(key);
    } else if (type === 'appear') {
      if (_util_animate__WEBPACK_IMPORTED_MODULE_4__["default"].allowAppearCallback(props)) {
        props.onAppear(key);
        props.onEnd(key, true);
      }
    } else if (_util_animate__WEBPACK_IMPORTED_MODULE_4__["default"].allowEnterCallback(props)) {
      props.onEnter(key);
      props.onEnd(key, true);
    }
  };

  this.performLeave = function (key) {
    // may already remove by exclusive
    if (_this5.childrenRefs[key]) {
      _this5.currentlyAnimatingKeys[key] = true;
      _this5.childrenRefs[key].componentWillLeave(_this5.handleDoneLeaving.bind(_this5, key));
    }
  };

  this.handleDoneLeaving = function (key) {
    var props = _this5.props;
    delete _this5.currentlyAnimatingKeys[key];
    // if update on exclusive mode, skip check
    if (props.exclusive && props !== _this5.nextProps) {
      return;
    }
    var currentChildren = Object(_ChildrenUtils__WEBPACK_IMPORTED_MODULE_2__["toArrayChildren"])(getChildrenFromProps(props));
    // in case state change is too fast
    if (_this5.isValidChildByKey(currentChildren, key)) {
      _this5.performEnter(key);
    } else {
      var end = function end() {
        if (_util_animate__WEBPACK_IMPORTED_MODULE_4__["default"].allowLeaveCallback(props)) {
          props.onLeave(key);
          props.onEnd(key, false);
        }
      };
      if (!Object(_ChildrenUtils__WEBPACK_IMPORTED_MODULE_2__["isSameChildren"])(_this5.state.children, currentChildren, props.showProp)) {
        _this5.setState({
          children: currentChildren
        }, end);
      } else {
        end();
      }
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(rc_util_es_unsafeLifecyclesPolyfill__WEBPACK_IMPORTED_MODULE_1__["default"])(Animate));

/***/ }),

/***/ "./node_modules/rc-dialog/node_modules/rc-animate/es/AnimateChild.js":
/*!***************************************************************************!*\
  !*** ./node_modules/rc-dialog/node_modules/rc-animate/es/AnimateChild.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ant_design_css_animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ant-design/css-animation */ "./node_modules/@ant-design/css-animation/es/index.js");
/* harmony import */ var _util_animate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./util/animate */ "./node_modules/rc-dialog/node_modules/rc-animate/es/util/animate.js");
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* eslint react/prop-types: 0 */





var transitionMap = {
  enter: 'transitionEnter',
  appear: 'transitionAppear',
  leave: 'transitionLeave'
};

var AnimateChild = function (_React$Component) {
  _inherits(AnimateChild, _React$Component);

  function AnimateChild() {
    _classCallCheck(this, AnimateChild);

    return _possibleConstructorReturn(this, (AnimateChild.__proto__ || Object.getPrototypeOf(AnimateChild)).apply(this, arguments));
  }

  _createClass(AnimateChild, [{
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.stop();
    }
  }, {
    key: 'componentWillEnter',
    value: function componentWillEnter(done) {
      if (_util_animate__WEBPACK_IMPORTED_MODULE_3__["default"].isEnterSupported(this.props)) {
        this.transition('enter', done);
      } else {
        done();
      }
    }
  }, {
    key: 'componentWillAppear',
    value: function componentWillAppear(done) {
      if (_util_animate__WEBPACK_IMPORTED_MODULE_3__["default"].isAppearSupported(this.props)) {
        this.transition('appear', done);
      } else {
        done();
      }
    }
  }, {
    key: 'componentWillLeave',
    value: function componentWillLeave(done) {
      if (_util_animate__WEBPACK_IMPORTED_MODULE_3__["default"].isLeaveSupported(this.props)) {
        this.transition('leave', done);
      } else {
        // always sync, do not interupt with react component life cycle
        // update hidden -> animate hidden ->
        // didUpdate -> animate leave -> unmount (if animate is none)
        done();
      }
    }
  }, {
    key: 'transition',
    value: function transition(animationType, finishCallback) {
      var _this2 = this;

      var node = react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.findDOMNode(this);
      var props = this.props;
      var transitionName = props.transitionName;
      var nameIsObj = typeof transitionName === 'object';
      this.stop();
      var end = function end() {
        _this2.stopper = null;
        finishCallback();
      };
      if ((_ant_design_css_animation__WEBPACK_IMPORTED_MODULE_2__["isCssAnimationSupported"] || !props.animation[animationType]) && transitionName && props[transitionMap[animationType]]) {
        var name = nameIsObj ? transitionName[animationType] : transitionName + '-' + animationType;
        var activeName = name + '-active';
        if (nameIsObj && transitionName[animationType + 'Active']) {
          activeName = transitionName[animationType + 'Active'];
        }
        this.stopper = Object(_ant_design_css_animation__WEBPACK_IMPORTED_MODULE_2__["default"])(node, {
          name: name,
          active: activeName
        }, end);
      } else {
        this.stopper = props.animation[animationType](node, end);
      }
    }
  }, {
    key: 'stop',
    value: function stop() {
      var stopper = this.stopper;
      if (stopper) {
        this.stopper = null;
        stopper.stop();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return this.props.children;
    }
  }]);

  return AnimateChild;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (AnimateChild);

/***/ }),

/***/ "./node_modules/rc-dialog/node_modules/rc-animate/es/ChildrenUtils.js":
/*!****************************************************************************!*\
  !*** ./node_modules/rc-dialog/node_modules/rc-animate/es/ChildrenUtils.js ***!
  \****************************************************************************/
/*! exports provided: toArrayChildren, findChildInChildrenByKey, findShownChildInChildrenByKey, findHiddenChildInChildrenByKey, isSameChildren, mergeChildren */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toArrayChildren", function() { return toArrayChildren; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findChildInChildrenByKey", function() { return findChildInChildrenByKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findShownChildInChildrenByKey", function() { return findShownChildInChildrenByKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findHiddenChildInChildrenByKey", function() { return findHiddenChildInChildrenByKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSameChildren", function() { return isSameChildren; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeChildren", function() { return mergeChildren; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function toArrayChildren(children) {
  var ret = [];
  react__WEBPACK_IMPORTED_MODULE_0___default.a.Children.forEach(children, function (child) {
    ret.push(child);
  });
  return ret;
}

function findChildInChildrenByKey(children, key) {
  var ret = null;
  if (children) {
    children.forEach(function (child) {
      if (ret) {
        return;
      }
      if (child && child.key === key) {
        ret = child;
      }
    });
  }
  return ret;
}

function findShownChildInChildrenByKey(children, key, showProp) {
  var ret = null;
  if (children) {
    children.forEach(function (child) {
      if (child && child.key === key && child.props[showProp]) {
        if (ret) {
          throw new Error('two child with same key for <rc-animate> children');
        }
        ret = child;
      }
    });
  }
  return ret;
}

function findHiddenChildInChildrenByKey(children, key, showProp) {
  var found = 0;
  if (children) {
    children.forEach(function (child) {
      if (found) {
        return;
      }
      found = child && child.key === key && !child.props[showProp];
    });
  }
  return found;
}

function isSameChildren(c1, c2, showProp) {
  var same = c1.length === c2.length;
  if (same) {
    c1.forEach(function (child, index) {
      var child2 = c2[index];
      if (child && child2) {
        if (child && !child2 || !child && child2) {
          same = false;
        } else if (child.key !== child2.key) {
          same = false;
        } else if (showProp && child.props[showProp] !== child2.props[showProp]) {
          same = false;
        }
      }
    });
  }
  return same;
}

function mergeChildren(prev, next) {
  var ret = [];

  // For each key of `next`, the list of keys to insert before that key in
  // the combined list
  var nextChildrenPending = {};
  var pendingChildren = [];
  prev.forEach(function (child) {
    if (child && findChildInChildrenByKey(next, child.key)) {
      if (pendingChildren.length) {
        nextChildrenPending[child.key] = pendingChildren;
        pendingChildren = [];
      }
    } else {
      pendingChildren.push(child);
    }
  });

  next.forEach(function (child) {
    if (child && Object.prototype.hasOwnProperty.call(nextChildrenPending, child.key)) {
      ret = ret.concat(nextChildrenPending[child.key]);
    }
    ret.push(child);
  });

  ret = ret.concat(pendingChildren);

  return ret;
}

/***/ }),

/***/ "./node_modules/rc-dialog/node_modules/rc-animate/es/util/animate.js":
/*!***************************************************************************!*\
  !*** ./node_modules/rc-dialog/node_modules/rc-animate/es/util/animate.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var util = {
  isAppearSupported: function isAppearSupported(props) {
    return props.transitionName && props.transitionAppear || props.animation.appear;
  },
  isEnterSupported: function isEnterSupported(props) {
    return props.transitionName && props.transitionEnter || props.animation.enter;
  },
  isLeaveSupported: function isLeaveSupported(props) {
    return props.transitionName && props.transitionLeave || props.animation.leave;
  },
  allowAppearCallback: function allowAppearCallback(props) {
    return props.transitionAppear || props.animation.appear;
  },
  allowEnterCallback: function allowEnterCallback(props) {
    return props.transitionEnter || props.animation.enter;
  },
  allowLeaveCallback: function allowLeaveCallback(props) {
    return props.transitionLeave || props.animation.leave;
  }
};
/* harmony default export */ __webpack_exports__["default"] = (util);

/***/ }),

/***/ "./node_modules/rc-util/es/PortalWrapper.js":
/*!**************************************************!*\
  !*** ./node_modules/rc-util/es/PortalWrapper.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_lifecycles_compat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-lifecycles-compat */ "./node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js");
/* harmony import */ var _ContainerRender__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ContainerRender */ "./node_modules/rc-util/es/ContainerRender.js");
/* harmony import */ var _Portal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Portal */ "./node_modules/rc-util/es/Portal.js");
/* harmony import */ var _switchScrollingEffect__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./switchScrollingEffect */ "./node_modules/rc-util/es/switchScrollingEffect.js");
/* harmony import */ var _setStyle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./setStyle */ "./node_modules/rc-util/es/setStyle.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/* eslint-disable no-underscore-dangle,react/require-default-props */








var openCount = 0;
var windowIsUndefined = !(typeof window !== 'undefined' && window.document && window.document.createElement);
var IS_REACT_16 = ('createPortal' in react_dom__WEBPACK_IMPORTED_MODULE_1___default.a); // https://github.com/ant-design/ant-design/issues/19340
// https://github.com/ant-design/ant-design/issues/19332

var cacheOverflow = {};

var PortalWrapper = /*#__PURE__*/function (_React$Component) {
  _inherits(PortalWrapper, _React$Component);

  var _super = _createSuper(PortalWrapper);

  function PortalWrapper(props) {
    var _this;

    _classCallCheck(this, PortalWrapper);

    _this = _super.call(this, props);

    _this.getParent = function () {
      var getContainer = _this.props.getContainer;

      if (getContainer) {
        if (typeof getContainer === 'string') {
          return document.querySelectorAll(getContainer)[0];
        }

        if (typeof getContainer === 'function') {
          return getContainer();
        }

        if (_typeof(getContainer) === 'object' && getContainer instanceof window.HTMLElement) {
          return getContainer;
        }
      }

      return document.body;
    };

    _this.getContainer = function () {
      if (windowIsUndefined) {
        return null;
      }

      if (!_this.container) {
        _this.container = document.createElement('div');

        var parent = _this.getParent();

        if (parent) {
          parent.appendChild(_this.container);
        }
      }

      _this.setWrapperClassName();

      return _this.container;
    };

    _this.setWrapperClassName = function () {
      var wrapperClassName = _this.props.wrapperClassName;

      if (_this.container && wrapperClassName && wrapperClassName !== _this.container.className) {
        _this.container.className = wrapperClassName;
      }
    };

    _this.savePortal = function (c) {
      // Warning: don't rename _component
      // https://github.com/react-component/util/pull/65#discussion_r352407916
      _this._component = c;
    };

    _this.removeCurrentContainer = function (visible) {
      _this.container = null;
      _this._component = null;

      if (!IS_REACT_16) {
        if (visible) {
          _this.renderComponent({
            afterClose: _this.removeContainer,
            onClose: function onClose() {},
            visible: false
          });
        } else {
          _this.removeContainer();
        }
      }
    };

    _this.switchScrollingEffect = function () {
      if (openCount === 1 && !Object.keys(cacheOverflow).length) {
        Object(_switchScrollingEffect__WEBPACK_IMPORTED_MODULE_6__["default"])(); // Must be set after switchScrollingEffect

        cacheOverflow = Object(_setStyle__WEBPACK_IMPORTED_MODULE_7__["default"])({
          overflow: 'hidden',
          overflowX: 'hidden',
          overflowY: 'hidden'
        });
      } else if (!openCount) {
        Object(_setStyle__WEBPACK_IMPORTED_MODULE_7__["default"])(cacheOverflow);
        cacheOverflow = {};
        Object(_switchScrollingEffect__WEBPACK_IMPORTED_MODULE_6__["default"])(true);
      }
    };

    var _visible = props.visible;
    openCount = _visible ? openCount + 1 : openCount;
    _this.state = {
      _self: _assertThisInitialized(_this)
    };
    return _this;
  }

  _createClass(PortalWrapper, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.setWrapperClassName();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var visible = this.props.visible; // 离开时不会 render， 导到离开时数值不变，改用 func 。。

      openCount = visible && openCount ? openCount - 1 : openCount;
      this.removeCurrentContainer(visible);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          children = _this$props.children,
          forceRender = _this$props.forceRender,
          visible = _this$props.visible;
      var portal = null;
      var childProps = {
        getOpenCount: function getOpenCount() {
          return openCount;
        },
        getContainer: this.getContainer,
        switchScrollingEffect: this.switchScrollingEffect
      }; // suppport react15

      if (!IS_REACT_16) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ContainerRender__WEBPACK_IMPORTED_MODULE_4__["default"], {
          parent: this,
          visible: visible,
          autoDestroy: false,
          getComponent: function getComponent() {
            var extra = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            return children(_objectSpread(_objectSpread(_objectSpread({}, extra), childProps), {}, {
              ref: _this2.savePortal
            }));
          },
          getContainer: this.getContainer,
          forceRender: forceRender
        }, function (_ref) {
          var renderComponent = _ref.renderComponent,
              removeContainer = _ref.removeContainer;
          _this2.renderComponent = renderComponent;
          _this2.removeContainer = removeContainer;
          return null;
        });
      }

      if (forceRender || visible || this._component) {
        portal = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Portal__WEBPACK_IMPORTED_MODULE_5__["default"], {
          getContainer: this.getContainer,
          ref: this.savePortal
        }, children(childProps));
      }

      return portal;
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(props, _ref2) {
      var prevProps = _ref2.prevProps,
          _self = _ref2._self;
      var visible = props.visible,
          getContainer = props.getContainer;

      if (prevProps) {
        var prevVisible = prevProps.visible,
            prevGetContainer = prevProps.getContainer;

        if (visible !== prevVisible) {
          openCount = visible && !prevVisible ? openCount + 1 : openCount - 1;
        }

        var getContainerIsFunc = typeof getContainer === 'function' && typeof prevGetContainer === 'function';

        if (getContainerIsFunc ? getContainer.toString() !== prevGetContainer.toString() : getContainer !== prevGetContainer) {
          _self.removeCurrentContainer(false);
        }
      }

      return {
        prevProps: props
      };
    }
  }]);

  return PortalWrapper;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

PortalWrapper.propTypes = {
  wrapperClassName: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  forceRender: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  getContainer: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.any,
  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  visible: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_lifecycles_compat__WEBPACK_IMPORTED_MODULE_3__["polyfill"])(PortalWrapper));

/***/ }),

/***/ "./node_modules/rc-util/es/getScrollBarSize.js":
/*!*****************************************************!*\
  !*** ./node_modules/rc-util/es/getScrollBarSize.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getScrollBarSize; });
var cached;
function getScrollBarSize(fresh) {
  if (typeof document === 'undefined') {
    return 0;
  }

  if (fresh || cached === undefined) {
    var inner = document.createElement('div');
    inner.style.width = '100%';
    inner.style.height = '200px';
    var outer = document.createElement('div');
    var outerStyle = outer.style;
    outerStyle.position = 'absolute';
    outerStyle.top = 0;
    outerStyle.left = 0;
    outerStyle.pointerEvents = 'none';
    outerStyle.visibility = 'hidden';
    outerStyle.width = '200px';
    outerStyle.height = '150px';
    outerStyle.overflow = 'hidden';
    outer.appendChild(inner);
    document.body.appendChild(outer);
    var widthContained = inner.offsetWidth;
    outer.style.overflow = 'scroll';
    var widthScroll = inner.offsetWidth;

    if (widthContained === widthScroll) {
      widthScroll = outer.clientWidth;
    }

    document.body.removeChild(outer);
    cached = widthContained - widthScroll;
  }

  return cached;
}

/***/ }),

/***/ "./node_modules/rc-util/es/setStyle.js":
/*!*********************************************!*\
  !*** ./node_modules/rc-util/es/setStyle.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Easy to set element style, return previous style
 * IE browser compatible(IE browser doesn't merge overflow style, need to set it separately)
 * https://github.com/ant-design/ant-design/issues/19393
 *
 */
function setStyle(style) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var _options$element = options.element,
      element = _options$element === void 0 ? document.body : _options$element;
  var oldStyle = {};
  var styleKeys = Object.keys(style); // IE browser compatible

  styleKeys.forEach(function (key) {
    oldStyle[key] = element.style[key];
  });
  styleKeys.forEach(function (key) {
    element.style[key] = style[key];
  });
  return oldStyle;
}

/* harmony default export */ __webpack_exports__["default"] = (setStyle);

/***/ }),

/***/ "./node_modules/rc-util/es/switchScrollingEffect.js":
/*!**********************************************************!*\
  !*** ./node_modules/rc-util/es/switchScrollingEffect.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _getScrollBarSize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getScrollBarSize */ "./node_modules/rc-util/es/getScrollBarSize.js");
/* harmony import */ var _setStyle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setStyle */ "./node_modules/rc-util/es/setStyle.js");



function isBodyOverflowing() {
  return document.body.scrollHeight > (window.innerHeight || document.documentElement.clientHeight) && window.innerWidth > document.body.offsetWidth;
}

var cacheStyle = {};
/* harmony default export */ __webpack_exports__["default"] = (function (close) {
  if (!isBodyOverflowing() && !close) {
    return;
  } // https://github.com/ant-design/ant-design/issues/19729


  var scrollingEffectClassName = 'ant-scrolling-effect';
  var scrollingEffectClassNameReg = new RegExp("".concat(scrollingEffectClassName), 'g');
  var bodyClassName = document.body.className;

  if (close) {
    if (!scrollingEffectClassNameReg.test(bodyClassName)) return;
    Object(_setStyle__WEBPACK_IMPORTED_MODULE_1__["default"])(cacheStyle);
    cacheStyle = {};
    document.body.className = bodyClassName.replace(scrollingEffectClassNameReg, '').trim();
    return;
  }

  var scrollBarSize = Object(_getScrollBarSize__WEBPACK_IMPORTED_MODULE_0__["default"])();

  if (scrollBarSize) {
    cacheStyle = Object(_setStyle__WEBPACK_IMPORTED_MODULE_1__["default"])({
      position: 'relative',
      width: "calc(100% - ".concat(scrollBarSize, "px)")
    });

    if (!scrollingEffectClassNameReg.test(bodyClassName)) {
      var addClassName = "".concat(bodyClassName, " ").concat(scrollingEffectClassName);
      document.body.className = addClassName.trim();
    }
  }
});

/***/ }),

/***/ 6:
/*!************************************************!*\
  !*** multi ./examples/getCalendarContainer.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./examples/getCalendarContainer.js */"./examples/getCalendarContainer.js");


/***/ })

/******/ });
//# sourceMappingURL=getCalendarContainer.js.map