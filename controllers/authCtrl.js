const Users = require("../models/userSchema");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const authCtrl ={
register: async (req,res)=>{
    try{
        const {fullname,username,email,password} = req.body;
        const newUsername = username.toLowerCase().replace(/ /g,'');
        console.log(newUsername)

        const user_name= await Users.findOne({username: newUsername})
        if(user_name) return res.status(400).json({msg: "this is already a user"})

        const Email = await Users.findOne({email: email})
        if(Email) return res.status(400).json({msg: "this is already a email"})

        if(password.length < 4) return res.status(400).json({msg:"password must be atleast 4 characters"})

        const passwordHash = await bcrypt.hash(password,13);

        const newUser = new Users({
            fullname,username:newUsername,email,password:passwordHash
        })

        const access_token = createAccessToken({id:newUser._id});
        const refresh_token = createRefreshToken({id:newUser._id});
        console.log(access_token,refresh_token)

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

const createAccessToken = ( payload) =>{
    return jwt.sign(payload, process.env.ACCESSTOKENSECRET, {expiresIn: "1d"})
}

const createRefreshToken = ( payload) =>{
    return jwt.sign(payload, process.env.REFRESHTOKENSECRET,{expiresIn: "30d"})
}
module.exports = authCtrl