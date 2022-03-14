"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _component = _interopRequireDefault(require("./components/component"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_reactDom["default"].render(_react["default"].createElement(_component["default"], null), document.getElementById("mycontainer"));
