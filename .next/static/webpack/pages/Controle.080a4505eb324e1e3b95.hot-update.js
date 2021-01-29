webpackHotUpdate_N_E("pages/Controle",{

/***/ "./pages/Controle/index.js":
/*!*********************************!*\
  !*** ./pages/Controle/index.js ***!
  \*********************************/
/*! exports provided: __N_SSP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSP", function() { return __N_SSP; });
/* harmony import */ var C_Users_Usuario_Documents_nslive_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var C_Users_Usuario_Documents_nslive_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var C_Users_Usuario_Documents_nslive_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var C_Users_Usuario_Documents_nslive_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var C_Users_Usuario_Documents_nslive_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_icons_Facebook__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/Facebook */ "./node_modules/@material-ui/icons/Facebook.js");
/* harmony import */ var _material_ui_icons_Facebook__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Facebook__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_icons_YouTube__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/YouTube */ "./node_modules/@material-ui/icons/YouTube.js");
/* harmony import */ var _material_ui_icons_YouTube__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_YouTube__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/icons/Menu */ "./node_modules/@material-ui/icons/Menu.js");
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _config_fire_config__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../config/fire-config */ "./config/fire-config.js");






var _this = undefined,
    _jsxFileName = "C:\\Users\\Usuario\\Documents\\nslive\\pages\\Controle\\index.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(C_Users_Usuario_Documents_nslive_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(C_Users_Usuario_Documents_nslive_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(C_Users_Usuario_Documents_nslive_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }









var PrivatePage = function PrivatePage(_ref) {
  _s();

  var user = _ref.user;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])([]),
      blogs = _useState[0],
      setBlogs = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(""),
      urlAtual = _useState2[0],
      setUrlAtual = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(""),
      canal = _useState3[0],
      setCanal = _useState3[1];

  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
    _config_fire_config__WEBPACK_IMPORTED_MODULE_11__["default"].database().ref('infoAtual').once("value").then(function (snap) {
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

  var InfosAtuais = /*#__PURE__*/function (_Component) {
    Object(C_Users_Usuario_Documents_nslive_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(InfosAtuais, _Component);

    var _super = _createSuper(InfosAtuais);

    function InfosAtuais() {
      Object(C_Users_Usuario_Documents_nslive_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, InfosAtuais);

      return _super.apply(this, arguments);
    }

    Object(C_Users_Usuario_Documents_nslive_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(InfosAtuais, [{
      key: "render",
      value: function render() {
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
          }, urlAtual), __jsx(_material_ui_icons_YouTube__WEBPACK_IMPORTED_MODULE_9___default.a, {
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
    }]);

    return InfosAtuais;
  }(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

  var useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["makeStyles"])(function (theme) {
    return {
      root: {
        flexGrow: 1
      },
      menuButton: {
        marginRight: theme.spacing(2)
      },
      title: {
        flexGrow: 1
      }
    };
  });
  var classes = useStyles();
  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 3
    }
  }, __jsx("link", {
    href: "https://fonts.googleapis.com/icon?family=Material+Icons",
    rel: "stylesheet",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 6
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["AppBar"], {
    position: "static",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Toolbar"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 3
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["IconButton"], {
    edge: "start",
    className: classes.menuButton,
    color: "inherit",
    "aria-label": "menu",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 5
    }
  }, __jsx(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_10___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 7
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Typography"], {
    variant: "h6",
    className: classes.title,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 5
    }
  }, "News"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Button"], {
    color: "inherit",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 5
    }
  }, "Login"))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Icon"], {
    color: "primary",
    style: {
      fontSize: "10rem"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 5
    }
  }, "facebook"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Icon"], {
    color: "secondary",
    style: {
      fontSize: "10rem",
      height: "55%"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 5
    }
  }, "ondemand_video"), __jsx(InfosAtuais, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 5
    }
  }));
};

_s(PrivatePage, "hxcSbrvcPbeJ0q/ueUn7XYLXxaQ=", true);

_c = PrivatePage;
var __N_SSP = true;
/* harmony default export */ __webpack_exports__["default"] = (PrivatePage);

var _c;

$RefreshReg$(_c, "PrivatePage");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvQ29udHJvbGUvaW5kZXguanMiXSwibmFtZXMiOlsiUHJpdmF0ZVBhZ2UiLCJ1c2VyIiwidXNlU3RhdGUiLCJibG9ncyIsInNldEJsb2dzIiwidXJsQXR1YWwiLCJzZXRVcmxBdHVhbCIsImNhbmFsIiwic2V0Q2FuYWwiLCJ1c2VFZmZlY3QiLCJmaXJlIiwiZGF0YWJhc2UiLCJyZWYiLCJvbmNlIiwidGhlbiIsInNuYXAiLCJjb25zb2xlIiwibG9nIiwicmVzIiwidmFsIiwidXJsIiwiSW5mb3NBdHVhaXMiLCJDb21wb25lbnQiLCJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJyb290IiwiZmxleEdyb3ciLCJtZW51QnV0dG9uIiwibWFyZ2luUmlnaHQiLCJzcGFjaW5nIiwidGl0bGUiLCJjbGFzc2VzIiwiZm9udFNpemUiLCJoZWlnaHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBOztBQUVBLElBQU1BLFdBQVcsR0FBRyxTQUFkQSxXQUFjLE9BQWM7QUFBQTs7QUFBQSxNQUFYQyxJQUFXLFFBQVhBLElBQVc7O0FBQUEsa0JBQ05DLHNEQUFRLENBQUMsRUFBRCxDQURGO0FBQUEsTUFDekJDLEtBRHlCO0FBQUEsTUFDbEJDLFFBRGtCOztBQUFBLG1CQUVBRixzREFBUSxDQUFDLEVBQUQsQ0FGUjtBQUFBLE1BRXpCRyxRQUZ5QjtBQUFBLE1BRWZDLFdBRmU7O0FBQUEsbUJBR05KLHNEQUFRLENBQUMsRUFBRCxDQUhGO0FBQUEsTUFHekJLLEtBSHlCO0FBQUEsTUFHbEJDLFFBSGtCOztBQUtsQ0MseURBQVMsQ0FBQyxZQUFNO0FBQ1pDLGdFQUFJLENBQUNDLFFBQUwsR0FDR0MsR0FESCxDQUNPLFdBRFAsRUFFR0MsSUFGSCxDQUVRLE9BRlIsRUFFaUJDLElBRmpCLENBRXNCLFVBQUND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QUFBTSxTQUFLLEVBQUMsV0FBWjtBQUF3QixTQUFLLEVBQUU7QUFBQ0EsY0FBUSxFQUFDLE9BQVY7QUFBa0JDLFlBQU0sRUFBQztBQUF6QixLQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQWpCRixFQWtCRSxNQUFDLFdBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWxCRixDQURFO0FBcUJILENBdkZEOztHQUFNbEMsVzs7S0FBQUEsVzs7QUFvSFNBLDBFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL0NvbnRyb2xlLjA4MGE0NTA1ZWIzMjRlMWUzYjk1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIENvbXBvbmVudCwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB3aXRoSXJvblNlc3Npb24gfSBmcm9tIFwibmV4dC1pcm9uLXNlc3Npb25cIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQge0F2YXRhciwgbWFrZVN0eWxlcywgXHJcbiAgICBBcHBCYXIsVG9vbGJhcixJY29uQnV0dG9uLEljb24sIEJ1dHRvbiwgQ3NzQmFzZWxpbmUsIFRleHRGaWVsZCwgRm9ybUNvbnRyb2xMYWJlbCwgQ2hlY2tib3gsTGluayAsR3JpZCxCb3gsIFR5cG9ncmFwaHl9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuaW1wb3J0IEZhY2Vib29rSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvRmFjZWJvb2snO1xyXG5pbXBvcnQgWW91VHViZUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL1lvdVR1YmUnO1xyXG5pbXBvcnQgTWVudUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL01lbnUnO1xyXG5cclxuaW1wb3J0IGZpcmUgZnJvbSAnLi4vLi4vY29uZmlnL2ZpcmUtY29uZmlnJztcclxuXHJcbmNvbnN0IFByaXZhdGVQYWdlID0gKHsgdXNlciB9KSA9PiB7XHJcbiAgY29uc3QgW2Jsb2dzLCBzZXRCbG9nc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW3VybEF0dWFsLCBzZXRVcmxBdHVhbF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbY2FuYWwsIHNldENhbmFsXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5cclxudXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGZpcmUuZGF0YWJhc2UoKVxyXG4gICAgICAucmVmKCdpbmZvQXR1YWwnKVxyXG4gICAgICAub25jZShcInZhbHVlXCIpLnRoZW4oKHNuYXApID0+IHtcclxuICAgICAgICBcclxuICAgICAgICAvKmNvbnN0IGJsb2dzID0gc25hcC5kb2NzLm1hcChkb2MgPT4gKHtcclxuICAgICAgICAgIGlkOiBkb2MuaWQsXHJcbiAgICAgICAgICAuLi5kb2MuZGF0YSgpXHJcbiAgICAgICAgfSkpOyovXHJcbiAgICAgICAgY29uc29sZS5sb2coJ2hlcmUnKTtcclxuICAgICAgICB2YXIgcmVzID0gKHNuYXAudmFsKCkpXHJcbiAgICAgICAgc2V0Q2FuYWwocmVzLmNhbmFsKTtcclxuICAgICAgICBzZXRVcmxBdHVhbChyZXMudXJsKTtcclxuICAgICAgXHJcbiAgICAgICAvLyBzZXRCbG9ncyhibG9ncyk7XHJcbiAgICAgIH0pO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY2xhc3MgSW5mb3NBdHVhaXMgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgcmVuZGVyKCl7XHJcbiAgICAgIGlmKGNhbmFsID09IFwieW91dHViZVwiKXtcclxuICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAgICAgPGg0Pnt1cmxBdHVhbH08L2g0PlxyXG4gICAgICAgICAgICAgICA8WW91VHViZUljb24vPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICBcclxuICAgIFxyXG4gICAgICAgIClcclxuXHJcbiAgICAgIH1lbHNle1xyXG4gICAgICAgIHJldHVybihcclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICBcclxuICAgICAgICAgICAgICA8aDQ+e3VybEF0dWFsfTwvaDQ+XHJcbiAgICAgICAgICAgICAgIDxoND57Y2FuYWx9PC9oND5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgXHJcbiAgICBcclxuICAgICAgICApXHJcblxyXG4gICAgICB9XHJcbiAgIH1cclxuXHJcbiAgfVxyXG4gIFxyXG4gIGNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG4gICAgcm9vdDoge1xyXG4gICAgICBmbGV4R3JvdzogMSxcclxuICAgIH0sXHJcbiAgICBtZW51QnV0dG9uOiB7XHJcbiAgICAgIG1hcmdpblJpZ2h0OiB0aGVtZS5zcGFjaW5nKDIpLFxyXG4gICAgfSxcclxuICAgIHRpdGxlOiB7XHJcbiAgICAgIGZsZXhHcm93OiAxLFxyXG4gICAgfSxcclxuICB9KSk7XHJcblxyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuXHJcbiAgICByZXR1cm4oXHJcbiAgPGRpdj5cclxuICAgICA8bGluayBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9pY29uP2ZhbWlseT1NYXRlcmlhbCtJY29uc1wiXHJcbiAgICAgIHJlbD1cInN0eWxlc2hlZXRcIj48L2xpbms+XHJcblxyXG5cclxuICAgIDxBcHBCYXIgcG9zaXRpb249XCJzdGF0aWNcIj5cclxuICA8VG9vbGJhcj5cclxuICAgIDxJY29uQnV0dG9uIGVkZ2U9XCJzdGFydFwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5tZW51QnV0dG9ufSBjb2xvcj1cImluaGVyaXRcIiBhcmlhLWxhYmVsPVwibWVudVwiPlxyXG4gICAgICA8TWVudUljb24gLz5cclxuICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiIGNsYXNzTmFtZT17Y2xhc3Nlcy50aXRsZX0+XHJcbiAgICAgIE5ld3NcclxuICAgIDwvVHlwb2dyYXBoeT5cclxuICAgIDxCdXR0b24gY29sb3I9XCJpbmhlcml0XCI+TG9naW48L0J1dHRvbj5cclxuICA8L1Rvb2xiYXI+XHJcbjwvQXBwQmFyPlxyXG4gICAgPEljb24gY29sb3I9XCJwcmltYXJ5XCIgc3R5bGU9e3tmb250U2l6ZTpcIjEwcmVtXCJ9fT5mYWNlYm9vazwvSWNvbj5cclxuICAgIDxJY29uIGNvbG9yPVwic2Vjb25kYXJ5XCIgc3R5bGU9e3tmb250U2l6ZTpcIjEwcmVtXCIsaGVpZ2h0OlwiNTUlXCJ9fT5vbmRlbWFuZF92aWRlbzwvSWNvbj5cclxuICAgIDxJbmZvc0F0dWFpcy8+XHJcbiAgPC9kaXY+KTtcclxufTtcclxuXHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wcyA9IHdpdGhJcm9uU2Vzc2lvbihcclxuXHJcbiAgXHJcbiAgYXN5bmMgKHsgcmVxLCByZXMgfSkgPT4ge1xyXG4gICAgY29uc3QgdXNlciA9IHJlcS5zZXNzaW9uLmdldChcInVzZXJcIik7XHJcbiAgICBpZiAoIXVzZXIpIHtcclxuICAgICAgcmVzLnNldEhlYWRlcihcImxvY2F0aW9uXCIsIFwiL0NvbnRyb2xlL2xvZ2luXCIpO1xyXG4gICAgICByZXMuc3RhdHVzQ29kZSA9IDMwMjtcclxuICAgICAgcmVzLmVuZCgpO1xyXG4gICAgICByZXR1cm4geyBwcm9wczoge30gfTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBwcm9wczogeyB1c2VyIH1cclxuICAgIH07XHJcbiAgfSxcclxuICB7XHJcbiAgICBjb29raWVOYW1lOiBcIk1ZU0lURUNPT0tJRVwiLFxyXG4gICAgY29va2llT3B0aW9uczoge1xyXG4gICAgICBzZWN1cmU6IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIiA/IHRydWUgOiBmYWxzZVxyXG4gICAgfSxcclxuICAgIHBhc3N3b3JkOiBwcm9jZXNzLmVudi5BUFBMSUNBVElPTl9TRUNSRVRcclxuICB9XHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcml2YXRlUGFnZTsiXSwic291cmNlUm9vdCI6IiJ9