module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/Controle/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/Controle/index.js":
/*!*********************************!*\
  !*** ./pages/Controle/index.js ***!
  \*********************************/
/*! exports provided: getServerSideProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getServerSideProps", function() { return getServerSideProps; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_iron_session__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-iron-session */ "next-iron-session");
/* harmony import */ var next_iron_session__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_iron_session__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_icons_Facebook__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/Facebook */ "@material-ui/icons/Facebook");
/* harmony import */ var _material_ui_icons_Facebook__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Facebook__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_icons_YouTube__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/YouTube */ "@material-ui/icons/YouTube");
/* harmony import */ var _material_ui_icons_YouTube__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_YouTube__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\Users\\Usuario\\Documents\\nslive\\pages\\Controle\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








const PrivatePage = ({
  user
}) => __jsx("div", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 3
  }
}, __jsx("link", {
  href: "https://fonts.googleapis.com/icon?family=Material+Icons",
  rel: "stylesheet",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 6
  }
}), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Icon"], {
  color: "primary",
  style: {
    fontSize: "10rem"
  },
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 5
  }
}, "facebook"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Icon"], {
  color: "primary",
  style: {
    fontSize: "10rem"
  },
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 5
  }
}, "ondemand_video"), __jsx(AppBar, {
  position: "static",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 5
  }
}, __jsx(Toolbar, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 3
  }
}, __jsx(IconButton, {
  edge: "start",
  className: classes.menuButton,
  color: "inherit",
  "aria-label": "menu",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 5
  }
}, __jsx(MenuIcon, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 7
  }
})), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
  variant: "h6",
  className: classes.title,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 5
  }
}, "News"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Button"], {
  color: "inherit",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 5
  }
}, "Login"))));

const getServerSideProps = Object(next_iron_session__WEBPACK_IMPORTED_MODULE_1__["withIronSession"])(async ({
  req,
  res
}) => {
  const user = req.session.get("user");

  if (!user) {
    res.setHeader("location", "/Controle/login");
    res.statusCode = 302;
    res.end();
    return {
      props: {}
    };
  }

  return {
    props: {
      user
    }
  };
}, {
  cookieName: "MYSITECOOKIE",
  cookieOptions: {
    secure: false ? undefined : false
  },
  password: "MIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCTRrl2cl0QRETu\n7ZKA8+l9soBdZZB2x96lTG14Jvwy4QBJFvnBJAmQ682rIHbJueRxxRLJtakFFZhJ\nb/26CDxhVqquUT11NME4uhzsNP721gjeEpxr+3t5R/Go4OX8QEYnWBpNPsA+0D1I\nE1DiG5GQBgHGIGpF+Ho5Gm6AC+6Je8VsfvHGTC+lEqqLMarxjjsBikGaEevQrfMD\nirUDunDjnFLGhpRGUgudiwlcYF958jjXI4OwkdllYqohbf7EB59zptgzxdDxgUCu\ncWULpQFYyJyl7vEzrxHHIvFPrlejkChSsrxdwzs02zUVZo8nIw60FcwSLmOFdYHF\nlsxJ+96JAgMBAAECggEACQtMkTLJjBnD1EVdcWhTzs7dqv6f82oSPjtA32JLgLII\nYwn+E+eLOS2rOhFQDNLK2IFmRjdO63DtosLgcA0Yl3oA7hwEkWmdh7GG3FWOe74z\nRLScC6s2+atv8nOUhAa2wtdE+Y3l3zr0AcoCi07EmWAuZIpHOcfzdNrD7ZPuAIjJ\nUSlHvi6NqYv/siX1iWRr9gq4r8km4p0P8NVa5AsYPqq4Yr01OGbeS6ySmuzo34Ft\nGmUA72SStiV1hJaXMPz3XETW1xu24TRXZqRPT8a77Ic9iCRYma1ILKGeamgNbNsg\nJ0XA6CYO7hJz4TQqhucx+I238xTRseu9j3dj2CRDtQKBgQDLs+0VrU2otMQKleHY\n/3XHms2Ivj7sKJHw3NVEP5fxVbZzFCAXpFloIUbIGm8bbxl/swzb2EFusn8BYKQq\nDQh25PzhD+zx6VRoQbztw5b/1SzSF8U0u/rAhea3riEHBKx+Sh53uJjObHs/y5HV\nb4CYcYPS9yBYUS+HpAN3HeGAPQKBgQC5Fj5r3f0UTbDel92SXgWD5O/DssJI/IGO\njGEvxlXi/DFn/2+Bih4UyU+WCF63z5uE4bHuUIN3j3QYJpfWbWFhZfJciUYNOPsn\nm78Qq1Rke9Ue0X2KqQT9DBeprqAuL/6Iexz8A+BlFpxhFdEoxjwTRLyctdip2eTu\nmXXng3aQPQKBgD0NLg+DI3VeyCrMBSZ+WhR65wMG0eEBv8vKw/hyft2L7OTMsVmk\nnk9BOe+bTJWSVLgbN81kIShGQx5skocv5MuNkeT6Wu+eGPguS6uPJWCDya0mBqrp\ndBvjheSjQa7SzcgD+uGy58lmZgIWxxyLEKWfz/yYqI8PtgkXNRqsT/uZAoGBAJai\njecIYqMVn+9ptgEb2G1B9AlYAVuZdm/nvGk/iEMWcbdsYvoQyO6t8MHwyfXbV31M\nmp2UlYrHC/tj3Yu8tdapPBkn+AVm7LGNxnDwn9ywFAHjCcPCT7cLEm8dGmy8zvGR\nEUPie8yKHHe/Y91FiTs9ZCw+q7mBBxtRdm4XxnUZAoGAXfiQEr5+ZTHaS+08xIpn\nO1L6dGPsRC80GjKzfgVeagdVb2BDlTYM9zV+YPwxh3rItnxihhJSdSYu483s3rEU\nmFj836H+Nhs0HxwGCL6Pb53P5w1uBj3HBYy6B4SwTy0Q6zy85sKe1yS0Rn2FVDLR\nx8A5j1XWqrRlDqIKEiXtiW4="
});
/* harmony default export */ __webpack_exports__["default"] = (PrivatePage);

/***/ }),

/***/ "@material-ui/core":
/*!************************************!*\
  !*** external "@material-ui/core" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core");

/***/ }),

/***/ "@material-ui/icons/Facebook":
/*!**********************************************!*\
  !*** external "@material-ui/icons/Facebook" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Facebook");

/***/ }),

/***/ "@material-ui/icons/YouTube":
/*!*********************************************!*\
  !*** external "@material-ui/icons/YouTube" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/YouTube");

/***/ }),

/***/ "next-iron-session":
/*!************************************!*\
  !*** external "next-iron-session" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-iron-session");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvQ29udHJvbGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvRmFjZWJvb2tcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvWW91VHViZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQtaXJvbi1zZXNzaW9uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIl0sIm5hbWVzIjpbIlByaXZhdGVQYWdlIiwidXNlciIsImZvbnRTaXplIiwiY2xhc3NlcyIsIm1lbnVCdXR0b24iLCJ0aXRsZSIsImdldFNlcnZlclNpZGVQcm9wcyIsIndpdGhJcm9uU2Vzc2lvbiIsInJlcSIsInJlcyIsInNlc3Npb24iLCJnZXQiLCJzZXRIZWFkZXIiLCJzdGF0dXNDb2RlIiwiZW5kIiwicHJvcHMiLCJjb29raWVOYW1lIiwiY29va2llT3B0aW9ucyIsInNlY3VyZSIsInBhc3N3b3JkIiwicHJvY2VzcyIsIkFQUExJQ0FUSU9OX1NFQ1JFVCJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQs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QSx3RDs7Ozs7Ozs7Ozs7QUNBQSx1RDs7Ozs7Ozs7Ozs7QUNBQSw4Qzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxrQyIsImZpbGUiOiJwYWdlcy9Db250cm9sZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvQ29udHJvbGUvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHdpdGhJcm9uU2Vzc2lvbiB9IGZyb20gXCJuZXh0LWlyb24tc2Vzc2lvblwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB7QXZhdGFyLCBCdXR0b24sIENzc0Jhc2VsaW5lLCBUZXh0RmllbGQsIEZvcm1Db250cm9sTGFiZWwsIENoZWNrYm94LExpbmsgLEdyaWQsQm94LCBUeXBvZ3JhcGh5fSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcbmltcG9ydCBGYWNlYm9va0ljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0ZhY2Vib29rJztcclxuaW1wb3J0IFlvdVR1YmVJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9Zb3VUdWJlJztcclxuaW1wb3J0IHtJY29ufSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcblxyXG5jb25zdCBQcml2YXRlUGFnZSA9ICh7IHVzZXIgfSkgPT4gKFxyXG4gICAgXHJcbiAgPGRpdj5cclxuICAgICA8bGluayBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9pY29uP2ZhbWlseT1NYXRlcmlhbCtJY29uc1wiXHJcbiAgICAgIHJlbD1cInN0eWxlc2hlZXRcIj48L2xpbms+XHJcbiAgICA8SWNvbiBjb2xvcj1cInByaW1hcnlcIiBzdHlsZT17e2ZvbnRTaXplOlwiMTByZW1cIn19PmZhY2Vib29rPC9JY29uPlxyXG4gICAgPEljb24gY29sb3I9XCJwcmltYXJ5XCIgc3R5bGU9e3tmb250U2l6ZTpcIjEwcmVtXCJ9fT5vbmRlbWFuZF92aWRlbzwvSWNvbj5cclxuXHJcbiAgICA8QXBwQmFyIHBvc2l0aW9uPVwic3RhdGljXCI+XHJcbiAgPFRvb2xiYXI+XHJcbiAgICA8SWNvbkJ1dHRvbiBlZGdlPVwic3RhcnRcIiBjbGFzc05hbWU9e2NsYXNzZXMubWVudUJ1dHRvbn0gY29sb3I9XCJpbmhlcml0XCIgYXJpYS1sYWJlbD1cIm1lbnVcIj5cclxuICAgICAgPE1lbnVJY29uIC8+XHJcbiAgICA8L0ljb25CdXR0b24+XHJcbiAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIiBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGV9PlxyXG4gICAgICBOZXdzXHJcbiAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICA8QnV0dG9uIGNvbG9yPVwiaW5oZXJpdFwiPkxvZ2luPC9CdXR0b24+XHJcbiAgPC9Ub29sYmFyPlxyXG48L0FwcEJhcj5cclxuXHJcbiAgPC9kaXY+XHJcbik7XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzID0gd2l0aElyb25TZXNzaW9uKFxyXG5cclxuICBcclxuICBhc3luYyAoeyByZXEsIHJlcyB9KSA9PiB7XHJcbiAgICBjb25zdCB1c2VyID0gcmVxLnNlc3Npb24uZ2V0KFwidXNlclwiKTtcclxuICAgIGlmICghdXNlcikge1xyXG4gICAgICByZXMuc2V0SGVhZGVyKFwibG9jYXRpb25cIiwgXCIvQ29udHJvbGUvbG9naW5cIik7XHJcbiAgICAgIHJlcy5zdGF0dXNDb2RlID0gMzAyO1xyXG4gICAgICByZXMuZW5kKCk7XHJcbiAgICAgIHJldHVybiB7IHByb3BzOiB7fSB9O1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIHByb3BzOiB7IHVzZXIgfVxyXG4gICAgfTtcclxuICB9LFxyXG4gIHtcclxuICAgIGNvb2tpZU5hbWU6IFwiTVlTSVRFQ09PS0lFXCIsXHJcbiAgICBjb29raWVPcHRpb25zOiB7XHJcbiAgICAgIHNlY3VyZTogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiID8gdHJ1ZSA6IGZhbHNlXHJcbiAgICB9LFxyXG4gICAgcGFzc3dvcmQ6IHByb2Nlc3MuZW52LkFQUExJQ0FUSU9OX1NFQ1JFVFxyXG4gIH1cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByaXZhdGVQYWdlOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9GYWNlYm9va1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvWW91VHViZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0LWlyb24tc2Vzc2lvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9