"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isSuper = exports.isManager = exports.isAdCenter = void 0;

var _ = require(".");

var isSuper = function isSuper(req, res, next) {
  try {
    if (req.headers.authorization) {
      var tokensData = (0, _.verifyToken)(req.headers.authorization.split(" ")[1], process.env.JWT_SUPER_SECRET);

      if (tokensData && tokensData.role === 'super_admin') {
        next();
      } else {
        res.status(403).json({
          message: 'Access denied'
        });
      }
    } else {
      next(new Error('No token provided'));
    }
  } catch (error) {
    next(error);
  }
};

exports.isSuper = isSuper;

var isAdCenter = function isAdCenter(req, res, next) {
  try {
    if (req.headers.authorization) {
      var tokensData = (0, _.verifyToken)(req.headers.authorization.split(" ")[1], process.env.JWT_CENTER_SECRET);
      console.log(tokensData);

      if (tokensData && tokensData.role === 'admin_center') {
        next();
      } else {
        res.status(403).json({
          message: 'Access denied'
        });
      }
    } else {
      next(new Error('No token provided'));
    }
  } catch (error) {
    next(error);
  }
};

exports.isAdCenter = isAdCenter;

var isManager = function isManager(req, res, next) {
  try {
    if (req.headers.authorization) {
      var tokensData = (0, _.verifyToken)(req.headers.authorization.split(" ")[1], process.env.JWT_MANAGER_SECRET);

      if (tokensData && tokensData.role === 'manager') {
        next();
      } else {
        res.status(403).json({
          message: 'Access denied'
        });
      }
    } else {
      next(new Error('No token provided'));
    }
  } catch (error) {
    next(error);
  }
}; // const isAuthenticated = (req, res, next) => {
//     try {
//         if (req.headers.authorization) {
//             const tokensData = verifyToken(req.headers.authorization.split(" ")[1], process.env.JWT_SECRET)
//             if (tokensData) {
//                 next()
//             } else {
//                 res.status(403).json({
//                     message: 'Access denied'
//                 })
//             }
//         } else {
//             next(new Error('No token provided'))
//         }
//     } catch (error) {
//         next(error)
//     }
// }


exports.isManager = isManager;
//# sourceMappingURL=profiles.js.map