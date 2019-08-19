const ImageModel = require('../models/ImageModel').ImageModel;
const saveImage = require('../repositories/ImageRepository').saveImage;
/**
 * Gets a list of images
 * @param {*} req 
 * @param {*} res 
 */
exports.getImages = async (req, res) => {
  res.status(200).json([{
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/d/d7/Android_robot.svg'
  }])
}

/**
 * Uploads an image
 * @param {*} req 
 * @param {*} res 
 */
exports.uploadImage = async (req, res) => {
  if(req.file) {
    let image = new ImageModel()
    image.name = 'test';
    image.description = 'test';
    image.imageUrl = req.file.filename;

    await saveImage(image);
    res.status(200).send({
      message: 'image uploaded'
    });
  } else {
    res.status(608).send({
      message: 'image not uploaded'
    });
  }
  
}