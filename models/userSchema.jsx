const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    username:{type:String,trim:true,max:50, min:3,required:true},
    fullname:{type:String,trim:true,max:50, min:3,required:true},
    email:{type:String,trime:true,required:true},
    password:{type:String,required:true},
    address:{type:String,default:''},
    bio:{}
    friends:[{type:mongoose.Types.ObjectId,ref:"user"}]
},{
    timestamp:true
})

module.exports = mongoose.model("user",userSchema)