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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-redux-wrapper */ \"next-redux-wrapper\");\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reducers */ \"./Store/reducers/index.js\");\n\n\n\n\nconst configureStore = () => {\n  const store = (0,redux__WEBPACK_IMPORTED_MODULE_1__.createStore)(_reducers__WEBPACK_IMPORTED_MODULE_2__.default);\n  return store;\n};\n\nconst wrapper = (0,next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__.createWrapper)(configureStore, {\n  debug: true\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (wrapper);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9TdG9yZS9jb25maWd1cmVTdG9yZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUcsY0FBYyxHQUFHLE1BQU07QUFDM0IsUUFBTUMsS0FBSyxHQUFHSCxrREFBVyxDQUFDQyw4Q0FBRCxDQUF6QjtBQUdBLFNBQU9FLEtBQVA7QUFDRCxDQUxEOztBQU9BLE1BQU1DLE9BQU8sR0FBR0wsaUVBQWEsQ0FBQ0csY0FBRCxFQUFpQjtBQUM1Q0csRUFBQUEsS0FBSztBQUR1QyxDQUFqQixDQUE3QjtBQUlBLGlFQUFlRCxPQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVhY3Qtbm9kZWJpcmQtZnJvbnQvLi9TdG9yZS9jb25maWd1cmVTdG9yZS5qcz9kMzQ1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVdyYXBwZXIgfSBmcm9tIFwibmV4dC1yZWR1eC13cmFwcGVyXCI7XG5pbXBvcnQgeyBjcmVhdGVTdG9yZSB9IGZyb20gXCJyZWR1eFwiO1xuaW1wb3J0IHJlZHVjZXIgZnJvbSBcIi4vcmVkdWNlcnNcIjtcblxuY29uc3QgY29uZmlndXJlU3RvcmUgPSAoKSA9PiB7XG4gIGNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUocmVkdWNlcik7XG5cbiAgXG4gIHJldHVybiBzdG9yZTtcbn07XG5cbmNvbnN0IHdyYXBwZXIgPSBjcmVhdGVXcmFwcGVyKGNvbmZpZ3VyZVN0b3JlLCB7XG4gIGRlYnVnOiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJkZXZlbG9wbWVudFwiLFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IHdyYXBwZXI7XG4iXSwibmFtZXMiOlsiY3JlYXRlV3JhcHBlciIsImNyZWF0ZVN0b3JlIiwicmVkdWNlciIsImNvbmZpZ3VyZVN0b3JlIiwic3RvcmUiLCJ3cmFwcGVyIiwiZGVidWciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./Store/configureStore.js\n");

/***/ }),

/***/ "./Store/reducers/index.js":
/*!*********************************!*\
  !*** ./Store/reducers/index.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"initialState\": () => (/* binding */ initialState),\n/* harmony export */   \"signUpAction\": () => (/* binding */ signUpAction),\n/* harmony export */   \"loginAction\": () => (/* binding */ loginAction),\n/* harmony export */   \"logoutAction\": () => (/* binding */ logoutAction),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./type */ \"./Store/reducers/type.js\");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\nconst dummyUser = {\n  id: 1,\n  nickname: 'Lee',\n  Posts: [],\n  Followings: [],\n  Followers: []\n};\nconst initialState = {\n  isLoggedIn: false,\n  user: {\n    isLoggedIn: false\n  },\n  signUpData: {},\n  loginData: {}\n};\nconst signUpAction = data => {\n  return {\n    type: _type__WEBPACK_IMPORTED_MODULE_0__.SIGN_UP,\n    data\n  };\n};\nconst loginAction = data => {\n  return {\n    type: _type__WEBPACK_IMPORTED_MODULE_0__.LOG_IN,\n    data\n  };\n};\nconst logoutAction = {\n  type: _type__WEBPACK_IMPORTED_MODULE_0__.LOG_OUT\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((state = initialState, action) => {\n  switch (action.type) {\n    case _type__WEBPACK_IMPORTED_MODULE_0__.LOG_IN:\n      {\n        return _objectSpread(_objectSpread({}, state), {}, {\n          isLoggedIn: true,\n          user: dummyUser,\n          loginData: action.data\n        });\n      }\n\n    case _type__WEBPACK_IMPORTED_MODULE_0__.LOG_OUT:\n      {\n        return _objectSpread(_objectSpread({}, state), {}, {\n          isLoggedIn: false,\n          user: null\n        });\n      }\n\n    case _type__WEBPACK_IMPORTED_MODULE_0__.SIGN_UP:\n      {\n        return _objectSpread(_objectSpread({}, state), {}, {\n          signUpData: action.data\n        });\n      }\n\n    default:\n      {\n        return _objectSpread({}, state);\n      }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9TdG9yZS9yZWR1Y2Vycy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBLE1BQU1HLFNBQVMsR0FBRztBQUNoQkMsRUFBQUEsRUFBRSxFQUFFLENBRFk7QUFFaEJDLEVBQUFBLFFBQVEsRUFBRSxLQUZNO0FBR2hCQyxFQUFBQSxLQUFLLEVBQUUsRUFIUztBQUloQkMsRUFBQUEsVUFBVSxFQUFFLEVBSkk7QUFLaEJDLEVBQUFBLFNBQVMsRUFBRTtBQUxLLENBQWxCO0FBUU8sTUFBTUMsWUFBWSxHQUFHO0FBQzFCQyxFQUFBQSxVQUFVLEVBQUUsS0FEYztBQUUxQkMsRUFBQUEsSUFBSSxFQUFFO0FBQ0pELElBQUFBLFVBQVUsRUFBRTtBQURSLEdBRm9CO0FBSzFCRSxFQUFBQSxVQUFVLEVBQUUsRUFMYztBQU0xQkMsRUFBQUEsU0FBUyxFQUFFO0FBTmUsQ0FBckI7QUFTQSxNQUFNQyxZQUFZLEdBQUdDLElBQUksSUFBSTtBQUNsQyxTQUFPO0FBQ0xDLElBQUFBLElBQUksRUFBRWhCLDBDQUREO0FBRUxlLElBQUFBO0FBRkssR0FBUDtBQUlELENBTE07QUFPQSxNQUFNRSxXQUFXLEdBQUdGLElBQUksSUFBSTtBQUNqQyxTQUFPO0FBQ0xDLElBQUFBLElBQUksRUFBRWYseUNBREQ7QUFFTGMsSUFBQUE7QUFGSyxHQUFQO0FBSUQsQ0FMTTtBQU1BLE1BQU1HLFlBQVksR0FBRztBQUMxQkYsRUFBQUEsSUFBSSxFQUFFZCwwQ0FBT0E7QUFEYSxDQUFyQjtBQUlQLGlFQUFlLENBQUNpQixLQUFLLEdBQUdWLFlBQVQsRUFBdUJXLE1BQXZCLEtBQWtDO0FBQy9DLFVBQVFBLE1BQU0sQ0FBQ0osSUFBZjtBQUNFLFNBQUtmLHlDQUFMO0FBQWE7QUFDWCwrQ0FDS2tCLEtBREw7QUFFRVQsVUFBQUEsVUFBVSxFQUFFLElBRmQ7QUFHRUMsVUFBQUEsSUFBSSxFQUFFUixTQUhSO0FBSUVVLFVBQUFBLFNBQVMsRUFBRU8sTUFBTSxDQUFDTDtBQUpwQjtBQU1EOztBQUNELFNBQUtiLDBDQUFMO0FBQWM7QUFDWiwrQ0FDS2lCLEtBREw7QUFFRVQsVUFBQUEsVUFBVSxFQUFFLEtBRmQ7QUFHRUMsVUFBQUEsSUFBSSxFQUFFO0FBSFI7QUFLRDs7QUFDRCxTQUFLWCwwQ0FBTDtBQUFjO0FBQ1osK0NBQ0ttQixLQURMO0FBRUVQLFVBQUFBLFVBQVUsRUFBRVEsTUFBTSxDQUFDTDtBQUZyQjtBQUlEOztBQUNEO0FBQVM7QUFDUCxpQ0FDS0ksS0FETDtBQUdEO0FBMUJIO0FBNEJELENBN0JEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVhY3Qtbm9kZWJpcmQtZnJvbnQvLi9TdG9yZS9yZWR1Y2Vycy9pbmRleC5qcz82NjFjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNJR05fVVAsIExPR19JTiwgTE9HX09VVCB9IGZyb20gXCIuL3R5cGVcIjtcblxuY29uc3QgZHVtbXlVc2VyID0ge1xuICBpZDogMSxcbiAgbmlja25hbWU6ICdMZWUnLFxuICBQb3N0czogW10sXG4gIEZvbGxvd2luZ3M6IFtdLFxuICBGb2xsb3dlcnM6IFtdLFxufTtcblxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgaXNMb2dnZWRJbjogZmFsc2UsXG4gIHVzZXI6IHtcbiAgICBpc0xvZ2dlZEluOiBmYWxzZSxcbiAgfSxcbiAgc2lnblVwRGF0YToge30sXG4gIGxvZ2luRGF0YToge30sXG59O1xuXG5leHBvcnQgY29uc3Qgc2lnblVwQWN0aW9uID0gZGF0YSA9PiB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogU0lHTl9VUCxcbiAgICBkYXRhLFxuICB9O1xufTtcblxuZXhwb3J0IGNvbnN0IGxvZ2luQWN0aW9uID0gZGF0YSA9PiB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogTE9HX0lOLFxuICAgIGRhdGEsXG4gIH07XG59O1xuZXhwb3J0IGNvbnN0IGxvZ291dEFjdGlvbiA9IHtcbiAgdHlwZTogTE9HX09VVFxufTtcblxuZXhwb3J0IGRlZmF1bHQgKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgTE9HX0lOOiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgaXNMb2dnZWRJbjogdHJ1ZSxcbiAgICAgICAgdXNlcjogZHVtbXlVc2VyLFxuICAgICAgICBsb2dpbkRhdGE6IGFjdGlvbi5kYXRhLFxuICAgICAgfTtcbiAgICB9XG4gICAgY2FzZSBMT0dfT1VUOiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgaXNMb2dnZWRJbjogZmFsc2UsXG4gICAgICAgIHVzZXI6IG51bGwsXG4gICAgICB9O1xuICAgIH1cbiAgICBjYXNlIFNJR05fVVA6IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBzaWduVXBEYXRhOiBhY3Rpb24uZGF0YSxcbiAgICAgIH07XG4gICAgfVxuICAgIGRlZmF1bHQ6IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgfTtcbiAgICB9XG4gIH1cbn07XG4iXSwibmFtZXMiOlsiU0lHTl9VUCIsIkxPR19JTiIsIkxPR19PVVQiLCJkdW1teVVzZXIiLCJpZCIsIm5pY2tuYW1lIiwiUG9zdHMiLCJGb2xsb3dpbmdzIiwiRm9sbG93ZXJzIiwiaW5pdGlhbFN0YXRlIiwiaXNMb2dnZWRJbiIsInVzZXIiLCJzaWduVXBEYXRhIiwibG9naW5EYXRhIiwic2lnblVwQWN0aW9uIiwiZGF0YSIsInR5cGUiLCJsb2dpbkFjdGlvbiIsImxvZ291dEFjdGlvbiIsInN0YXRlIiwiYWN0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./Store/reducers/index.js\n");

/***/ }),

/***/ "./Store/reducers/type.js":
/*!********************************!*\
  !*** ./Store/reducers/type.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"SIGN_UP\": () => (/* binding */ SIGN_UP),\n/* harmony export */   \"SIGN_UP_SUCCESS\": () => (/* binding */ SIGN_UP_SUCCESS),\n/* harmony export */   \"LOG_IN\": () => (/* binding */ LOG_IN),\n/* harmony export */   \"LOG_IN_SUCCESS\": () => (/* binding */ LOG_IN_SUCCESS),\n/* harmony export */   \"LOG_IN_FAILURE\": () => (/* binding */ LOG_IN_FAILURE),\n/* harmony export */   \"LOG_OUT\": () => (/* binding */ LOG_OUT)\n/* harmony export */ });\nconst SIGN_UP = \"SIGN_UP\";\nconst SIGN_UP_SUCCESS = \"SIGN_UP_SUCCESS\";\nconst LOG_IN = \"LOG_IN\";\nconst LOG_IN_SUCCESS = \"LOG_IN_SUCCESS\";\nconst LOG_IN_FAILURE = \"LOG_IN_FAILURE\";\nconst LOG_OUT = \"LOG_OUT\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9TdG9yZS9yZWR1Y2Vycy90eXBlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFPLE1BQU1BLE9BQU8sR0FBRyxTQUFoQjtBQUNBLE1BQU1DLGVBQWUsR0FBRyxpQkFBeEI7QUFDQSxNQUFNQyxNQUFNLEdBQUcsUUFBZjtBQUNBLE1BQU1DLGNBQWMsR0FBRyxnQkFBdkI7QUFDQSxNQUFNQyxjQUFjLEdBQUcsZ0JBQXZCO0FBQ0EsTUFBTUMsT0FBTyxHQUFHLFNBQWhCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVhY3Qtbm9kZWJpcmQtZnJvbnQvLi9TdG9yZS9yZWR1Y2Vycy90eXBlLmpzP2E4N2QiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IFNJR05fVVAgPSBcIlNJR05fVVBcIjtcbmV4cG9ydCBjb25zdCBTSUdOX1VQX1NVQ0NFU1MgPSBcIlNJR05fVVBfU1VDQ0VTU1wiO1xuZXhwb3J0IGNvbnN0IExPR19JTiA9IFwiTE9HX0lOXCI7IFxuZXhwb3J0IGNvbnN0IExPR19JTl9TVUNDRVNTID0gXCJMT0dfSU5fU1VDQ0VTU1wiOyBcbmV4cG9ydCBjb25zdCBMT0dfSU5fRkFJTFVSRSA9IFwiTE9HX0lOX0ZBSUxVUkVcIjtcbmV4cG9ydCBjb25zdCBMT0dfT1VUID0gXCJMT0dfT1VUXCI7XG4iXSwibmFtZXMiOlsiU0lHTl9VUCIsIlNJR05fVVBfU1VDQ0VTUyIsIkxPR19JTiIsIkxPR19JTl9TVUNDRVNTIiwiTE9HX0lOX0ZBSUxVUkUiLCJMT0dfT1VUIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./Store/reducers/type.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _Store_configureStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Store/configureStore */ \"./Store/configureStore.js\");\n/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/dist/antd.css */ \"./node_modules/antd/dist/antd.css\");\n/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _scss_layout_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../scss/layout.scss */ \"./scss/layout.scss\");\n/* harmony import */ var _scss_layout_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_scss_layout_scss__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _scss_profile_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../scss/profile.scss */ \"./scss/profile.scss\");\n/* harmony import */ var _scss_profile_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_scss_profile_scss__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _scss_signup_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../scss/signup.scss */ \"./scss/signup.scss\");\n/* harmony import */ var _scss_signup_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_scss_signup_scss__WEBPACK_IMPORTED_MODULE_8__);\n\n\nvar _jsxFileName = \"/Users/poiu694/Desktop/File/Question/JS/NodeBird/Prepare/Frontend/pages/_app.js\";\n\n\n\n\n\n\n\n\n\nconst App = ({\n  Component\n}) => {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n        charSet: \"utf-8\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 15,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n        children: \"Lee\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 16,\n        columnNumber: 9\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n      id: \"wrap\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 7\n    }, undefined)]\n  }, void 0, true);\n};\n\nApp.propTypes = {\n  Component: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().elementType.isRequired)\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Store_configureStore__WEBPACK_IMPORTED_MODULE_4__.default.withRedux(App));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUksR0FBRyxHQUFHLENBQUM7QUFBRUMsRUFBQUE7QUFBRixDQUFELEtBQW1CO0FBQzdCLHNCQUNFO0FBQUEsNEJBQ0UsOERBQUMsa0RBQUQ7QUFBQSw4QkFDRTtBQUFNLGVBQU8sRUFBQztBQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFLRSw4REFBQyxTQUFEO0FBQVcsUUFBRSxFQUFDO0FBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFMRjtBQUFBLGtCQURGO0FBU0QsQ0FWRDs7QUFZQUQsR0FBRyxDQUFDRSxTQUFKLEdBQWdCO0FBQ2RELEVBQUFBLFNBQVMsRUFBRUgsMEVBQWdDTTtBQUQ3QixDQUFoQjtBQUlBLGlFQUFlTCxvRUFBQSxDQUFrQkMsR0FBbEIsQ0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL3JlYWN0LW5vZGViaXJkLWZyb250Ly4vcGFnZXMvX2FwcC5qcz9kNTMwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcbmltcG9ydCB3cmFwcGVyIGZyb20gXCIuLi9TdG9yZS9jb25maWd1cmVTdG9yZVwiO1xuaW1wb3J0IFwiYW50ZC9kaXN0L2FudGQuY3NzXCI7XG5cbmltcG9ydCBcIi4uL3Njc3MvbGF5b3V0LnNjc3NcIjtcbmltcG9ydCBcIi4uL3Njc3MvcHJvZmlsZS5zY3NzXCI7XG5pbXBvcnQgXCIuLi9zY3NzL3NpZ251cC5zY3NzXCI7XG5cbmNvbnN0IEFwcCA9ICh7IENvbXBvbmVudCB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8bWV0YSBjaGFyU2V0PVwidXRmLThcIiAvPlxuICAgICAgICA8dGl0bGU+TGVlPC90aXRsZT5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxDb21wb25lbnQgaWQ9XCJ3cmFwXCIvPlxuICAgIDwvPlxuICApO1xufTtcblxuQXBwLnByb3BUeXBlcyA9IHtcbiAgQ29tcG9uZW50OiBQcm9wVHlwZXMuZWxlbWVudFR5cGUuaXNSZXF1aXJlZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHdyYXBwZXIud2l0aFJlZHV4KEFwcCk7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJIZWFkIiwiUHJvcFR5cGVzIiwid3JhcHBlciIsIkFwcCIsIkNvbXBvbmVudCIsInByb3BUeXBlcyIsImVsZW1lbnRUeXBlIiwiaXNSZXF1aXJlZCIsIndpdGhSZWR1eCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

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