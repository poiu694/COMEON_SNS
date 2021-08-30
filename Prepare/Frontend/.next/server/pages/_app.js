/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./Store/configureStore.js":
/*!*********************************!*\
  !*** ./Store/configureStore.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-redux-wrapper */ \"next-redux-wrapper\");\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducers */ \"./reducers/index.js\");\n\n\n\nx;\n\nconst configureStore = () => {\n  const store = (0,redux__WEBPACK_IMPORTED_MODULE_1__.createStore)(_reducers__WEBPACK_IMPORTED_MODULE_2__.default);\n  return store;\n};\n\nconst wrapper = (0,next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__.createWrapper)(configureStore, {\n  debug: true\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (wrapper);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9TdG9yZS9jb25maWd1cmVTdG9yZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFBa0NHLENBQUM7O0FBRW5DLE1BQU1DLGNBQWMsR0FBRyxNQUFNO0FBQzNCLFFBQU1DLEtBQUssR0FBR0osa0RBQVcsQ0FBQ0MsOENBQUQsQ0FBekI7QUFHQSxTQUFPRyxLQUFQO0FBQ0QsQ0FMRDs7QUFPQSxNQUFNQyxPQUFPLEdBQUdOLGlFQUFhLENBQUNJLGNBQUQsRUFBaUI7QUFDNUNHLEVBQUFBLEtBQUs7QUFEdUMsQ0FBakIsQ0FBN0I7QUFJQSxpRUFBZUQsT0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL3JlYWN0LW5vZGViaXJkLWZyb250Ly4vU3RvcmUvY29uZmlndXJlU3RvcmUuanM/ZDM0NSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVXcmFwcGVyIH0gZnJvbSBcIm5leHQtcmVkdXgtd3JhcHBlclwiO1xuaW1wb3J0IHsgY3JlYXRlU3RvcmUgfSBmcm9tIFwicmVkdXhcIjtcbmltcG9ydCByZWR1Y2VyIGZyb20gXCIuLi9yZWR1Y2Vyc1wiO3hcblxuY29uc3QgY29uZmlndXJlU3RvcmUgPSAoKSA9PiB7XG4gIGNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUocmVkdWNlcik7XG5cbiAgXG4gIHJldHVybiBzdG9yZTtcbn07XG5cbmNvbnN0IHdyYXBwZXIgPSBjcmVhdGVXcmFwcGVyKGNvbmZpZ3VyZVN0b3JlLCB7XG4gIGRlYnVnOiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJkZXZlbG9wbWVudFwiLFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IHdyYXBwZXI7XG4iXSwibmFtZXMiOlsiY3JlYXRlV3JhcHBlciIsImNyZWF0ZVN0b3JlIiwicmVkdWNlciIsIngiLCJjb25maWd1cmVTdG9yZSIsInN0b3JlIiwid3JhcHBlciIsImRlYnVnIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./Store/configureStore.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _Store_configureStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Store/configureStore */ \"./Store/configureStore.js\");\n/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/dist/antd.css */ \"./node_modules/antd/dist/antd.css\");\n/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _scss_layout_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../scss/layout.scss */ \"./scss/layout.scss\");\n/* harmony import */ var _scss_layout_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_scss_layout_scss__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _scss_profile_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../scss/profile.scss */ \"./scss/profile.scss\");\n/* harmony import */ var _scss_profile_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_scss_profile_scss__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _scss_signup_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../scss/signup.scss */ \"./scss/signup.scss\");\n/* harmony import */ var _scss_signup_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_scss_signup_scss__WEBPACK_IMPORTED_MODULE_8__);\n\n\nvar _jsxFileName = \"/Users/poiu694/Desktop/File/Question/JS/NodeBird/Prepare/Frontend/pages/_app.js\";\n\n\n\n\n\n\n\n\n\nconst App = ({\n  Component\n}) => {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n        charSet: \"utf-8\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 15,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n        children: \"Lee\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 16,\n        columnNumber: 9\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n      id: \"wrap\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 7\n    }, undefined)]\n  }, void 0, true);\n};\n\nApp.propTypes = {\n  Component: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().elementType.isRequired)\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Store_configureStore__WEBPACK_IMPORTED_MODULE_4__.wrapper.witRedux(App));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUksR0FBRyxHQUFHLENBQUM7QUFBRUMsRUFBQUE7QUFBRixDQUFELEtBQW1CO0FBQzdCLHNCQUNFO0FBQUEsNEJBQ0UsOERBQUMsa0RBQUQ7QUFBQSw4QkFDRTtBQUFNLGVBQU8sRUFBQztBQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFLRSw4REFBQyxTQUFEO0FBQVcsUUFBRSxFQUFDO0FBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFMRjtBQUFBLGtCQURGO0FBU0QsQ0FWRDs7QUFZQUQsR0FBRyxDQUFDRSxTQUFKLEdBQWdCO0FBQ2RELEVBQUFBLFNBQVMsRUFBRUgsMEVBQWdDTTtBQUQ3QixDQUFoQjtBQUlBLGlFQUFlTCxtRUFBQSxDQUFpQkMsR0FBakIsQ0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL3JlYWN0LW5vZGViaXJkLWZyb250Ly4vcGFnZXMvX2FwcC5qcz9kNTMwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcbmltcG9ydCB7IHdyYXBwZXIgfSBmcm9tIFwiLi4vU3RvcmUvY29uZmlndXJlU3RvcmVcIjtcbmltcG9ydCBcImFudGQvZGlzdC9hbnRkLmNzc1wiO1xuXG5pbXBvcnQgXCIuLi9zY3NzL2xheW91dC5zY3NzXCI7XG5pbXBvcnQgXCIuLi9zY3NzL3Byb2ZpbGUuc2Nzc1wiO1xuaW1wb3J0IFwiLi4vc2Nzcy9zaWdudXAuc2Nzc1wiO1xuXG5jb25zdCBBcHAgPSAoeyBDb21wb25lbnQgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPG1ldGEgY2hhclNldD1cInV0Zi04XCIgLz5cbiAgICAgICAgPHRpdGxlPkxlZTwvdGl0bGU+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8Q29tcG9uZW50IGlkPVwid3JhcFwiLz5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbkFwcC5wcm9wVHlwZXMgPSB7XG4gIENvbXBvbmVudDogUHJvcFR5cGVzLmVsZW1lbnRUeXBlLmlzUmVxdWlyZWQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCB3cmFwcGVyLndpdFJlZHV4KEFwcCk7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJIZWFkIiwiUHJvcFR5cGVzIiwid3JhcHBlciIsIkFwcCIsIkNvbXBvbmVudCIsInByb3BUeXBlcyIsImVsZW1lbnRUeXBlIiwiaXNSZXF1aXJlZCIsIndpdFJlZHV4Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./reducers/index.js":
/*!***************************!*\
  !*** ./reducers/index.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"logoutAction\": () => (/* binding */ logoutAction),\n/* harmony export */   \"loginAction\": () => (/* binding */ loginAction),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nconst initialState = {\n  user: {\n    isLoggedIn: false,\n    user: null,\n    signUpData: {},\n    loginData: {}\n  },\n  post: {\n    mainPosts: []\n  }\n}; //\n// action creator\n\nconst logoutAction = data => {\n  return {\n    type: 'LOGOUT',\n    data\n  };\n};\nconst loginAction = data => {\n  return {\n    type: 'LOGIN',\n    data\n  };\n};\n\nconst rootReducer = (state = initialState, action) => {\n  switch (action.type) {\n    case \"LOGIN\":\n      return _objectSpread(_objectSpread({}, state), {}, {\n        user: _objectSpread(_objectSpread({}, state.user), {}, {\n          isLoggedIn: true,\n          user: action.data\n        })\n      });\n\n    case \"LOGOUT\":\n      return _objectSpread(_objectSpread({}, state), {}, {\n        user: _objectSpread(_objectSpread({}, state.user), {}, {\n          isLoggedIn: false,\n          user: action.data\n        })\n      });\n\n    default:\n      return state;\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (rootReducer);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZWR1Y2Vycy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSxNQUFNQSxZQUFZLEdBQUc7QUFDbkJDLEVBQUFBLElBQUksRUFBRTtBQUNKQyxJQUFBQSxVQUFVLEVBQUUsS0FEUjtBQUVKRCxJQUFBQSxJQUFJLEVBQUUsSUFGRjtBQUdKRSxJQUFBQSxVQUFVLEVBQUUsRUFIUjtBQUlKQyxJQUFBQSxTQUFTLEVBQUU7QUFKUCxHQURhO0FBT25CQyxFQUFBQSxJQUFJLEVBQUU7QUFDSkMsSUFBQUEsU0FBUyxFQUFFO0FBRFA7QUFQYSxDQUFyQixFQVlBO0FBRUE7O0FBQ08sTUFBTUMsWUFBWSxHQUFJQyxJQUFELElBQVU7QUFDcEMsU0FBTztBQUNMQyxJQUFBQSxJQUFJLEVBQUUsUUFERDtBQUVMRCxJQUFBQTtBQUZLLEdBQVA7QUFJRCxDQUxNO0FBT0EsTUFBTUUsV0FBVyxHQUFJRixJQUFELElBQVU7QUFDbkMsU0FBTztBQUNMQyxJQUFBQSxJQUFJLEVBQUUsT0FERDtBQUVMRCxJQUFBQTtBQUZLLEdBQVA7QUFJRCxDQUxNOztBQU9QLE1BQU1HLFdBQVcsR0FBRyxDQUFDQyxLQUFLLEdBQUdaLFlBQVQsRUFBdUJhLE1BQXZCLEtBQWtDO0FBQ3BELFVBQVFBLE1BQU0sQ0FBQ0osSUFBZjtBQUNFLFNBQUssT0FBTDtBQUNFLDZDQUNLRyxLQURMO0FBRUVYLFFBQUFBLElBQUksa0NBQU9XLEtBQUssQ0FBQ1gsSUFBYjtBQUFtQkMsVUFBQUEsVUFBVSxFQUFFLElBQS9CO0FBQXFDRCxVQUFBQSxJQUFJLEVBQUVZLE1BQU0sQ0FBQ0w7QUFBbEQ7QUFGTjs7QUFJRixTQUFLLFFBQUw7QUFDRSw2Q0FDS0ksS0FETDtBQUVFWCxRQUFBQSxJQUFJLGtDQUFPVyxLQUFLLENBQUNYLElBQWI7QUFBbUJDLFVBQUFBLFVBQVUsRUFBRSxLQUEvQjtBQUFzQ0QsVUFBQUEsSUFBSSxFQUFFWSxNQUFNLENBQUNMO0FBQW5EO0FBRk47O0FBSUY7QUFDRSxhQUFPSSxLQUFQO0FBWko7QUFjRCxDQWZEOztBQWlCQSxpRUFBZUQsV0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL3JlYWN0LW5vZGViaXJkLWZyb250Ly4vcmVkdWNlcnMvaW5kZXguanM/Y2U4ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gIHVzZXI6IHtcbiAgICBpc0xvZ2dlZEluOiBmYWxzZSxcbiAgICB1c2VyOiBudWxsLFxuICAgIHNpZ25VcERhdGE6IHt9LFxuICAgIGxvZ2luRGF0YToge30sXG4gIH0sXG4gIHBvc3Q6IHtcbiAgICBtYWluUG9zdHM6IFtdLFxuICB9XG59O1xuXG4vL1xuXG4vLyBhY3Rpb24gY3JlYXRvclxuZXhwb3J0IGNvbnN0IGxvZ291dEFjdGlvbiA9IChkYXRhKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogJ0xPR09VVCcsXG4gICAgZGF0YSxcbiAgfTtcbn07XG5cbmV4cG9ydCBjb25zdCBsb2dpbkFjdGlvbiA9IChkYXRhKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogJ0xPR0lOJyxcbiAgICBkYXRhLFxuICB9XG59XG5cbmNvbnN0IHJvb3RSZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgXCJMT0dJTlwiOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHVzZXI6IHsgLi4uc3RhdGUudXNlciwgaXNMb2dnZWRJbjogdHJ1ZSwgdXNlcjogYWN0aW9uLmRhdGEgfSxcbiAgICAgIH07XG4gICAgY2FzZSBcIkxPR09VVFwiOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHVzZXI6IHsgLi4uc3RhdGUudXNlciwgaXNMb2dnZWRJbjogZmFsc2UsIHVzZXI6IGFjdGlvbi5kYXRhIH0sXG4gICAgICB9O1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IHJvb3RSZWR1Y2VyO1xuIl0sIm5hbWVzIjpbImluaXRpYWxTdGF0ZSIsInVzZXIiLCJpc0xvZ2dlZEluIiwic2lnblVwRGF0YSIsImxvZ2luRGF0YSIsInBvc3QiLCJtYWluUG9zdHMiLCJsb2dvdXRBY3Rpb24iLCJkYXRhIiwidHlwZSIsImxvZ2luQWN0aW9uIiwicm9vdFJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./reducers/index.js\n");

/***/ }),

/***/ "./node_modules/antd/dist/antd.css":
/*!*****************************************!*\
  !*** ./node_modules/antd/dist/antd.css ***!
  \*****************************************/
/***/ (() => {



/***/ }),

/***/ "./scss/layout.scss":
/*!**************************!*\
  !*** ./scss/layout.scss ***!
  \**************************/
/***/ (() => {



/***/ }),

/***/ "./scss/profile.scss":
/*!***************************!*\
  !*** ./scss/profile.scss ***!
  \***************************/
/***/ (() => {



/***/ }),

/***/ "./scss/signup.scss":
/*!**************************!*\
  !*** ./scss/signup.scss ***!
  \**************************/
/***/ (() => {



/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("redux");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();