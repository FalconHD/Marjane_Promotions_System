"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sendEmail = exports.isAdmin = exports.hashPassword = exports.generatePassword = exports.checkPassword = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _bcrypt = _interopRequireDefault(require("bcrypt"));

var _nodemailer = _interopRequireDefault(require("nodemailer"));

var isAdmin = function isAdmin(_ref) {
  var role = _ref.role;
  return role == "admin" ? true : false;
};

exports.isAdmin = isAdmin;

var checkPassword = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(password, passwordHash) {
    var match;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _bcrypt["default"].compare(password, passwordHash);

          case 2:
            match = _context.sent;

            if (!match) {
              _context.next = 5;
              break;
            }

            return _context.abrupt("return", true);

          case 5:
            return _context.abrupt("return", false);

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function checkPassword(_x, _x2) {
    return _ref2.apply(this, arguments);
  };
}();

exports.checkPassword = checkPassword;

var hashPassword = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(password) {
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _bcrypt["default"].hash(password, 10);

          case 2:
            return _context2.abrupt("return", _context2.sent);

          case 3:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function hashPassword(_x3) {
    return _ref3.apply(this, arguments);
  };
}();

exports.hashPassword = hashPassword;

var generatePassword = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3() {
    var charset, length, retVal, i, n;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
            length = 8;
            retVal = "";

            for (i = 0, n = charset.length; i < length; ++i) {
              retVal += charset.charAt(Math.floor(Math.random() * n));
            }

            return _context3.abrupt("return", retVal);

          case 5:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function generatePassword() {
    return _ref4.apply(this, arguments);
  };
}();

exports.generatePassword = generatePassword;

var sendEmail = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(email, password) {
    var transporter, info;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            transporter = _nodemailer["default"].createTransport({
              host: "smtp.ethereal.email",
              port: 587,
              secure: false,
              // true for 465, false for other ports
              service: "Gmail",
              auth: {
                user: process.env.EMAIL,
                pass: process.env.PASS
              }
            });
            _context4.next = 3;
            return transporter.sendMail({
              from: 'Welcome <checker.safiairline@gmail.com>',
              to: email,
              subject: " send new account ",
              text: " Test ",
              html: "<b>Email :  ".concat(email, "</b>\n        <b> password : ").concat(password, "</b>")
            });

          case 3:
            info = _context4.sent;
            console.log("Preview URL: %s", _nodemailer["default"].getTestMessageUrl(info));

          case 5:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function sendEmail(_x4, _x5) {
    return _ref5.apply(this, arguments);
  };
}();

exports.sendEmail = sendEmail;
//# sourceMappingURL=password.js.map