const post_user = require("./routes/postUsers.js");
const get_User = require("./routes/getUser.js");
const postCategory=require('./routes/postCategory.js')
const getCategory=require("./routes/getCategory.js")
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require("body-parser"); // Require body-parser only once
const app = express();

// Middleware
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false })); // Parse URL-encoded bodies
app.use(bodyParser.json()); // Parse JSON bodies
app.use(cors());
app.use("/users", get_User);
app.use("/api", post_user);
app.use("/category", postCategory)
app.use("/category", getCategory)

// Making connection
const url = "mongodb://localhost:27017";
mongoose.connect(`${url}/manipur`);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log("Running server on PORT " + PORT));
