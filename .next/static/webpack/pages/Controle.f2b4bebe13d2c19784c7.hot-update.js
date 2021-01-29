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
    color: "primary",
    style: {
      fontSize: "10rem"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvQ29udHJvbGUvaW5kZXguanMiXSwibmFtZXMiOlsiUHJpdmF0ZVBhZ2UiLCJ1c2VyIiwidXNlU3RhdGUiLCJibG9ncyIsInNldEJsb2dzIiwiY29ySWNvbnMiLCJzZXRDb3JJY29ucyIsInVzZUVmZmVjdCIsImZpcmUiLCJkYXRhYmFzZSIsInJlZiIsIm9uY2UiLCJ0aGVuIiwic25hcCIsImNvbnNvbGUiLCJsb2ciLCJ2YWwiLCJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJyb290IiwiZmxleEdyb3ciLCJtZW51QnV0dG9uIiwibWFyZ2luUmlnaHQiLCJzcGFjaW5nIiwidGl0bGUiLCJjbGFzc2VzIiwiZm9udFNpemUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7O0FBRUEsSUFBTUEsV0FBVyxHQUFHLFNBQWRBLFdBQWMsT0FBYztBQUFBOztBQUFBLE1BQVhDLElBQVcsUUFBWEEsSUFBVzs7QUFBQSxrQkFDTkMsc0RBQVEsQ0FBQyxFQUFELENBREY7QUFBQSxNQUN6QkMsS0FEeUI7QUFBQSxNQUNsQkMsUUFEa0I7O0FBQUEsbUJBRUFGLHNEQUFRLENBQUMsRUFBRCxDQUZSO0FBQUEsTUFFekJHLFFBRnlCO0FBQUEsTUFFZkMsV0FGZTs7QUFJbENDLHlEQUFTLENBQUMsWUFBTTtBQUNaQywrREFBSSxDQUFDQyxRQUFMLEdBQ0dDLEdBREgsQ0FDTyxXQURQLEVBRUdDLElBRkgsQ0FFUSxPQUZSLEVBRWlCQyxJQUZqQixDQUVzQixVQUFDQyxJQUFELEVBQVU7QUFFNUI7QUFDUjtBQUNBO0FBQ0E7QUFDUUMsYUFBTyxDQUFDQyxHQUFSLENBQVksTUFBWjtBQUNBRCxhQUFPLENBQUNDLEdBQVIsQ0FBWUYsSUFBSSxDQUFDRyxHQUFMLEVBQVosRUFQNEIsQ0FRN0I7QUFDQSxLQVhIO0FBWUQsR0FiTSxFQWFKLEVBYkksQ0FBVDtBQWdCRSxNQUFNQyxTQUFTLEdBQUdDLG9FQUFVLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFdBQVk7QUFDdkNDLFVBQUksRUFBRTtBQUNKQyxnQkFBUSxFQUFFO0FBRE4sT0FEaUM7QUFJdkNDLGdCQUFVLEVBQUU7QUFDVkMsbUJBQVcsRUFBRUosS0FBSyxDQUFDSyxPQUFOLENBQWMsQ0FBZDtBQURILE9BSjJCO0FBT3ZDQyxXQUFLLEVBQUU7QUFDTEosZ0JBQVEsRUFBRTtBQURMO0FBUGdDLEtBQVo7QUFBQSxHQUFELENBQTVCO0FBWUEsTUFBTUssT0FBTyxHQUFHVCxTQUFTLEVBQXpCO0FBRUUsU0FDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0c7QUFBTSxRQUFJLEVBQUMseURBQVg7QUFDQyxPQUFHLEVBQUMsWUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREgsRUFLRSxNQUFDLHdEQUFEO0FBQVEsWUFBUSxFQUFDLFFBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRixNQUFDLHlEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDREQUFEO0FBQVksUUFBSSxFQUFDLE9BQWpCO0FBQXlCLGFBQVMsRUFBRVMsT0FBTyxDQUFDSixVQUE1QztBQUF3RCxTQUFLLEVBQUMsU0FBOUQ7QUFBd0Usa0JBQVcsTUFBbkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsOERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBREYsRUFJRSxNQUFDLDREQUFEO0FBQVksV0FBTyxFQUFDLElBQXBCO0FBQXlCLGFBQVMsRUFBRUksT0FBTyxDQUFDRCxLQUE1QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSkYsRUFPRSxNQUFDLHdEQUFEO0FBQVEsU0FBSyxFQUFDLFNBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVBGLENBREUsQ0FMRixFQWdCRSxNQUFDLHNEQUFEO0FBQU0sU0FBSyxFQUFDLFNBQVo7QUFBc0IsU0FBSyxFQUFFO0FBQUNFLGNBQVEsRUFBQztBQUFWLEtBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBaEJGLEVBaUJFLE1BQUMsc0RBQUQ7QUFBTSxTQUFLLEVBQUMsU0FBWjtBQUFzQixTQUFLLEVBQUU7QUFBQ0EsY0FBUSxFQUFDO0FBQVYsS0FBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFqQkYsQ0FERTtBQW9CSCxDQXRERDs7R0FBTTNCLFc7O0tBQUFBLFc7O0FBbUZTQSwwRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9Db250cm9sZS5mMmI0YmViZTEzZDJjMTk3ODRjNy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCBDb21wb25lbnQsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgd2l0aElyb25TZXNzaW9uIH0gZnJvbSBcIm5leHQtaXJvbi1zZXNzaW9uXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHtBdmF0YXIsIG1ha2VTdHlsZXMsIFxyXG4gICAgQXBwQmFyLFRvb2xiYXIsSWNvbkJ1dHRvbixJY29uLCBCdXR0b24sIENzc0Jhc2VsaW5lLCBUZXh0RmllbGQsIEZvcm1Db250cm9sTGFiZWwsIENoZWNrYm94LExpbmsgLEdyaWQsQm94LCBUeXBvZ3JhcGh5fSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcbmltcG9ydCBGYWNlYm9va0ljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0ZhY2Vib29rJztcclxuaW1wb3J0IFlvdVR1YmVJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9Zb3VUdWJlJztcclxuaW1wb3J0IE1lbnVJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9NZW51JztcclxuXHJcbmltcG9ydCBmaXJlIGZyb20gJy4uLy4uL2NvbmZpZy9maXJlLWNvbmZpZyc7XHJcblxyXG5jb25zdCBQcml2YXRlUGFnZSA9ICh7IHVzZXIgfSkgPT4ge1xyXG4gIGNvbnN0IFtibG9ncywgc2V0QmxvZ3NdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtjb3JJY29ucywgc2V0Q29ySWNvbnNdID0gdXNlU3RhdGUoXCJcIik7XHJcblxyXG51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZmlyZS5kYXRhYmFzZSgpXHJcbiAgICAgIC5yZWYoJ2luZm9BdHVhbCcpXHJcbiAgICAgIC5vbmNlKFwidmFsdWVcIikudGhlbigoc25hcCkgPT4ge1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8qY29uc3QgYmxvZ3MgPSBzbmFwLmRvY3MubWFwKGRvYyA9PiAoe1xyXG4gICAgICAgICAgaWQ6IGRvYy5pZCxcclxuICAgICAgICAgIC4uLmRvYy5kYXRhKClcclxuICAgICAgICB9KSk7Ki9cclxuICAgICAgICBjb25zb2xlLmxvZygnaGVyZScpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHNuYXAudmFsKCkpXHJcbiAgICAgICAvLyBzZXRCbG9ncyhibG9ncyk7XHJcbiAgICAgIH0pO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgXHJcbiAgY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgICByb290OiB7XHJcbiAgICAgIGZsZXhHcm93OiAxLFxyXG4gICAgfSxcclxuICAgIG1lbnVCdXR0b246IHtcclxuICAgICAgbWFyZ2luUmlnaHQ6IHRoZW1lLnNwYWNpbmcoMiksXHJcbiAgICB9LFxyXG4gICAgdGl0bGU6IHtcclxuICAgICAgZmxleEdyb3c6IDEsXHJcbiAgICB9LFxyXG4gIH0pKTtcclxuXHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG5cclxuICAgIHJldHVybihcclxuICA8ZGl2PlxyXG4gICAgIDxsaW5rIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2ljb24/ZmFtaWx5PU1hdGVyaWFsK0ljb25zXCJcclxuICAgICAgcmVsPVwic3R5bGVzaGVldFwiPjwvbGluaz5cclxuXHJcblxyXG4gICAgPEFwcEJhciBwb3NpdGlvbj1cInN0YXRpY1wiPlxyXG4gIDxUb29sYmFyPlxyXG4gICAgPEljb25CdXR0b24gZWRnZT1cInN0YXJ0XCIgY2xhc3NOYW1lPXtjbGFzc2VzLm1lbnVCdXR0b259IGNvbG9yPVwiaW5oZXJpdFwiIGFyaWEtbGFiZWw9XCJtZW51XCI+XHJcbiAgICAgIDxNZW51SWNvbiAvPlxyXG4gICAgPC9JY29uQnV0dG9uPlxyXG4gICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg2XCIgY2xhc3NOYW1lPXtjbGFzc2VzLnRpdGxlfT5cclxuICAgICAgTmV3c1xyXG4gICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgPEJ1dHRvbiBjb2xvcj1cImluaGVyaXRcIj5Mb2dpbjwvQnV0dG9uPlxyXG4gIDwvVG9vbGJhcj5cclxuPC9BcHBCYXI+XHJcbiAgICA8SWNvbiBjb2xvcj1cInByaW1hcnlcIiBzdHlsZT17e2ZvbnRTaXplOlwiMTByZW1cIn19PmZhY2Vib29rPC9JY29uPlxyXG4gICAgPEljb24gY29sb3I9XCJwcmltYXJ5XCIgc3R5bGU9e3tmb250U2l6ZTpcIjEwcmVtXCJ9fT5vbmRlbWFuZF92aWRlbzwvSWNvbj5cclxuICA8L2Rpdj4pO1xyXG59O1xyXG5cclxuXHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzID0gd2l0aElyb25TZXNzaW9uKFxyXG5cclxuICBcclxuICBhc3luYyAoeyByZXEsIHJlcyB9KSA9PiB7XHJcbiAgICBjb25zdCB1c2VyID0gcmVxLnNlc3Npb24uZ2V0KFwidXNlclwiKTtcclxuICAgIGlmICghdXNlcikge1xyXG4gICAgICByZXMuc2V0SGVhZGVyKFwibG9jYXRpb25cIiwgXCIvQ29udHJvbGUvbG9naW5cIik7XHJcbiAgICAgIHJlcy5zdGF0dXNDb2RlID0gMzAyO1xyXG4gICAgICByZXMuZW5kKCk7XHJcbiAgICAgIHJldHVybiB7IHByb3BzOiB7fSB9O1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIHByb3BzOiB7IHVzZXIgfVxyXG4gICAgfTtcclxuICB9LFxyXG4gIHtcclxuICAgIGNvb2tpZU5hbWU6IFwiTVlTSVRFQ09PS0lFXCIsXHJcbiAgICBjb29raWVPcHRpb25zOiB7XHJcbiAgICAgIHNlY3VyZTogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiID8gdHJ1ZSA6IGZhbHNlXHJcbiAgICB9LFxyXG4gICAgcGFzc3dvcmQ6IHByb2Nlc3MuZW52LkFQUExJQ0FUSU9OX1NFQ1JFVFxyXG4gIH1cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByaXZhdGVQYWdlOyJdLCJzb3VyY2VSb290IjoiIn0=