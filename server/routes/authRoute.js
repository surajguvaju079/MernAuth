import express from "express"
import { signUp } from "../Controller/authcontroller.js"

const route = express.Router()

route.post('/signup',signUp)




export default route