const express = require("express");
const categoriesModel = require("../models/categoriesModel.js");
const { get } = require("mongoose");
const getCategory = express();

getCategory.get("/list", async (req, res) => {
    try {
        const categories = await categoriesModel.find();
        res.status(200).send(categories)
    }
    catch (e) {
        res.status(500).send("Internal server Error")
    }
})
module.exports=getCategory;