import User from "../model/usermodel.js"
import bcryptjs from 'bcryptjs'

export const signUp = async (req,res)=>{
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
        res.status(401).json({error:error})
        
    }
       
} 