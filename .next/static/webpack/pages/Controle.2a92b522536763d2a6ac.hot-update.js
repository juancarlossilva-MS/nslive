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
      console.log(snap); // setBlogs(blogs);
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
      lineNumber: 46,
      columnNumber: 3
    }
  }, __jsx("link", {
    href: "https://fonts.googleapis.com/icon?family=Material+Icons",
    rel: "stylesheet",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 6
    }
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["AppBar"], {
    position: "static",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Toolbar"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
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
      lineNumber: 53,
      columnNumber: 5
    }
  }, __jsx(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_5___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 7
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    variant: "h6",
    className: classes.title,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 5
    }
  }, "News"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    color: "inherit",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
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
      lineNumber: 62,
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
      lineNumber: 63,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvQ29udHJvbGUvaW5kZXguanMiXSwibmFtZXMiOlsiUHJpdmF0ZVBhZ2UiLCJ1c2VyIiwidXNlU3RhdGUiLCJibG9ncyIsInNldEJsb2dzIiwiY29ySWNvbnMiLCJzZXRDb3JJY29ucyIsInVzZUVmZmVjdCIsImZpcmUiLCJkYXRhYmFzZSIsInJlZiIsIm9uY2UiLCJ0aGVuIiwic25hcCIsImNvbnNvbGUiLCJsb2ciLCJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJyb290IiwiZmxleEdyb3ciLCJtZW51QnV0dG9uIiwibWFyZ2luUmlnaHQiLCJzcGFjaW5nIiwidGl0bGUiLCJjbGFzc2VzIiwiZm9udFNpemUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7O0FBRUEsSUFBTUEsV0FBVyxHQUFHLFNBQWRBLFdBQWMsT0FBYztBQUFBOztBQUFBLE1BQVhDLElBQVcsUUFBWEEsSUFBVzs7QUFBQSxrQkFDTkMsc0RBQVEsQ0FBQyxFQUFELENBREY7QUFBQSxNQUN6QkMsS0FEeUI7QUFBQSxNQUNsQkMsUUFEa0I7O0FBQUEsbUJBRUFGLHNEQUFRLENBQUMsRUFBRCxDQUZSO0FBQUEsTUFFekJHLFFBRnlCO0FBQUEsTUFFZkMsV0FGZTs7QUFHbENDLHlEQUFTLENBQUMsWUFBTTtBQUNaQywrREFBSSxDQUFDQyxRQUFMLEdBQ0dDLEdBREgsQ0FDTyxXQURQLEVBRUdDLElBRkgsQ0FFUSxPQUZSLEVBRWlCQyxJQUZqQixDQUVzQixVQUFDQyxJQUFELEVBQVU7QUFFNUI7QUFDUjtBQUNBO0FBQ0E7QUFDUUMsYUFBTyxDQUFDQyxHQUFSLENBQVksTUFBWjtBQUNBRCxhQUFPLENBQUNDLEdBQVIsQ0FBWUYsSUFBWixFQVA0QixDQVE3QjtBQUNBLEtBWEg7QUFZRCxHQWJNLEVBYUosRUFiSSxDQUFUO0FBZ0JFLE1BQU1HLFNBQVMsR0FBR0Msb0VBQVUsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsV0FBWTtBQUN2Q0MsVUFBSSxFQUFFO0FBQ0pDLGdCQUFRLEVBQUU7QUFETixPQURpQztBQUl2Q0MsZ0JBQVUsRUFBRTtBQUNWQyxtQkFBVyxFQUFFSixLQUFLLENBQUNLLE9BQU4sQ0FBYyxDQUFkO0FBREgsT0FKMkI7QUFPdkNDLFdBQUssRUFBRTtBQUNMSixnQkFBUSxFQUFFO0FBREw7QUFQZ0MsS0FBWjtBQUFBLEdBQUQsQ0FBNUI7QUFZQSxNQUFNSyxPQUFPLEdBQUdULFNBQVMsRUFBekI7QUFFRSxTQUNGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRztBQUFNLFFBQUksRUFBQyx5REFBWDtBQUNDLE9BQUcsRUFBQyxZQURMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESCxFQUtFLE1BQUMsd0RBQUQ7QUFBUSxZQUFRLEVBQUMsUUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNGLE1BQUMseURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsNERBQUQ7QUFBWSxRQUFJLEVBQUMsT0FBakI7QUFBeUIsYUFBUyxFQUFFUyxPQUFPLENBQUNKLFVBQTVDO0FBQXdELFNBQUssRUFBQyxTQUE5RDtBQUF3RSxrQkFBVyxNQUFuRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyw4REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FERixFQUlFLE1BQUMsNERBQUQ7QUFBWSxXQUFPLEVBQUMsSUFBcEI7QUFBeUIsYUFBUyxFQUFFSSxPQUFPLENBQUNELEtBQTVDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFKRixFQU9FLE1BQUMsd0RBQUQ7QUFBUSxTQUFLLEVBQUMsU0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBUEYsQ0FERSxDQUxGLEVBZ0JFLE1BQUMsc0RBQUQ7QUFBTSxTQUFLLEVBQUMsU0FBWjtBQUFzQixTQUFLLEVBQUU7QUFBQ0UsY0FBUSxFQUFDO0FBQVYsS0FBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFoQkYsRUFpQkUsTUFBQyxzREFBRDtBQUFNLFNBQUssRUFBQyxTQUFaO0FBQXNCLFNBQUssRUFBRTtBQUFDQSxjQUFRLEVBQUM7QUFBVixLQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQWpCRixDQURFO0FBb0JILENBckREOztHQUFNMUIsVzs7S0FBQUEsVzs7QUFrRlNBLDBFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL0NvbnRyb2xlLjJhOTJiNTIyNTM2NzYzZDJhNmFjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIENvbXBvbmVudCwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB3aXRoSXJvblNlc3Npb24gfSBmcm9tIFwibmV4dC1pcm9uLXNlc3Npb25cIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQge0F2YXRhciwgbWFrZVN0eWxlcywgXHJcbiAgICBBcHBCYXIsVG9vbGJhcixJY29uQnV0dG9uLEljb24sIEJ1dHRvbiwgQ3NzQmFzZWxpbmUsIFRleHRGaWVsZCwgRm9ybUNvbnRyb2xMYWJlbCwgQ2hlY2tib3gsTGluayAsR3JpZCxCb3gsIFR5cG9ncmFwaHl9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuaW1wb3J0IEZhY2Vib29rSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvRmFjZWJvb2snO1xyXG5pbXBvcnQgWW91VHViZUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL1lvdVR1YmUnO1xyXG5pbXBvcnQgTWVudUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL01lbnUnO1xyXG5cclxuaW1wb3J0IGZpcmUgZnJvbSAnLi4vLi4vY29uZmlnL2ZpcmUtY29uZmlnJztcclxuXHJcbmNvbnN0IFByaXZhdGVQYWdlID0gKHsgdXNlciB9KSA9PiB7XHJcbiAgY29uc3QgW2Jsb2dzLCBzZXRCbG9nc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW2Nvckljb25zLCBzZXRDb3JJY29uc10gPSB1c2VTdGF0ZShcIlwiKTtcclxudXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGZpcmUuZGF0YWJhc2UoKVxyXG4gICAgICAucmVmKCdpbmZvQXR1YWwnKVxyXG4gICAgICAub25jZShcInZhbHVlXCIpLnRoZW4oKHNuYXApID0+IHtcclxuICAgICAgICBcclxuICAgICAgICAvKmNvbnN0IGJsb2dzID0gc25hcC5kb2NzLm1hcChkb2MgPT4gKHtcclxuICAgICAgICAgIGlkOiBkb2MuaWQsXHJcbiAgICAgICAgICAuLi5kb2MuZGF0YSgpXHJcbiAgICAgICAgfSkpOyovXHJcbiAgICAgICAgY29uc29sZS5sb2coJ2hlcmUnKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhzbmFwKVxyXG4gICAgICAgLy8gc2V0QmxvZ3MoYmxvZ3MpO1xyXG4gICAgICB9KTtcclxuICB9LCBbXSk7XHJcblxyXG4gIFxyXG4gIGNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG4gICAgcm9vdDoge1xyXG4gICAgICBmbGV4R3JvdzogMSxcclxuICAgIH0sXHJcbiAgICBtZW51QnV0dG9uOiB7XHJcbiAgICAgIG1hcmdpblJpZ2h0OiB0aGVtZS5zcGFjaW5nKDIpLFxyXG4gICAgfSxcclxuICAgIHRpdGxlOiB7XHJcbiAgICAgIGZsZXhHcm93OiAxLFxyXG4gICAgfSxcclxuICB9KSk7XHJcblxyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuXHJcbiAgICByZXR1cm4oXHJcbiAgPGRpdj5cclxuICAgICA8bGluayBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9pY29uP2ZhbWlseT1NYXRlcmlhbCtJY29uc1wiXHJcbiAgICAgIHJlbD1cInN0eWxlc2hlZXRcIj48L2xpbms+XHJcblxyXG5cclxuICAgIDxBcHBCYXIgcG9zaXRpb249XCJzdGF0aWNcIj5cclxuICA8VG9vbGJhcj5cclxuICAgIDxJY29uQnV0dG9uIGVkZ2U9XCJzdGFydFwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5tZW51QnV0dG9ufSBjb2xvcj1cImluaGVyaXRcIiBhcmlhLWxhYmVsPVwibWVudVwiPlxyXG4gICAgICA8TWVudUljb24gLz5cclxuICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiIGNsYXNzTmFtZT17Y2xhc3Nlcy50aXRsZX0+XHJcbiAgICAgIE5ld3NcclxuICAgIDwvVHlwb2dyYXBoeT5cclxuICAgIDxCdXR0b24gY29sb3I9XCJpbmhlcml0XCI+TG9naW48L0J1dHRvbj5cclxuICA8L1Rvb2xiYXI+XHJcbjwvQXBwQmFyPlxyXG4gICAgPEljb24gY29sb3I9XCJwcmltYXJ5XCIgc3R5bGU9e3tmb250U2l6ZTpcIjEwcmVtXCJ9fT5mYWNlYm9vazwvSWNvbj5cclxuICAgIDxJY29uIGNvbG9yPVwicHJpbWFyeVwiIHN0eWxlPXt7Zm9udFNpemU6XCIxMHJlbVwifX0+b25kZW1hbmRfdmlkZW88L0ljb24+XHJcbiAgPC9kaXY+KTtcclxufTtcclxuXHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wcyA9IHdpdGhJcm9uU2Vzc2lvbihcclxuXHJcbiAgXHJcbiAgYXN5bmMgKHsgcmVxLCByZXMgfSkgPT4ge1xyXG4gICAgY29uc3QgdXNlciA9IHJlcS5zZXNzaW9uLmdldChcInVzZXJcIik7XHJcbiAgICBpZiAoIXVzZXIpIHtcclxuICAgICAgcmVzLnNldEhlYWRlcihcImxvY2F0aW9uXCIsIFwiL0NvbnRyb2xlL2xvZ2luXCIpO1xyXG4gICAgICByZXMuc3RhdHVzQ29kZSA9IDMwMjtcclxuICAgICAgcmVzLmVuZCgpO1xyXG4gICAgICByZXR1cm4geyBwcm9wczoge30gfTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBwcm9wczogeyB1c2VyIH1cclxuICAgIH07XHJcbiAgfSxcclxuICB7XHJcbiAgICBjb29raWVOYW1lOiBcIk1ZU0lURUNPT0tJRVwiLFxyXG4gICAgY29va2llT3B0aW9uczoge1xyXG4gICAgICBzZWN1cmU6IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIiA/IHRydWUgOiBmYWxzZVxyXG4gICAgfSxcclxuICAgIHBhc3N3b3JkOiBwcm9jZXNzLmVudi5BUFBMSUNBVElPTl9TRUNSRVRcclxuICB9XHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcml2YXRlUGFnZTsiXSwic291cmNlUm9vdCI6IiJ9