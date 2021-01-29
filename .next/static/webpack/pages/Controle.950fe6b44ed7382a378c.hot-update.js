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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_icons_Facebook__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons/Facebook */ "./node_modules/@material-ui/icons/Facebook.js");
/* harmony import */ var _material_ui_icons_Facebook__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Facebook__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_icons_YouTube__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/YouTube */ "./node_modules/@material-ui/icons/YouTube.js");
/* harmony import */ var _material_ui_icons_YouTube__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_YouTube__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/Menu */ "./node_modules/@material-ui/icons/Menu.js");
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _config_fire_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../config/fire-config */ "./config/fire-config.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\Usuario\\Documents\\nslive\\pages\\Controle\\index.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








var PrivatePage = function PrivatePage(_ref) {
  _s();

  var user = _ref.user;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      blogs = _useState[0],
      setBlogs = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""),
      corIcons = _useState2[0],
      setCorIcons = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    _config_fire_config__WEBPACK_IMPORTED_MODULE_6__["default"].database().ref('infoAtual').once("value").then(function (snap) {
      /*const blogs = snap.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));*/
      console.log('here');
      console.log(snap.val()); // setBlogs(blogs);
    });
  }, []);
  var useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(function (theme) {
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
      lineNumber: 47,
      columnNumber: 3
    }
  }, __jsx("link", {
    href: "https://fonts.googleapis.com/icon?family=Material+Icons",
    rel: "stylesheet",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 6
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["AppBar"], {
    position: "static",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Toolbar"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 3
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["IconButton"], {
    edge: "start",
    className: classes.menuButton,
    color: "inherit",
    "aria-label": "menu",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 5
    }
  }, __jsx(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_5___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 7
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    variant: "h6",
    className: classes.title,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 5
    }
  }, "News"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    color: "inherit",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 5
    }
  }, "Login"))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
    color: "primary",
    style: {
      fontSize: "10rem"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 5
    }
  }, "facebook"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
    color: "secondary",
    style: {
      fontSize: "10rem",
      height: "55%"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 5
    }
  }, "ondemand_video"));
};

_s(PrivatePage, "WYpb8KEWx8Q5anyKm6sd2B6YBuc=", true);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvQ29udHJvbGUvaW5kZXguanMiXSwibmFtZXMiOlsiUHJpdmF0ZVBhZ2UiLCJ1c2VyIiwidXNlU3RhdGUiLCJibG9ncyIsInNldEJsb2dzIiwiY29ySWNvbnMiLCJzZXRDb3JJY29ucyIsInVzZUVmZmVjdCIsImZpcmUiLCJkYXRhYmFzZSIsInJlZiIsIm9uY2UiLCJ0aGVuIiwic25hcCIsImNvbnNvbGUiLCJsb2ciLCJ2YWwiLCJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJyb290IiwiZmxleEdyb3ciLCJtZW51QnV0dG9uIiwibWFyZ2luUmlnaHQiLCJzcGFjaW5nIiwidGl0bGUiLCJjbGFzc2VzIiwiZm9udFNpemUiLCJoZWlnaHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7O0FBRUEsSUFBTUEsV0FBVyxHQUFHLFNBQWRBLFdBQWMsT0FBYztBQUFBOztBQUFBLE1BQVhDLElBQVcsUUFBWEEsSUFBVzs7QUFBQSxrQkFDTkMsc0RBQVEsQ0FBQyxFQUFELENBREY7QUFBQSxNQUN6QkMsS0FEeUI7QUFBQSxNQUNsQkMsUUFEa0I7O0FBQUEsbUJBRUFGLHNEQUFRLENBQUMsRUFBRCxDQUZSO0FBQUEsTUFFekJHLFFBRnlCO0FBQUEsTUFFZkMsV0FGZTs7QUFJbENDLHlEQUFTLENBQUMsWUFBTTtBQUNaQywrREFBSSxDQUFDQyxRQUFMLEdBQ0dDLEdBREgsQ0FDTyxXQURQLEVBRUdDLElBRkgsQ0FFUSxPQUZSLEVBRWlCQyxJQUZqQixDQUVzQixVQUFDQyxJQUFELEVBQVU7QUFFNUI7QUFDUjtBQUNBO0FBQ0E7QUFDUUMsYUFBTyxDQUFDQyxHQUFSLENBQVksTUFBWjtBQUNBRCxhQUFPLENBQUNDLEdBQVIsQ0FBWUYsSUFBSSxDQUFDRyxHQUFMLEVBQVosRUFQNEIsQ0FRN0I7QUFDQSxLQVhIO0FBWUQsR0FiTSxFQWFKLEVBYkksQ0FBVDtBQWdCRSxNQUFNQyxTQUFTLEdBQUdDLG9FQUFVLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFdBQVk7QUFDdkNDLFVBQUksRUFBRTtBQUNKQyxnQkFBUSxFQUFFO0FBRE4sT0FEaUM7QUFJdkNDLGdCQUFVLEVBQUU7QUFDVkMsbUJBQVcsRUFBRUosS0FBSyxDQUFDSyxPQUFOLENBQWMsQ0FBZDtBQURILE9BSjJCO0FBT3ZDQyxXQUFLLEVBQUU7QUFDTEosZ0JBQVEsRUFBRTtBQURMO0FBUGdDLEtBQVo7QUFBQSxHQUFELENBQTVCO0FBWUEsTUFBTUssT0FBTyxHQUFHVCxTQUFTLEVBQXpCO0FBRUUsU0FDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0c7QUFBTSxRQUFJLEVBQUMseURBQVg7QUFDQyxPQUFHLEVBQUMsWUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREgsRUFLRSxNQUFDLHdEQUFEO0FBQVEsWUFBUSxFQUFDLFFBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRixNQUFDLHlEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDREQUFEO0FBQVksUUFBSSxFQUFDLE9BQWpCO0FBQXlCLGFBQVMsRUFBRVMsT0FBTyxDQUFDSixVQUE1QztBQUF3RCxTQUFLLEVBQUMsU0FBOUQ7QUFBd0Usa0JBQVcsTUFBbkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsOERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBREYsRUFJRSxNQUFDLDREQUFEO0FBQVksV0FBTyxFQUFDLElBQXBCO0FBQXlCLGFBQVMsRUFBRUksT0FBTyxDQUFDRCxLQUE1QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSkYsRUFPRSxNQUFDLHdEQUFEO0FBQVEsU0FBSyxFQUFDLFNBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVBGLENBREUsQ0FMRixFQWdCRSxNQUFDLHNEQUFEO0FBQU0sU0FBSyxFQUFDLFNBQVo7QUFBc0IsU0FBSyxFQUFFO0FBQUNFLGNBQVEsRUFBQztBQUFWLEtBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBaEJGLEVBaUJFLE1BQUMsc0RBQUQ7QUFBTSxTQUFLLEVBQUMsV0FBWjtBQUF3QixTQUFLLEVBQUU7QUFBQ0EsY0FBUSxFQUFDLE9BQVY7QUFBa0JDLFlBQU0sRUFBQztBQUF6QixLQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQWpCRixDQURFO0FBb0JILENBdEREOztHQUFNNUIsVzs7S0FBQUEsVzs7QUFtRlNBLDBFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL0NvbnRyb2xlLjk1MGZlNmI0NGVkNzM4MmEzNzhjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIENvbXBvbmVudCwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB3aXRoSXJvblNlc3Npb24gfSBmcm9tIFwibmV4dC1pcm9uLXNlc3Npb25cIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQge0F2YXRhciwgbWFrZVN0eWxlcywgXHJcbiAgICBBcHBCYXIsVG9vbGJhcixJY29uQnV0dG9uLEljb24sIEJ1dHRvbiwgQ3NzQmFzZWxpbmUsIFRleHRGaWVsZCwgRm9ybUNvbnRyb2xMYWJlbCwgQ2hlY2tib3gsTGluayAsR3JpZCxCb3gsIFR5cG9ncmFwaHl9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuaW1wb3J0IEZhY2Vib29rSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvRmFjZWJvb2snO1xyXG5pbXBvcnQgWW91VHViZUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL1lvdVR1YmUnO1xyXG5pbXBvcnQgTWVudUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL01lbnUnO1xyXG5cclxuaW1wb3J0IGZpcmUgZnJvbSAnLi4vLi4vY29uZmlnL2ZpcmUtY29uZmlnJztcclxuXHJcbmNvbnN0IFByaXZhdGVQYWdlID0gKHsgdXNlciB9KSA9PiB7XHJcbiAgY29uc3QgW2Jsb2dzLCBzZXRCbG9nc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW2Nvckljb25zLCBzZXRDb3JJY29uc10gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHJcbnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBmaXJlLmRhdGFiYXNlKClcclxuICAgICAgLnJlZignaW5mb0F0dWFsJylcclxuICAgICAgLm9uY2UoXCJ2YWx1ZVwiKS50aGVuKChzbmFwKSA9PiB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLypjb25zdCBibG9ncyA9IHNuYXAuZG9jcy5tYXAoZG9jID0+ICh7XHJcbiAgICAgICAgICBpZDogZG9jLmlkLFxyXG4gICAgICAgICAgLi4uZG9jLmRhdGEoKVxyXG4gICAgICAgIH0pKTsqL1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdoZXJlJyk7XHJcbiAgICAgICAgY29uc29sZS5sb2coc25hcC52YWwoKSlcclxuICAgICAgIC8vIHNldEJsb2dzKGJsb2dzKTtcclxuICAgICAgfSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBcclxuICBjb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICAgIHJvb3Q6IHtcclxuICAgICAgZmxleEdyb3c6IDEsXHJcbiAgICB9LFxyXG4gICAgbWVudUJ1dHRvbjoge1xyXG4gICAgICBtYXJnaW5SaWdodDogdGhlbWUuc3BhY2luZygyKSxcclxuICAgIH0sXHJcbiAgICB0aXRsZToge1xyXG4gICAgICBmbGV4R3JvdzogMSxcclxuICAgIH0sXHJcbiAgfSkpO1xyXG5cclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcblxyXG4gICAgcmV0dXJuKFxyXG4gIDxkaXY+XHJcbiAgICAgPGxpbmsgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vaWNvbj9mYW1pbHk9TWF0ZXJpYWwrSWNvbnNcIlxyXG4gICAgICByZWw9XCJzdHlsZXNoZWV0XCI+PC9saW5rPlxyXG5cclxuXHJcbiAgICA8QXBwQmFyIHBvc2l0aW9uPVwic3RhdGljXCI+XHJcbiAgPFRvb2xiYXI+XHJcbiAgICA8SWNvbkJ1dHRvbiBlZGdlPVwic3RhcnRcIiBjbGFzc05hbWU9e2NsYXNzZXMubWVudUJ1dHRvbn0gY29sb3I9XCJpbmhlcml0XCIgYXJpYS1sYWJlbD1cIm1lbnVcIj5cclxuICAgICAgPE1lbnVJY29uIC8+XHJcbiAgICA8L0ljb25CdXR0b24+XHJcbiAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIiBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGV9PlxyXG4gICAgICBOZXdzXHJcbiAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICA8QnV0dG9uIGNvbG9yPVwiaW5oZXJpdFwiPkxvZ2luPC9CdXR0b24+XHJcbiAgPC9Ub29sYmFyPlxyXG48L0FwcEJhcj5cclxuICAgIDxJY29uIGNvbG9yPVwicHJpbWFyeVwiIHN0eWxlPXt7Zm9udFNpemU6XCIxMHJlbVwifX0+ZmFjZWJvb2s8L0ljb24+XHJcbiAgICA8SWNvbiBjb2xvcj1cInNlY29uZGFyeVwiIHN0eWxlPXt7Zm9udFNpemU6XCIxMHJlbVwiLGhlaWdodDpcIjU1JVwifX0+b25kZW1hbmRfdmlkZW88L0ljb24+XHJcbiAgPC9kaXY+KTtcclxufTtcclxuXHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wcyA9IHdpdGhJcm9uU2Vzc2lvbihcclxuXHJcbiAgXHJcbiAgYXN5bmMgKHsgcmVxLCByZXMgfSkgPT4ge1xyXG4gICAgY29uc3QgdXNlciA9IHJlcS5zZXNzaW9uLmdldChcInVzZXJcIik7XHJcbiAgICBpZiAoIXVzZXIpIHtcclxuICAgICAgcmVzLnNldEhlYWRlcihcImxvY2F0aW9uXCIsIFwiL0NvbnRyb2xlL2xvZ2luXCIpO1xyXG4gICAgICByZXMuc3RhdHVzQ29kZSA9IDMwMjtcclxuICAgICAgcmVzLmVuZCgpO1xyXG4gICAgICByZXR1cm4geyBwcm9wczoge30gfTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBwcm9wczogeyB1c2VyIH1cclxuICAgIH07XHJcbiAgfSxcclxuICB7XHJcbiAgICBjb29raWVOYW1lOiBcIk1ZU0lURUNPT0tJRVwiLFxyXG4gICAgY29va2llT3B0aW9uczoge1xyXG4gICAgICBzZWN1cmU6IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIiA/IHRydWUgOiBmYWxzZVxyXG4gICAgfSxcclxuICAgIHBhc3N3b3JkOiBwcm9jZXNzLmVudi5BUFBMSUNBVElPTl9TRUNSRVRcclxuICB9XHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcml2YXRlUGFnZTsiXSwic291cmNlUm9vdCI6IiJ9