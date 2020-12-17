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
    height: '768',
    width: '1336',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0
    }
  };
  var ref = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();
  var ref2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();
  var player, embedCode;

  var callReady = function callReady(event) {
    player = event.target;
    embedCode = event.target.getVideoEmbedCode();
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
    console.log(embedCode);
    var requestFullScreen = iframe.requestFullScreen || iframe.mozRequestFullScreen || iframe.webkitRequestFullScreen;

    if (requestFullScreen) {
      requestFullScreen.bind(embedCode)();
    }

    console.log(requestFullScreen);
  }

  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 5
    }
  }, __jsx("button", {
    onClick: playFullscreen,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
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
      lineNumber: 48,
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
      lineNumber: 49,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiRXhhbXBsZSIsInByb3BzIiwib3B0cyIsImhlaWdodCIsIndpZHRoIiwicGxheWVyVmFycyIsImF1dG9wbGF5IiwicmVmIiwiUmVhY3QiLCJjcmVhdGVSZWYiLCJyZWYyIiwicGxheWVyIiwiZW1iZWRDb2RlIiwiY2FsbFJlYWR5IiwiZXZlbnQiLCJ0YXJnZXQiLCJnZXRWaWRlb0VtYmVkQ29kZSIsImNvbnNvbGUiLCJsb2ciLCJpZnJhbWUiLCJwbGF5RnVsbHNjcmVlbiIsImN1cnJlbnQiLCJzdHlsZSIsImRpc3BsYXkiLCJwbGF5VmlkZW8iLCJyZXF1ZXN0RnVsbFNjcmVlbiIsIm1velJlcXVlc3RGdWxsU2NyZWVuIiwid2Via2l0UmVxdWVzdEZ1bGxTY3JlZW4iLCJiaW5kIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUdBLElBQU1BLE9BQU8sR0FBRyxTQUFWQSxPQUFVLENBQUNDLEtBQUQsRUFBVztBQUN6QixNQUFNQyxJQUFJLEdBQUc7QUFDWEMsVUFBTSxFQUFFLEtBREc7QUFFWEMsU0FBSyxFQUFFLE1BRkk7QUFHWEMsY0FBVSxFQUFFO0FBQ1Y7QUFDQUMsY0FBUSxFQUFFO0FBRkE7QUFIRCxHQUFiO0FBUUEsTUFBSUMsR0FBRyxnQkFBR0MsNENBQUssQ0FBQ0MsU0FBTixFQUFWO0FBQ0EsTUFBSUMsSUFBSSxnQkFBR0YsNENBQUssQ0FBQ0MsU0FBTixFQUFYO0FBQ0EsTUFBSUUsTUFBSixFQUFZQyxTQUFaOztBQUNBLE1BQU1DLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQUNDLEtBQUQsRUFBVTtBQUMxQkgsVUFBTSxHQUFHRyxLQUFLLENBQUNDLE1BQWY7QUFDQUgsYUFBUyxHQUFHRSxLQUFLLENBQUNDLE1BQU4sQ0FBYUMsaUJBQWIsRUFBWjtBQUNFQyxXQUFPLENBQUNDLEdBQVIsQ0FBWSxrQkFBWjtBQUNILEdBSkQ7O0FBS0EsTUFBSUMsTUFBSjs7QUFDQSxXQUFTQyxjQUFULEdBQTBCO0FBQ3hCSCxXQUFPLENBQUNDLEdBQVIsQ0FBWSxtQkFBWjtBQUNBRCxXQUFPLENBQUNDLEdBQVIsQ0FBWVgsR0FBWjtBQUNBVSxXQUFPLENBQUNDLEdBQVIsQ0FBWVgsR0FBRyxDQUFDYyxPQUFoQjtBQUVBRixVQUFNLEdBQUdaLEdBQUcsQ0FBQ2MsT0FBYjtBQUNBRixVQUFNLENBQUNHLEtBQVAsQ0FBYUMsT0FBYixHQUF1QixPQUF2QjtBQUNBWixVQUFNLENBQUNhLFNBQVA7QUFDQVAsV0FBTyxDQUFDQyxHQUFSLENBQVlSLElBQVo7QUFDQU8sV0FBTyxDQUFDQyxHQUFSLENBQVlSLElBQUksQ0FBQ1csT0FBakI7QUFDQUosV0FBTyxDQUFDQyxHQUFSLENBQVlOLFNBQVo7QUFDQSxRQUFJYSxpQkFBaUIsR0FBR04sTUFBTSxDQUFDTSxpQkFBUCxJQUE0Qk4sTUFBTSxDQUFDTyxvQkFBbkMsSUFBMkRQLE1BQU0sQ0FBQ1EsdUJBQTFGOztBQUNBLFFBQUlGLGlCQUFKLEVBQXVCO0FBQ3JCQSx1QkFBaUIsQ0FBQ0csSUFBbEIsQ0FBdUJoQixTQUF2QjtBQUNEOztBQUVESyxXQUFPLENBQUNDLEdBQVIsQ0FBWU8saUJBQVo7QUFDRDs7QUFFRCxTQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQTtBQUFRLFdBQU8sRUFBRUwsY0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEQSxFQUtFO0FBQUssU0FBSyxFQUFFO0FBQUNHLGFBQU8sRUFBQztBQUFULEtBQVo7QUFBK0IsV0FBTyxFQUFFSCxjQUF4QztBQUF3RCxPQUFHLEVBQUViLEdBQTdEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQSxNQUFDLHFEQUFEO0FBQVUsT0FBRyxFQUFFRyxJQUFmO0FBQXFCLFdBQU8sRUFBQyxhQUE3QjtBQUEyQyxRQUFJLEVBQUVSLElBQWpEO0FBQXVELFdBQU8sRUFBRVcsU0FBaEU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURBLE1BTEYsQ0FERjtBQVlELENBakREOztLQUFNYixPO0FBbURTQSxzRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5iZGI5OWFlNGZiOWVlNzYyZmU5Ny5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBZb3VUdWJlIGZyb20gJ3JlYWN0LXlvdXR1YmUnO1xuXG5cbmNvbnN0IEV4YW1wbGUgPSAocHJvcHMpID0+IHtcbiAgY29uc3Qgb3B0cyA9IHtcbiAgICBoZWlnaHQ6ICc3NjgnLFxuICAgIHdpZHRoOiAnMTMzNicsXG4gICAgcGxheWVyVmFyczoge1xuICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS9wbGF5ZXJfcGFyYW1ldGVyc1xuICAgICAgYXV0b3BsYXk6IDAsXG4gICAgfSxcbiAgfTtcbiAgbGV0IHJlZiA9IFJlYWN0LmNyZWF0ZVJlZigpO1xuICBsZXQgcmVmMiA9IFJlYWN0LmNyZWF0ZVJlZigpO1xuICB2YXIgcGxheWVyLCBlbWJlZENvZGU7XG4gIGNvbnN0IGNhbGxSZWFkeSA9IChldmVudCkgPT57XG4gICAgcGxheWVyID0gZXZlbnQudGFyZ2V0O1xuICAgIGVtYmVkQ29kZSA9IGV2ZW50LnRhcmdldC5nZXRWaWRlb0VtYmVkQ29kZSgpO1xuICAgICAgY29uc29sZS5sb2coJ2FjaG8gcSBkZXUgY2VydG8nKTtcbiAgfVxuICB2YXIgaWZyYW1lO1xuICBmdW5jdGlvbiBwbGF5RnVsbHNjcmVlbiAoKXtcbiAgICBjb25zb2xlLmxvZygnYWNobyBxIGRldSBjZXJ0bzInKTtcbiAgICBjb25zb2xlLmxvZyhyZWYpO1xuICAgIGNvbnNvbGUubG9nKHJlZi5jdXJyZW50KTtcbiAgIFxuICAgIGlmcmFtZSA9IHJlZi5jdXJyZW50O1xuICAgIGlmcmFtZS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgIHBsYXllci5wbGF5VmlkZW8oKTtcbiAgICBjb25zb2xlLmxvZyhyZWYyKVxuICAgIGNvbnNvbGUubG9nKHJlZjIuY3VycmVudClcbiAgICBjb25zb2xlLmxvZyhlbWJlZENvZGUpXG4gICAgdmFyIHJlcXVlc3RGdWxsU2NyZWVuID0gaWZyYW1lLnJlcXVlc3RGdWxsU2NyZWVuIHx8IGlmcmFtZS5tb3pSZXF1ZXN0RnVsbFNjcmVlbiB8fCBpZnJhbWUud2Via2l0UmVxdWVzdEZ1bGxTY3JlZW47XG4gICAgaWYgKHJlcXVlc3RGdWxsU2NyZWVuKSB7XG4gICAgICByZXF1ZXN0RnVsbFNjcmVlbi5iaW5kKGVtYmVkQ29kZSkoKTtcbiAgICB9XG5cbiAgICBjb25zb2xlLmxvZyhyZXF1ZXN0RnVsbFNjcmVlbik7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgPGJ1dHRvbiBvbkNsaWNrPXtwbGF5RnVsbHNjcmVlbn0+XG4gICAgICBQTEFZIEZVTExcbiAgICA8L2J1dHRvbj5cbiAgICBcbiAgICAgIDxkaXYgc3R5bGU9e3tkaXNwbGF5Olwibm9uZVwifX0gIG9uQ2xpY2s9e3BsYXlGdWxsc2NyZWVufSByZWY9e3JlZn0gPlxuICAgICAgPFlvdVR1YmUgIHJlZj17cmVmMn0gdmlkZW9JZD1cIllqRjg1X0U0cDcwXCIgb3B0cz17b3B0c30gb25SZWFkeT17Y2FsbFJlYWR5fSAvPjtcbiAgICAgIDwvZGl2PlxuICA8L2Rpdj5cbiAgXG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEV4YW1wbGU7Il0sInNvdXJjZVJvb3QiOiIifQ==