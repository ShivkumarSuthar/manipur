const mongoose=require('mongoose')

//creating schema for user
const user=mongoose.Schema({
userName:{
    type:String,
    // unique:true,
    required:true
},
password:{
    type:String,
    required:true
}
})

const userData=mongoose.model('user',user)

module.exports=userData;