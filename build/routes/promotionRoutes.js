"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.promotion = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _typeorm = require("typeorm");

var _express = require("express");

var _models = require("../models");

var _middleware = require("../middleware");

var _Logs = require("../models/Logs");

var _profiles = require("../middleware/profiles");

var router = (0, _express.Router)();
exports.promotion = router;
router.post('/add', _middleware.isAdCenter, /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res, next) {
    var _verifyToken, id, connection, _req$body, pourcentage, product, productCategory, promo, logMsg;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _verifyToken = (0, _middleware.verifyToken)(req.headers.authorization.split(" ")[1], process.env.JWT_CENTER_SECRET), id = _verifyToken.id;
            connection = (0, _typeorm.getConnection)();
            _req$body = req.body, pourcentage = _req$body.pourcentage, product = _req$body.product;
            _context.next = 6;
            return connection.getRepository("product").findOne({
              relations: ["category"],
              where: {
                id: product
              }
            });

          case 6:
            productCategory = _context.sent;

            if (productCategory) {
              _context.next = 9;
              break;
            }

            throw new Error("product not found");

          case 9:
            promo = new _models.promotion();
            promo.pourcentage = pourcentage;
            promo.carteFidélité = (0, _middleware.calculateFidelity)(pourcentage, productCategory.category.name);
            promo.adminCenter = id;
            promo.status = "pending";
            promo.product = product;
            _context.next = 17;
            return connection.getRepository("promotion").save(promo);

          case 17:
            promo = _context.sent;
            //generating logs for the promotion
            logMsg = new _Logs.logs();
            logMsg.message = "Admin Center: ".concat(id, " || create promotion: ").concat(promo.id, " || Product : ").concat(product);
            logMsg.target = id;
            logMsg.status = 'created';
            _context.next = 24;
            return connection.getRepository("logs").save(logMsg);

          case 24:
            logMsg = _context.sent;
            res.json({
              message: "promotion added"
            });
            _context.next = 31;
            break;

          case 28:
            _context.prev = 28;
            _context.t0 = _context["catch"](0);
            next(_context.t0);

          case 31:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 28]]);
  }));

  return function (_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}()); // router.get('/all', isManager, async (req, res, next) => {
//     try {
//         const getcategory = verifyToken(req.headers.authorization.split(" ")[1], process.env.JWT_MANAGER_SECRET);
//         //
//         const connection = getConnection()
//         // const category = await connection.getRepository("manager").find({relations: ['category','center']})
//         const promotion = await connection
//             .getRepository("promotion")
//             // .find({relations: ['product','category']})
//             .createQueryBuilder("promotion")
//             .leftJoinAndSelect("promotion.product", "product")
//             .leftJoinAndSelect("product.category", "category")
//             // 
//             .getMany();
//         console.log(promotion);
//         res.json(promotion)
//     } catch (error) {
//         next(error)
//     }
// })

router.put('/:id', _profiles.isManager, /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var connection, id, updatePromotion, tokensData, logMsg;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            connection = (0, _typeorm.getConnection)();
            id = req.params.id;
            console.log(id);
            _context2.next = 5;
            return connection.createQueryBuilder().update("promotion").set({
              status: req.body.status
            }).where("id = :id", {
              id: id
            }).execute();

          case 5:
            updatePromotion = _context2.sent;
            //create log
            tokensData = (0, _middleware.verifyToken)(req.headers.authorization.split(" ")[1], process.env.JWT_MANAGER_SECRET);
            console.log(tokensData);
            logMsg = new _Logs.logs();
            logMsg.message = " Manager :".concat(tokensData.id, " update status  promotion: ").concat(id, " ");
            logMsg.target = tokensData.id;
            logMsg.status = 'created';
            _context2.next = 14;
            return connection.getRepository("logs").save(logMsg)["catch"](function (error) {
              console.log(error);
            });

          case 14:
            logMsg = _context2.sent;
            (0, _middleware.localLogs)(logMsg);
            res.json(updatePromotion);

          case 17:
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
//# sourceMappingURL=promotionRoutes.js.map