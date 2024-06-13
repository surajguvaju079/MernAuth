import express from "express";
import dotenv from "dotenv"
import mongoose from "mongoose"
import bodyParser from "body-parser"
dotenv.config();
const app = express()
app.use(bodyParser.json())
const PORT = process.env.PORT
const MONGO_URL = process.env.MONGO_URL
mongoose.connect(MONGO_URL).then(()=>console.log("Database is connected")).catch(err=>console.log(err))
app.listen(PORT,()=>{
    console.log(`Server is running at PORT ${PORT}`)
})