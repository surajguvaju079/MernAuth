import User from "../model/usermodel.js"
import bcryptjs from 'bcryptjs'
import { errorHandler } from "../utils/error.js"
import dotenv from 'dotenv'
import jwt from "jsonwebtoken" 

dotenv.config()

export const signUp = async (req,res,next)=>{
    try{
        const {username,email,password} = req.body
        const hashedPassword = bcryptjs.hashSync(password,10)
        /*var salt = bcryptjs.genSaltSync(10)
        var hash = bcryptjs.hashSync(password, salt) */
        const newUser = User({username,email,password:hashedPassword})
        await newUser.save()
        res.status(201).json({"message":"User was successfully registered"}) 
    } 
    catch (error) {
      next(errorHandler(300,"Something went wrong"));
        
    }
       
} 
export const signIn = async (req,res,next) =>{

  const {email,password} = req.body
  try {
      const userExist = await User.findOne({email})
      if(!userExist){
       return next(errorHandler(404),"User not found")
      }
    const  userCheck = bcryptjs.compareSync(password,userExist.password)
      if(!userCheck){
       return next(errorHandler(401),"Wrong credential")
      
      }
      const expiryDate= new Date(Date.now() + 900000)
      const token = jwt.sign({id:userExist._id},process.env.JWT_SECRET)
      const {password:hashedPassword,...rest} = userExist._doc
      res.cookie('access_token',token,{httpOnly:true,expire:expiryDate}).status(200).json(rest)
  } catch (error) {
    next(error)
  }
}