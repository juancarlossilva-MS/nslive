webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_youtube__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-youtube */ "./node_modules/react-youtube/dist/index.esm.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\WINDOWS\\Desktop\\APP\\nslive2.0\\pages\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var Example = function Example(props) {
  var opts = {
    height: '390',
    width: '640',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1
    }
  };
  var ref = createRef();

  var callReady = function callReady() {
    console.log('acho q deu certo');
  };

  function playFullscreen() {
    player.playVideo(); //won't work on mobile

    var requestFullScreen = iframe.requestFullScreen || iframe.mozRequestFullScreen || iframe.webkitRequestFullScreen;

    if (requestFullScreen) {
      requestFullScreen.bind(iframe)();
    }
  }

  return __jsx("div", {
    id: "player",
    onClick: playFullscreen,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 3
    }
  }, __jsx(react_youtube__WEBPACK_IMPORTED_MODULE_1__["default"], {
    ref: ref,
    videoId: "YjF85_E4p70",
    opts: opts,
    onReady: callReady,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 3
    }
  }), ";");
};

_c = Example;
/* harmony default export */ __webpack_exports__["default"] = (Example);

var _c;

$RefreshReg$(_c, "Example");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiRXhhbXBsZSIsInByb3BzIiwib3B0cyIsImhlaWdodCIsIndpZHRoIiwicGxheWVyVmFycyIsImF1dG9wbGF5IiwicmVmIiwiY3JlYXRlUmVmIiwiY2FsbFJlYWR5IiwiY29uc29sZSIsImxvZyIsInBsYXlGdWxsc2NyZWVuIiwicGxheWVyIiwicGxheVZpZGVvIiwicmVxdWVzdEZ1bGxTY3JlZW4iLCJpZnJhbWUiLCJtb3pSZXF1ZXN0RnVsbFNjcmVlbiIsIndlYmtpdFJlcXVlc3RGdWxsU2NyZWVuIiwiYmluZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFHQSxJQUFNQSxPQUFPLEdBQUcsU0FBVkEsT0FBVSxDQUFDQyxLQUFELEVBQVc7QUFDekIsTUFBTUMsSUFBSSxHQUFHO0FBQ1hDLFVBQU0sRUFBRSxLQURHO0FBRVhDLFNBQUssRUFBRSxLQUZJO0FBR1hDLGNBQVUsRUFBRTtBQUNWO0FBQ0FDLGNBQVEsRUFBRTtBQUZBO0FBSEQsR0FBYjtBQVFBLE1BQUlDLEdBQUcsR0FBR0MsU0FBUyxFQUFuQjs7QUFDQSxNQUFNQyxTQUFTLEdBQUcsU0FBWkEsU0FBWSxHQUFLO0FBQ25CQyxXQUFPLENBQUNDLEdBQVIsQ0FBWSxrQkFBWjtBQUNILEdBRkQ7O0FBSUEsV0FBU0MsY0FBVCxHQUEwQjtBQUN4QkMsVUFBTSxDQUFDQyxTQUFQLEdBRHdCLENBQ0w7O0FBRW5CLFFBQUlDLGlCQUFpQixHQUFHQyxNQUFNLENBQUNELGlCQUFQLElBQTRCQyxNQUFNLENBQUNDLG9CQUFuQyxJQUEyREQsTUFBTSxDQUFDRSx1QkFBMUY7O0FBQ0EsUUFBSUgsaUJBQUosRUFBdUI7QUFDckJBLHVCQUFpQixDQUFDSSxJQUFsQixDQUF1QkgsTUFBdkI7QUFDRDtBQUNGOztBQUVELFNBQ0E7QUFBSyxNQUFFLEVBQUMsUUFBUjtBQUFpQixXQUFPLEVBQUVKLGNBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQSxNQUFDLHFEQUFEO0FBQVMsT0FBRyxFQUFFTCxHQUFkO0FBQW1CLFdBQU8sRUFBQyxhQUEzQjtBQUF5QyxRQUFJLEVBQUVMLElBQS9DO0FBQXFELFdBQU8sRUFBRU8sU0FBOUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURBLE1BREE7QUFJRCxDQTNCRDs7S0FBTVQsTztBQTZCU0Esc0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZTViYmQ3YWQwODA3YTgwYmI4YTMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgWW91VHViZSBmcm9tICdyZWFjdC15b3V0dWJlJztcblxuXG5jb25zdCBFeGFtcGxlID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IG9wdHMgPSB7XG4gICAgaGVpZ2h0OiAnMzkwJyxcbiAgICB3aWR0aDogJzY0MCcsXG4gICAgcGxheWVyVmFyczoge1xuICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS9wbGF5ZXJfcGFyYW1ldGVyc1xuICAgICAgYXV0b3BsYXk6IDEsXG4gICAgfSxcbiAgfTtcbiAgbGV0IHJlZiA9IGNyZWF0ZVJlZigpO1xuICBjb25zdCBjYWxsUmVhZHkgPSAoKSA9PntcbiAgICAgIGNvbnNvbGUubG9nKCdhY2hvIHEgZGV1IGNlcnRvJyk7XG4gIH1cblxuICBmdW5jdGlvbiBwbGF5RnVsbHNjcmVlbiAoKXtcbiAgICBwbGF5ZXIucGxheVZpZGVvKCk7Ly93b24ndCB3b3JrIG9uIG1vYmlsZVxuICAgIFxuICAgIHZhciByZXF1ZXN0RnVsbFNjcmVlbiA9IGlmcmFtZS5yZXF1ZXN0RnVsbFNjcmVlbiB8fCBpZnJhbWUubW96UmVxdWVzdEZ1bGxTY3JlZW4gfHwgaWZyYW1lLndlYmtpdFJlcXVlc3RGdWxsU2NyZWVuO1xuICAgIGlmIChyZXF1ZXN0RnVsbFNjcmVlbikge1xuICAgICAgcmVxdWVzdEZ1bGxTY3JlZW4uYmluZChpZnJhbWUpKCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIChcbiAgPGRpdiBpZD1cInBsYXllclwiIG9uQ2xpY2s9e3BsYXlGdWxsc2NyZWVufT5cbiAgPFlvdVR1YmUgcmVmPXtyZWZ9IHZpZGVvSWQ9XCJZakY4NV9FNHA3MFwiIG9wdHM9e29wdHN9IG9uUmVhZHk9e2NhbGxSZWFkeX0gLz47XG4gIDwvZGl2Pik7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEV4YW1wbGU7Il0sInNvdXJjZVJvb3QiOiIifQ==