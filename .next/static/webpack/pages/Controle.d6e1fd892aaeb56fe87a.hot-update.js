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
      urlAtual = _useState2[0],
      setUrlAtual = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""),
      canal = _useState3[0],
      setCanal = _useState3[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    _config_fire_config__WEBPACK_IMPORTED_MODULE_6__["default"].database().ref('infoAtual').once("value").then(function (snap) {
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

  var infosAtuais = function infosAtuais() {
    return __jsx("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 7
      }
    }, __jsx("h4", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 9
      }
    }, {
      urlAtual: urlAtual
    }));
  };

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
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["AppBar"], {
    position: "static",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Toolbar"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
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
      lineNumber: 69,
      columnNumber: 5
    }
  }, __jsx(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_5___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 7
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    variant: "h6",
    className: classes.title,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 5
    }
  }, "News"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    color: "inherit",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
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
      lineNumber: 78,
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
      lineNumber: 79,
      columnNumber: 5
    }
  }, "ondemand_video"));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvQ29udHJvbGUvaW5kZXguanMiXSwibmFtZXMiOlsiUHJpdmF0ZVBhZ2UiLCJ1c2VyIiwidXNlU3RhdGUiLCJibG9ncyIsInNldEJsb2dzIiwidXJsQXR1YWwiLCJzZXRVcmxBdHVhbCIsImNhbmFsIiwic2V0Q2FuYWwiLCJ1c2VFZmZlY3QiLCJmaXJlIiwiZGF0YWJhc2UiLCJyZWYiLCJvbmNlIiwidGhlbiIsInNuYXAiLCJjb25zb2xlIiwibG9nIiwicmVzIiwidmFsIiwidXJsIiwiaW5mb3NBdHVhaXMiLCJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJyb290IiwiZmxleEdyb3ciLCJtZW51QnV0dG9uIiwibWFyZ2luUmlnaHQiLCJzcGFjaW5nIiwidGl0bGUiLCJjbGFzc2VzIiwiZm9udFNpemUiLCJoZWlnaHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7O0FBRUEsSUFBTUEsV0FBVyxHQUFHLFNBQWRBLFdBQWMsT0FBYztBQUFBOztBQUFBLE1BQVhDLElBQVcsUUFBWEEsSUFBVzs7QUFBQSxrQkFDTkMsc0RBQVEsQ0FBQyxFQUFELENBREY7QUFBQSxNQUN6QkMsS0FEeUI7QUFBQSxNQUNsQkMsUUFEa0I7O0FBQUEsbUJBRUFGLHNEQUFRLENBQUMsRUFBRCxDQUZSO0FBQUEsTUFFekJHLFFBRnlCO0FBQUEsTUFFZkMsV0FGZTs7QUFBQSxtQkFHTkosc0RBQVEsQ0FBQyxFQUFELENBSEY7QUFBQSxNQUd6QkssS0FIeUI7QUFBQSxNQUdsQkMsUUFIa0I7O0FBS2xDQyx5REFBUyxDQUFDLFlBQU07QUFDWkMsK0RBQUksQ0FBQ0MsUUFBTCxHQUNHQyxHQURILENBQ08sV0FEUCxFQUVHQyxJQUZILENBRVEsT0FGUixFQUVpQkMsSUFGakIsQ0FFc0IsVUFBQ0MsSUFBRCxFQUFVO0FBRTVCO0FBQ1I7QUFDQTtBQUNBO0FBQ1FDLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLE1BQVo7QUFDQSxVQUFJQyxHQUFHLEdBQUlILElBQUksQ0FBQ0ksR0FBTCxFQUFYO0FBQ0FYLGNBQVEsQ0FBQ1UsR0FBRyxDQUFDWCxLQUFMLENBQVI7QUFDQUQsaUJBQVcsQ0FBQ1ksR0FBRyxDQUFDRSxHQUFMLENBQVg7QUFDQUMsaUJBQVcsR0FWaUIsQ0FXN0I7QUFDQSxLQWRIO0FBZUQsR0FoQk0sRUFnQkosRUFoQkksQ0FBVDs7QUFrQkUsTUFBTUEsV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBTTtBQUV4QixXQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQUs7QUFBQ2hCLGNBQVEsRUFBUkE7QUFBRCxLQUFMLENBREYsQ0FERjtBQVFELEdBVkQ7O0FBWUEsTUFBTWlCLFNBQVMsR0FBR0Msb0VBQVUsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsV0FBWTtBQUN2Q0MsVUFBSSxFQUFFO0FBQ0pDLGdCQUFRLEVBQUU7QUFETixPQURpQztBQUl2Q0MsZ0JBQVUsRUFBRTtBQUNWQyxtQkFBVyxFQUFFSixLQUFLLENBQUNLLE9BQU4sQ0FBYyxDQUFkO0FBREgsT0FKMkI7QUFPdkNDLFdBQUssRUFBRTtBQUNMSixnQkFBUSxFQUFFO0FBREw7QUFQZ0MsS0FBWjtBQUFBLEdBQUQsQ0FBNUI7QUFZQSxNQUFNSyxPQUFPLEdBQUdULFNBQVMsRUFBekI7QUFFRSxTQUNGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRztBQUFNLFFBQUksRUFBQyx5REFBWDtBQUNDLE9BQUcsRUFBQyxZQURMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESCxFQUtFLE1BQUMsd0RBQUQ7QUFBUSxZQUFRLEVBQUMsUUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNGLE1BQUMseURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsNERBQUQ7QUFBWSxRQUFJLEVBQUMsT0FBakI7QUFBeUIsYUFBUyxFQUFFUyxPQUFPLENBQUNKLFVBQTVDO0FBQXdELFNBQUssRUFBQyxTQUE5RDtBQUF3RSxrQkFBVyxNQUFuRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyw4REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FERixFQUlFLE1BQUMsNERBQUQ7QUFBWSxXQUFPLEVBQUMsSUFBcEI7QUFBeUIsYUFBUyxFQUFFSSxPQUFPLENBQUNELEtBQTVDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFKRixFQU9FLE1BQUMsd0RBQUQ7QUFBUSxTQUFLLEVBQUMsU0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBUEYsQ0FERSxDQUxGLEVBZ0JFLE1BQUMsc0RBQUQ7QUFBTSxTQUFLLEVBQUMsU0FBWjtBQUFzQixTQUFLLEVBQUU7QUFBQ0UsY0FBUSxFQUFDO0FBQVYsS0FBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFoQkYsRUFpQkUsTUFBQyxzREFBRDtBQUFNLFNBQUssRUFBQyxXQUFaO0FBQXdCLFNBQUssRUFBRTtBQUFDQSxjQUFRLEVBQUMsT0FBVjtBQUFrQkMsWUFBTSxFQUFDO0FBQXpCLEtBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBakJGLENBREU7QUFvQkgsQ0FyRUQ7O0dBQU1qQyxXOztLQUFBQSxXOztBQWtHU0EsMEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvQ29udHJvbGUuZDZlMWZkODkyYWFlYjU2ZmU4N2EuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgQ29tcG9uZW50LCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHdpdGhJcm9uU2Vzc2lvbiB9IGZyb20gXCJuZXh0LWlyb24tc2Vzc2lvblwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB7QXZhdGFyLCBtYWtlU3R5bGVzLCBcclxuICAgIEFwcEJhcixUb29sYmFyLEljb25CdXR0b24sSWNvbiwgQnV0dG9uLCBDc3NCYXNlbGluZSwgVGV4dEZpZWxkLCBGb3JtQ29udHJvbExhYmVsLCBDaGVja2JveCxMaW5rICxHcmlkLEJveCwgVHlwb2dyYXBoeX0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5pbXBvcnQgRmFjZWJvb2tJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9GYWNlYm9vayc7XHJcbmltcG9ydCBZb3VUdWJlSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvWW91VHViZSc7XHJcbmltcG9ydCBNZW51SWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvTWVudSc7XHJcblxyXG5pbXBvcnQgZmlyZSBmcm9tICcuLi8uLi9jb25maWcvZmlyZS1jb25maWcnO1xyXG5cclxuY29uc3QgUHJpdmF0ZVBhZ2UgPSAoeyB1c2VyIH0pID0+IHtcclxuICBjb25zdCBbYmxvZ3MsIHNldEJsb2dzXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbdXJsQXR1YWwsIHNldFVybEF0dWFsXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtjYW5hbCwgc2V0Q2FuYWxdID0gdXNlU3RhdGUoXCJcIik7XHJcblxyXG51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZmlyZS5kYXRhYmFzZSgpXHJcbiAgICAgIC5yZWYoJ2luZm9BdHVhbCcpXHJcbiAgICAgIC5vbmNlKFwidmFsdWVcIikudGhlbigoc25hcCkgPT4ge1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8qY29uc3QgYmxvZ3MgPSBzbmFwLmRvY3MubWFwKGRvYyA9PiAoe1xyXG4gICAgICAgICAgaWQ6IGRvYy5pZCxcclxuICAgICAgICAgIC4uLmRvYy5kYXRhKClcclxuICAgICAgICB9KSk7Ki9cclxuICAgICAgICBjb25zb2xlLmxvZygnaGVyZScpO1xyXG4gICAgICAgIHZhciByZXMgPSAoc25hcC52YWwoKSlcclxuICAgICAgICBzZXRDYW5hbChyZXMuY2FuYWwpO1xyXG4gICAgICAgIHNldFVybEF0dWFsKHJlcy51cmwpO1xyXG4gICAgICAgIGluZm9zQXR1YWlzKCk7XHJcbiAgICAgICAvLyBzZXRCbG9ncyhibG9ncyk7XHJcbiAgICAgIH0pO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3QgaW5mb3NBdHVhaXMgPSAoKSA9PiB7XHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxoND57e3VybEF0dWFsfX08L2g0PlxyXG4gICAgICA8L2Rpdj5cclxuXHJcblxyXG4gICAgKVxyXG5cclxuICB9XHJcbiAgXHJcbiAgY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgICByb290OiB7XHJcbiAgICAgIGZsZXhHcm93OiAxLFxyXG4gICAgfSxcclxuICAgIG1lbnVCdXR0b246IHtcclxuICAgICAgbWFyZ2luUmlnaHQ6IHRoZW1lLnNwYWNpbmcoMiksXHJcbiAgICB9LFxyXG4gICAgdGl0bGU6IHtcclxuICAgICAgZmxleEdyb3c6IDEsXHJcbiAgICB9LFxyXG4gIH0pKTtcclxuXHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG5cclxuICAgIHJldHVybihcclxuICA8ZGl2PlxyXG4gICAgIDxsaW5rIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2ljb24/ZmFtaWx5PU1hdGVyaWFsK0ljb25zXCJcclxuICAgICAgcmVsPVwic3R5bGVzaGVldFwiPjwvbGluaz5cclxuXHJcblxyXG4gICAgPEFwcEJhciBwb3NpdGlvbj1cInN0YXRpY1wiPlxyXG4gIDxUb29sYmFyPlxyXG4gICAgPEljb25CdXR0b24gZWRnZT1cInN0YXJ0XCIgY2xhc3NOYW1lPXtjbGFzc2VzLm1lbnVCdXR0b259IGNvbG9yPVwiaW5oZXJpdFwiIGFyaWEtbGFiZWw9XCJtZW51XCI+XHJcbiAgICAgIDxNZW51SWNvbiAvPlxyXG4gICAgPC9JY29uQnV0dG9uPlxyXG4gICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg2XCIgY2xhc3NOYW1lPXtjbGFzc2VzLnRpdGxlfT5cclxuICAgICAgTmV3c1xyXG4gICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgPEJ1dHRvbiBjb2xvcj1cImluaGVyaXRcIj5Mb2dpbjwvQnV0dG9uPlxyXG4gIDwvVG9vbGJhcj5cclxuPC9BcHBCYXI+XHJcbiAgICA8SWNvbiBjb2xvcj1cInByaW1hcnlcIiBzdHlsZT17e2ZvbnRTaXplOlwiMTByZW1cIn19PmZhY2Vib29rPC9JY29uPlxyXG4gICAgPEljb24gY29sb3I9XCJzZWNvbmRhcnlcIiBzdHlsZT17e2ZvbnRTaXplOlwiMTByZW1cIixoZWlnaHQ6XCI1NSVcIn19Pm9uZGVtYW5kX3ZpZGVvPC9JY29uPlxyXG4gIDwvZGl2Pik7XHJcbn07XHJcblxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHMgPSB3aXRoSXJvblNlc3Npb24oXHJcblxyXG4gIFxyXG4gIGFzeW5jICh7IHJlcSwgcmVzIH0pID0+IHtcclxuICAgIGNvbnN0IHVzZXIgPSByZXEuc2Vzc2lvbi5nZXQoXCJ1c2VyXCIpO1xyXG4gICAgaWYgKCF1c2VyKSB7XHJcbiAgICAgIHJlcy5zZXRIZWFkZXIoXCJsb2NhdGlvblwiLCBcIi9Db250cm9sZS9sb2dpblwiKTtcclxuICAgICAgcmVzLnN0YXR1c0NvZGUgPSAzMDI7XHJcbiAgICAgIHJlcy5lbmQoKTtcclxuICAgICAgcmV0dXJuIHsgcHJvcHM6IHt9IH07XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgcHJvcHM6IHsgdXNlciB9XHJcbiAgICB9O1xyXG4gIH0sXHJcbiAge1xyXG4gICAgY29va2llTmFtZTogXCJNWVNJVEVDT09LSUVcIixcclxuICAgIGNvb2tpZU9wdGlvbnM6IHtcclxuICAgICAgc2VjdXJlOiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIgPyB0cnVlIDogZmFsc2VcclxuICAgIH0sXHJcbiAgICBwYXNzd29yZDogcHJvY2Vzcy5lbnYuQVBQTElDQVRJT05fU0VDUkVUXHJcbiAgfVxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJpdmF0ZVBhZ2U7Il0sInNvdXJjZVJvb3QiOiIifQ==