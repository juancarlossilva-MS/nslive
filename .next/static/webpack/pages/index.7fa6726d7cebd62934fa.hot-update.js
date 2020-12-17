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
      autoplay: 0
    }
  };
  var ref = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();
  var ref2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();
  var player;

  var callReady = function callReady(event) {
    player = event.target;
    console.log('acho q deu certo');
  };

  var iframe;

  function playFullscreen() {
    console.log('acho q deu certo2');
    console.log(ref);
    console.log(ref.current);
    iframe = ref.current;
    player.playVideo();
    console.log(ref2);
    console.log(ref2.current);
    var requestFullScreen = iframe.requestFullScreen || iframe.mozRequestFullScreen || iframe.webkitRequestFullScreen;

    if (requestFullScreen) {
      requestFullScreen.bind(iframe)();
    }

    console.log(requestFullScreen);
  }

  return __jsx("div", {
    style: {
      display: "none"
    },
    onClick: playFullscreen,
    ref: ref,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 3
    }
  }, __jsx(react_youtube__WEBPACK_IMPORTED_MODULE_1__["default"], {
    ref: ref2,
    videoId: "YjF85_E4p70",
    opts: opts,
    onReady: callReady,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiRXhhbXBsZSIsInByb3BzIiwib3B0cyIsImhlaWdodCIsIndpZHRoIiwicGxheWVyVmFycyIsImF1dG9wbGF5IiwicmVmIiwiUmVhY3QiLCJjcmVhdGVSZWYiLCJyZWYyIiwicGxheWVyIiwiY2FsbFJlYWR5IiwiZXZlbnQiLCJ0YXJnZXQiLCJjb25zb2xlIiwibG9nIiwiaWZyYW1lIiwicGxheUZ1bGxzY3JlZW4iLCJjdXJyZW50IiwicGxheVZpZGVvIiwicmVxdWVzdEZ1bGxTY3JlZW4iLCJtb3pSZXF1ZXN0RnVsbFNjcmVlbiIsIndlYmtpdFJlcXVlc3RGdWxsU2NyZWVuIiwiYmluZCIsImRpc3BsYXkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBR0EsSUFBTUEsT0FBTyxHQUFHLFNBQVZBLE9BQVUsQ0FBQ0MsS0FBRCxFQUFXO0FBQ3pCLE1BQU1DLElBQUksR0FBRztBQUNYQyxVQUFNLEVBQUUsS0FERztBQUVYQyxTQUFLLEVBQUUsS0FGSTtBQUdYQyxjQUFVLEVBQUU7QUFDVjtBQUNBQyxjQUFRLEVBQUU7QUFGQTtBQUhELEdBQWI7QUFRQSxNQUFJQyxHQUFHLGdCQUFHQyw0Q0FBSyxDQUFDQyxTQUFOLEVBQVY7QUFDQSxNQUFJQyxJQUFJLGdCQUFHRiw0Q0FBSyxDQUFDQyxTQUFOLEVBQVg7QUFDQSxNQUFJRSxNQUFKOztBQUNBLE1BQU1DLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQUNDLEtBQUQsRUFBVTtBQUMxQkYsVUFBTSxHQUFHRSxLQUFLLENBQUNDLE1BQWY7QUFDRUMsV0FBTyxDQUFDQyxHQUFSLENBQVksa0JBQVo7QUFDSCxHQUhEOztBQUlBLE1BQUlDLE1BQUo7O0FBQ0EsV0FBU0MsY0FBVCxHQUEwQjtBQUN4QkgsV0FBTyxDQUFDQyxHQUFSLENBQVksbUJBQVo7QUFDQUQsV0FBTyxDQUFDQyxHQUFSLENBQVlULEdBQVo7QUFDQVEsV0FBTyxDQUFDQyxHQUFSLENBQVlULEdBQUcsQ0FBQ1ksT0FBaEI7QUFFQUYsVUFBTSxHQUFHVixHQUFHLENBQUNZLE9BQWI7QUFFQVIsVUFBTSxDQUFDUyxTQUFQO0FBQ0FMLFdBQU8sQ0FBQ0MsR0FBUixDQUFZTixJQUFaO0FBQ0FLLFdBQU8sQ0FBQ0MsR0FBUixDQUFZTixJQUFJLENBQUNTLE9BQWpCO0FBQ0EsUUFBSUUsaUJBQWlCLEdBQUdKLE1BQU0sQ0FBQ0ksaUJBQVAsSUFBNEJKLE1BQU0sQ0FBQ0ssb0JBQW5DLElBQTJETCxNQUFNLENBQUNNLHVCQUExRjs7QUFDQSxRQUFJRixpQkFBSixFQUF1QjtBQUNyQkEsdUJBQWlCLENBQUNHLElBQWxCLENBQXVCUCxNQUF2QjtBQUNEOztBQUVERixXQUFPLENBQUNDLEdBQVIsQ0FBWUssaUJBQVo7QUFDRDs7QUFFRCxTQUNBO0FBQUssU0FBSyxFQUFFO0FBQUNJLGFBQU8sRUFBQztBQUFULEtBQVo7QUFBK0IsV0FBTyxFQUFFUCxjQUF4QztBQUF3RCxPQUFHLEVBQUVYLEdBQTdEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQSxNQUFDLHFEQUFEO0FBQVMsT0FBRyxFQUFFRyxJQUFkO0FBQW9CLFdBQU8sRUFBQyxhQUE1QjtBQUEwQyxRQUFJLEVBQUVSLElBQWhEO0FBQXNELFdBQU8sRUFBRVUsU0FBL0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURBLE1BREE7QUFJRCxDQXZDRDs7S0FBTVosTztBQXlDU0Esc0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguN2ZhNjcyNmQ3Y2ViZDYyOTM0ZmEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgWW91VHViZSBmcm9tICdyZWFjdC15b3V0dWJlJztcblxuXG5jb25zdCBFeGFtcGxlID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IG9wdHMgPSB7XG4gICAgaGVpZ2h0OiAnMzkwJyxcbiAgICB3aWR0aDogJzY0MCcsXG4gICAgcGxheWVyVmFyczoge1xuICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS9wbGF5ZXJfcGFyYW1ldGVyc1xuICAgICAgYXV0b3BsYXk6IDAsXG4gICAgfSxcbiAgfTtcbiAgbGV0IHJlZiA9IFJlYWN0LmNyZWF0ZVJlZigpO1xuICBsZXQgcmVmMiA9IFJlYWN0LmNyZWF0ZVJlZigpO1xuICB2YXIgcGxheWVyO1xuICBjb25zdCBjYWxsUmVhZHkgPSAoZXZlbnQpID0+e1xuICAgIHBsYXllciA9IGV2ZW50LnRhcmdldDtcbiAgICAgIGNvbnNvbGUubG9nKCdhY2hvIHEgZGV1IGNlcnRvJyk7XG4gIH1cbiAgdmFyIGlmcmFtZTtcbiAgZnVuY3Rpb24gcGxheUZ1bGxzY3JlZW4gKCl7XG4gICAgY29uc29sZS5sb2coJ2FjaG8gcSBkZXUgY2VydG8yJyk7XG4gICAgY29uc29sZS5sb2cocmVmKTtcbiAgICBjb25zb2xlLmxvZyhyZWYuY3VycmVudCk7XG4gICBcbiAgICBpZnJhbWUgPSByZWYuY3VycmVudDtcblxuICAgIHBsYXllci5wbGF5VmlkZW8oKTtcbiAgICBjb25zb2xlLmxvZyhyZWYyKVxuICAgIGNvbnNvbGUubG9nKHJlZjIuY3VycmVudClcbiAgICB2YXIgcmVxdWVzdEZ1bGxTY3JlZW4gPSBpZnJhbWUucmVxdWVzdEZ1bGxTY3JlZW4gfHwgaWZyYW1lLm1velJlcXVlc3RGdWxsU2NyZWVuIHx8IGlmcmFtZS53ZWJraXRSZXF1ZXN0RnVsbFNjcmVlbjtcbiAgICBpZiAocmVxdWVzdEZ1bGxTY3JlZW4pIHtcbiAgICAgIHJlcXVlc3RGdWxsU2NyZWVuLmJpbmQoaWZyYW1lKSgpO1xuICAgIH1cblxuICAgIGNvbnNvbGUubG9nKHJlcXVlc3RGdWxsU2NyZWVuKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gIDxkaXYgc3R5bGU9e3tkaXNwbGF5Olwibm9uZVwifX0gIG9uQ2xpY2s9e3BsYXlGdWxsc2NyZWVufSByZWY9e3JlZn0gPlxuICA8WW91VHViZSByZWY9e3JlZjJ9IHZpZGVvSWQ9XCJZakY4NV9FNHA3MFwiIG9wdHM9e29wdHN9IG9uUmVhZHk9e2NhbGxSZWFkeX0gLz47XG4gIDwvZGl2Pik7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEV4YW1wbGU7Il0sInNvdXJjZVJvb3QiOiIifQ==