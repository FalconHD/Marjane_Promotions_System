"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.superAdmin = void 0;

var _initializerDefineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/initializerDefineProperty"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _applyDecoratedDescriptor2 = _interopRequireDefault(require("@babel/runtime/helpers/applyDecoratedDescriptor"));

var _initializerWarningHelper2 = _interopRequireDefault(require("@babel/runtime/helpers/initializerWarningHelper"));

var _typeorm = require("typeorm");

var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4;

var superAdmin = (_dec = (0, _typeorm.Entity)(), _dec2 = (0, _typeorm.Unique)(["email"]), _dec3 = (0, _typeorm.PrimaryGeneratedColumn)('uuid'), _dec4 = (0, _typeorm.Column)("varchar"), _dec5 = (0, _typeorm.Column)("varchar"), _dec6 = (0, _typeorm.CreateDateColumn)(), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/(0, _createClass2["default"])(function superAdmin() {
  (0, _classCallCheck2["default"])(this, superAdmin);
  (0, _initializerDefineProperty2["default"])(this, "id", _descriptor, this);
  (0, _initializerDefineProperty2["default"])(this, "email", _descriptor2, this);
  (0, _initializerDefineProperty2["default"])(this, "password", _descriptor3, this);
  (0, _initializerDefineProperty2["default"])(this, "createdAt", _descriptor4, this);
}), (_descriptor = (0, _applyDecoratedDescriptor2["default"])(_class2.prototype, "id", [_dec3], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor2 = (0, _applyDecoratedDescriptor2["default"])(_class2.prototype, "email", [_dec4], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor3 = (0, _applyDecoratedDescriptor2["default"])(_class2.prototype, "password", [_dec5], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor4 = (0, _applyDecoratedDescriptor2["default"])(_class2.prototype, "createdAt", [_dec6], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return undefined;
  }
})), _class2)) || _class) || _class);
exports.superAdmin = superAdmin;
//# sourceMappingURL=superAdmin.js.map