"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Category = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _typeorm = require("typeorm");

var _express = require("express");

var _models = require("../models");

var _middleware = require("../middleware");

var router = (0, _express.Router)(); //products catgeory  array 

exports.Category = router;
var productsCategory = [{
  name: "Electronics"
}, {
  name: "Fashion"
}, {
  name: "Home & Garden"
}, {
  name: "Sports"
}, {
  name: "Books"
}, {
  name: "Toys"
}, {
  name: "Health & Beauty"
}, {
  name: "Automotive"
}];
router.get('/add', /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var connection;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            connection = (0, _typeorm.getConnection)();
            productsCategory.forEach( /*#__PURE__*/function () {
              var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(ctr) {
                var newCat;
                return _regenerator["default"].wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        newCat = new _models.category();
                        newCat.name = ctr.name;
                        _context.next = 4;
                        return connection.getRepository("category").save(newCat)["catch"](function (error) {
                          console.log(error);
                        });

                      case 4:
                        newCat = _context.sent;
                        console.log(newCat);

                      case 6:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee);
              }));

              return function (_x3) {
                return _ref2.apply(this, arguments);
              };
            }());
            res.json({
              message: "Categories added"
            });

          case 3:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());
//# sourceMappingURL=categoryRoutes.js.map