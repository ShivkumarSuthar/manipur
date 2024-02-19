
const userData=require('../models/userModel.js');
const express=require('express');
const getUser=express();

getUser.get("/userList", async(req,res)=>{
    const users=await userData.find();
    res.send(JSON.stringify(users))
})

module.exports=getUser;