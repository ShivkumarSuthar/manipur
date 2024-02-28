const express = require("express");
const timeWallModel = require("../models/timeWallModel");
const GetTimeWall = express();

GetTimeWall.get("/getTimeWall", async (req, res) => {
    try {
        const categories = await timeWallModel.find();
        res.status(200).send(categories)
    }
    catch (e) {
        res.status(500).send("Internal server Error")
    }
})
module.exports=GetTimeWall; 