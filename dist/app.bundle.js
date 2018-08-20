/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/style.css */ \"./src/css/style.css\");\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_style_css__WEBPACK_IMPORTED_MODULE_0__);\n!(function webpackMissingModule() { var e = new Error(\"Cannot find module './js/config.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n\r\n   \r\n\r\nconsole.log('config');\r\n//reference subscribers collection\r\nvar subscribersRef = firebase.database().ref('subscribers');\r\n// listen to submit  \r\ndocument.getElementById('registerForm').addEventListener('submit', submitForm );\r\n\r\n\r\n// submit form\r\nfunction submitForm(e){\r\n    e.preventDefault();\r\n\r\n    var email = getInputVal('email');\r\n// save email to Firebase\r\n    saveSubs(email);\r\n\r\n    // show alert\r\n    document.querySelector('.alert').style.display = 'block';\r\n\r\n    setTimeout(function(){\r\n        document.querySelector('.alert').style.display = 'none';\r\n    }, 3000);\r\n\r\n    // clear form\r\n    document.getElementById('registerForm').reset();\r\n}\r\n\r\nfunction getInputVal(id) {\r\n    return document.getElementById(id).value;\r\n}\r\n\r\n//save subs to FireBase\r\nfunction saveSubs(email){\r\n    var newSubsRef = subscribersRef.push();\r\n    newSubsRef.set({\r\n        email:email\r\n    })\r\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBwLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC5qcz8xMTEyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjc3MgZnJvbSAnLi9jc3Mvc3R5bGUuY3NzJztcclxuaW1wb3J0IGNvbmZpZyBmcm9tICcuL2pzL2NvbmZpZy5qcyc7ICAgXHJcblxyXG5jb25zb2xlLmxvZygnY29uZmlnJyk7XHJcbi8vcmVmZXJlbmNlIHN1YnNjcmliZXJzIGNvbGxlY3Rpb25cclxudmFyIHN1YnNjcmliZXJzUmVmID0gZmlyZWJhc2UuZGF0YWJhc2UoKS5yZWYoJ3N1YnNjcmliZXJzJyk7XHJcbi8vIGxpc3RlbiB0byBzdWJtaXQgIFxyXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVnaXN0ZXJGb3JtJykuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0Jywgc3VibWl0Rm9ybSApO1xyXG5cclxuXHJcbi8vIHN1Ym1pdCBmb3JtXHJcbmZ1bmN0aW9uIHN1Ym1pdEZvcm0oZSl7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgdmFyIGVtYWlsID0gZ2V0SW5wdXRWYWwoJ2VtYWlsJyk7XHJcbi8vIHNhdmUgZW1haWwgdG8gRmlyZWJhc2VcclxuICAgIHNhdmVTdWJzKGVtYWlsKTtcclxuXHJcbiAgICAvLyBzaG93IGFsZXJ0XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWxlcnQnKS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuXHJcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFsZXJ0Jykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgIH0sIDMwMDApO1xyXG5cclxuICAgIC8vIGNsZWFyIGZvcm1cclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZWdpc3RlckZvcm0nKS5yZXNldCgpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRJbnB1dFZhbChpZCkge1xyXG4gICAgcmV0dXJuIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKS52YWx1ZTtcclxufVxyXG5cclxuLy9zYXZlIHN1YnMgdG8gRmlyZUJhc2VcclxuZnVuY3Rpb24gc2F2ZVN1YnMoZW1haWwpe1xyXG4gICAgdmFyIG5ld1N1YnNSZWYgPSBzdWJzY3JpYmVyc1JlZi5wdXNoKCk7XHJcbiAgICBuZXdTdWJzUmVmLnNldCh7XHJcbiAgICAgICAgZW1haWw6ZW1haWxcclxuICAgIH0pXHJcbn0iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/app.js\n");

/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY3NzL3N0eWxlLmNzcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jc3Mvc3R5bGUuY3NzP2ZiYzYiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/css/style.css\n");

/***/ })

/******/ });