"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.router = exports.app = void 0;

var _express = _interopRequireDefault(require("express"));

var app = (0, _express["default"])();
exports.app = app;

var router = _express["default"].Router();

exports.router = router;
//# sourceMappingURL=server.js.map