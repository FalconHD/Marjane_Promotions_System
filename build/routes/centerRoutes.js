"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.center = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _typeorm = require("typeorm");

var _express = require("express");

var _models = require("../models");

var _middleware = require("../middleware");

var router = (0, _express.Router)(); //products catgeory  array 
// let centers = [
//     {
//         name: "marjane",
//         city: "safi"
//     },
//     {
//         name: "marjane",
//         city:"agadir"
//     }
// ]

exports.center = router;
router.post('/add', _middleware.isSuper, /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var _req$body, name, city, adminCenter, connection, newCenter;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _req$body = req.body, name = _req$body.name, city = _req$body.city, adminCenter = _req$body.adminCenter;
            connection = (0, _typeorm.getConnection)(); // centers.forEach(async cent => {

            newCenter = new _models.center();
            newCenter.name = name;
            newCenter.city = city;
            newCenter.adminCenter = adminCenter;
            _context.next = 8;
            return connection.getRepository("center").save(newCenter)["catch"](function (error) {
              console.log(error);
            });

          case 8:
            newCenter = _context.sent;
            console.log(newCenter); // })

            res.json({
              message: "Center added"
            });

          case 11:
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
//# sourceMappingURL=centerRoutes.js.map