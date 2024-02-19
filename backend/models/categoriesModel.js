const mongoose=require('mongoose');



//creating schema for categories
const categoryField= mongoose.Schema({
    name:{
        type:String,
        required: true,
    },
    description:{
        type:String,
        required: true,
    },
    status:{
        type:String,
        required: true,
        default:"active",
    },
    dates:{
        type:Date,
        default:Date.now()
        },
    }
    

);


//crating model

module.exports=mongoose.model("category",categoryField)

