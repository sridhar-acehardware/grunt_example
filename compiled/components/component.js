"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = App;

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _Button = _interopRequireDefault(require("./Button"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function App() {
  return _react["default"].createElement("div", null, _react["default"].createElement("h1", null, "Hello Sridhar!"), _react["default"].createElement(_Button["default"], {
    name: "Submit"
  }));
}
