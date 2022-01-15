require("dotenv").config();
const express = require("express");
const mongoose = require('mongoose');
const cors = require("cors");
const cookieparser= require("cookie-parser");
const authRouter = require('./routers/authRouter');
const userRouter = require("./routers/userRouter");
const messageRouter = require("./routers/messageRouter");
const commentRouter = require("/router/commentRouter");
const postRouter = require("/router/postRouter");


const app = express();

app.use(express.json())
app.use(cors());
app.use(cookieparser());


app.use('/api',authRouter)
app.use("/api",userRouter)
app.use("/api",messageRouter)
app.use("/api",commentRouter)
app.use("/api",postRouter)



const port = process.env.PORT || 5000;
const URL = process.env.MONGO_URI;

io.on('connection', socket=>{
    socketServer(socket)
})

mongoose.connect(
    URL,
    {
        useNewUrlParser:true,
        useUnifiedTopology:true,
    },err => {
        if(err) throw err;
        console.log("db is connected")
});



app.listen(port, ()=> {
    console.log(`app is running on ${port}`)
})