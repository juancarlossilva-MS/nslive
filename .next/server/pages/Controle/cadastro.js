module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/Controle/cadastro.js");
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

/***/ "./pages/Controle/cadastro.js":
/*!************************************!*\
  !*** ./pages/Controle/cadastro.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config_fire_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../config/fire-config */ "./config/fire-config.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Avatar */ "@material-ui/core/Avatar");
/* harmony import */ var _material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/CssBaseline */ "@material-ui/core/CssBaseline");
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/TextField */ "@material-ui/core/TextField");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/FormControlLabel */ "@material-ui/core/FormControlLabel");
/* harmony import */ var _material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Checkbox */ "@material-ui/core/Checkbox");
/* harmony import */ var _material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_Link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Link */ "@material-ui/core/Link");
/* harmony import */ var _material_ui_core_Link__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Grid */ "@material-ui/core/Grid");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Box */ "@material-ui/core/Box");
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_icons_LockOutlined__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/icons/LockOutlined */ "@material-ui/icons/LockOutlined");
/* harmony import */ var _material_ui_icons_LockOutlined__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_LockOutlined__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/Container */ "@material-ui/core/Container");
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_15__);
var _jsxFileName = "C:\\Users\\Usuario\\Documents\\nslive\\pages\\Controle\\cadastro.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

















function Cadastro() {
  function Copyright() {
    return __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_13___default.a, {
      variant: "body2",
      color: "textSecondary",
      align: "center",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 7
      }
    }, 'Copyright © ', __jsx(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_9___default.a, {
      color: "inherit",
      href: "https://material-ui.com/",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 9
      }
    }, "Your Website"), ' ', new Date().getFullYear(), '.');
  }

  const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_14__["makeStyles"])(theme => ({
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main
    },
    form: {
      width: '100%',
      // Fix IE 11 issue.
      marginTop: theme.spacing(3)
    },
    submit: {
      margin: theme.spacing(3, 0, 2)
    }
  }));
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_0__["useRouter"])();
  const classes = useStyles();
  const {
    0: email,
    1: setEmail
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])("");
  const {
    0: password,
    1: setPassword
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])("");
  const {
    0: firstName,
    1: setFirstName
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])("");
  const {
    0: lastName,
    1: setLastName
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])("");

  const onChangeHandler = event => {
    const {
      name,
      value
    } = event.currentTarget;

    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    } else if (name === "firstName") {
      setFirstName(value);
    } else if (name === "lastName") {
      setLastName(value);
    }
  };

  const handlerSubmit = async event => {
    event.preventDefault();
    _config_fire_config__WEBPACK_IMPORTED_MODULE_1__["default"].auth().createUserWithEmailAndPassword(email, password).then(user => {
      var user2 = _config_fire_config__WEBPACK_IMPORTED_MODULE_1__["default"].auth().currentUser;
      console.log('here');
      user2.updateProfile({
        displayName: firstName + " " + lastName
      }).then(async e => {
        console.log('here2');
        const response = await fetch("../api/sessions", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            email,
            password
          })
        });
        console.log(response);

        if (response.ok) {
          return router.push("/Controle");
        }
      }).catch(function (error) {
        console.log(error);
      });
    }).catch(error => {
      console.log(error.message);
      var errorCode = error.code;
      var errorMessage = error.message; // ..
    });
  };

  return __jsx(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_15___default.a, {
    component: "main",
    maxWidth: "xs",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_5___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: classes.paper,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_3___default.a, {
    className: classes.avatar,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 9
    }
  }, __jsx(_material_ui_icons_LockOutlined__WEBPACK_IMPORTED_MODULE_12___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 11
    }
  })), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_13___default.a, {
    component: "h1",
    variant: "h5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 9
    }
  }, "Cadastrar"), __jsx("form", {
    onSubmit: event => handlerSubmit(event),
    className: classes.form,
    noValidate: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_10___default.a, {
    container: true,
    spacing: 2,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_10___default.a, {
    item: true,
    xs: 12,
    sm: 6,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_6___default.a, {
    autoComplete: "fname",
    name: "firstName",
    variant: "outlined",
    required: true,
    fullWidth: true,
    id: "firstName",
    label: "First Name",
    autoFocus: true,
    onChange: event => onChangeHandler(event),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 15
    }
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_10___default.a, {
    item: true,
    xs: 12,
    sm: 6,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_6___default.a, {
    variant: "outlined",
    required: true,
    fullWidth: true,
    id: "lastName",
    label: "Last Name",
    name: "lastName",
    autoComplete: "lname",
    onChange: event => onChangeHandler(event),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 15
    }
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_10___default.a, {
    item: true,
    xs: 12,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_6___default.a, {
    variant: "outlined",
    required: true,
    fullWidth: true,
    id: "email",
    label: "Email Address",
    name: "email",
    autoComplete: "email",
    onChange: event => onChangeHandler(event),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 15
    }
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_10___default.a, {
    item: true,
    xs: 12,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_6___default.a, {
    variant: "outlined",
    required: true,
    fullWidth: true,
    name: "password",
    label: "Password",
    type: "password",
    id: "password",
    autoComplete: "current-password",
    onChange: event => onChangeHandler(event),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 15
    }
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_10___default.a, {
    item: true,
    xs: 12,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_7___default.a, {
    control: __jsx(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_8___default.a, {
      value: "allowExtraEmails",
      color: "primary",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 178,
        columnNumber: 26
      }
    }),
    label: "I want to receive inspiration, marketing promotions and updates via email.",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177,
      columnNumber: 15
    }
  }))), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4___default.a, {
    type: "submit",
    fullWidth: true,
    variant: "contained",
    color: "primary",
    className: classes.submit,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183,
      columnNumber: 11
    }
  }, "Cadastrar"), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_10___default.a, {
    container: true,
    justify: "flex-end",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_10___default.a, {
    item: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_9___default.a, {
    href: "#",
    variant: "body2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194,
      columnNumber: 15
    }
  }, "Ja tem conta? Fa\xE7a Login"))))), __jsx(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_11___default.a, {
    mt: 5,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201,
      columnNumber: 7
    }
  }, __jsx(Copyright, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202,
      columnNumber: 9
    }
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (Cadastro);

/***/ }),

/***/ "@material-ui/core/Avatar":
/*!*******************************************!*\
  !*** external "@material-ui/core/Avatar" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Avatar");

/***/ }),

/***/ "@material-ui/core/Box":
/*!****************************************!*\
  !*** external "@material-ui/core/Box" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Box");

/***/ }),

/***/ "@material-ui/core/Button":
/*!*******************************************!*\
  !*** external "@material-ui/core/Button" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Button");

/***/ }),

/***/ "@material-ui/core/Checkbox":
/*!*********************************************!*\
  !*** external "@material-ui/core/Checkbox" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Checkbox");

/***/ }),

/***/ "@material-ui/core/Container":
/*!**********************************************!*\
  !*** external "@material-ui/core/Container" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Container");

/***/ }),

/***/ "@material-ui/core/CssBaseline":
/*!************************************************!*\
  !*** external "@material-ui/core/CssBaseline" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CssBaseline");

/***/ }),

/***/ "@material-ui/core/FormControlLabel":
/*!*****************************************************!*\
  !*** external "@material-ui/core/FormControlLabel" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/FormControlLabel");

/***/ }),

/***/ "@material-ui/core/Grid":
/*!*****************************************!*\
  !*** external "@material-ui/core/Grid" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Grid");

/***/ }),

/***/ "@material-ui/core/Link":
/*!*****************************************!*\
  !*** external "@material-ui/core/Link" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Link");

/***/ }),

/***/ "@material-ui/core/TextField":
/*!**********************************************!*\
  !*** external "@material-ui/core/TextField" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TextField");

/***/ }),

/***/ "@material-ui/core/Typography":
/*!***********************************************!*\
  !*** external "@material-ui/core/Typography" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Typography");

/***/ }),

/***/ "@material-ui/core/styles":
/*!*******************************************!*\
  !*** external "@material-ui/core/styles" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "@material-ui/icons/LockOutlined":
/*!**************************************************!*\
  !*** external "@material-ui/icons/LockOutlined" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/LockOutlined");

/***/ }),

/***/ "firebase":
/*!***************************!*\
  !*** external "firebase" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("firebase");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29uZmlnL2ZpcmUtY29uZmlnLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL0NvbnRyb2xlL2NhZGFzdHJvLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0F2YXRhclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0JveFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0J1dHRvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0NoZWNrYm94XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvQ29udGFpbmVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvQ3NzQmFzZWxpbmVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9Gb3JtQ29udHJvbExhYmVsXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvR3JpZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0xpbmtcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9UZXh0RmllbGRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL0xvY2tPdXRsaW5lZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImZpcmViYXNlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIl0sIm5hbWVzIjpbImZpcmViYXNlQ29uZmlnIiwiYXBpS2V5IiwiYXV0aERvbWFpbiIsInByb2plY3RJZCIsInN0b3JhZ2VCdWNrZXQiLCJtZXNzYWdpbmdTZW5kZXJJZCIsImFwcElkIiwiZmlyZWJhc2UiLCJpbml0aWFsaXplQXBwIiwiZXJyIiwidGVzdCIsIm1lc3NhZ2UiLCJjb25zb2xlIiwiZXJyb3IiLCJzdGFjayIsImZpcmUiLCJDYWRhc3RybyIsIkNvcHlyaWdodCIsIkRhdGUiLCJnZXRGdWxsWWVhciIsInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsInBhcGVyIiwibWFyZ2luVG9wIiwic3BhY2luZyIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwiYWxpZ25JdGVtcyIsImF2YXRhciIsIm1hcmdpbiIsImJhY2tncm91bmRDb2xvciIsInBhbGV0dGUiLCJzZWNvbmRhcnkiLCJtYWluIiwiZm9ybSIsIndpZHRoIiwic3VibWl0Iiwicm91dGVyIiwidXNlUm91dGVyIiwiY2xhc3NlcyIsImVtYWlsIiwic2V0RW1haWwiLCJ1c2VTdGF0ZSIsInBhc3N3b3JkIiwic2V0UGFzc3dvcmQiLCJmaXJzdE5hbWUiLCJzZXRGaXJzdE5hbWUiLCJsYXN0TmFtZSIsInNldExhc3ROYW1lIiwib25DaGFuZ2VIYW5kbGVyIiwiZXZlbnQiLCJuYW1lIiwidmFsdWUiLCJjdXJyZW50VGFyZ2V0IiwiaGFuZGxlclN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwiYXV0aCIsImNyZWF0ZVVzZXJXaXRoRW1haWxBbmRQYXNzd29yZCIsInRoZW4iLCJ1c2VyIiwidXNlcjIiLCJjdXJyZW50VXNlciIsImxvZyIsInVwZGF0ZVByb2ZpbGUiLCJkaXNwbGF5TmFtZSIsImUiLCJyZXNwb25zZSIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5Iiwib2siLCJwdXNoIiwiY2F0Y2giLCJlcnJvckNvZGUiLCJjb2RlIiwi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QUFnQixXQUFPLEVBQUMsVUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsOERBQUQ7QUFBTSxRQUFJLE1BQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsNkRBQUQ7QUFBTSxRQUFJLEVBQUMsR0FBWDtBQUFlLFdBQU8sRUFBQyxPQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1DQURGLENBREYsQ0FwRUYsQ0FQRixDQUZGLEVBc0ZFLE1BQUMsNkRBQUQ7QUFBSyxNQUFFLEVBQUUsQ0FBVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxTQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQXRGRixDQURGO0FBNEZEOztBQUVjckIsdUVBQWYsRTs7Ozs7Ozs7Ozs7QUMvTUEscUQ7Ozs7Ozs7Ozs7O0FDQUEsa0Q7Ozs7Ozs7Ozs7O0FDQUEscUQ7Ozs7Ozs7Ozs7O0FDQUEsdUQ7Ozs7Ozs7Ozs7O0FDQUEsd0Q7Ozs7Ozs7Ozs7O0FDQUEsMEQ7Ozs7Ozs7Ozs7O0FDQUEsK0Q7Ozs7Ozs7Ozs7O0FDQUEsbUQ7Ozs7Ozs7Ozs7O0FDQUEsbUQ7Ozs7Ozs7Ozs7O0FDQUEsd0Q7Ozs7Ozs7Ozs7O0FDQUEseUQ7Ozs7Ozs7Ozs7O0FDQUEscUQ7Ozs7Ozs7Ozs7O0FDQUEsNEQ7Ozs7Ozs7Ozs7O0FDQUEscUM7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsa0MiLCJmaWxlIjoicGFnZXMvQ29udHJvbGUvY2FkYXN0cm8uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL0NvbnRyb2xlL2NhZGFzdHJvLmpzXCIpO1xuIiwiaW1wb3J0IGZpcmViYXNlIGZyb20gJ2ZpcmViYXNlJztcclxuXHJcbmNvbnN0IGZpcmViYXNlQ29uZmlnID0ge1xyXG4gIGFwaUtleTogXCJBSXphU3lCdVdVbmloanJoNlB5UU9iUll1MktoaXJXUUNrV3NnQUlcIixcclxuICBhdXRoRG9tYWluOiBcIm5zbGl2ZS1mNmM4MC5maXJlYmFzZWFwcC5jb21cIixcclxuICBwcm9qZWN0SWQ6IFwibnNsaXZlLWY2YzgwXCIsXHJcbiAgc3RvcmFnZUJ1Y2tldDogXCJuc2xpdmUtZjZjODAuYXBwc3BvdC5jb21cIixcclxuICBtZXNzYWdpbmdTZW5kZXJJZDogXCIxMDE0NDEyNDUwNTc3XCIsXHJcbiAgYXBwSWQ6IFwiMToxMDE0NDEyNDUwNTc3OndlYjoxNDM0ZTdhODJmNDVhMzczMjJjYWIwXCJcclxufTtcclxuXHJcbnRyeSB7XHJcbiAgZmlyZWJhc2UuaW5pdGlhbGl6ZUFwcChmaXJlYmFzZUNvbmZpZyk7XHJcbn0gY2F0Y2goZXJyKXtcclxuICBpZiAoIS9hbHJlYWR5IGV4aXN0cy8udGVzdChlcnIubWVzc2FnZSkpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0ZpcmViYXNlIGluaXRpYWxpemF0aW9uIGVycm9yJywgZXJyLnN0YWNrKX1cclxufVxyXG5cclxuY29uc3QgZmlyZSA9IGZpcmViYXNlO1xyXG5leHBvcnQgZGVmYXVsdCBmaXJlOyIsImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IGZpcmUgZnJvbSAnLi4vLi4vY29uZmlnL2ZpcmUtY29uZmlnJztcclxuXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQXZhdGFyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0F2YXRhcic7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcclxuaW1wb3J0IENzc0Jhc2VsaW5lIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0Nzc0Jhc2VsaW5lJztcclxuaW1wb3J0IFRleHRGaWVsZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UZXh0RmllbGQnO1xyXG5pbXBvcnQgRm9ybUNvbnRyb2xMYWJlbCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Gb3JtQ29udHJvbExhYmVsJztcclxuaW1wb3J0IENoZWNrYm94IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NoZWNrYm94JztcclxuaW1wb3J0IExpbmsgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGluayc7XHJcbmltcG9ydCBHcmlkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0dyaWQnO1xyXG5pbXBvcnQgQm94IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0JveCc7XHJcbmltcG9ydCBMb2NrT3V0bGluZWRJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9Mb2NrT3V0bGluZWQnO1xyXG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5JztcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCBDb250YWluZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ29udGFpbmVyJztcclxuXHJcblxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBDYWRhc3RybygpIHtcclxuXHJcbiAgICBcclxuZnVuY3Rpb24gQ29weXJpZ2h0KCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkyXCIgY29sb3I9XCJ0ZXh0U2Vjb25kYXJ5XCIgYWxpZ249XCJjZW50ZXJcIj5cclxuICAgICAgICB7J0NvcHlyaWdodCDCqSAnfVxyXG4gICAgICAgIDxMaW5rIGNvbG9yPVwiaW5oZXJpdFwiIGhyZWY9XCJodHRwczovL21hdGVyaWFsLXVpLmNvbS9cIj5cclxuICAgICAgICAgIFlvdXIgV2Vic2l0ZVxyXG4gICAgICAgIDwvTGluaz57JyAnfVxyXG4gICAgICAgIHtuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCl9XHJcbiAgICAgICAgeycuJ31cclxuICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gICAgY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgICAgICAgcGFwZXI6IHtcclxuICAgICAgICAgIG1hcmdpblRvcDogdGhlbWUuc3BhY2luZyg4KSxcclxuICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxyXG4gICAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBhdmF0YXI6IHtcclxuICAgICAgICAgIG1hcmdpbjogdGhlbWUuc3BhY2luZygxKSxcclxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5zZWNvbmRhcnkubWFpbixcclxuICAgICAgICB9LFxyXG4gICAgICAgIGZvcm06IHtcclxuICAgICAgICAgIHdpZHRoOiAnMTAwJScsIC8vIEZpeCBJRSAxMSBpc3N1ZS5cclxuICAgICAgICAgIG1hcmdpblRvcDogdGhlbWUuc3BhY2luZygzKSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHN1Ym1pdDoge1xyXG4gICAgICAgICAgbWFyZ2luOiB0aGVtZS5zcGFjaW5nKDMsIDAsIDIpLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pKTtcclxuXHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgY29uc3QgW2VtYWlsLCBzZXRFbWFpbF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuY29uc3QgW3Bhc3N3b3JkLCBzZXRQYXNzd29yZF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuY29uc3QgW2ZpcnN0TmFtZSwgc2V0Rmlyc3ROYW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5jb25zdCBbbGFzdE5hbWUsIHNldExhc3ROYW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5cclxuXHJcbmNvbnN0IG9uQ2hhbmdlSGFuZGxlciA9IGV2ZW50ID0+IHtcclxuICAgIGNvbnN0IHsgbmFtZSwgdmFsdWUgfSA9IGV2ZW50LmN1cnJlbnRUYXJnZXQ7XHJcbiAgICBpZiAobmFtZSA9PT0gXCJlbWFpbFwiKSB7XHJcbiAgICAgIHNldEVtYWlsKHZhbHVlKTtcclxuICAgIH0gZWxzZSBpZiAobmFtZSA9PT0gXCJwYXNzd29yZFwiKSB7XHJcbiAgICAgIHNldFBhc3N3b3JkKHZhbHVlKTtcclxuICAgIH0gZWxzZSBpZiAobmFtZSA9PT0gXCJmaXJzdE5hbWVcIikge1xyXG4gICAgICBzZXRGaXJzdE5hbWUodmFsdWUpO1xyXG4gICAgXHJcbiAgICB9IGVsc2UgaWYgKG5hbWUgPT09IFwibGFzdE5hbWVcIikge1xyXG4gICAgICBzZXRMYXN0TmFtZSh2YWx1ZSk7XHJcbiAgICB9IFxyXG4gIH07XHJcbiAgY29uc3QgaGFuZGxlclN1Ym1pdCA9IGFzeW5jKGV2ZW50KSA9PntcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgZmlyZS5hdXRoKCkuY3JlYXRlVXNlcldpdGhFbWFpbEFuZFBhc3N3b3JkKGVtYWlsLCBwYXNzd29yZClcclxuICAgIC50aGVuKCh1c2VyKSA9PiB7XHJcbiAgICAgICAgdmFyIHVzZXIyID0gZmlyZS5hdXRoKCkuY3VycmVudFVzZXI7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdoZXJlJylcclxuICAgICAgICB1c2VyMi51cGRhdGVQcm9maWxlKHtcclxuICAgICAgICAgICAgZGlzcGxheU5hbWU6IGZpcnN0TmFtZSArIFwiIFwiK2xhc3ROYW1lXHJcbiAgICAgICAgICB9KS50aGVuKGFzeW5jKGUpID0+e1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnaGVyZTInKVxyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFwiLi4vYXBpL3Nlc3Npb25zXCIsIHtcclxuICAgICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgICAgIGhlYWRlcnM6IHsgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIgfSxcclxuICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IGVtYWlsLCBwYXNzd29yZCB9KVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG4gICAgICAgICAgICBpZiAocmVzcG9uc2Uub2spIHtcclxuICAgICAgICAgICAgICByZXR1cm4gcm91dGVyLnB1c2goXCIvQ29udHJvbGVcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICAgICAgfSk7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yLm1lc3NhZ2UpO1xyXG4gICAgICB2YXIgZXJyb3JDb2RlID0gZXJyb3IuY29kZTtcclxuICAgICAgdmFyIGVycm9yTWVzc2FnZSA9IGVycm9yLm1lc3NhZ2U7XHJcbiAgICAgIC8vIC4uXHJcbiAgICB9KTtcclxuXHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPENvbnRhaW5lciBjb21wb25lbnQ9XCJtYWluXCIgbWF4V2lkdGg9XCJ4c1wiPlxyXG4gICAgICA8Q3NzQmFzZWxpbmUgLz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucGFwZXJ9PlxyXG4gICAgICAgIDxBdmF0YXIgY2xhc3NOYW1lPXtjbGFzc2VzLmF2YXRhcn0+XHJcbiAgICAgICAgICA8TG9ja091dGxpbmVkSWNvbiAvPlxyXG4gICAgICAgIDwvQXZhdGFyPlxyXG4gICAgICAgIDxUeXBvZ3JhcGh5IGNvbXBvbmVudD1cImgxXCIgdmFyaWFudD1cImg1XCI+XHJcbiAgICAgICAgICBDYWRhc3RyYXJcclxuICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2V2ZW50ID0+IGhhbmRsZXJTdWJtaXQoZXZlbnQpfSBjbGFzc05hbWU9e2NsYXNzZXMuZm9ybX0gbm9WYWxpZGF0ZT5cclxuICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXsyfT5cclxuICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHNtPXs2fT5cclxuICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJmbmFtZVwiXHJcbiAgICAgICAgICAgICAgICBuYW1lPVwiZmlyc3ROYW1lXCJcclxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgZnVsbFdpZHRoXHJcbiAgICAgICAgICAgICAgICBpZD1cImZpcnN0TmFtZVwiXHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIkZpcnN0IE5hbWVcIlxyXG4gICAgICAgICAgICAgICAgYXV0b0ZvY3VzXHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZXZlbnQgPT4gb25DaGFuZ2VIYW5kbGVyKGV2ZW50KX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17Nn0+XHJcbiAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICBmdWxsV2lkdGhcclxuICAgICAgICAgICAgICAgIGlkPVwibGFzdE5hbWVcIlxyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJMYXN0IE5hbWVcIlxyXG4gICAgICAgICAgICAgICAgbmFtZT1cImxhc3ROYW1lXCJcclxuICAgICAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cImxuYW1lXCJcclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtldmVudCA9PiBvbkNoYW5nZUhhbmRsZXIoZXZlbnQpfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgZnVsbFdpZHRoXHJcbiAgICAgICAgICAgICAgICBpZD1cImVtYWlsXCJcclxuICAgICAgICAgICAgICAgIGxhYmVsPVwiRW1haWwgQWRkcmVzc1wiXHJcbiAgICAgICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2V2ZW50ID0+IG9uQ2hhbmdlSGFuZGxlcihldmVudCl9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICBmdWxsV2lkdGhcclxuICAgICAgICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIlBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICBpZD1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cImN1cnJlbnQtcGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2V2ZW50ID0+IG9uQ2hhbmdlSGFuZGxlcihldmVudCl9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgPEZvcm1Db250cm9sTGFiZWxcclxuICAgICAgICAgICAgICAgIGNvbnRyb2w9ezxDaGVja2JveCB2YWx1ZT1cImFsbG93RXh0cmFFbWFpbHNcIiBjb2xvcj1cInByaW1hcnlcIiAvPn1cclxuICAgICAgICAgICAgICAgIGxhYmVsPVwiSSB3YW50IHRvIHJlY2VpdmUgaW5zcGlyYXRpb24sIG1hcmtldGluZyBwcm9tb3Rpb25zIGFuZCB1cGRhdGVzIHZpYSBlbWFpbC5cIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgIGZ1bGxXaWR0aFxyXG4gICAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcclxuICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnN1Ym1pdH1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICBDYWRhc3RyYXJcclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgPEdyaWQgY29udGFpbmVyIGp1c3RpZnk9XCJmbGV4LWVuZFwiPlxyXG4gICAgICAgICAgICA8R3JpZCBpdGVtPlxyXG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIjXCIgdmFyaWFudD1cImJvZHkyXCI+XHJcbiAgICAgICAgICAgICAgICBKYSB0ZW0gY29udGE/IEZhw6dhIExvZ2luXHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPEJveCBtdD17NX0+XHJcbiAgICAgICAgPENvcHlyaWdodCAvPlxyXG4gICAgICA8L0JveD5cclxuICAgIDwvQ29udGFpbmVyPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhZGFzdHJvIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvQXZhdGFyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0JveFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvQ2hlY2tib3hcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvQ29udGFpbmVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0Nzc0Jhc2VsaW5lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0Zvcm1Db250cm9sTGFiZWxcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvR3JpZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9MaW5rXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL1RleHRGaWVsZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvTG9ja091dGxpbmVkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZpcmViYXNlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyJdLCJzb3VyY2VSb290IjoiIn0=