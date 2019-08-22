const getConnection = require('typeorm').getConnection;
const getRepository = require('typeorm').getRepository;
const Image = require('../entities/Image');

exports.getImages = async () => {
    const images = await getRepository(Image)
    .createQueryBuilder("image")
    .getMany();  
    
    return images;
}

exports.saveImage = async (image) => {
    await getConnection()
    .createQueryBuilder()
    .insert()
    .into(Image)
    .values(image)
    .execute();    
}