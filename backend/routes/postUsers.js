const userData = require('../models/userModel.js');
const express = require('express');
const bodyParser = require("body-parser");
const post_User = express();

// Middleware to parse JSON bodies
post_User.use(bodyParser.json());

post_User.post("/createUser", async (req, res) => {
  try {
    let userName = req.body.userName;
    let password = req.body.password;

    // If userName and password are not in req.body, check req.query
    if (!userName || !password) {
      userName = req.query.userName;
      password = req.query.password;
    }

    // Check if both userName and password are provided
    if (!userName || !password) {
      return res.status(400).send("Both userName and password are required.");
    }

    // Create the user
    await userData.create({
      userName: userName,
      password: password
    });

    // Send success response
    res.status(201).send("User has been successfully created!");
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).send("Error creating user");
  }
});

module.exports = post_User;
