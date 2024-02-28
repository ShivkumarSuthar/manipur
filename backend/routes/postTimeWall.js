const express = require("express");
const timeWallModel = require("../models/timeWallModel.js");
const uploadMiddleware = require('../controllers/videoPost.js');

const postTimeWall = express.Router();

// Add upload middleware to handle file uploads
postTimeWall.use(uploadMiddleware);

// Route to handle adding time wall
postTimeWall.post("/addTimeWall", async (req, res) => {
    try {
        const { name, category, date } = req.body;
        
        // Ensure req.files exists and has at least two files
        if (!req.files || Object.keys(req.files).length < 2) {
            return res.status(400).json({ error: "Video and thumbnail files are required." });
        }

        const videoFile = req.files.video[0]; // Access the first file in the 'video' array
        const thumbnailFile = req.files.thumbnail[0]; // Access the first file in the 'thumbnail' array

        
         await timeWallModel.create({
            name,
            category,
            video: videoFile.filename,
            thumbnail: thumbnailFile.filename,
            date,
       
        });

        res.status(201).send("Time Wall has been created successfully!");
    } catch (e) {
        console.error(e);
        res.status(500).send("Internal server Error!");
    }
});

module.exports = postTimeWall;
