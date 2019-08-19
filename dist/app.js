"use strict";

require("reflect-metadata");

require("@babel/polyfill");

var _http = _interopRequireDefault(require("http"));

var _express = _interopRequireDefault(require("express"));

var _typeorm = require("typeorm");

var _images = _interopRequireDefault(require("./routes/images"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var PORT = process.eventNames.port || 3000;
var app = (0, _express["default"])(); // Gets connections from .env file and creates connection

var getApp =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee() {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0, _typeorm.getConnectionOptions)().then(function (connectionOptions) {
              return (0, _typeorm.createConnection)(Object.assign(connectionOptions)).then(function (connection) {
                app.use('/images', _images["default"]);

                var server = _http["default"].createServer(app);

                server.listen(PORT, function () {
                  return console.log("Server is running on http://localhost:".concat(PORT));
                });
              })["catch"](function (error) {
                return console.log(error);
              });
            });

          case 2:
            return _context.abrupt("return", app);

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getApp() {
    return _ref.apply(this, arguments);
  };
}(); // Initialize Server


getApp();
module.exports = getApp;