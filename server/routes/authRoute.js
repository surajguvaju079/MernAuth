import express from "express"
import { signUp ,signIn} from "../Controller/authcontroller.js"

const route = express.Router()

route.post('/signup',signUp)
route.post('/signin',signIn)




export default route