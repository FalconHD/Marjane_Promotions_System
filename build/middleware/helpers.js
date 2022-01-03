"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.localLogs = exports.isMorning = exports.calculateFidelity = void 0;

var _fs = _interopRequireDefault(require("fs"));

var calculateFidelity = function calculateFidelity(pourcentage, _ref) {
  var name = _ref.name;

  if (pourcentage < 50) {
    if (name != "Electronics") {
      return +pourcentage / 5 * 50;
    } else {
      if (+pourcentage < 20) {
        return +pourcentage / 5 * 50;
      } else {
        throw new Error("The PR of Electronics is not more than 20%");
      }
    }
  } else {
    throw new Error("the PR is not more than 50%");
  }
};

exports.calculateFidelity = calculateFidelity;

var isMorning = function isMorning(req, res, next) {
  var currentTime = new Date();
  var currentHour = currentTime.getHours();

  if (currentHour >= 8 && currentHour < 12) {
    next();
  } else {
    next(new Error("The promotions are closed"));
  }
};

exports.isMorning = isMorning;

var localLogs = function localLogs(newLog) {
  _fs["default"].readFile('src/public/logs.json', 'utf8', function readFileCallback(err, data) {
    if (err) {
      console.log(err);
    } else {
      var logs = JSON.parse(data);
      logs.push(newLog);
      var json = JSON.stringify(logs, null, 3);

      _fs["default"].writeFile('src/public/logs.json', json, 'utf8', function (err, data) {
        console.log(data);
      });
    }
  });
};

exports.localLogs = localLogs;
//# sourceMappingURL=helpers.js.map