"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.notFound = void 0;

var notFound = function notFound(req, res, next) {
  var error = new Error(" ".concat(req.originalUrl, " \uD83D\uDE91 I think you are lost \uD83E\uDD26\u200D\u2640\uFE0F\uD83E\uDD26\u200D\u2640\uFE0F "));
  next(error);
};

exports.notFound = notFound;
//# sourceMappingURL=notFound.js.map