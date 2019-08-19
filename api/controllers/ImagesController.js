
/**
 * Gets a list of images
 * @param {*} req 
 * @param {*} res 
 */
export const getImages = async (req, res) => {
  res.status(200).json([{
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/d/d7/Android_robot.svg'
  }])
}

/**
 * Uploads an image
 * @param {*} req 
 * @param {*} res 
 */
export const uploadImage = async (req, res) => {
  res.status(200).send({
    message: 'image uploaded'
  });
}