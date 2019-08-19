const getConnection = require('typeorm').getConnection;
const Image = require('../entities/Image');

exports.saveImage = async (image) => {
    await getConnection()
    .createQueryBuilder()
    .insert()
    .into(Image)
    .values(image)
    .execute();    
}