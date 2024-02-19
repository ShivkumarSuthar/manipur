const categoryData = require("../models/categoriesModel.js");
const express = require('express');
const postCategory = express();

postCategory.post("/addCategory", async (req, res) => {
    try {
        const {name, description, status, date}=req.query;

        if(!name || !description){
            res.status(500).status("name and descripition of category is required");
            
        }else{
            await categoryData.create({
                name:name,
                description:description,
                status:status,
                date:date,
            })
            res.status(201).send("category added successfully!")
        }
     
    } catch (e) {
        res.status(500).send("internal server error")
    }
})

module.exports=postCategory;