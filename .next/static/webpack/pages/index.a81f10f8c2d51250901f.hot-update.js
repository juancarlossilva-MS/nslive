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
  var ref = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();
  var ref2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();

  var callReady = function callReady() {
    console.log('acho q deu certo');
  };

  var iframe;

  function playFullscreen() {
    console.log('acho q deu certo2');
    console.log(ref);
    iframe = ref.current;
    console.log(ref2);
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
      lineNumber: 35,
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
      lineNumber: 36,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiRXhhbXBsZSIsInByb3BzIiwib3B0cyIsImhlaWdodCIsIndpZHRoIiwicGxheWVyVmFycyIsImF1dG9wbGF5IiwicmVmIiwiUmVhY3QiLCJjcmVhdGVSZWYiLCJyZWYyIiwiY2FsbFJlYWR5IiwiY29uc29sZSIsImxvZyIsImlmcmFtZSIsInBsYXlGdWxsc2NyZWVuIiwiY3VycmVudCIsInJlcXVlc3RGdWxsU2NyZWVuIiwibW96UmVxdWVzdEZ1bGxTY3JlZW4iLCJ3ZWJraXRSZXF1ZXN0RnVsbFNjcmVlbiIsImJpbmQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBR0EsSUFBTUEsT0FBTyxHQUFHLFNBQVZBLE9BQVUsQ0FBQ0MsS0FBRCxFQUFXO0FBQ3pCLE1BQU1DLElBQUksR0FBRztBQUNYQyxVQUFNLEVBQUUsS0FERztBQUVYQyxTQUFLLEVBQUUsS0FGSTtBQUdYQyxjQUFVLEVBQUU7QUFDVjtBQUNBQyxjQUFRLEVBQUU7QUFGQTtBQUhELEdBQWI7QUFRQSxNQUFJQyxHQUFHLGdCQUFHQyw0Q0FBSyxDQUFDQyxTQUFOLEVBQVY7QUFDQSxNQUFJQyxJQUFJLGdCQUFHRiw0Q0FBSyxDQUFDQyxTQUFOLEVBQVg7O0FBRUEsTUFBTUUsU0FBUyxHQUFHLFNBQVpBLFNBQVksR0FBSztBQUVuQkMsV0FBTyxDQUFDQyxHQUFSLENBQVksa0JBQVo7QUFDSCxHQUhEOztBQUlBLE1BQUlDLE1BQUo7O0FBQ0EsV0FBU0MsY0FBVCxHQUEwQjtBQUN4QkgsV0FBTyxDQUFDQyxHQUFSLENBQVksbUJBQVo7QUFDQUQsV0FBTyxDQUFDQyxHQUFSLENBQVlOLEdBQVo7QUFDQU8sVUFBTSxHQUFHUCxHQUFHLENBQUNTLE9BQWI7QUFDQUosV0FBTyxDQUFDQyxHQUFSLENBQVlILElBQVo7QUFDQSxRQUFJTyxpQkFBaUIsR0FBR0gsTUFBTSxDQUFDRyxpQkFBUCxJQUE0QkgsTUFBTSxDQUFDSSxvQkFBbkMsSUFBMkRKLE1BQU0sQ0FBQ0ssdUJBQTFGOztBQUNBLFFBQUlGLGlCQUFKLEVBQXVCO0FBQ3JCQSx1QkFBaUIsQ0FBQ0csSUFBbEIsQ0FBdUJOLE1BQXZCO0FBQ0Q7O0FBQ0RGLFdBQU8sQ0FBQ0MsR0FBUixDQUFZSSxpQkFBWjtBQUNEOztBQUVELFNBQ0E7QUFBSyxNQUFFLEVBQUMsUUFBUjtBQUFpQixPQUFHLEVBQUVWLEdBQXRCO0FBQTJCLFdBQU8sRUFBRVEsY0FBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNBLE1BQUMscURBQUQ7QUFBUyxPQUFHLEVBQUVMLElBQWQ7QUFBb0IsVUFBTSxFQUFFSyxjQUE1QjtBQUE0QyxXQUFPLEVBQUMsYUFBcEQ7QUFBa0UsUUFBSSxFQUFFYixJQUF4RTtBQUE4RSxXQUFPLEVBQUVTLFNBQXZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFEQSxNQURBO0FBSUQsQ0FqQ0Q7O0tBQU1YLE87QUFtQ1NBLHNFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmE4MWYxMGY4YzJkNTEyNTA5MDFmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFlvdVR1YmUgZnJvbSAncmVhY3QteW91dHViZSc7XG5cblxuY29uc3QgRXhhbXBsZSA9IChwcm9wcykgPT4ge1xuICBjb25zdCBvcHRzID0ge1xuICAgIGhlaWdodDogJzM5MCcsXG4gICAgd2lkdGg6ICc2NDAnLFxuICAgIHBsYXllclZhcnM6IHtcbiAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvcGxheWVyX3BhcmFtZXRlcnNcbiAgICAgIGF1dG9wbGF5OiAxLFxuICAgIH0sXG4gIH07XG4gIGxldCByZWYgPSBSZWFjdC5jcmVhdGVSZWYoKTtcbiAgbGV0IHJlZjIgPSBSZWFjdC5jcmVhdGVSZWYoKTtcblxuICBjb25zdCBjYWxsUmVhZHkgPSAoKSA9PntcbiAgICBcbiAgICAgIGNvbnNvbGUubG9nKCdhY2hvIHEgZGV1IGNlcnRvJyk7XG4gIH1cbiAgdmFyIGlmcmFtZTtcbiAgZnVuY3Rpb24gcGxheUZ1bGxzY3JlZW4gKCl7XG4gICAgY29uc29sZS5sb2coJ2FjaG8gcSBkZXUgY2VydG8yJyk7XG4gICAgY29uc29sZS5sb2cocmVmKTtcbiAgICBpZnJhbWUgPSByZWYuY3VycmVudDtcbiAgICBjb25zb2xlLmxvZyhyZWYyKTtcbiAgICB2YXIgcmVxdWVzdEZ1bGxTY3JlZW4gPSBpZnJhbWUucmVxdWVzdEZ1bGxTY3JlZW4gfHwgaWZyYW1lLm1velJlcXVlc3RGdWxsU2NyZWVuIHx8IGlmcmFtZS53ZWJraXRSZXF1ZXN0RnVsbFNjcmVlbjtcbiAgICBpZiAocmVxdWVzdEZ1bGxTY3JlZW4pIHtcbiAgICAgIHJlcXVlc3RGdWxsU2NyZWVuLmJpbmQoaWZyYW1lKSgpO1xuICAgIH1cbiAgICBjb25zb2xlLmxvZyhyZXF1ZXN0RnVsbFNjcmVlbik7XG4gIH1cblxuICByZXR1cm4gKFxuICA8ZGl2IGlkPVwicGxheWVyXCIgcmVmPXtyZWZ9IG9uQ2xpY2s9e3BsYXlGdWxsc2NyZWVufT5cbiAgPFlvdVR1YmUgcmVmPXtyZWYyfSBvblBsYXk9e3BsYXlGdWxsc2NyZWVufSB2aWRlb0lkPVwiWWpGODVfRTRwNzBcIiBvcHRzPXtvcHRzfSBvblJlYWR5PXtjYWxsUmVhZHl9IC8+O1xuICA8L2Rpdj4pO1xufVxuXG5leHBvcnQgZGVmYXVsdCBFeGFtcGxlOyJdLCJzb3VyY2VSb290IjoiIn0=