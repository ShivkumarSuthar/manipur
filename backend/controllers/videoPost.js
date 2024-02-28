const multer = require('multer');
const path = require('path');

// Configure multer storage for video files
const videoStorage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '../public/uploads'));
    },
    filename: function (req, file, cb) {
        const name = Date.now() + '_' + file.originalname;
        cb(null, name);
    }
});

// Create multer upload instance for video and thumbnail files
const uploadMiddleware = multer({ storage: videoStorage }).fields([{ name: 'video' }, { name: 'thumbnail' }]);

module.exports = uploadMiddleware;
