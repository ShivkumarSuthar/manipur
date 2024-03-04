const categoryData = require("../models/categoriesModel.js");
const express = require('express');

const postCategoryRouter = express.Router();

postCategoryRouter.use(express.json()); // Middleware for parsing JSON bodies

postCategoryRouter.post("/addCategory",   async (req, res) => {
    try {
        const { name, description, status, dates } = req.body;
        console.log(req.body)
        if (!name || !description) {
            return res.status(400).send("Name and description of category are required");
        }
     await categoryData.create({
            name: name,
            description: description,
            status: status || 'active', // Default to 'active' if status is not provided
            dates: dates 
        });
        // await newCategory.save()
       
       
        res.status(201).send("Category added successfully!");
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal server error");
    }
});

module.exports = postCategoryRouter;
