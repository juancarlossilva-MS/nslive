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
  var player;

  var callReady = function callReady(event) {
    player = event.target;
    console.log('acho q deu certo');
  };

  var iframe;

  function playFullscreen() {
    console.log('acho q deu certo2');
    iframe = ref.current;
    player.playVideo();
    console.log(iframe);
    var requestFullScreen = iframe.requestFullScreen || iframe.mozRequestFullScreen || iframe.webkitRequestFullScreen;

    if (requestFullScreen) {
      requestFullScreen.bind(iframe)();
    }

    console.log(iframe);
    console.log(requestFullScreen);
  }

  return __jsx("div", {
    onClick: playFullscreen,
    ref: ref,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 3
    }
  }, __jsx(react_youtube__WEBPACK_IMPORTED_MODULE_1__["default"], {
    videoId: "YjF85_E4p70",
    opts: opts,
    onReady: callReady,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiRXhhbXBsZSIsInByb3BzIiwib3B0cyIsImhlaWdodCIsIndpZHRoIiwicGxheWVyVmFycyIsImF1dG9wbGF5IiwicmVmIiwiUmVhY3QiLCJjcmVhdGVSZWYiLCJwbGF5ZXIiLCJjYWxsUmVhZHkiLCJldmVudCIsInRhcmdldCIsImNvbnNvbGUiLCJsb2ciLCJpZnJhbWUiLCJwbGF5RnVsbHNjcmVlbiIsImN1cnJlbnQiLCJwbGF5VmlkZW8iLCJyZXF1ZXN0RnVsbFNjcmVlbiIsIm1velJlcXVlc3RGdWxsU2NyZWVuIiwid2Via2l0UmVxdWVzdEZ1bGxTY3JlZW4iLCJiaW5kIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUdBLElBQU1BLE9BQU8sR0FBRyxTQUFWQSxPQUFVLENBQUNDLEtBQUQsRUFBVztBQUN6QixNQUFNQyxJQUFJLEdBQUc7QUFDWEMsVUFBTSxFQUFFLEtBREc7QUFFWEMsU0FBSyxFQUFFLEtBRkk7QUFHWEMsY0FBVSxFQUFFO0FBQ1Y7QUFDQUMsY0FBUSxFQUFFO0FBRkE7QUFIRCxHQUFiO0FBUUEsTUFBSUMsR0FBRyxnQkFBR0MsNENBQUssQ0FBQ0MsU0FBTixFQUFWO0FBQ0EsTUFBSUMsTUFBSjs7QUFDQSxNQUFNQyxTQUFTLEdBQUcsU0FBWkEsU0FBWSxDQUFDQyxLQUFELEVBQVU7QUFDMUJGLFVBQU0sR0FBR0UsS0FBSyxDQUFDQyxNQUFmO0FBQ0VDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLGtCQUFaO0FBQ0gsR0FIRDs7QUFJQSxNQUFJQyxNQUFKOztBQUNBLFdBQVNDLGNBQVQsR0FBMEI7QUFDeEJILFdBQU8sQ0FBQ0MsR0FBUixDQUFZLG1CQUFaO0FBRUFDLFVBQU0sR0FBR1QsR0FBRyxDQUFDVyxPQUFiO0FBRUFSLFVBQU0sQ0FBQ1MsU0FBUDtBQUNBTCxXQUFPLENBQUNDLEdBQVIsQ0FBWUMsTUFBWjtBQUNBLFFBQUlJLGlCQUFpQixHQUFHSixNQUFNLENBQUNJLGlCQUFQLElBQTRCSixNQUFNLENBQUNLLG9CQUFuQyxJQUEyREwsTUFBTSxDQUFDTSx1QkFBMUY7O0FBQ0EsUUFBSUYsaUJBQUosRUFBdUI7QUFDckJBLHVCQUFpQixDQUFDRyxJQUFsQixDQUF1QlAsTUFBdkI7QUFDRDs7QUFDREYsV0FBTyxDQUFDQyxHQUFSLENBQVlDLE1BQVo7QUFDQUYsV0FBTyxDQUFDQyxHQUFSLENBQVlLLGlCQUFaO0FBQ0Q7O0FBRUQsU0FDQTtBQUFNLFdBQU8sRUFBRUgsY0FBZjtBQUErQixPQUFHLEVBQUVWLEdBQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQSxNQUFDLHFEQUFEO0FBQVMsV0FBTyxFQUFDLGFBQWpCO0FBQStCLFFBQUksRUFBRUwsSUFBckM7QUFBMkMsV0FBTyxFQUFFUyxTQUFwRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREEsTUFEQTtBQUlELENBbkNEOztLQUFNWCxPO0FBcUNTQSxzRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC42MmQ2OTgzNzhlNTEzOTNhY2Y2YS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBZb3VUdWJlIGZyb20gJ3JlYWN0LXlvdXR1YmUnO1xuXG5cbmNvbnN0IEV4YW1wbGUgPSAocHJvcHMpID0+IHtcbiAgY29uc3Qgb3B0cyA9IHtcbiAgICBoZWlnaHQ6ICczOTAnLFxuICAgIHdpZHRoOiAnNjQwJyxcbiAgICBwbGF5ZXJWYXJzOiB7XG4gICAgICAvLyBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3BsYXllcl9wYXJhbWV0ZXJzXG4gICAgICBhdXRvcGxheTogMCxcbiAgICB9LFxuICB9O1xuICBsZXQgcmVmID0gUmVhY3QuY3JlYXRlUmVmKCk7XG4gIHZhciBwbGF5ZXI7XG4gIGNvbnN0IGNhbGxSZWFkeSA9IChldmVudCkgPT57XG4gICAgcGxheWVyID0gZXZlbnQudGFyZ2V0O1xuICAgICAgY29uc29sZS5sb2coJ2FjaG8gcSBkZXUgY2VydG8nKTtcbiAgfVxuICB2YXIgaWZyYW1lO1xuICBmdW5jdGlvbiBwbGF5RnVsbHNjcmVlbiAoKXtcbiAgICBjb25zb2xlLmxvZygnYWNobyBxIGRldSBjZXJ0bzInKTtcbiAgICBcbiAgICBpZnJhbWUgPSByZWYuY3VycmVudDtcbiAgICBcbiAgICBwbGF5ZXIucGxheVZpZGVvKCk7XG4gICAgY29uc29sZS5sb2coaWZyYW1lKTtcbiAgICB2YXIgcmVxdWVzdEZ1bGxTY3JlZW4gPSBpZnJhbWUucmVxdWVzdEZ1bGxTY3JlZW4gfHwgaWZyYW1lLm1velJlcXVlc3RGdWxsU2NyZWVuIHx8IGlmcmFtZS53ZWJraXRSZXF1ZXN0RnVsbFNjcmVlbjtcbiAgICBpZiAocmVxdWVzdEZ1bGxTY3JlZW4pIHtcbiAgICAgIHJlcXVlc3RGdWxsU2NyZWVuLmJpbmQoaWZyYW1lKSgpO1xuICAgIH1cbiAgICBjb25zb2xlLmxvZyhpZnJhbWUpO1xuICAgIGNvbnNvbGUubG9nKHJlcXVlc3RGdWxsU2NyZWVuKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gIDxkaXYgIG9uQ2xpY2s9e3BsYXlGdWxsc2NyZWVufSByZWY9e3JlZn0gPlxuICA8WW91VHViZSB2aWRlb0lkPVwiWWpGODVfRTRwNzBcIiBvcHRzPXtvcHRzfSBvblJlYWR5PXtjYWxsUmVhZHl9IC8+O1xuICA8L2Rpdj4pO1xufVxuXG5leHBvcnQgZGVmYXVsdCBFeGFtcGxlOyJdLCJzb3VyY2VSb290IjoiIn0=