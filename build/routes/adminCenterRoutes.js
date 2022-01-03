"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.adminCenter = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _typeorm = require("typeorm");

var _express = require("express");

var _models = require("../models");

var _middleware = require("../middleware");

var router = (0, _express.Router)();
exports.adminCenter = router;
router.get('/all', _middleware.isAdCenter, /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var connection, admins;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            connection = (0, _typeorm.getConnection)();
            console.log(connection);
            _context.next = 4;
            return connection.getRepository("admin_center").find()["catch"](function (error) {
              console.log(error);
            });

          case 4:
            admins = _context.sent;
            res.json(admins);

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());
router.get('/:id', /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var connection, id, users;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            connection = (0, _typeorm.getConnection)();
            id = req.params.id;
            _context2.next = 4;
            return connection.getRepository("admin_center").findOne({
              where: {
                id: id
              }
            });

          case 4:
            users = _context2.sent;
            res.json(users);

          case 6:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function (_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}());
router.post('/add', /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res, next) {
    var connection, _req$body, email, password, admin;

    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            connection = (0, _typeorm.getConnection)();
            _req$body = req.body, email = _req$body.email, password = _req$body.password;
            admin = new _models.adminCenter();
            admin.email = email;
            _context3.next = 6;
            return (0, _middleware.hashPassword)(password);

          case 6:
            admin.password = _context3.sent;
            _context3.next = 9;
            return connection.getRepository("admin_center").save(admin)["catch"](function (error) {
              console.log(error.message);
            });

          case 9:
            admin = _context3.sent;
            res.json(admin);

          case 11:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function (_x5, _x6, _x7) {
    return _ref3.apply(this, arguments);
  };
}());
router.post('/addManger', _middleware.isAdCenter, /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res, next) {
    var password, connection, _req$body2, name, email, center, category, managerRayon, tokensData, logMsg;

    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return (0, _middleware.generatePassword)();

          case 2:
            password = _context4.sent;
            connection = (0, _typeorm.getConnection)();
            _req$body2 = req.body, name = _req$body2.name, email = _req$body2.email, center = _req$body2.center, category = _req$body2.category;
            managerRayon = new _models.manager();
            managerRayon.name = name;
            managerRayon.email = email;
            _context4.next = 10;
            return (0, _middleware.hashPassword)(password);

          case 10:
            managerRayon.password = _context4.sent;
            managerRayon.center = center;
            managerRayon.category = category; //Send Email 

            (0, _middleware.sendEmail)(email, password);
            _context4.next = 16;
            return connection.getRepository("manager").save(managerRayon)["catch"](function (error) {
              console.log(error.message);
            });

          case 16:
            managerRayon = _context4.sent;
            console.log(managerRayon); //create log

            tokensData = (0, _middleware.verifyToken)(req.headers.authorization.split(" ")[1], process.env.JWT_CENTER_SECRET);
            console.log(tokensData);
            logMsg = new _models.logs();
            logMsg.message = " Admin Center :".concat(tokensData.id, " create an manger Center: ").concat(managerRayon.id, " ");
            logMsg.target = tokensData.id;
            logMsg.status = 'created';
            _context4.next = 26;
            return connection.getRepository("logs").save(logMsg)["catch"](function (error) {
              console.log(error);
            });

          case 26:
            logMsg = _context4.sent;
            (0, _middleware.localLogs)(logMsg);
            res.json({
              message: "manager center added"
            });

          case 29:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function (_x8, _x9, _x10) {
    return _ref4.apply(this, arguments);
  };
}());
router.post('/login', /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    var connection, _req$body3, email, password, admin, isValid, token;

    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            connection = (0, _typeorm.getConnection)();
            _req$body3 = req.body, email = _req$body3.email, password = _req$body3.password;
            _context5.next = 4;
            return connection.getRepository("admin_center").findOne({
              where: {
                email: email
              }
            });

          case 4:
            admin = _context5.sent;

            if (!admin) {
              _context5.next = 12;
              break;
            }

            _context5.next = 8;
            return (0, _middleware.checkPassword)(password, admin.password);

          case 8:
            isValid = _context5.sent;

            if (isValid) {
              token = (0, _middleware.generateToken)(admin, process.env.JWT_CENTER_SECRET, "admin_center");
              res.json({
                data: admin,
                token: token
              });
            } else {
              res.json({
                message: "Invalid password"
              });
            }

            _context5.next = 13;
            break;

          case 12:
            res.json({
              message: "Invalid email"
            });

          case 13:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function (_x11, _x12) {
    return _ref5.apply(this, arguments);
  };
}());
//# sourceMappingURL=adminCenterRoutes.js.map