"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.connection = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _typeorm = require("typeorm");

var connection = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
    var connection;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0, _typeorm.createConnection)({
              type: "mysql",
              port: 3306,
              host: process.env.DB_HOST,
              username: process.env.DB_USER,
              password: process.env.DB_PASS,
              database: process.env.DB_NAME,
              synchronize: false,
              logging: false,
              entities: ["build/models/*.js"],
              migrationsTableName: "custom_migration_table",
              migrations: ["src/models/migration/*.js"],
              cli: {
                migrationsDir: "migration"
              }
            });

          case 2:
            connection = _context.sent;
            return _context.abrupt("return", connection);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function connection() {
    return _ref.apply(this, arguments);
  };
}();

exports.connection = connection;
//# sourceMappingURL=db.js.map