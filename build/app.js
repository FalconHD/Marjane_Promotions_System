"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.init = void 0;

require("dotenv/config");

var _express = require("express");

var _path = _interopRequireDefault(require("path"));

var _helmet = _interopRequireDefault(require("helmet"));

var _cors = _interopRequireDefault(require("cors"));

var _morgan = _interopRequireDefault(require("morgan"));

var _config2 = require("./config");

var _middleware = require("./middleware");

var _routes = require("./routes");

var init = function init() {
  //global middlewares
  _config2.app.use('/static', (0, _express["static"])(_path["default"].join(__dirname, 'public')));

  _config2.app.use((0, _helmet["default"])());

  _config2.app.use((0, _cors["default"])());

  _config2.app.use((0, _morgan["default"])('tiny'));

  _config2.app.use((0, _express.json)()); //routes


  _config2.app.use("/super", _routes.superAdmin);

  _config2.app.use("/manager", _routes.manager);

  _config2.app.use("/category", _routes.Category);

  _config2.app.use("/admin", _routes.adminCenter);

  _config2.app.use("/product", _routes.Products);

  _config2.app.use("/promotion", _routes.promotion);

  _config2.app.use("/center", _routes.center);

  _config2.app.use("/log", _routes.logs); // 404


  _config2.app.use(_middleware.notFound); // Error handler


  _config2.app.use(_middleware.errorHandler); //init db with server


  (0, _config2.connection)().then(function () {
    _config2.app.listen(process.env.PORT, function () {
      console.log("Server is running on port " + process.env.PORT);
    });
  });
};

exports.init = init;
//# sourceMappingURL=app.js.map