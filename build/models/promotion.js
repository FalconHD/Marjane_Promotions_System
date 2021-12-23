"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.promotion = void 0;

var _initializerDefineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/initializerDefineProperty"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _applyDecoratedDescriptor2 = _interopRequireDefault(require("@babel/runtime/helpers/applyDecoratedDescriptor"));

var _initializerWarningHelper2 = _interopRequireDefault(require("@babel/runtime/helpers/initializerWarningHelper"));

var _typeorm = require("typeorm");

var _adminCenter = require("./adminCenter");

var _product = require("./product");

var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7;

var promotion = (_dec = (0, _typeorm.Entity)(), _dec2 = (0, _typeorm.PrimaryGeneratedColumn)('uuid'), _dec3 = (0, _typeorm.Column)("int"), _dec4 = (0, _typeorm.Column)("int"), _dec5 = (0, _typeorm.Column)("varchar"), _dec6 = (0, _typeorm.CreateDateColumn)(), _dec7 = (0, _typeorm.ManyToOne)(function () {
  return _adminCenter.adminCenter;
}, function (admin) {
  return admin.adminCenter;
}, {
  cascade: true
}), _dec8 = (0, _typeorm.ManyToOne)(function () {
  return _product.product;
}, function (product) {
  return product.products;
}), _dec(_class = (_class2 = /*#__PURE__*/(0, _createClass2["default"])(function promotion() {
  (0, _classCallCheck2["default"])(this, promotion);
  (0, _initializerDefineProperty2["default"])(this, "id", _descriptor, this);
  (0, _initializerDefineProperty2["default"])(this, "pourcentage", _descriptor2, this);
  (0, _initializerDefineProperty2["default"])(this, "carteFid\xE9lit\xE9", _descriptor3, this);
  (0, _initializerDefineProperty2["default"])(this, "status", _descriptor4, this);
  (0, _initializerDefineProperty2["default"])(this, "createdAt", _descriptor5, this);
  (0, _initializerDefineProperty2["default"])(this, "adminCenter", _descriptor6, this);
  (0, _initializerDefineProperty2["default"])(this, "product", _descriptor7, this);
}), (_descriptor = (0, _applyDecoratedDescriptor2["default"])(_class2.prototype, "id", [_dec2], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor2 = (0, _applyDecoratedDescriptor2["default"])(_class2.prototype, "pourcentage", [_dec3], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor3 = (0, _applyDecoratedDescriptor2["default"])(_class2.prototype, "carteFid\xE9lit\xE9", [_dec4], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor4 = (0, _applyDecoratedDescriptor2["default"])(_class2.prototype, "status", [_dec5], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor5 = (0, _applyDecoratedDescriptor2["default"])(_class2.prototype, "createdAt", [_dec6], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return undefined;
  }
}), _descriptor6 = (0, _applyDecoratedDescriptor2["default"])(_class2.prototype, "adminCenter", [_dec7], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor7 = (0, _applyDecoratedDescriptor2["default"])(_class2.prototype, "product", [_dec8], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class2)) || _class);
exports.promotion = promotion;
//# sourceMappingURL=promotion.js.map