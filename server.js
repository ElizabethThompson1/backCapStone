require("dotenv").config();
const express = require("express");
const mongoose = require('mongoose');
const cors = require("cors");
const bcrypt = require("bcrypt");
const cookieparser= require("cookie-parser");


const app = express();

app.use(express.json())
app.use(cors());
app.use(cookieparser());

const port = process.env.PORT || 5000;
const URL = process.env.MONGO_URI;

mongoose.connect(
    URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
},err => {
    if(err) throw err;
    console.log("db is connected")
});


app.get("/",(req,res)=>{
    res.status(500).send("hello");
})


app.listen(port, ()=> {
    console.log(`app is running on ${port}`)
})