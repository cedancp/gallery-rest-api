"use strict";

var _express = _interopRequireDefault(require("express"));

var _ImagesController = _interopRequireDefault(require("../controllers/ImagesController"));

var _ImagesController2 = require("../../dist/controllers/ImagesController");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * Routes for images related requests
 */
var router = _express["default"].Router();
/**
 * Gets a list of images from database
 * 
 * Route /images
 */
// router.get('/', (req, res, next) => {
//     res.status(200).json([{
//         imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/d/d7/Android_robot.svg'
//     }])
// });


router.get('/', _ImagesController2.uploadImage);
module.exports = router;