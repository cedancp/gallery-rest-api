/**
 * Routes for images related requests
 */

const express = require('express');
const uploadImage = require('../controllers/ImagesController').uploadImage;
const listImages = require('../controllers/ImagesController').listImages;
const multer = require('multer');

// Multer configuration
const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, 'uploadedImages/');
    },
    filename: (req, file, callback) => {
        callback(null, `${new Date().toISOString()}_${file.originalname}`);
    }
});

const fileFilter = (req, file, callback) => {
    if(file.mimetype === 'image/jpg' || file.mimetype === 'image/png' || file.mimetype === 'image/jpeg') {
        callback(null, true);
    } else {
        callback(null, false);
    }
}

const upload = multer({ storage, fileFilter });

const router = express.Router();

/**
 *  
 * Route to get a list of images
 * 
 * @param route
 * @param controller
 */
router.get('/', listImages);

/**
 *  
 * Route upload an image
 * 
 * @param route
 * @param controller
 */
router.post('/', upload.single('imageFile'), uploadImage);

module.exports = router;