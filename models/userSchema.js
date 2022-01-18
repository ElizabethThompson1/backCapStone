const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    username:{type:String,maxLength:50, minLength:3,required:true},
    fullname:{type:String,maxLength:50, minLength:3,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true},
    avatar:{
        type:String,
        default:'https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80'},
    interest:{type:String,default:"",maxLength:200},
    friends:[{type:mongoose.Types.ObjectId,ref:"user"}],
    following:[{type:mongoose.Types.ObjectId,ref:"user"}],
},{
    timestamps:true
})

module.exports = mongoose.model("user",userSchema)