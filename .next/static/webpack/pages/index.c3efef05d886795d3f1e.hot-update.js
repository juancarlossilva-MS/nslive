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
    console.log('acho q deu certo2');
    var requestFullScreen = ref.requestFullScreen || ref.mozRequestFullScreen || ref.webkitRequestFullScreen;

    if (requestFullScreen) {
      requestFullScreen.bind(ref)();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiRXhhbXBsZSIsInByb3BzIiwib3B0cyIsImhlaWdodCIsIndpZHRoIiwicGxheWVyVmFycyIsImF1dG9wbGF5IiwicmVmIiwiY3JlYXRlUmVmIiwiY2FsbFJlYWR5IiwiY29uc29sZSIsImxvZyIsInBsYXlGdWxsc2NyZWVuIiwicmVxdWVzdEZ1bGxTY3JlZW4iLCJtb3pSZXF1ZXN0RnVsbFNjcmVlbiIsIndlYmtpdFJlcXVlc3RGdWxsU2NyZWVuIiwiYmluZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFHQSxJQUFNQSxPQUFPLEdBQUcsU0FBVkEsT0FBVSxDQUFDQyxLQUFELEVBQVc7QUFDekIsTUFBTUMsSUFBSSxHQUFHO0FBQ1hDLFVBQU0sRUFBRSxLQURHO0FBRVhDLFNBQUssRUFBRSxLQUZJO0FBR1hDLGNBQVUsRUFBRTtBQUNWO0FBQ0FDLGNBQVEsRUFBRTtBQUZBO0FBSEQsR0FBYjtBQVFBLE1BQUlDLEdBQUcsR0FBR0MsU0FBUyxFQUFuQjs7QUFDQSxNQUFNQyxTQUFTLEdBQUcsU0FBWkEsU0FBWSxHQUFLO0FBQ25CQyxXQUFPLENBQUNDLEdBQVIsQ0FBWSxrQkFBWjtBQUNILEdBRkQ7O0FBSUEsV0FBU0MsY0FBVCxHQUEwQjtBQUN4QkYsV0FBTyxDQUFDQyxHQUFSLENBQVksbUJBQVo7QUFFQSxRQUFJRSxpQkFBaUIsR0FBR04sR0FBRyxDQUFDTSxpQkFBSixJQUF5Qk4sR0FBRyxDQUFDTyxvQkFBN0IsSUFBcURQLEdBQUcsQ0FBQ1EsdUJBQWpGOztBQUNBLFFBQUlGLGlCQUFKLEVBQXVCO0FBQ3JCQSx1QkFBaUIsQ0FBQ0csSUFBbEIsQ0FBdUJULEdBQXZCO0FBQ0Q7QUFDRjs7QUFFRCxTQUNBO0FBQUssTUFBRSxFQUFDLFFBQVI7QUFBaUIsV0FBTyxFQUFFSyxjQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0EsTUFBQyxxREFBRDtBQUFTLE9BQUcsRUFBRUwsR0FBZDtBQUFtQixXQUFPLEVBQUMsYUFBM0I7QUFBeUMsUUFBSSxFQUFFTCxJQUEvQztBQUFxRCxXQUFPLEVBQUVPLFNBQTlEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFEQSxNQURBO0FBSUQsQ0EzQkQ7O0tBQU1ULE87QUE2QlNBLHNFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmMzZWZlZjA1ZDg4Njc5NWQzZjFlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFlvdVR1YmUgZnJvbSAncmVhY3QteW91dHViZSc7XG5cblxuY29uc3QgRXhhbXBsZSA9IChwcm9wcykgPT4ge1xuICBjb25zdCBvcHRzID0ge1xuICAgIGhlaWdodDogJzM5MCcsXG4gICAgd2lkdGg6ICc2NDAnLFxuICAgIHBsYXllclZhcnM6IHtcbiAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvcGxheWVyX3BhcmFtZXRlcnNcbiAgICAgIGF1dG9wbGF5OiAxLFxuICAgIH0sXG4gIH07XG4gIGxldCByZWYgPSBjcmVhdGVSZWYoKTtcbiAgY29uc3QgY2FsbFJlYWR5ID0gKCkgPT57XG4gICAgICBjb25zb2xlLmxvZygnYWNobyBxIGRldSBjZXJ0bycpO1xuICB9XG5cbiAgZnVuY3Rpb24gcGxheUZ1bGxzY3JlZW4gKCl7XG4gICAgY29uc29sZS5sb2coJ2FjaG8gcSBkZXUgY2VydG8yJyk7XG5cbiAgICB2YXIgcmVxdWVzdEZ1bGxTY3JlZW4gPSByZWYucmVxdWVzdEZ1bGxTY3JlZW4gfHwgcmVmLm1velJlcXVlc3RGdWxsU2NyZWVuIHx8IHJlZi53ZWJraXRSZXF1ZXN0RnVsbFNjcmVlbjtcbiAgICBpZiAocmVxdWVzdEZ1bGxTY3JlZW4pIHtcbiAgICAgIHJlcXVlc3RGdWxsU2NyZWVuLmJpbmQocmVmKSgpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiAoXG4gIDxkaXYgaWQ9XCJwbGF5ZXJcIiBvbkNsaWNrPXtwbGF5RnVsbHNjcmVlbn0+XG4gIDxZb3VUdWJlIHJlZj17cmVmfSB2aWRlb0lkPVwiWWpGODVfRTRwNzBcIiBvcHRzPXtvcHRzfSBvblJlYWR5PXtjYWxsUmVhZHl9IC8+O1xuICA8L2Rpdj4pO1xufVxuXG5leHBvcnQgZGVmYXVsdCBFeGFtcGxlOyJdLCJzb3VyY2VSb290IjoiIn0=