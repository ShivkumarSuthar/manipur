const categoryData = require("../models/categoriesModel.js");
const express = require('express');
// const bodyParser = require("body-parser");

const postCategoryRouter = express.Router();

postCategoryRouter.post("/addCategory", async (req, res) => {
    try {
        const { name, description, status, date } = req.body;

        if (!name || !description) {
            return res.status(400).send("Name and description of category are required");
        }

        await categoryData.create({
            name: name,
            description: description,
            status: status,
            date: date,
        });

        res.status(201).send("Category added successfully!");
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal server error");
    }
});

module.exports = postCategoryRouter;
