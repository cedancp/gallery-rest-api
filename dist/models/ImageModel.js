"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ImageModel = function ImageModel(name, description, imageUrl) {
  _classCallCheck(this, ImageModel);

  this.name = name;
  this.description = description;
  this.imageUrl = imageUrl;
};

exports["default"] = ImageModel;