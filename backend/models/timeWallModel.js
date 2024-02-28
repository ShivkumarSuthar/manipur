const mongoose = require('mongoose');

//creating schema
const timeWallSchema = mongoose.Schema({
    name: {
        type: String
    },
    category: {
        type: String,
    },

    thumbnail: {
        type: String,
        default: 'thumbnail',
    },
    video: {
        type: String,
    },
    date: {
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model("time_Wall", timeWallSchema)