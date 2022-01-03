"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Products = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _typeorm = require("typeorm");

var _express = require("express");

var _models = require("../models");

var _middleware = require("../middleware");

var router = (0, _express.Router)(); //products array with category id 

exports.Products = router;
var electrs = [{
  name: "Apple iPhone XR (64GB) - Space Gray",
  price: "1,000",
  category: 1,
  image: "https://images-na.ssl-images-amazon.com/images/I/61-QZq-QZGL._SL1500_.jpg"
}, {
  name: "Apple iPhone XR (64GB) - Silver",
  price: "1,000",
  category: 1,
  image: "https://images-na.ssl-images-amazon.com/images/I/61-QZq-QZGL._SL1500_.jpg"
}, {
  name: "Apple iPhone XR (64GB) - Gold",
  price: "1,000",
  category: 1,
  image: "https://images-na.ssl-images-amazon.com/images/I/61-QZq-QZGL._SL1500_.jpg"
}]; //toys array with category 

var toys = [{
  name: "Toy Car",
  price: "1,000",
  category: 6,
  image: "https://images-na.ssl-images-amazon.com/images/I/61-QZq-QZGL._SL1500_.jpg"
}, {
  name: "Toy Car",
  price: "1,000",
  category: 6,
  image: "https://images-na.ssl-images-amazon.com/images/I/61-QZq-QZGL._SL1500_.jpg"
}]; //fashion array with category 

var fashion = [{
  name: "Fashion product 1",
  price: "1,000",
  category: 2,
  image: "https://images-na.ssl-images-amazon.com/images/I/61-QZq-QZGL._SL1500_.jpg"
}, {
  name: "Fashion product 2",
  price: "1,000",
  category: 2,
  image: "https://images-na.ssl-images-amazon.com/images/I/61-QZq-QZGL._SL1500_.jpg"
}]; //home & garden array with category 

var homeGarden = [{
  name: "Home & Garden product 1",
  price: "1,000",
  category: 3,
  image: "https://images-na.ssl-images-amazon.com/images/I/61-QZq-QZGL._SL1500_.jpg"
}, {
  name: "Home & Garden product 2",
  price: "1,000",
  category: 3,
  image: "https://images-na.ssl-images-amazon.com/images/I/61-QZq-QZGL._SL1500_.jpg"
}]; //sports array with category 

var sports = [{
  name: "Sports product 1",
  price: "1,000",
  category: 4,
  image: "https://images-na.ssl-images-amazon.com/images/I/61-QZq-QZGL._SL1500_.jpg"
}, {
  name: "Sports product 2",
  price: "1,000",
  category: 4,
  image: "https://images-na.ssl-images-amazon.com/images/I/61-QZq-QZGL._SL1500_.jpg"
}]; //health & beauty array with category 

var healthBeauty = [{
  name: "Health & Beauty product 1",
  price: "1,000",
  category: 7,
  image: "https://images-na.ssl-images-amazon.com/images/I/61-QZq-QZGL._SL1500_.jpg"
}, {
  name: "Health & Beauty product 2",
  price: "1,000",
  category: 7,
  image: "https://images-na.ssl-images-amazon.com/images/I/61-QZq-QZGL._SL1500_.jpg"
}]; //automotive array with category 

var automotive = [{
  name: "Automotive product 1",
  price: "1,000",
  category: "6756440a-cbd6-462e-a51a-05b87357e32e",
  image: "https://images-na.ssl-images-amazon.com/images/I/61-QZq-QZGL._SL1500_.jpg"
}, {
  name: "Automotive product 2",
  price: "1,000",
  category: "99c7f9c5-2b56-453d-84e1-d1fe3814ad47",
  image: "https://images-na.ssl-images-amazon.com/images/I/61-QZq-QZGL._SL1500_.jpg"
}];
router.get('/add', /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var connection, cetegories, allo;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            connection = (0, _typeorm.getConnection)();
            _context2.next = 3;
            return connection.getRepository(_models.category).find();

          case 3:
            cetegories = _context2.sent;
            console.log(cetegories);
            allo = [].concat(electrs, toys, fashion, homeGarden, sports, healthBeauty, automotive);
            allo.forEach( /*#__PURE__*/function () {
              var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(p) {
                var newProd;
                return _regenerator["default"].wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        newProd = new _models.product();
                        newProd.name = p.name;
                        newProd.category = cetegories[Math.floor(Math.random() * cetegories.length)];
                        newProd.price = Math.floor(Math.random() * 5000);
                        _context.next = 6;
                        return connection.getRepository("product").save(newProd)["catch"](function (error) {
                          console.log(error);
                        });

                      case 6:
                        newProd = _context.sent;
                        console.log(newProd);

                      case 8:
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

          case 7:
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
router.get('/all', /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var connection, products;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            connection = (0, _typeorm.getConnection)();
            console.log(connection);
            _context3.next = 4;
            return connection.getRepository("product").find({
              relations: ['category']
            })["catch"](function (error) {
              console.log(error);
            });

          case 4:
            products = _context3.sent;
            res.json(products);

          case 6:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function (_x4, _x5) {
    return _ref3.apply(this, arguments);
  };
}());
//# sourceMappingURL=productsRoutes.js.map