const mongoose = require('mongoose');

//creating schema
const timeWallSchema = mongoose.Schema({
    name: {
        type: String,
        requied: true,
    },
    thumbnail: {
        type:String,
        requied:true,
    },
    video: {
        type:String,
        requied:true,
    },
    date: {
        type:Date,
        default:Date.now()
    }
})

module.exports=mongoose.model("time_Wall", timeWallSchema)