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
/* harmony import */ var _config_fire_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../config/fire-config */ "./config/fire-config.js");
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
    _config_fire_config__WEBPACK_IMPORTED_MODULE_5__["default"].database().child('infoAtual').onSnapshot(function (snap) {
      /*const blogs = snap.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));*/
      console.log(snap); // setBlogs(blogs);
    });
  }, []);
  var useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(function (theme) {
    return {
      root: {
        transform: 'translateZ(0px)',
        flexGrow: 1
      },
      exampleWrapper: {
        position: 'relative',
        marginTop: theme.spacing(3),
        height: 0
      },
      radioGroup: {
        margin: theme.spacing(1, 0)
      },
      speedDial: {
        position: 'absolute',
        '&.MuiSpeedDial-directionUp, &.MuiSpeedDial-directionLeft': {
          bottom: theme.spacing(2),
          right: theme.spacing(2)
        },
        '&.MuiSpeedDial-directionDown, &.MuiSpeedDial-directionRight': {
          top: theme.spacing(2),
          left: theme.spacing(2)
        }
      }
    };
  });
  var classes = useStyles();

  __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 3
    }
  }, __jsx("link", {
    href: "https://fonts.googleapis.com/icon?family=Material+Icons",
    rel: "stylesheet",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 6
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
    color: "primary",
    style: {
      fontSize: "10rem"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 5
    }
  }, "facebook"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
    color: "primary",
    style: {
      fontSize: "10rem"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 5
    }
  }, "ondemand_video"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["AppBar"], {
    position: "static",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Toolbar"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
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
      lineNumber: 65,
      columnNumber: 5
    }
  }, __jsx(MenuIcon, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 7
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    variant: "h6",
    className: classes.title,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 5
    }
  }, "News"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    color: "inherit",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 5
    }
  }, "Login"))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvQ29udHJvbGUvaW5kZXguanMiXSwibmFtZXMiOlsiUHJpdmF0ZVBhZ2UiLCJ1c2VyIiwidXNlU3RhdGUiLCJibG9ncyIsInNldEJsb2dzIiwiY29ySWNvbnMiLCJzZXRDb3JJY29ucyIsInVzZUVmZmVjdCIsImZpcmUiLCJkYXRhYmFzZSIsImNoaWxkIiwib25TbmFwc2hvdCIsInNuYXAiLCJjb25zb2xlIiwibG9nIiwidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwicm9vdCIsInRyYW5zZm9ybSIsImZsZXhHcm93IiwiZXhhbXBsZVdyYXBwZXIiLCJwb3NpdGlvbiIsIm1hcmdpblRvcCIsInNwYWNpbmciLCJoZWlnaHQiLCJyYWRpb0dyb3VwIiwibWFyZ2luIiwic3BlZWREaWFsIiwiYm90dG9tIiwicmlnaHQiLCJ0b3AiLCJsZWZ0IiwiY2xhc3NlcyIsImZvbnRTaXplIiwibWVudUJ1dHRvbiIsInRpdGxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7O0FBRUEsSUFBTUEsV0FBVyxHQUFHLFNBQWRBLFdBQWMsT0FBYztBQUFBOztBQUFBLE1BQVhDLElBQVcsUUFBWEEsSUFBVzs7QUFBQSxrQkFDTkMsc0RBQVEsQ0FBQyxFQUFELENBREY7QUFBQSxNQUN6QkMsS0FEeUI7QUFBQSxNQUNsQkMsUUFEa0I7O0FBQUEsbUJBRUFGLHNEQUFRLENBQUMsRUFBRCxDQUZSO0FBQUEsTUFFekJHLFFBRnlCO0FBQUEsTUFFZkMsV0FGZTs7QUFHbENDLHlEQUFTLENBQUMsWUFBTTtBQUNaQywrREFBSSxDQUFDQyxRQUFMLEdBQ0dDLEtBREgsQ0FDUyxXQURULEVBRUdDLFVBRkgsQ0FFYyxVQUFBQyxJQUFJLEVBQUk7QUFFbEI7QUFDUjtBQUNBO0FBQ0E7QUFDUUMsYUFBTyxDQUFDQyxHQUFSLENBQVlGLElBQVosRUFOa0IsQ0FPbkI7QUFDQSxLQVZIO0FBV0QsR0FaTSxFQVlKLEVBWkksQ0FBVDtBQWNFLE1BQU1HLFNBQVMsR0FBR0Msb0VBQVUsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsV0FBWTtBQUN2Q0MsVUFBSSxFQUFFO0FBQ0pDLGlCQUFTLEVBQUUsaUJBRFA7QUFFSkMsZ0JBQVEsRUFBRTtBQUZOLE9BRGlDO0FBS3ZDQyxvQkFBYyxFQUFFO0FBQ2RDLGdCQUFRLEVBQUUsVUFESTtBQUVkQyxpQkFBUyxFQUFFTixLQUFLLENBQUNPLE9BQU4sQ0FBYyxDQUFkLENBRkc7QUFHZEMsY0FBTSxFQUFFO0FBSE0sT0FMdUI7QUFVdkNDLGdCQUFVLEVBQUU7QUFDVkMsY0FBTSxFQUFFVixLQUFLLENBQUNPLE9BQU4sQ0FBYyxDQUFkLEVBQWlCLENBQWpCO0FBREUsT0FWMkI7QUFhdkNJLGVBQVMsRUFBRTtBQUNUTixnQkFBUSxFQUFFLFVBREQ7QUFFVCxvRUFBNEQ7QUFDMURPLGdCQUFNLEVBQUVaLEtBQUssQ0FBQ08sT0FBTixDQUFjLENBQWQsQ0FEa0Q7QUFFMURNLGVBQUssRUFBRWIsS0FBSyxDQUFDTyxPQUFOLENBQWMsQ0FBZDtBQUZtRCxTQUZuRDtBQU1ULHVFQUErRDtBQUM3RE8sYUFBRyxFQUFFZCxLQUFLLENBQUNPLE9BQU4sQ0FBYyxDQUFkLENBRHdEO0FBRTdEUSxjQUFJLEVBQUVmLEtBQUssQ0FBQ08sT0FBTixDQUFjLENBQWQ7QUFGdUQ7QUFOdEQ7QUFiNEIsS0FBWjtBQUFBLEdBQUQsQ0FBNUI7QUEwQkEsTUFBTVMsT0FBTyxHQUFHbEIsU0FBUyxFQUF6Qjs7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0c7QUFBTSxRQUFJLEVBQUMseURBQVg7QUFDQyxPQUFHLEVBQUMsWUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREgsRUFHRSxNQUFDLHNEQUFEO0FBQU0sU0FBSyxFQUFDLFNBQVo7QUFBc0IsU0FBSyxFQUFFO0FBQUNtQixjQUFRLEVBQUM7QUFBVixLQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUhGLEVBSUUsTUFBQyxzREFBRDtBQUFNLFNBQUssRUFBQyxTQUFaO0FBQXNCLFNBQUssRUFBRTtBQUFDQSxjQUFRLEVBQUM7QUFBVixLQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUpGLEVBTUUsTUFBQyx3REFBRDtBQUFRLFlBQVEsRUFBQyxRQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0YsTUFBQyx5REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyw0REFBRDtBQUFZLFFBQUksRUFBQyxPQUFqQjtBQUF5QixhQUFTLEVBQUVELE9BQU8sQ0FBQ0UsVUFBNUM7QUFBd0QsU0FBSyxFQUFDLFNBQTlEO0FBQXdFLGtCQUFXLE1BQW5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLFFBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBREYsRUFJRSxNQUFDLDREQUFEO0FBQVksV0FBTyxFQUFDLElBQXBCO0FBQXlCLGFBQVMsRUFBRUYsT0FBTyxDQUFDRyxLQUE1QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSkYsRUFPRSxNQUFDLHdEQUFEO0FBQVEsU0FBSyxFQUFDLFNBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVBGLENBREUsQ0FORjtBQW1CRCxDQWpFRDs7R0FBTXBDLFc7O0tBQUFBLFc7O0FBOEZTQSwwRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9Db250cm9sZS4yYjZhMjZjZjMxMzQ1MDAzNTY5Yy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCBDb21wb25lbnQsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgd2l0aElyb25TZXNzaW9uIH0gZnJvbSBcIm5leHQtaXJvbi1zZXNzaW9uXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHtBdmF0YXIsIG1ha2VTdHlsZXMsXHJcbiAgICBBcHBCYXIsVG9vbGJhcixJY29uQnV0dG9uLEljb24sIEJ1dHRvbiwgQ3NzQmFzZWxpbmUsIFRleHRGaWVsZCwgRm9ybUNvbnRyb2xMYWJlbCwgQ2hlY2tib3gsTGluayAsR3JpZCxCb3gsIFR5cG9ncmFwaHl9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuaW1wb3J0IEZhY2Vib29rSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvRmFjZWJvb2snO1xyXG5pbXBvcnQgWW91VHViZUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL1lvdVR1YmUnO1xyXG5cclxuaW1wb3J0IGZpcmUgZnJvbSAnLi4vLi4vY29uZmlnL2ZpcmUtY29uZmlnJztcclxuXHJcbmNvbnN0IFByaXZhdGVQYWdlID0gKHsgdXNlciB9KSA9PiB7XHJcbiAgY29uc3QgW2Jsb2dzLCBzZXRCbG9nc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW2Nvckljb25zLCBzZXRDb3JJY29uc10gPSB1c2VTdGF0ZShcIlwiKTtcclxudXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGZpcmUuZGF0YWJhc2UoKVxyXG4gICAgICAuY2hpbGQoJ2luZm9BdHVhbCcpXHJcbiAgICAgIC5vblNuYXBzaG90KHNuYXAgPT4ge1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8qY29uc3QgYmxvZ3MgPSBzbmFwLmRvY3MubWFwKGRvYyA9PiAoe1xyXG4gICAgICAgICAgaWQ6IGRvYy5pZCxcclxuICAgICAgICAgIC4uLmRvYy5kYXRhKClcclxuICAgICAgICB9KSk7Ki9cclxuICAgICAgICBjb25zb2xlLmxvZyhzbmFwKVxyXG4gICAgICAgLy8gc2V0QmxvZ3MoYmxvZ3MpO1xyXG4gICAgICB9KTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG4gICAgcm9vdDoge1xyXG4gICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGVaKDBweCknLFxyXG4gICAgICBmbGV4R3JvdzogMSxcclxuICAgIH0sXHJcbiAgICBleGFtcGxlV3JhcHBlcjoge1xyXG4gICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICAgICAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nKDMpLFxyXG4gICAgICBoZWlnaHQ6IDAgLFxyXG4gICAgfSxcclxuICAgIHJhZGlvR3JvdXA6IHtcclxuICAgICAgbWFyZ2luOiB0aGVtZS5zcGFjaW5nKDEsIDApLFxyXG4gICAgfSxcclxuICAgIHNwZWVkRGlhbDoge1xyXG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgICAgJyYuTXVpU3BlZWREaWFsLWRpcmVjdGlvblVwLCAmLk11aVNwZWVkRGlhbC1kaXJlY3Rpb25MZWZ0Jzoge1xyXG4gICAgICAgIGJvdHRvbTogdGhlbWUuc3BhY2luZygyKSxcclxuICAgICAgICByaWdodDogdGhlbWUuc3BhY2luZygyKSxcclxuICAgICAgfSxcclxuICAgICAgJyYuTXVpU3BlZWREaWFsLWRpcmVjdGlvbkRvd24sICYuTXVpU3BlZWREaWFsLWRpcmVjdGlvblJpZ2h0Jzoge1xyXG4gICAgICAgIHRvcDogdGhlbWUuc3BhY2luZygyKSxcclxuICAgICAgICBsZWZ0OiB0aGVtZS5zcGFjaW5nKDIpLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9KSk7XHJcblxyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuXHJcbiAgICBcclxuICA8ZGl2PlxyXG4gICAgIDxsaW5rIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2ljb24/ZmFtaWx5PU1hdGVyaWFsK0ljb25zXCJcclxuICAgICAgcmVsPVwic3R5bGVzaGVldFwiPjwvbGluaz5cclxuICAgIDxJY29uIGNvbG9yPVwicHJpbWFyeVwiIHN0eWxlPXt7Zm9udFNpemU6XCIxMHJlbVwifX0+ZmFjZWJvb2s8L0ljb24+XHJcbiAgICA8SWNvbiBjb2xvcj1cInByaW1hcnlcIiBzdHlsZT17e2ZvbnRTaXplOlwiMTByZW1cIn19Pm9uZGVtYW5kX3ZpZGVvPC9JY29uPlxyXG5cclxuICAgIDxBcHBCYXIgcG9zaXRpb249XCJzdGF0aWNcIj5cclxuICA8VG9vbGJhcj5cclxuICAgIDxJY29uQnV0dG9uIGVkZ2U9XCJzdGFydFwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5tZW51QnV0dG9ufSBjb2xvcj1cImluaGVyaXRcIiBhcmlhLWxhYmVsPVwibWVudVwiPlxyXG4gICAgICA8TWVudUljb24gLz5cclxuICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiIGNsYXNzTmFtZT17Y2xhc3Nlcy50aXRsZX0+XHJcbiAgICAgIE5ld3NcclxuICAgIDwvVHlwb2dyYXBoeT5cclxuICAgIDxCdXR0b24gY29sb3I9XCJpbmhlcml0XCI+TG9naW48L0J1dHRvbj5cclxuICA8L1Rvb2xiYXI+XHJcbjwvQXBwQmFyPlxyXG5cclxuICA8L2Rpdj5cclxufTtcclxuXHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wcyA9IHdpdGhJcm9uU2Vzc2lvbihcclxuXHJcbiAgXHJcbiAgYXN5bmMgKHsgcmVxLCByZXMgfSkgPT4ge1xyXG4gICAgY29uc3QgdXNlciA9IHJlcS5zZXNzaW9uLmdldChcInVzZXJcIik7XHJcbiAgICBpZiAoIXVzZXIpIHtcclxuICAgICAgcmVzLnNldEhlYWRlcihcImxvY2F0aW9uXCIsIFwiL0NvbnRyb2xlL2xvZ2luXCIpO1xyXG4gICAgICByZXMuc3RhdHVzQ29kZSA9IDMwMjtcclxuICAgICAgcmVzLmVuZCgpO1xyXG4gICAgICByZXR1cm4geyBwcm9wczoge30gfTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBwcm9wczogeyB1c2VyIH1cclxuICAgIH07XHJcbiAgfSxcclxuICB7XHJcbiAgICBjb29raWVOYW1lOiBcIk1ZU0lURUNPT0tJRVwiLFxyXG4gICAgY29va2llT3B0aW9uczoge1xyXG4gICAgICBzZWN1cmU6IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIiA/IHRydWUgOiBmYWxzZVxyXG4gICAgfSxcclxuICAgIHBhc3N3b3JkOiBwcm9jZXNzLmVudi5BUFBMSUNBVElPTl9TRUNSRVRcclxuICB9XHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcml2YXRlUGFnZTsiXSwic291cmNlUm9vdCI6IiJ9