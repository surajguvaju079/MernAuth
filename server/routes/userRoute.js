import express from "express";

const route = express.Router()


route.get('/',(req,res)=>{
    res.json({"message":"api is working properly"})
})


export default route