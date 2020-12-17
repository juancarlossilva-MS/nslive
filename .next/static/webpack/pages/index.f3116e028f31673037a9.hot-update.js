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
    height: '100%',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1
    }
  };
  var ref = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();

  var callReady = function callReady() {
    console.log('acho q deu certo');
  };

  var iframe;

  function playFullscreen() {
    console.log('acho q deu certo2');
    console.log(ref);
    iframe = ref.current;
    var requestFullScreen = iframe.requestFullScreen || iframe.mozRequestFullScreen || iframe.webkitRequestFullScreen;

    if (requestFullScreen) {
      requestFullScreen.bind(iframe)();
    }

    console.log(requestFullScreen);
  }

  return __jsx("div", {
    id: "player",
    ref: ref,
    onClick: playFullscreen,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 3
    }
  }, __jsx(react_youtube__WEBPACK_IMPORTED_MODULE_1__["default"], {
    videoId: "YjF85_E4p70",
    opts: opts,
    onReady: callReady,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiRXhhbXBsZSIsInByb3BzIiwib3B0cyIsImhlaWdodCIsIndpZHRoIiwicGxheWVyVmFycyIsImF1dG9wbGF5IiwicmVmIiwiUmVhY3QiLCJjcmVhdGVSZWYiLCJjYWxsUmVhZHkiLCJjb25zb2xlIiwibG9nIiwiaWZyYW1lIiwicGxheUZ1bGxzY3JlZW4iLCJjdXJyZW50IiwicmVxdWVzdEZ1bGxTY3JlZW4iLCJtb3pSZXF1ZXN0RnVsbFNjcmVlbiIsIndlYmtpdFJlcXVlc3RGdWxsU2NyZWVuIiwiYmluZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFHQSxJQUFNQSxPQUFPLEdBQUcsU0FBVkEsT0FBVSxDQUFDQyxLQUFELEVBQVc7QUFDekIsTUFBTUMsSUFBSSxHQUFHO0FBQ1hDLFVBQU0sRUFBRSxNQURHO0FBRVhDLFNBQUssRUFBRSxNQUZJO0FBR1hDLGNBQVUsRUFBRTtBQUNWO0FBQ0FDLGNBQVEsRUFBRTtBQUZBO0FBSEQsR0FBYjtBQVFBLE1BQUlDLEdBQUcsZ0JBQUdDLDRDQUFLLENBQUNDLFNBQU4sRUFBVjs7QUFFQSxNQUFNQyxTQUFTLEdBQUcsU0FBWkEsU0FBWSxHQUFLO0FBRW5CQyxXQUFPLENBQUNDLEdBQVIsQ0FBWSxrQkFBWjtBQUNILEdBSEQ7O0FBSUEsTUFBSUMsTUFBSjs7QUFDQSxXQUFTQyxjQUFULEdBQTBCO0FBQ3hCSCxXQUFPLENBQUNDLEdBQVIsQ0FBWSxtQkFBWjtBQUNBRCxXQUFPLENBQUNDLEdBQVIsQ0FBWUwsR0FBWjtBQUNBTSxVQUFNLEdBQUdOLEdBQUcsQ0FBQ1EsT0FBYjtBQUNBLFFBQUlDLGlCQUFpQixHQUFHSCxNQUFNLENBQUNHLGlCQUFQLElBQTRCSCxNQUFNLENBQUNJLG9CQUFuQyxJQUEyREosTUFBTSxDQUFDSyx1QkFBMUY7O0FBQ0EsUUFBSUYsaUJBQUosRUFBdUI7QUFDckJBLHVCQUFpQixDQUFDRyxJQUFsQixDQUF1Qk4sTUFBdkI7QUFDRDs7QUFDREYsV0FBTyxDQUFDQyxHQUFSLENBQVlJLGlCQUFaO0FBQ0Q7O0FBRUQsU0FDQTtBQUFLLE1BQUUsRUFBQyxRQUFSO0FBQWlCLE9BQUcsRUFBRVQsR0FBdEI7QUFBMkIsV0FBTyxFQUFFTyxjQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0EsTUFBQyxxREFBRDtBQUFVLFdBQU8sRUFBQyxhQUFsQjtBQUFnQyxRQUFJLEVBQUVaLElBQXRDO0FBQTRDLFdBQU8sRUFBRVEsU0FBckQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURBLE1BREE7QUFJRCxDQS9CRDs7S0FBTVYsTztBQWlDU0Esc0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZjMxMTZlMDI4ZjMxNjczMDM3YTkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgWW91VHViZSBmcm9tICdyZWFjdC15b3V0dWJlJztcblxuXG5jb25zdCBFeGFtcGxlID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IG9wdHMgPSB7XG4gICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgd2lkdGg6ICcxMDAlJyxcbiAgICBwbGF5ZXJWYXJzOiB7XG4gICAgICAvLyBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3BsYXllcl9wYXJhbWV0ZXJzXG4gICAgICBhdXRvcGxheTogMSxcbiAgICB9LFxuICB9O1xuICBsZXQgcmVmID0gUmVhY3QuY3JlYXRlUmVmKCk7XG5cbiAgY29uc3QgY2FsbFJlYWR5ID0gKCkgPT57XG4gICAgXG4gICAgICBjb25zb2xlLmxvZygnYWNobyBxIGRldSBjZXJ0bycpO1xuICB9XG4gIHZhciBpZnJhbWU7XG4gIGZ1bmN0aW9uIHBsYXlGdWxsc2NyZWVuICgpe1xuICAgIGNvbnNvbGUubG9nKCdhY2hvIHEgZGV1IGNlcnRvMicpO1xuICAgIGNvbnNvbGUubG9nKHJlZik7XG4gICAgaWZyYW1lID0gcmVmLmN1cnJlbnQ7XG4gICAgdmFyIHJlcXVlc3RGdWxsU2NyZWVuID0gaWZyYW1lLnJlcXVlc3RGdWxsU2NyZWVuIHx8IGlmcmFtZS5tb3pSZXF1ZXN0RnVsbFNjcmVlbiB8fCBpZnJhbWUud2Via2l0UmVxdWVzdEZ1bGxTY3JlZW47XG4gICAgaWYgKHJlcXVlc3RGdWxsU2NyZWVuKSB7XG4gICAgICByZXF1ZXN0RnVsbFNjcmVlbi5iaW5kKGlmcmFtZSkoKTtcbiAgICB9XG4gICAgY29uc29sZS5sb2cocmVxdWVzdEZ1bGxTY3JlZW4pO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgPGRpdiBpZD1cInBsYXllclwiIHJlZj17cmVmfSBvbkNsaWNrPXtwbGF5RnVsbHNjcmVlbn0+XG4gIDxZb3VUdWJlICB2aWRlb0lkPVwiWWpGODVfRTRwNzBcIiBvcHRzPXtvcHRzfSBvblJlYWR5PXtjYWxsUmVhZHl9IC8+O1xuICA8L2Rpdj4pO1xufVxuXG5leHBvcnQgZGVmYXVsdCBFeGFtcGxlOyJdLCJzb3VyY2VSb290IjoiIn0=