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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/style.css */ \"./src/styles/style.css\");\n/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_style_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _scripts_firebase_config_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/firebase-config.js */ \"./src/scripts/firebase-config.js\");\n\r\n   \r\n\r\nconsole.log('config');\r\n//reference subscribers collection\r\nvar subscribersRef = firebase.database().ref('subscribers');\r\n// listen to submit  \r\ndocument.getElementById('registerForm').addEventListener('submit', submitForm );\r\n\r\n\r\n// submit form\r\nfunction submitForm(e){\r\n    e.preventDefault();\r\n\r\n    var email = getInputVal('email');\r\n// save email to Firebase\r\n    saveSubs(email);\r\n\r\n    // show alert\r\n    document.querySelector('.alert').style.display = 'block';\r\n\r\n    setTimeout(function(){\r\n        document.querySelector('.alert').style.display = 'none';\r\n    }, 3000);\r\n\r\n    // clear form\r\n    document.getElementById('registerForm').reset();\r\n}\r\n\r\nfunction getInputVal(id) {\r\n    return document.getElementById(id).value;\r\n}\r\n\r\n//save subs to FireBase\r\nfunction saveSubs(email){\r\n    var newSubsRef = subscribersRef.push();\r\n    newSubsRef.set({\r\n        email:email\r\n    })\r\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBwLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC5qcz8xMTEyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjc3MgZnJvbSAnLi9zdHlsZXMvc3R5bGUuY3NzJztcclxuaW1wb3J0IGNvbmZpZyBmcm9tICcuL3NjcmlwdHMvZmlyZWJhc2UtY29uZmlnLmpzJzsgICBcclxuXHJcbmNvbnNvbGUubG9nKCdjb25maWcnKTtcclxuLy9yZWZlcmVuY2Ugc3Vic2NyaWJlcnMgY29sbGVjdGlvblxyXG52YXIgc3Vic2NyaWJlcnNSZWYgPSBmaXJlYmFzZS5kYXRhYmFzZSgpLnJlZignc3Vic2NyaWJlcnMnKTtcclxuLy8gbGlzdGVuIHRvIHN1Ym1pdCAgXHJcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZWdpc3RlckZvcm0nKS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBzdWJtaXRGb3JtICk7XHJcblxyXG5cclxuLy8gc3VibWl0IGZvcm1cclxuZnVuY3Rpb24gc3VibWl0Rm9ybShlKXtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICB2YXIgZW1haWwgPSBnZXRJbnB1dFZhbCgnZW1haWwnKTtcclxuLy8gc2F2ZSBlbWFpbCB0byBGaXJlYmFzZVxyXG4gICAgc2F2ZVN1YnMoZW1haWwpO1xyXG5cclxuICAgIC8vIHNob3cgYWxlcnRcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hbGVydCcpLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG5cclxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWxlcnQnKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgfSwgMzAwMCk7XHJcblxyXG4gICAgLy8gY2xlYXIgZm9ybVxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JlZ2lzdGVyRm9ybScpLnJlc2V0KCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldElucHV0VmFsKGlkKSB7XHJcbiAgICByZXR1cm4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpLnZhbHVlO1xyXG59XHJcblxyXG4vL3NhdmUgc3VicyB0byBGaXJlQmFzZVxyXG5mdW5jdGlvbiBzYXZlU3VicyhlbWFpbCl7XHJcbiAgICB2YXIgbmV3U3Vic1JlZiA9IHN1YnNjcmliZXJzUmVmLnB1c2goKTtcclxuICAgIG5ld1N1YnNSZWYuc2V0KHtcclxuICAgICAgICBlbWFpbDplbWFpbFxyXG4gICAgfSlcclxufSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/app.js\n");

/***/ }),

/***/ "./src/scripts/firebase-config.js":
/*!****************************************!*\
  !*** ./src/scripts/firebase-config.js ***!
  \****************************************/
/*! exports provided: config */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"config\", function() { return config; });\nlet config = {\r\n    apiKey: \"AIzaSyCowgpQ5gOi9BFlxFtneGtigu_HBDGqrPc\",\r\n    authDomain: \"portfolio-d8844.firebaseapp.com\",\r\n    databaseURL: \"https://portfolio-d8844.firebaseio.com\",\r\n    projectId: \"portfolio-d8844\",\r\n    storageBucket: \"portfolio-d8844.appspot.com\",\r\n    messagingSenderId: \"498654877523\"\r\n  };\r\n  firebase.initializeApp(config);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9maXJlYmFzZS1jb25maWcuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9maXJlYmFzZS1jb25maWcuanM/MDIzYSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgbGV0IGNvbmZpZyA9IHtcclxuICAgIGFwaUtleTogXCJBSXphU3lDb3dncFE1Z09pOUJGbHhGdG5lR3RpZ3VfSEJER3FyUGNcIixcclxuICAgIGF1dGhEb21haW46IFwicG9ydGZvbGlvLWQ4ODQ0LmZpcmViYXNlYXBwLmNvbVwiLFxyXG4gICAgZGF0YWJhc2VVUkw6IFwiaHR0cHM6Ly9wb3J0Zm9saW8tZDg4NDQuZmlyZWJhc2Vpby5jb21cIixcclxuICAgIHByb2plY3RJZDogXCJwb3J0Zm9saW8tZDg4NDRcIixcclxuICAgIHN0b3JhZ2VCdWNrZXQ6IFwicG9ydGZvbGlvLWQ4ODQ0LmFwcHNwb3QuY29tXCIsXHJcbiAgICBtZXNzYWdpbmdTZW5kZXJJZDogXCI0OTg2NTQ4Nzc1MjNcIlxyXG4gIH07XHJcbiAgZmlyZWJhc2UuaW5pdGlhbGl6ZUFwcChjb25maWcpOyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/firebase-config.js\n");

/***/ }),

/***/ "./src/styles/style.css":
/*!******************************!*\
  !*** ./src/styles/style.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/mini-css-extract-plugin/dist/loader.js):\\nModuleBuildError: Module build failed: Error: ENOENT: no such file or directory, open 'C:\\\\Users\\\\a-cosimi\\\\Documents\\\\GitHub\\\\shonesque.github.io\\\\node_modules\\\\css-loader\\\\lib\\\\css-base.js'\\n    at runLoaders (C:\\\\Users\\\\a-cosimi\\\\Documents\\\\GitHub\\\\shonesque.github.io\\\\node_modules\\\\webpack\\\\lib\\\\NormalModule.js:286:20)\\n    at C:\\\\Users\\\\a-cosimi\\\\Documents\\\\GitHub\\\\shonesque.github.io\\\\node_modules\\\\loader-runner\\\\lib\\\\LoaderRunner.js:364:11\\n    at Array.<anonymous> (C:\\\\Users\\\\a-cosimi\\\\Documents\\\\GitHub\\\\shonesque.github.io\\\\node_modules\\\\loader-runner\\\\lib\\\\LoaderRunner.js:200:19)\\n    at Storage.finished (C:\\\\Users\\\\a-cosimi\\\\Documents\\\\GitHub\\\\shonesque.github.io\\\\node_modules\\\\enhanced-resolve\\\\lib\\\\CachedInputFileSystem.js:43:16)\\n    at ReadFileContext.provider (C:\\\\Users\\\\a-cosimi\\\\Documents\\\\GitHub\\\\shonesque.github.io\\\\node_modules\\\\enhanced-resolve\\\\lib\\\\CachedInputFileSystem.js:79:9)\\n    at ReadFileContext.callback (C:\\\\Users\\\\a-cosimi\\\\Documents\\\\GitHub\\\\shonesque.github.io\\\\node_modules\\\\graceful-fs\\\\graceful-fs.js:78:16)\\n    at FSReqWrap.readFileAfterOpen [as oncomplete] (fs.js:420:13)\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3R5bGVzL3N0eWxlLmNzcy5qcyIsInNvdXJjZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/styles/style.css\n");

/***/ })

/******/ });