import express from "express";
import dotenv from "dotenv"
import mongoose from "mongoose"
import bodyParser from "body-parser"
import routeUser from "./routes/userRoute.js";
import routeAuth from "./routes/authRoute.js"
dotenv.config();
const app = express()
/*app.use(bodyParser.json())*/
app.use(express.json())
const PORT = process.env.PORT
const MONGO_URL = process.env.MONGO_URL
mongoose.connect(MONGO_URL).then(()=>console.log("Database is connected successfully")).catch(err=>console.log(err))
app.listen(PORT,()=>{
    console.log(`Server is running at PORT ${PORT}`)
})
app.use('/api/user',routeUser)
app.use('/api/auth',routeAuth)