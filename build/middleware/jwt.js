"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.verifyToken = exports.generateToken = void 0;

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var generateToken = function generateToken(_ref, secret, role) {
  var id = _ref.id,
      email = _ref.email;

  var token = _jsonwebtoken["default"].sign({
    id: id,
    email: email,
    role: role
  }, secret, {
    expiresIn: '24h'
  });

  return token;
};

exports.generateToken = generateToken;

var verifyToken = function verifyToken(token, secret) {
  try {
    var decoded = _jsonwebtoken["default"].verify(token, secret);

    return decoded;
  } catch (error) {
    throw new Error("invalid token");
  }
};

exports.verifyToken = verifyToken;
//# sourceMappingURL=jwt.js.map