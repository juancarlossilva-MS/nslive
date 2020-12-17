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

  var callReady = function callReady() {
    console.log('acho q deu certo');
  };

  var iframe;

  function playFullscreen(event) {
    console.log('acho q deu certo2');
    console.log(ref);
    iframe = ref.current;
    console.log(ref2);
    console.log(event.target);
    var requestFullScreen = iframe.requestFullScreen || iframe.mozRequestFullScreen || iframe.webkitRequestFullScreen;

    if (requestFullScreen) {
      requestFullScreen.bind(iframe)();
    }

    console.log(requestFullScreen);
  }

  return __jsx("div", {
    id: "player",
    ref: ref,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 3
    }
  }, __jsx(react_youtube__WEBPACK_IMPORTED_MODULE_1__["default"], {
    ref: ref2,
    onPlay: playFullscreen,
    videoId: "YjF85_E4p70",
    opts: opts,
    onReady: callReady,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiRXhhbXBsZSIsInByb3BzIiwib3B0cyIsImhlaWdodCIsIndpZHRoIiwicGxheWVyVmFycyIsImF1dG9wbGF5IiwicmVmIiwiUmVhY3QiLCJjcmVhdGVSZWYiLCJyZWYyIiwiY2FsbFJlYWR5IiwiY29uc29sZSIsImxvZyIsImlmcmFtZSIsInBsYXlGdWxsc2NyZWVuIiwiZXZlbnQiLCJjdXJyZW50IiwidGFyZ2V0IiwicmVxdWVzdEZ1bGxTY3JlZW4iLCJtb3pSZXF1ZXN0RnVsbFNjcmVlbiIsIndlYmtpdFJlcXVlc3RGdWxsU2NyZWVuIiwiYmluZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFHQSxJQUFNQSxPQUFPLEdBQUcsU0FBVkEsT0FBVSxDQUFDQyxLQUFELEVBQVc7QUFDekIsTUFBTUMsSUFBSSxHQUFHO0FBQ1hDLFVBQU0sRUFBRSxLQURHO0FBRVhDLFNBQUssRUFBRSxLQUZJO0FBR1hDLGNBQVUsRUFBRTtBQUNWO0FBQ0FDLGNBQVEsRUFBRTtBQUZBO0FBSEQsR0FBYjtBQVFBLE1BQUlDLEdBQUcsZ0JBQUdDLDRDQUFLLENBQUNDLFNBQU4sRUFBVjtBQUNBLE1BQUlDLElBQUksZ0JBQUdGLDRDQUFLLENBQUNDLFNBQU4sRUFBWDs7QUFFQSxNQUFNRSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxHQUFLO0FBRW5CQyxXQUFPLENBQUNDLEdBQVIsQ0FBWSxrQkFBWjtBQUNILEdBSEQ7O0FBSUEsTUFBSUMsTUFBSjs7QUFDQSxXQUFTQyxjQUFULENBQXlCQyxLQUF6QixFQUErQjtBQUM3QkosV0FBTyxDQUFDQyxHQUFSLENBQVksbUJBQVo7QUFDQUQsV0FBTyxDQUFDQyxHQUFSLENBQVlOLEdBQVo7QUFDQU8sVUFBTSxHQUFHUCxHQUFHLENBQUNVLE9BQWI7QUFDQUwsV0FBTyxDQUFDQyxHQUFSLENBQVlILElBQVo7QUFDQUUsV0FBTyxDQUFDQyxHQUFSLENBQVlHLEtBQUssQ0FBQ0UsTUFBbEI7QUFDQSxRQUFJQyxpQkFBaUIsR0FBR0wsTUFBTSxDQUFDSyxpQkFBUCxJQUE0QkwsTUFBTSxDQUFDTSxvQkFBbkMsSUFBMkROLE1BQU0sQ0FBQ08sdUJBQTFGOztBQUNBLFFBQUlGLGlCQUFKLEVBQXVCO0FBQ3JCQSx1QkFBaUIsQ0FBQ0csSUFBbEIsQ0FBdUJSLE1BQXZCO0FBQ0Q7O0FBQ0RGLFdBQU8sQ0FBQ0MsR0FBUixDQUFZTSxpQkFBWjtBQUNEOztBQUVELFNBQ0E7QUFBSyxNQUFFLEVBQUMsUUFBUjtBQUFpQixPQUFHLEVBQUVaLEdBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQSxNQUFDLHFEQUFEO0FBQVMsT0FBRyxFQUFFRyxJQUFkO0FBQW9CLFVBQU0sRUFBRUssY0FBNUI7QUFBNEMsV0FBTyxFQUFDLGFBQXBEO0FBQWtFLFFBQUksRUFBRWIsSUFBeEU7QUFBOEUsV0FBTyxFQUFFUyxTQUF2RjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREEsTUFEQTtBQUlELENBbENEOztLQUFNWCxPO0FBb0NTQSxzRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4xMzM4ZDFmMjVmNDg2OGQwMjY5MC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBZb3VUdWJlIGZyb20gJ3JlYWN0LXlvdXR1YmUnO1xuXG5cbmNvbnN0IEV4YW1wbGUgPSAocHJvcHMpID0+IHtcbiAgY29uc3Qgb3B0cyA9IHtcbiAgICBoZWlnaHQ6ICczOTAnLFxuICAgIHdpZHRoOiAnNjQwJyxcbiAgICBwbGF5ZXJWYXJzOiB7XG4gICAgICAvLyBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS95b3V0dWJlL3BsYXllcl9wYXJhbWV0ZXJzXG4gICAgICBhdXRvcGxheTogMCxcbiAgICB9LFxuICB9O1xuICBsZXQgcmVmID0gUmVhY3QuY3JlYXRlUmVmKCk7XG4gIGxldCByZWYyID0gUmVhY3QuY3JlYXRlUmVmKCk7XG5cbiAgY29uc3QgY2FsbFJlYWR5ID0gKCkgPT57XG4gICAgXG4gICAgICBjb25zb2xlLmxvZygnYWNobyBxIGRldSBjZXJ0bycpO1xuICB9XG4gIHZhciBpZnJhbWU7XG4gIGZ1bmN0aW9uIHBsYXlGdWxsc2NyZWVuIChldmVudCl7XG4gICAgY29uc29sZS5sb2coJ2FjaG8gcSBkZXUgY2VydG8yJyk7XG4gICAgY29uc29sZS5sb2cocmVmKTtcbiAgICBpZnJhbWUgPSByZWYuY3VycmVudDtcbiAgICBjb25zb2xlLmxvZyhyZWYyKTtcbiAgICBjb25zb2xlLmxvZyhldmVudC50YXJnZXQpXG4gICAgdmFyIHJlcXVlc3RGdWxsU2NyZWVuID0gaWZyYW1lLnJlcXVlc3RGdWxsU2NyZWVuIHx8IGlmcmFtZS5tb3pSZXF1ZXN0RnVsbFNjcmVlbiB8fCBpZnJhbWUud2Via2l0UmVxdWVzdEZ1bGxTY3JlZW47XG4gICAgaWYgKHJlcXVlc3RGdWxsU2NyZWVuKSB7XG4gICAgICByZXF1ZXN0RnVsbFNjcmVlbi5iaW5kKGlmcmFtZSkoKTtcbiAgICB9XG4gICAgY29uc29sZS5sb2cocmVxdWVzdEZ1bGxTY3JlZW4pO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgPGRpdiBpZD1cInBsYXllclwiIHJlZj17cmVmfSA+XG4gIDxZb3VUdWJlIHJlZj17cmVmMn0gb25QbGF5PXtwbGF5RnVsbHNjcmVlbn0gdmlkZW9JZD1cIllqRjg1X0U0cDcwXCIgb3B0cz17b3B0c30gb25SZWFkeT17Y2FsbFJlYWR5fSAvPjtcbiAgPC9kaXY+KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgRXhhbXBsZTsiXSwic291cmNlUm9vdCI6IiJ9