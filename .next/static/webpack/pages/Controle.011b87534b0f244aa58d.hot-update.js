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
      setUrlAtual(res.url);
      infosAtuais(); // setBlogs(blogs);
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
        return __jsx("div", {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 38,
            columnNumber: 7
          }
        }, __jsx("h4", {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 39,
            columnNumber: 9
          }
        }, {
          urlAtual: urlAtual
        }));
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
      lineNumber: 62,
      columnNumber: 3
    }
  }, __jsx("link", {
    href: "https://fonts.googleapis.com/icon?family=Material+Icons",
    rel: "stylesheet",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 6
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["AppBar"], {
    position: "static",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Toolbar"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
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
      lineNumber: 69,
      columnNumber: 5
    }
  }, __jsx(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_10___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 7
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Typography"], {
    variant: "h6",
    className: classes.title,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 5
    }
  }, "News"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Button"], {
    color: "inherit",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
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
      lineNumber: 78,
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
      lineNumber: 79,
      columnNumber: 5
    }
  }, "ondemand_video"), __jsx("infosAtuais", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvQ29udHJvbGUvaW5kZXguanMiXSwibmFtZXMiOlsiUHJpdmF0ZVBhZ2UiLCJ1c2VyIiwidXNlU3RhdGUiLCJibG9ncyIsInNldEJsb2dzIiwidXJsQXR1YWwiLCJzZXRVcmxBdHVhbCIsImNhbmFsIiwic2V0Q2FuYWwiLCJ1c2VFZmZlY3QiLCJmaXJlIiwiZGF0YWJhc2UiLCJyZWYiLCJvbmNlIiwidGhlbiIsInNuYXAiLCJjb25zb2xlIiwibG9nIiwicmVzIiwidmFsIiwidXJsIiwiaW5mb3NBdHVhaXMiLCJJbmZvc0F0dWFpcyIsIkNvbXBvbmVudCIsInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsInJvb3QiLCJmbGV4R3JvdyIsIm1lbnVCdXR0b24iLCJtYXJnaW5SaWdodCIsInNwYWNpbmciLCJ0aXRsZSIsImNsYXNzZXMiLCJmb250U2l6ZSIsImhlaWdodCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7O0FBRUEsSUFBTUEsV0FBVyxHQUFHLFNBQWRBLFdBQWMsT0FBYztBQUFBOztBQUFBLE1BQVhDLElBQVcsUUFBWEEsSUFBVzs7QUFBQSxrQkFDTkMsc0RBQVEsQ0FBQyxFQUFELENBREY7QUFBQSxNQUN6QkMsS0FEeUI7QUFBQSxNQUNsQkMsUUFEa0I7O0FBQUEsbUJBRUFGLHNEQUFRLENBQUMsRUFBRCxDQUZSO0FBQUEsTUFFekJHLFFBRnlCO0FBQUEsTUFFZkMsV0FGZTs7QUFBQSxtQkFHTkosc0RBQVEsQ0FBQyxFQUFELENBSEY7QUFBQSxNQUd6QkssS0FIeUI7QUFBQSxNQUdsQkMsUUFIa0I7O0FBS2xDQyx5REFBUyxDQUFDLFlBQU07QUFDWkMsZ0VBQUksQ0FBQ0MsUUFBTCxHQUNHQyxHQURILENBQ08sV0FEUCxFQUVHQyxJQUZILENBRVEsT0FGUixFQUVpQkMsSUFG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ZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9Db250cm9sZS4wMTFiODc1MzRiMGYyNDRhYTU4ZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCBDb21wb25lbnQsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgd2l0aElyb25TZXNzaW9uIH0gZnJvbSBcIm5leHQtaXJvbi1zZXNzaW9uXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHtBdmF0YXIsIG1ha2VTdHlsZXMsIFxyXG4gICAgQXBwQmFyLFRvb2xiYXIsSWNvbkJ1dHRvbixJY29uLCBCdXR0b24sIENzc0Jhc2VsaW5lLCBUZXh0RmllbGQsIEZvcm1Db250cm9sTGFiZWwsIENoZWNrYm94LExpbmsgLEdyaWQsQm94LCBUeXBvZ3JhcGh5fSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcbmltcG9ydCBGYWNlYm9va0ljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0ZhY2Vib29rJztcclxuaW1wb3J0IFlvdVR1YmVJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9Zb3VUdWJlJztcclxuaW1wb3J0IE1lbnVJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9NZW51JztcclxuXHJcbmltcG9ydCBmaXJlIGZyb20gJy4uLy4uL2NvbmZpZy9maXJlLWNvbmZpZyc7XHJcblxyXG5jb25zdCBQcml2YXRlUGFnZSA9ICh7IHVzZXIgfSkgPT4ge1xyXG4gIGNvbnN0IFtibG9ncywgc2V0QmxvZ3NdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFt1cmxBdHVhbCwgc2V0VXJsQXR1YWxdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2NhbmFsLCBzZXRDYW5hbF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHJcbnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBmaXJlLmRhdGFiYXNlKClcclxuICAgICAgLnJlZignaW5mb0F0dWFsJylcclxuICAgICAgLm9uY2UoXCJ2YWx1ZVwiKS50aGVuKChzbmFwKSA9PiB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLypjb25zdCBibG9ncyA9IHNuYXAuZG9jcy5tYXAoZG9jID0+ICh7XHJcbiAgICAgICAgICBpZDogZG9jLmlkLFxyXG4gICAgICAgICAgLi4uZG9jLmRhdGEoKVxyXG4gICAgICAgIH0pKTsqL1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdoZXJlJyk7XHJcbiAgICAgICAgdmFyIHJlcyA9IChzbmFwLnZhbCgpKVxyXG4gICAgICAgIHNldENhbmFsKHJlcy5jYW5hbCk7XHJcbiAgICAgICAgc2V0VXJsQXR1YWwocmVzLnVybCk7XHJcbiAgICAgICAgaW5mb3NBdHVhaXMoKTtcclxuICAgICAgIC8vIHNldEJsb2dzKGJsb2dzKTtcclxuICAgICAgfSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBjbGFzcyBJbmZvc0F0dWFpcyBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICByZW5kZXIoKXtcclxuICAgIHJldHVybihcclxuICAgICAgPGRpdj5cclxuICAgICAgICA8aDQ+e3t1cmxBdHVhbH19PC9oND5cclxuICAgICAgPC9kaXY+XHJcblxyXG5cclxuICAgICl9O1xyXG5cclxuICB9XHJcbiAgXHJcbiAgY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgICByb290OiB7XHJcbiAgICAgIGZsZXhHcm93OiAxLFxyXG4gICAgfSxcclxuICAgIG1lbnVCdXR0b246IHtcclxuICAgICAgbWFyZ2luUmlnaHQ6IHRoZW1lLnNwYWNpbmcoMiksXHJcbiAgICB9LFxyXG4gICAgdGl0bGU6IHtcclxuICAgICAgZmxleEdyb3c6IDEsXHJcbiAgICB9LFxyXG4gIH0pKTtcclxuXHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG5cclxuICAgIHJldHVybihcclxuICA8ZGl2PlxyXG4gICAgIDxsaW5rIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2ljb24/ZmFtaWx5PU1hdGVyaWFsK0ljb25zXCJcclxuICAgICAgcmVsPVwic3R5bGVzaGVldFwiPjwvbGluaz5cclxuXHJcblxyXG4gICAgPEFwcEJhciBwb3NpdGlvbj1cInN0YXRpY1wiPlxyXG4gIDxUb29sYmFyPlxyXG4gICAgPEljb25CdXR0b24gZWRnZT1cInN0YXJ0XCIgY2xhc3NOYW1lPXtjbGFzc2VzLm1lbnVCdXR0b259IGNvbG9yPVwiaW5oZXJpdFwiIGFyaWEtbGFiZWw9XCJtZW51XCI+XHJcbiAgICAgIDxNZW51SWNvbiAvPlxyXG4gICAgPC9JY29uQnV0dG9uPlxyXG4gICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg2XCIgY2xhc3NOYW1lPXtjbGFzc2VzLnRpdGxlfT5cclxuICAgICAgTmV3c1xyXG4gICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgPEJ1dHRvbiBjb2xvcj1cImluaGVyaXRcIj5Mb2dpbjwvQnV0dG9uPlxyXG4gIDwvVG9vbGJhcj5cclxuPC9BcHBCYXI+XHJcbiAgICA8SWNvbiBjb2xvcj1cInByaW1hcnlcIiBzdHlsZT17e2ZvbnRTaXplOlwiMTByZW1cIn19PmZhY2Vib29rPC9JY29uPlxyXG4gICAgPEljb24gY29sb3I9XCJzZWNvbmRhcnlcIiBzdHlsZT17e2ZvbnRTaXplOlwiMTByZW1cIixoZWlnaHQ6XCI1NSVcIn19Pm9uZGVtYW5kX3ZpZGVvPC9JY29uPlxyXG4gICAgPGluZm9zQXR1YWlzLz5cclxuICA8L2Rpdj4pO1xyXG59O1xyXG5cclxuXHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzID0gd2l0aElyb25TZXNzaW9uKFxyXG5cclxuICBcclxuICBhc3luYyAoeyByZXEsIHJlcyB9KSA9PiB7XHJcbiAgICBjb25zdCB1c2VyID0gcmVxLnNlc3Npb24uZ2V0KFwidXNlclwiKTtcclxuICAgIGlmICghdXNlcikge1xyXG4gICAgICByZXMuc2V0SGVhZGVyKFwibG9jYXRpb25cIiwgXCIvQ29udHJvbGUvbG9naW5cIik7XHJcbiAgICAgIHJlcy5zdGF0dXNDb2RlID0gMzAyO1xyXG4gICAgICByZXMuZW5kKCk7XHJcbiAgICAgIHJldHVybiB7IHByb3BzOiB7fSB9O1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIHByb3BzOiB7IHVzZXIgfVxyXG4gICAgfTtcclxuICB9LFxyXG4gIHtcclxuICAgIGNvb2tpZU5hbWU6IFwiTVlTSVRFQ09PS0lFXCIsXHJcbiAgICBjb29raWVPcHRpb25zOiB7XHJcbiAgICAgIHNlY3VyZTogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiID8gdHJ1ZSA6IGZhbHNlXHJcbiAgICB9LFxyXG4gICAgcGFzc3dvcmQ6IHByb2Nlc3MuZW52LkFQUExJQ0FUSU9OX1NFQ1JFVFxyXG4gIH1cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByaXZhdGVQYWdlOyJdLCJzb3VyY2VSb290IjoiIn0=