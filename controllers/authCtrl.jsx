const Users = require("../models/userSchema");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const authCtrl ={
register: async (req,res)=>{
    try{
        const {fullname,username,email,password} = req.body;
        const newUsername = username.toLowerCase().replace(/ /g,"");
        const user_name=User.findOne({username:newUsername})
        if(user_name) res.status(400).json({msg: "this is already a user"})

        const Email =User.findOne({email: email})
        if(Email) res.status(400).json({msg: "this is already a user"})

        if(password.length < 4) res.status(400).json({msg:"password must be atleast 4 characters"})

        const passwordHash = await bcrypt.hash(password,13);

        const newUser = new Users({
            fullname,username:,email,password
        })

        res.json({
            msg:"registered"
        })
    }catch(err) {
        res.status(500).json({msg:err.message})
    }
},
login: async (req,res)=>{
    try{

    }catch(err) {
        res.status(500).json({msg:err.message})
    }
} ,
logout: async (req,res)=>{
    try{

    }catch(err) {
        res.status(500).json({msg:err.message})
    }
},
generateAccessToken: async (req,res)=>{
    try{

    }catch(err) {
        res.status(500).json({msg:err.message})
    }
},
}

module.exports = authCtrl