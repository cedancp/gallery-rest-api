"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.uploadImage = exports.getImages = void 0;

var _ImageModel = _interopRequireDefault(require("../models/ImageModel"));

var _ImageRepository = require("../repositories/ImageRepository");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

/**
 * Gets a list of images
 * @param {*} req 
 * @param {*} res 
 */
var getImages =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(req, res) {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            res.status(200).json([{
              imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/d/d7/Android_robot.svg'
            }]);

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getImages(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
/**
 * Uploads an image
 * @param {*} req 
 * @param {*} res 
 */


exports.getImages = getImages;

var uploadImage =
/*#__PURE__*/
function () {
  var _ref2 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(req, res) {
    var image;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            if (!req.file) {
              _context2.next = 10;
              break;
            }

            image = new _ImageModel["default"]();
            image.name = 'test';
            image.description = 'test';
            image.imageUrl = req.file.filename;
            _context2.next = 7;
            return (0, _ImageRepository.saveImage)(image);

          case 7:
            res.status(200).send({
              message: 'image uploaded'
            });
            _context2.next = 11;
            break;

          case 10:
            res.status(608).send({
              message: 'image not uploaded'
            });

          case 11:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function uploadImage(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.uploadImage = uploadImage;