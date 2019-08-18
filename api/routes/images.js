/**
 * Routes for images related requests
 */

const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json([{
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/d/d7/Android_robot.svg'
    }])
}) 

module.exports = router;