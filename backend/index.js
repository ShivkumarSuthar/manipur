const express = require("express");
const mongoose = require('mongoose');
const cors = require('cors');

const postUser = require("./routes/postUsers.js");
const getUser = require("./routes/getUser.js");
const postCategoryRouter = require('./routes/postCategory.js');
const getCategory = require("./routes/getCategory.js");
const postTimeWall = require('./routes/postTimeWall.js');
const getTimeWall = require('./routes/getTimeWall.js');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/users", getUser);
app.use("/api", postUser);
app.use("/category", postCategoryRouter);
app.use("/category", getCategory);
app.use('/timeWall', postTimeWall);
app.use('/timeWall', getTimeWall);

// Serve static files
app.use(express.static('public'));

// Database connection
const url = "mongodb://localhost:27017/manipur";
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to database"))
  .catch(err => console.error("Connection to database failed:", err));

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log("Running server on PORT " + PORT));
