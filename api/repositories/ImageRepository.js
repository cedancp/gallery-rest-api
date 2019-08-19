import { getConnection } from "typeorm";
import { Image } from '../entities/Image'

export const saveImage = async (image) => {
    try {
        await getConnection()
        .createQueryBuilder()
        .insert()
        .into(Image)
        .values(image)
        .execute();
    } catch (error) {
        console.log('**************',error)
    }
    
}