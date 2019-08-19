"use strict";

var _express = _interopRequireDefault(require("express"));

var _ImagesController = require("../controllers/ImagesController");

var _multer = _interopRequireDefault(require("multer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * Routes for images related requests
 */
// Multer configuration
var storage = _multer["default"].diskStorage({
  destination: function destination(req, file, callback) {
    callback(null, 'uploadedImages/');
  },
  filename: function filename(req, file, callback) {
    callback(null, "".concat(new Date().toISOString(), "_").concat(file.originalname));
  }
});

var fileFilter = function fileFilter(req, file, callback) {
  if (file.mimetype === 'image/jpg' || file.mimetype === 'image/png' || file.mimetype === 'image/jpeg') {
    callback(null, true);
  } else {
    callback(null, false);
  }
};

var upload = (0, _multer["default"])({
  storage: storage,
  fileFilter: fileFilter
});

var router = _express["default"].Router();
/**
 *  
 * Route to get a list of images
 * 
 * @param route
 * @param controller
 */


router.get('/', _ImagesController.getImages);
/**
 *  
 * Route upload an image
 * 
 * @param route
 * @param controller
 */

router.post('/', upload.single('imageFile'), _ImagesController.uploadImage);
module.exports = router;