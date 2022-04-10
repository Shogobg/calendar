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
/******/ 		"examples/custom-clear-icon": 0
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
/******/ 	deferredModules.push([4,"common"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./examples/custom-clear-icon.js":
/*!***************************************!*\
  !*** ./examples/custom-clear-icon.js ***!
  \***************************************/
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
/* harmony import */ var rc_calendar_src_RangeCalendar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rc-calendar/src/RangeCalendar */ "./src/RangeCalendar.js");
/* harmony import */ var rc_time_picker_assets_index_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rc-time-picker/assets/index.css */ "./node_modules/rc-time-picker/assets/index.css");
/* harmony import */ var rc_time_picker_assets_index_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(rc_time_picker_assets_index_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var moment_locale_zh_cn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! moment/locale/zh-cn */ "./node_modules/moment/locale/zh-cn.js");
/* harmony import */ var moment_locale_zh_cn__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment_locale_zh_cn__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var moment_locale_en_gb__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! moment/locale/en-gb */ "./node_modules/moment/locale/en-gb.js");
/* harmony import */ var moment_locale_en_gb__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment_locale_en_gb__WEBPACK_IMPORTED_MODULE_7__);
/* eslint react/no-multi-comp:0, no-console:0 */








var clearPath = 'M909.1 209.3l-56.4 44.1C775.8 155.1 656.2 92 521.9 92 ' + '290 92 102.3 279.5 102 511.5 101.7 743.7 289.8 932 521.9 932c181.3 0' + ' 335.8-115 394.6-276.1 1.5-4.2-0.7-8.9-4.9-10.3l-56.7-19.5c-4.1-1.4-8.6' + ' 0.7-10.1 4.8-1.8 5-3.8 10-5.9 14.9-17.3 41-42.1 77.8-73.7 109.4-31.6' + ' 31.6-68.4 56.4-109.3 73.8-42.3 17.9-87.4 27-133.8 27-46.5 0-91.5-9.1-133' + '.8-27-40.9-17.3-77.7-42.1-109.3-73.8-31.6-31.6-56.4-68.4-73.7-109.4-17.9-42' + '.4-27-87.4-27-133.9s9.1-91.5 27-133.9c17.3-41 42.1-77.8 73.7-109.4 31.6-31.6' + ' 68.4-56.4 109.3-73.8 42.3-17.9 87.4-27 133.8-27 46.5 0 91.5' + ' 9.1 133.8 27 40.9 17.3 77.7 42.1 109.3 73.8 9.9 9.9 19.2 20.4 27.8' + ' 31.4l-60.2 47c-5.3 4.1-3.5 12.5 3 14.1l175.6 43c5 1.2 9.9-2.6 9.9' + '-7.7l0.8-180.9c-0.1-6.6-7.8-10.3-13-6.2z';
var svg = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
  style: {
    fontStyle: 'normal',
    zIndex: '9999',
    position: 'absolute',
    right: '6px',
    cursor: 'pointer',
    overflow: 'hidden',
    width: '20px',
    height: '20px',
    textAlign: 'center',
    lineHeight: '1',
    top: '10px',
    margin: '0',
    fontSize: '12px',
    color: '#aaa',
    display: 'inline-block'
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
  viewBox: "0 0 1024 1024",
  width: "1em",
  height: "1em",
  fill: "currentColor",
  style: {
    verticalAlign: '-.125em'
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
  d: clearPath,
  "p-id": "5827"
})));
var calendars = ['time', 'date', 'month', 'year', 'decade'].map(function (mode) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    key: mode,
    style: {
      marginBottom: '1rem'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, mode), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(rc_calendar__WEBPACK_IMPORTED_MODULE_3__["default"], {
    mode: mode,
    clearIcon: svg
  }));
});
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
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(rc_calendar__WEBPACK_IMPORTED_MODULE_3__["default"], {
  clearIcon: svg
})), calendars, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
  style: {
    clear: 'both'
  }
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(rc_calendar_src_RangeCalendar__WEBPACK_IMPORTED_MODULE_4__["default"], {
  showClear: true,
  clearIcon: svg
}))), document.getElementById('__react-content'));

/***/ }),

/***/ 4:
/*!*********************************************!*\
  !*** multi ./examples/custom-clear-icon.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./examples/custom-clear-icon.js */"./examples/custom-clear-icon.js");


/***/ })

/******/ });
//# sourceMappingURL=custom-clear-icon.js.map