"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.manager = void 0;

var _initializerDefineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/initializerDefineProperty"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _applyDecoratedDescriptor2 = _interopRequireDefault(require("@babel/runtime/helpers/applyDecoratedDescriptor"));

var _initializerWarningHelper2 = _interopRequireDefault(require("@babel/runtime/helpers/initializerWarningHelper"));

var _typeorm = require("typeorm");

var _category = require("./category");

var _center = require("./center");

var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7;

var manager = (_dec = (0, _typeorm.Entity)(), _dec2 = (0, _typeorm.Unique)(["email"]), _dec3 = (0, _typeorm.PrimaryGeneratedColumn)('uuid'), _dec4 = (0, _typeorm.Column)("varchar"), _dec5 = (0, _typeorm.Column)("varchar"), _dec6 = (0, _typeorm.Column)("varchar"), _dec7 = (0, _typeorm.CreateDateColumn)(), _dec8 = (0, _typeorm.OneToOne)(function () {
  return _center.center;
}, function (cent) {
  return cent.managers;
}, {
  cascade: true
}), _dec9 = (0, _typeorm.JoinColumn)(), _dec10 = (0, _typeorm.OneToOne)(function () {
  return _category.category;
}, function (cat) {
  return cat.managers;
}, {
  cascade: true
}), _dec11 = (0, _typeorm.JoinColumn)(), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/(0, _createClass2["default"])(function manager() {
  (0, _classCallCheck2["default"])(this, manager);
  (0, _initializerDefineProperty2["default"])(this, "id", _descriptor, this);
  (0, _initializerDefineProperty2["default"])(this, "name", _descriptor2, this);
  (0, _initializerDefineProperty2["default"])(this, "email", _descriptor3, this);
  (0, _initializerDefineProperty2["default"])(this, "password", _descriptor4, this);
  (0, _initializerDefineProperty2["default"])(this, "createdAt", _descriptor5, this);
  (0, _initializerDefineProperty2["default"])(this, "center", _descriptor6, this);
  (0, _initializerDefineProperty2["default"])(this, "category", _descriptor7, this);
}), (_descriptor = (0, _applyDecoratedDescriptor2["default"])(_class2.prototype, "id", [_dec3], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor2 = (0, _applyDecoratedDescriptor2["default"])(_class2.prototype, "name", [_dec4], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor3 = (0, _applyDecoratedDescriptor2["default"])(_class2.prototype, "email", [_dec5], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor4 = (0, _applyDecoratedDescriptor2["default"])(_class2.prototype, "password", [_dec6], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor5 = (0, _applyDecoratedDescriptor2["default"])(_class2.prototype, "createdAt", [_dec7], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return undefined;
  }
}), _descriptor6 = (0, _applyDecoratedDescriptor2["default"])(_class2.prototype, "center", [_dec8, _dec9], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor7 = (0, _applyDecoratedDescriptor2["default"])(_class2.prototype, "category", [_dec10, _dec11], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class2)) || _class) || _class);
exports.manager = manager;
//# sourceMappingURL=manager.js.map