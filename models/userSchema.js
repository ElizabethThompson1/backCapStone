const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    username:{type:String,maxLength:50, minLength:3,required:true},
    fullname:{type:String,maxLength:50, minLength:3,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true},
    image:{type:String,default:""},
    bio:{type:String,default:"",maxLength:200},
    friends:[{type:mongoose.Types.ObjectId,ref:"user"}],
    interest:[{type:mongoose.Types.ObjectId, ref:"interest"}],
    following:[{type:mongoose.Types.ObjectId,ref:"user"}],
},{
    timestamps:true
})

module.exports = mongoose.model("user",userSchema)