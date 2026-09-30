const express = require("express")
const mongoose =require("mongoose")
const dotenv=require("dotenv")
const app = express()
const cors= require("cors")
dotenv.config()
const connectDB = require("./database/connectDB")
app.use(cors())
app.use(express.json({limit:"50mb"}))

const UserRouter= require("./routers/user.routes")
app.use("/api/v1", UserRouter)

mongoose.connect(process.env.DB_URI)
.then(()=>{
    console.log("Db connected successfully");
    
})
.catch((err)=>{
    console.log("cannot connect to DB", err);
    
})















//creation of server
let PORT = process.env.PORT
app.listen(PORT, (err)=>{
    if(err){
        console.log("cannot start server at this time", err);
        
    }else{
        console.log("Server started");
        
    }
})

module.exports=async(req, res)=>{
    await connectDB()

    return app(req, res)
}