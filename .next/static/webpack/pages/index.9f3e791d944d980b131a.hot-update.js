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
    iframe.style.display = "block";
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
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 5
    }
  }, __jsx("button", {
    onClick: playFullscreen,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 5
    }
  }, "PLAY FULL"), __jsx("div", {
    style: {
      display: "none"
    },
    onClick: playFullscreen,
    ref: ref,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }
  }, __jsx(react_youtube__WEBPACK_IMPORTED_MODULE_1__["default"], {
    ref: ref2,
    videoId: "YjF85_E4p70",
    opts: opts,
    onReady: callReady,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }
  }), ";"));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiRXhhbXBsZSIsInByb3BzIiwib3B0cyIsImhlaWdodCIsIndpZHRoIiwicGxheWVyVmFycyIsImF1dG9wbGF5IiwicmVmIiwiUmVhY3QiLCJjcmVhdGVSZWYiLCJyZWYyIiwicGxheWVyIiwiY2FsbFJlYWR5IiwiZXZlbnQiLCJ0YXJnZXQiLCJjb25zb2xlIiwibG9nIiwiaWZyYW1lIiwicGxheUZ1bGxzY3JlZW4iLCJjdXJyZW50Iiwic3R5bGUiLCJkaXNwbGF5IiwicGxheVZpZGVvIiwicmVxdWVzdEZ1bGxTY3JlZW4iLCJtb3pSZXF1ZXN0RnVsbFNjcmVlbiIsIndlYmtpdFJlcXVlc3RGdWxsU2NyZWVuIiwiYmluZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFHQSxJQUFNQSxPQUFPLEdBQUcsU0FBVkEsT0FBVSxDQUFDQyxLQUFELEVBQVc7QUFDekIsTUFBTUMsSUFBSSxHQUFHO0FBQ1hDLFVBQU0sRUFBRSxLQURHO0FBRVhDLFNBQUssRUFBRSxLQUZJO0FBR1hDLGNBQVUsRUFBRTtBQUNWO0FBQ0FDLGNBQVEsRUFBRTtBQUZBO0FBSEQsR0FBYjtBQVFBLE1BQUlDLEdBQUcsZ0JBQUdDLDRDQUFLLENBQUNDLFNBQU4sRUFBVjtBQUNBLE1BQUlDLElBQUksZ0JBQUdGLDRDQUFLLENBQUNDLFNBQU4sRUFBWDtBQUNBLE1BQUlFLE1BQUo7O0FBQ0EsTUFBTUMsU0FBUyxHQUFHLFNBQVpBLFNBQVksQ0FBQ0MsS0FBRCxFQUFVO0FBQzFCRixVQUFNLEdBQUdFLEtBQUssQ0FBQ0MsTUFBZjtBQUNFQyxXQUFPLENBQUNDLEdBQVIsQ0FBWSxrQkFBWjtBQUNILEdBSEQ7O0FBSUEsTUFBSUMsTUFBSjs7QUFDQSxXQUFTQyxjQUFULEdBQTBCO0FBQ3hCSCxXQUFPLENBQUNDLEdBQVIsQ0FBWSxtQkFBWjtBQUNBRCxXQUFPLENBQUNDLEdBQVIsQ0FBWVQsR0FBWjtBQUNBUSxXQUFPLENBQUNDLEdBQVIsQ0FBWVQsR0FBRyxDQUFDWSxPQUFoQjtBQUVBRixVQUFNLEdBQUdWLEdBQUcsQ0FBQ1ksT0FBYjtBQUNBRixVQUFNLENBQUNHLEtBQVAsQ0FBYUMsT0FBYixHQUF1QixPQUF2QjtBQUNBVixVQUFNLENBQUNXLFNBQVA7QUFDQVAsV0FBTyxDQUFDQyxHQUFSLENBQVlOLElBQVo7QUFDQUssV0FBTyxDQUFDQyxHQUFSLENBQVlOLElBQUksQ0FBQ1MsT0FBakI7QUFDQSxRQUFJSSxpQkFBaUIsR0FBR04sTUFBTSxDQUFDTSxpQkFBUCxJQUE0Qk4sTUFBTSxDQUFDTyxvQkFBbkMsSUFBMkRQLE1BQU0sQ0FBQ1EsdUJBQTFGOztBQUNBLFFBQUlGLGlCQUFKLEVBQXVCO0FBQ3JCQSx1QkFBaUIsQ0FBQ0csSUFBbEIsQ0FBdUJULE1BQXZCO0FBQ0Q7O0FBRURGLFdBQU8sQ0FBQ0MsR0FBUixDQUFZTyxpQkFBWjtBQUNEOztBQUVELFNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNBO0FBQVEsV0FBTyxFQUFFTCxjQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURBLEVBS0U7QUFBSyxTQUFLLEVBQUU7QUFBQ0csYUFBTyxFQUFDO0FBQVQsS0FBWjtBQUErQixXQUFPLEVBQUVILGNBQXhDO0FBQXdELE9BQUcsRUFBRVgsR0FBN0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNBLE1BQUMscURBQUQ7QUFBUyxPQUFHLEVBQUVHLElBQWQ7QUFBb0IsV0FBTyxFQUFDLGFBQTVCO0FBQTBDLFFBQUksRUFBRVIsSUFBaEQ7QUFBc0QsV0FBTyxFQUFFVSxTQUEvRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREEsTUFMRixDQURGO0FBWUQsQ0EvQ0Q7O0tBQU1aLE87QUFpRFNBLHNFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjlmM2U3OTFkOTQ0ZDk4MGIxMzFhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFlvdVR1YmUgZnJvbSAncmVhY3QteW91dHViZSc7XG5cblxuY29uc3QgRXhhbXBsZSA9IChwcm9wcykgPT4ge1xuICBjb25zdCBvcHRzID0ge1xuICAgIGhlaWdodDogJzM5MCcsXG4gICAgd2lkdGg6ICc2NDAnLFxuICAgIHBsYXllclZhcnM6IHtcbiAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvcGxheWVyX3BhcmFtZXRlcnNcbiAgICAgIGF1dG9wbGF5OiAwLFxuICAgIH0sXG4gIH07XG4gIGxldCByZWYgPSBSZWFjdC5jcmVhdGVSZWYoKTtcbiAgbGV0IHJlZjIgPSBSZWFjdC5jcmVhdGVSZWYoKTtcbiAgdmFyIHBsYXllcjtcbiAgY29uc3QgY2FsbFJlYWR5ID0gKGV2ZW50KSA9PntcbiAgICBwbGF5ZXIgPSBldmVudC50YXJnZXQ7XG4gICAgICBjb25zb2xlLmxvZygnYWNobyBxIGRldSBjZXJ0bycpO1xuICB9XG4gIHZhciBpZnJhbWU7XG4gIGZ1bmN0aW9uIHBsYXlGdWxsc2NyZWVuICgpe1xuICAgIGNvbnNvbGUubG9nKCdhY2hvIHEgZGV1IGNlcnRvMicpO1xuICAgIGNvbnNvbGUubG9nKHJlZik7XG4gICAgY29uc29sZS5sb2cocmVmLmN1cnJlbnQpO1xuICAgXG4gICAgaWZyYW1lID0gcmVmLmN1cnJlbnQ7XG4gICAgaWZyYW1lLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgcGxheWVyLnBsYXlWaWRlbygpO1xuICAgIGNvbnNvbGUubG9nKHJlZjIpXG4gICAgY29uc29sZS5sb2cocmVmMi5jdXJyZW50KVxuICAgIHZhciByZXF1ZXN0RnVsbFNjcmVlbiA9IGlmcmFtZS5yZXF1ZXN0RnVsbFNjcmVlbiB8fCBpZnJhbWUubW96UmVxdWVzdEZ1bGxTY3JlZW4gfHwgaWZyYW1lLndlYmtpdFJlcXVlc3RGdWxsU2NyZWVuO1xuICAgIGlmIChyZXF1ZXN0RnVsbFNjcmVlbikge1xuICAgICAgcmVxdWVzdEZ1bGxTY3JlZW4uYmluZChpZnJhbWUpKCk7XG4gICAgfVxuXG4gICAgY29uc29sZS5sb2cocmVxdWVzdEZ1bGxTY3JlZW4pO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgIDxidXR0b24gb25DbGljaz17cGxheUZ1bGxzY3JlZW59PlxuICAgICAgUExBWSBGVUxMXG4gICAgPC9idXR0b24+XG4gICAgXG4gICAgICA8ZGl2IHN0eWxlPXt7ZGlzcGxheTpcIm5vbmVcIn19ICBvbkNsaWNrPXtwbGF5RnVsbHNjcmVlbn0gcmVmPXtyZWZ9ID5cbiAgICAgIDxZb3VUdWJlIHJlZj17cmVmMn0gdmlkZW9JZD1cIllqRjg1X0U0cDcwXCIgb3B0cz17b3B0c30gb25SZWFkeT17Y2FsbFJlYWR5fSAvPjtcbiAgICAgIDwvZGl2PlxuICA8L2Rpdj5cbiAgXG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEV4YW1wbGU7Il0sInNvdXJjZVJvb3QiOiIifQ==