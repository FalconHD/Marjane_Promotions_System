"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "app", {
  enumerable: true,
  get: function get() {
    return _server.app;
  }
});
Object.defineProperty(exports, "connection", {
  enumerable: true,
  get: function get() {
    return _db.connection;
  }
});
Object.defineProperty(exports, "router", {
  enumerable: true,
  get: function get() {
    return _server.router;
  }
});

var _server = require("./server");

var _db = require("./db");
//# sourceMappingURL=index.js.map