const express = require("express");
const timeWallModel = require("../models/timeWallModel.js");
const postTimeWall = express();

postTimeWall.post("/addTimeWall", async (req, res) => {
    try {
        const timeWall = await timeWallModel.create({
            name: req.query.name,
            date: req.query.date,
            video: req.query.video,
            thumbnail: req.query.thumbnail,
        })

        if(timeWall){
            res.status(201).send("Time Wall had been created successfully!")
        }
        else{
            res.status(500).send("something went wrongs!")
        }
    } catch (e) {
        res.status(500).send("Internal server Error!")
    }
})