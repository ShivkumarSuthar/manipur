const express = require("express");
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require("body-parser"); // Require body-parser only once
const postUser = require("./routes/postUsers.js");
const getUser = require("./routes/getUser.js");
const postCategory = require('./routes/postCategory.js');
const getCategory = require("./routes/getCategory.js");
const postTimeWall = require('./routes/postTimeWall.js'); // Import postTimeWall route
const GetTimeWall = require('./routes/getTimeWall'); // Import postTimeWall route

const app = express();

// Middleware
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true })); // Parse URL-encoded bodies
app.use(bodyParser.json()); // Parse JSON bodies
app.use(cors());

// Routes
app.use("/users", getUser);
app.use("/api", postUser);
app.use("/category", postCategory);
app.use("/category", getCategory);
app.use('/timeWall', postTimeWall);
app.use('/timeWall', GetTimeWall);

// Serve static files
app.use(express.static('public'));

// Database connection
const url = "mongodb://localhost:27017/manipur";
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to database"))
  .catch(err => console.error("Connection to database failed:", err));

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log("Running server on PORT " + PORT));
