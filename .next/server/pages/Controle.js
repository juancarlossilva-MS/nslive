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

/***/ "./config/fire-config.js":
/*!*******************************!*\
  !*** ./config/fire-config.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase */ "firebase");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_0__);

const firebaseConfig = {
  apiKey: "AIzaSyBuWUnihjrh6PyQObRYu2KhirWQCkWsgAI",
  authDomain: "nslive-f6c80.firebaseapp.com",
  projectId: "nslive-f6c80",
  storageBucket: "nslive-f6c80.appspot.com",
  messagingSenderId: "1014412450577",
  appId: "1:1014412450577:web:1434e7a82f45a37322cab0"
};

try {
  firebase__WEBPACK_IMPORTED_MODULE_0___default.a.initializeApp(firebaseConfig);
} catch (err) {
  if (!/already exists/.test(err.message)) {
    console.error('Firebase initialization error', err.stack);
  }
}

const fire = firebase__WEBPACK_IMPORTED_MODULE_0___default.a;
/* harmony default export */ __webpack_exports__["default"] = (fire);

/***/ }),

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
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/Menu */ "@material-ui/icons/Menu");
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _config_fire_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../config/fire-config */ "./config/fire-config.js");
var _jsxFileName = "C:\\Users\\Usuario\\Documents\\nslive\\pages\\Controle\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;









const PrivatePage = ({
  user
}) => {
  const {
    0: blogs,
    1: setBlogs
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const {
    0: urlAtual,
    1: setUrlAtual
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  const {
    0: canal,
    1: setCanal
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    _config_fire_config__WEBPACK_IMPORTED_MODULE_7__["default"].database().ref('infoAtual').once("value").then(snap => {
      /*const blogs = snap.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));*/
      console.log('here');
      var res = snap.val();
      setCanal(res.canal);
      setUrlAtual(res.url); // setBlogs(blogs);
    });
  }, []);

  class InfosAtuais extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
    render() {
      if (canal == "youtube") {
        return __jsx("div", {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 39,
            columnNumber: 11
          }
        }, __jsx("h4", {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 41,
            columnNumber: 15
          }
        }, urlAtual), __jsx(_material_ui_icons_YouTube__WEBPACK_IMPORTED_MODULE_5___default.a, {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 42,
            columnNumber: 16
          }
        }));
      } else {
        return __jsx("div", {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 50,
            columnNumber: 11
          }
        }, __jsx("h4", {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 15
          }
        }, urlAtual), __jsx("h4", {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 53,
            columnNumber: 16
          }
        }, canal));
      }
    }

  }

  const useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(theme => ({
    root: {
      flexGrow: 1
    },
    menuButton: {
      marginRight: theme.spacing(2)
    },
    title: {
      flexGrow: 1
    }
  }));
  const classes = useStyles();
  return __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 3
    }
  }, __jsx("link", {
    href: "https://fonts.googleapis.com/icon?family=Material+Icons",
    rel: "stylesheet",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 6
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["AppBar"], {
    position: "static",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Toolbar"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 3
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["IconButton"], {
    edge: "start",
    className: classes.menuButton,
    color: "inherit",
    "aria-label": "menu",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 5
    }
  }, __jsx(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_6___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 7
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
    variant: "h6",
    className: classes.title,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 5
    }
  }, "News"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    color: "inherit",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 5
    }
  }, "Login"))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Icon"], {
    color: "primary",
    style: {
      fontSize: "10rem"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 5
    }
  }, "facebook"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Icon"], {
    color: "secondary",
    style: {
      fontSize: "10rem",
      height: "55%"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 5
    }
  }, "ondemand_video"), __jsx(InfosAtuais, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 5
    }
  }));
};

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

/***/ "@material-ui/icons/Menu":
/*!******************************************!*\
  !*** external "@material-ui/icons/Menu" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Menu");

/***/ }),

/***/ "@material-ui/icons/YouTube":
/*!*********************************************!*\
  !*** external "@material-ui/icons/YouTube" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/YouTube");

/***/ }),

/***/ "firebase":
/*!***************************!*\
  !*** external "firebase" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("firebase");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29uZmlnL2ZpcmUtY29uZmlnLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL0NvbnRyb2xlL2luZGV4LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL0ZhY2Vib29rXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL01lbnVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvWW91VHViZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImZpcmViYXNlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC1pcm9uLXNlc3Npb25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiXSwibmFtZXMiOlsiZmlyZWJhc2VDb25maWciLCJhcGlLZXkiLCJhdXRoRG9tYWluIiwicHJvamVjdElkIiwic3RvcmFnZUJ1Y2tldCIsIm1lc3NhZ2luZ1NlbmRlcklkIiwiYXBwSWQiLCJmaXJlYmFzZSIsImluaXRpYWxpemVBcHAiLCJlcnIiLCJ0ZXN0IiwibWVzc2FnZSIsImNvbnNvbGUiLCJlcnJvciIsInN0YWNrIiwiZmlyZSIsIlByaXZhdGVQYWdlIiwidXNlciIsImJsb2dzIiwic2V0QmxvZ3MiLCJ1c2VTdGF0ZSIsInVybEF0dWFsIiwic2V0VXJsQXR1YWwiLCJjYW5hbCIsInNldENhbmFsIiwidXNlRWZmZWN0IiwiZGF0YWJhc2UiLCJyZWYiLCJvbmNlIiwidGhlbiIsInNuYXAiLCJsb2ciLCJyZXMiLCJ2YWwiLCJ1cmwiLCJJbmZvc0F0dWFpcyIsIkNvbXBvbmVudCIsInJlbmRlciIsInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsInJvb3QiLCJmbGV4R3JvdyIsIm1lbnVCdXR0b24iLCJtYXJnaW5SaWdodCIsInNwYWNpbmciLCJ0aXRsZSIsImNsYXNzZXMiLCJmb250U2l6ZSIsImhlaWdodCIsImdldFNlcnZlclNpZGVQcm9wcyIsIndpdGhJcm9uU2Vzc2lvbiIsInJlcSIsInNlc3Npb24iLCJnZXQiLCJzZXRIZWFkZXIiLCJzdGF0dXNDb2RlIiwiZW5kIiwicHJvcHMiLCJjb29raWVOYW1lIiwiY29va2llT3B0aW9ucyIsInNlY3VyZSIsInBhc3N3b3JkIiwicHJvY2VzcyIsIkFQUExJQ0FUSU9OX1NFQ1JFVCJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ3hGQTtBQUFBO0FBQUE7QUFBQTtBQUVBLE1BQU1BLGNBQWMsR0FBRztBQUNyQkMsUUFBTSxFQUFFLHlDQURhO0FBRXJCQyxZQUFVLEVBQUUs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QUFBQTtBQUFBLElBbEJGLENBREU7QUFxQkgsQ0F2RkQ7O0FBMkZPLE1BQU1DLGtCQUFrQixHQUFHQyx5RUFBZSxDQUcvQyxPQUFPO0FBQUVDLEtBQUY7QUFBT3BCO0FBQVAsQ0FBUCxLQUF3QjtBQUN0QixRQUFNZixJQUFJLEdBQUdtQyxHQUFHLENBQUNDLE9BQUosQ0FBWUMsR0FBWixDQUFnQixNQUFoQixDQUFiOztBQUNBLE1BQUksQ0FBQ3JDLElBQUwsRUFBVztBQUNUZSxPQUFHLENBQUN1QixTQUFKLENBQWMsVUFBZCxFQUEwQixpQkFBMUI7QUFDQXZCLE9BQUcsQ0FBQ3dCLFVBQUosR0FBaUIsR0FBakI7QUFDQXhCLE9BQUcsQ0FBQ3lCLEdBQUo7QUFDQSxXQUFPO0FBQUVDLFdBQUssRUFBRTtBQUFULEtBQVA7QUFDRDs7QUFFRCxTQUFPO0FBQ0xBLFNBQUssRUFBRTtBQUFFekM7QUFBRjtBQURGLEdBQVA7QUFHRCxDQWY4QyxFQWdCL0M7QUFDRTBDLFlBQVUsRUFBRSxjQURkO0FBRUVDLGVBQWEsRUFBRTtBQUNiQyxVQUFNLEVBQUUsUUFBd0MsU0FBeEMsR0FBK0M7QUFEMUMsR0FGakI7QUFLRUMsVUFBUSxFQUFFQyw0b0RBQThCQztBQUwxQyxDQWhCK0MsQ0FBMUM7QUF5QlFoRCwwRUFBZixFOzs7Ozs7Ozs7OztBQy9IQSw4Qzs7Ozs7Ozs7Ozs7QUNBQSx3RDs7Ozs7Ozs7Ozs7QUNBQSxvRDs7Ozs7Ozs7Ozs7QUNBQSx1RDs7Ozs7Ozs7Ozs7QUNBQSxxQzs7Ozs7Ozs7Ozs7QUNBQSw4Qzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxrQyIsImZpbGUiOiJwYWdlcy9Db250cm9sZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvQ29udHJvbGUvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgZmlyZWJhc2UgZnJvbSAnZmlyZWJhc2UnO1xyXG5cclxuY29uc3QgZmlyZWJhc2VDb25maWcgPSB7XHJcbiAgYXBpS2V5OiBcIkFJemFTeUJ1V1VuaWhqcmg2UHlRT2JSWXUyS2hpcldRQ2tXc2dBSVwiLFxyXG4gIGF1dGhEb21haW46IFwibnNsaXZlLWY2YzgwLmZpcmViYXNlYXBwLmNvbVwiLFxyXG4gIHByb2plY3RJZDogXCJuc2xpdmUtZjZjODBcIixcclxuICBzdG9yYWdlQnVja2V0OiBcIm5zbGl2ZS1mNmM4MC5hcHBzcG90LmNvbVwiLFxyXG4gIG1lc3NhZ2luZ1NlbmRlcklkOiBcIjEwMTQ0MTI0NTA1NzdcIixcclxuICBhcHBJZDogXCIxOjEwMTQ0MTI0NTA1Nzc6d2ViOjE0MzRlN2E4MmY0NWEzNzMyMmNhYjBcIlxyXG59O1xyXG5cclxudHJ5IHtcclxuICBmaXJlYmFzZS5pbml0aWFsaXplQXBwKGZpcmViYXNlQ29uZmlnKTtcclxufSBjYXRjaChlcnIpe1xyXG4gIGlmICghL2FscmVhZHkgZXhpc3RzLy50ZXN0KGVyci5tZXNzYWdlKSkge1xyXG4gICAgY29uc29sZS5lcnJvcignRmlyZWJhc2UgaW5pdGlhbGl6YXRpb24gZXJyb3InLCBlcnIuc3RhY2spfVxyXG59XHJcblxyXG5jb25zdCBmaXJlID0gZmlyZWJhc2U7XHJcbmV4cG9ydCBkZWZhdWx0IGZpcmU7IiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCBDb21wb25lbnQsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgd2l0aElyb25TZXNzaW9uIH0gZnJvbSBcIm5leHQtaXJvbi1zZXNzaW9uXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHtBdmF0YXIsIG1ha2VTdHlsZXMsIFxyXG4gICAgQXBwQmFyLFRvb2xiYXIsSWNvbkJ1dHRvbixJY29uLCBCdXR0b24sIENzc0Jhc2VsaW5lLCBUZXh0RmllbGQsIEZvcm1Db250cm9sTGFiZWwsIENoZWNrYm94LExpbmsgLEdyaWQsQm94LCBUeXBvZ3JhcGh5fSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcbmltcG9ydCBGYWNlYm9va0ljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0ZhY2Vib29rJztcclxuaW1wb3J0IFlvdVR1YmVJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9Zb3VUdWJlJztcclxuaW1wb3J0IE1lbnVJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9NZW51JztcclxuXHJcbmltcG9ydCBmaXJlIGZyb20gJy4uLy4uL2NvbmZpZy9maXJlLWNvbmZpZyc7XHJcblxyXG5jb25zdCBQcml2YXRlUGFnZSA9ICh7IHVzZXIgfSkgPT4ge1xyXG4gIGNvbnN0IFtibG9ncywgc2V0QmxvZ3NdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFt1cmxBdHVhbCwgc2V0VXJsQXR1YWxdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2NhbmFsLCBzZXRDYW5hbF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHJcbnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBmaXJlLmRhdGFiYXNlKClcclxuICAgICAgLnJlZignaW5mb0F0dWFsJylcclxuICAgICAgLm9uY2UoXCJ2YWx1ZVwiKS50aGVuKChzbmFwKSA9PiB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLypjb25zdCBibG9ncyA9IHNuYXAuZG9jcy5tYXAoZG9jID0+ICh7XHJcbiAgICAgICAgICBpZDogZG9jLmlkLFxyXG4gICAgICAgICAgLi4uZG9jLmRhdGEoKVxyXG4gICAgICAgIH0pKTsqL1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdoZXJlJyk7XHJcbiAgICAgICAgdmFyIHJlcyA9IChzbmFwLnZhbCgpKVxyXG4gICAgICAgIHNldENhbmFsKHJlcy5jYW5hbCk7XHJcbiAgICAgICAgc2V0VXJsQXR1YWwocmVzLnVybCk7XHJcbiAgICAgIFxyXG4gICAgICAgLy8gc2V0QmxvZ3MoYmxvZ3MpO1xyXG4gICAgICB9KTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNsYXNzIEluZm9zQXR1YWlzIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIHJlbmRlcigpe1xyXG4gICAgICBpZihjYW5hbCA9PSBcInlvdXR1YmVcIil7XHJcbiAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIDxoND57dXJsQXR1YWx9PC9oND5cclxuICAgICAgICAgICAgICAgPFlvdVR1YmVJY29uLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgXHJcbiAgICBcclxuICAgICAgICApXHJcblxyXG4gICAgICB9ZWxzZXtcclxuICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAgICAgPGg0Pnt1cmxBdHVhbH08L2g0PlxyXG4gICAgICAgICAgICAgICA8aDQ+e2NhbmFsfTwvaDQ+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgIFxyXG4gICAgXHJcbiAgICAgICAgKVxyXG5cclxuICAgICAgfVxyXG4gICB9XHJcblxyXG4gIH1cclxuICBcclxuICBjb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICAgIHJvb3Q6IHtcclxuICAgICAgZmxleEdyb3c6IDEsXHJcbiAgICB9LFxyXG4gICAgbWVudUJ1dHRvbjoge1xyXG4gICAgICBtYXJnaW5SaWdodDogdGhlbWUuc3BhY2luZygyKSxcclxuICAgIH0sXHJcbiAgICB0aXRsZToge1xyXG4gICAgICBmbGV4R3JvdzogMSxcclxuICAgIH0sXHJcbiAgfSkpO1xyXG5cclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcblxyXG4gICAgcmV0dXJuKFxyXG4gIDxkaXY+XHJcbiAgICAgPGxpbmsgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vaWNvbj9mYW1pbHk9TWF0ZXJpYWwrSWNvbnNcIlxyXG4gICAgICByZWw9XCJzdHlsZXNoZWV0XCI+PC9saW5rPlxyXG5cclxuXHJcbiAgICA8QXBwQmFyIHBvc2l0aW9uPVwic3RhdGljXCI+XHJcbiAgPFRvb2xiYXI+XHJcbiAgICA8SWNvbkJ1dHRvbiBlZGdlPVwic3RhcnRcIiBjbGFzc05hbWU9e2NsYXNzZXMubWVudUJ1dHRvbn0gY29sb3I9XCJpbmhlcml0XCIgYXJpYS1sYWJlbD1cIm1lbnVcIj5cclxuICAgICAgPE1lbnVJY29uIC8+XHJcbiAgICA8L0ljb25CdXR0b24+XHJcbiAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIiBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGV9PlxyXG4gICAgICBOZXdzXHJcbiAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICA8QnV0dG9uIGNvbG9yPVwiaW5oZXJpdFwiPkxvZ2luPC9CdXR0b24+XHJcbiAgPC9Ub29sYmFyPlxyXG48L0FwcEJhcj5cclxuICAgIDxJY29uIGNvbG9yPVwicHJpbWFyeVwiIHN0eWxlPXt7Zm9udFNpemU6XCIxMHJlbVwifX0+ZmFjZWJvb2s8L0ljb24+XHJcbiAgICA8SWNvbiBjb2xvcj1cInNlY29uZGFyeVwiIHN0eWxlPXt7Zm9udFNpemU6XCIxMHJlbVwiLGhlaWdodDpcIjU1JVwifX0+b25kZW1hbmRfdmlkZW88L0ljb24+XHJcbiAgICA8SW5mb3NBdHVhaXMvPlxyXG4gIDwvZGl2Pik7XHJcbn07XHJcblxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHMgPSB3aXRoSXJvblNlc3Npb24oXHJcblxyXG4gIFxyXG4gIGFzeW5jICh7IHJlcSwgcmVzIH0pID0+IHtcclxuICAgIGNvbnN0IHVzZXIgPSByZXEuc2Vzc2lvbi5nZXQoXCJ1c2VyXCIpO1xyXG4gICAgaWYgKCF1c2VyKSB7XHJcbiAgICAgIHJlcy5zZXRIZWFkZXIoXCJsb2NhdGlvblwiLCBcIi9Db250cm9sZS9sb2dpblwiKTtcclxuICAgICAgcmVzLnN0YXR1c0NvZGUgPSAzMDI7XHJcbiAgICAgIHJlcy5lbmQoKTtcclxuICAgICAgcmV0dXJuIHsgcHJvcHM6IHt9IH07XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgcHJvcHM6IHsgdXNlciB9XHJcbiAgICB9O1xyXG4gIH0sXHJcbiAge1xyXG4gICAgY29va2llTmFtZTogXCJNWVNJVEVDT09LSUVcIixcclxuICAgIGNvb2tpZU9wdGlvbnM6IHtcclxuICAgICAgc2VjdXJlOiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIgPyB0cnVlIDogZmFsc2VcclxuICAgIH0sXHJcbiAgICBwYXNzd29yZDogcHJvY2Vzcy5lbnYuQVBQTElDQVRJT05fU0VDUkVUXHJcbiAgfVxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJpdmF0ZVBhZ2U7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL0ZhY2Vib29rXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9NZW51XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9Zb3VUdWJlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZpcmViYXNlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtaXJvbi1zZXNzaW9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyJdLCJzb3VyY2VSb290IjoiIn0=