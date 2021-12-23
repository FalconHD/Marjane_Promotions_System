"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.manager = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _typeorm = require("typeorm");

var _express = require("express");

var _models = require("../models");

var _middleware = require("../middleware");

var router = (0, _express.Router)(); //get all promotion by category
// router.get('/promotion', async (req, res, next) => {
//     try {
//         const  idManager   = verifyToken(req.headers.authorization.split(" ")[1], process.env.JWT_MANAGER_SECRET);
//         console.log(idManager);
//         const connection = getConnection()
//         const getManager = await connection.getRepository("manager").find({relations: ['category'],
//             id :idManager.id
//         })
//         console.log(getManager.categoryId);
//         const promotion = await connection
//             .getRepository("promotion")
//             // .find({relations: ['product','category']})
//             .createQueryBuilder("promotion")
//             .leftJoinAndSelect("promotion.product","product")
//             .leftJoinAndSelect("product.category","category")
//             .where('category.id = :categoryId',{categoryId:"2abbab78-9e90-40ed-a881-d19fa96d1c45"})
//             .getMany();
//             console.log(promotion);
//         res.json(promotion)
//     } catch (error) {
//         next(error)
//     }
// })
//get all promotion by category

exports.manager = router;
router.get('/promotion', _middleware.isManager, _middleware.isMorning, /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res, next) {
    var getcategory, connection, _manager, start, end, promotion;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            getcategory = (0, _middleware.verifyToken)(req.headers.authorization.split(" ")[1], process.env.JWT_MANAGER_SECRET);
            connection = (0, _typeorm.getConnection)();
            _context.next = 5;
            return connection.getRepository("manager").findOne({
              where: {
                id: getcategory.id
              },
              relations: ['category', 'center', 'center.adminCenter']
            });

          case 5:
            _manager = _context.sent;
            start = "".concat(new Date().toISOString().split('T')[0], " 00:00:00");
            end = "".concat(new Date().toISOString().split('T')[0], " 11:59:59");
            _context.next = 10;
            return connection.getRepository("promotion").find({
              relations: ['product', "product.category", "adminCenter", "adminCenter.center"],
              where: {
                product: {
                  category: _manager.category.id
                },
                adminCenter: {
                  id: _manager.center.adminCenter.id
                },
                createdAt: (0, _typeorm.Between)(start, end)
              }
            });

          case 10:
            promotion = _context.sent;
            // //update status the promotion
            res.json(promotion);
            _context.next = 17;
            break;

          case 14:
            _context.prev = 14;
            _context.t0 = _context["catch"](0);
            next(_context.t0);

          case 17:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 14]]);
  }));

  return function (_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}());
router.post('/login', /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var connection, _req$body, email, password, manager, isValid, token;

    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            connection = (0, _typeorm.getConnection)();
            _req$body = req.body, email = _req$body.email, password = _req$body.password;
            _context2.next = 4;
            return connection.getRepository("manager").findOne({
              where: {
                email: email
              }
            });

          case 4:
            manager = _context2.sent;

            if (!manager) {
              _context2.next = 12;
              break;
            }

            _context2.next = 8;
            return (0, _middleware.checkPassword)(password, manager.password);

          case 8:
            isValid = _context2.sent;

            if (isValid) {
              token = (0, _middleware.generateToken)(manager, process.env.JWT_MANAGER_SECRET, "manager");
              res.json({
                data: manager,
                token: token
              });
            } else {
              res.json({
                message: "Invalid password"
              });
            }

            _context2.next = 13;
            break;

          case 12:
            res.json({
              message: "Invalid email"
            });

          case 13:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function (_x4, _x5) {
    return _ref2.apply(this, arguments);
  };
}());
//# sourceMappingURL=managerRoutes.js.map