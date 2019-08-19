/**
 * Routes for images related requests
 */

import express from 'express';
import { uploadImage, getImages } from '../controllers/ImagesController';
const router = express.Router();

/**
 *  
 * Route to get a list of images
 * 
 * @param route
 * @param controller
 */
router.get('/', getImages);

/**
 *  
 * Route upload an image
 * 
 * @param route
 * @param controller
 */
router.get('/', uploadImage);

module.exports = router;