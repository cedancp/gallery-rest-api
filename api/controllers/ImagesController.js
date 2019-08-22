const ImageModel = require('../models/ImageModel').ImageModel;
const saveImage = require('../repositories/ImageRepository').saveImage;
const getImages = require('../repositories/ImageRepository').getImages;
/**
 * Gets a list of images
 * @param {*} req 
 * @param {*} res 
 */
exports.listImages = async (req, res) => {
  const images = await getImages();
  console.log(images)
  // Setting real image url 
  images.forEach( image => {
    image.imageUrl = `${process.env.IMAGE_DOMAIN}${image.imageUrl}`
  })
  res.status(200).json(images);
}

/**
 * Uploads an image
 * @param {*} req 
 * @param {*} res 
 */
exports.uploadImage = async (req, res) => {
  if(req.file) {
    let image = new ImageModel();
    image.name = req.body.name;
    image.description = req.body.description;
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