import express, { response } from 'express'
import { connectdb } from './database/db.js';
import { loginentry } from './controller/login.js';
import cors from 'cors'
import { signinentry } from './controller/Signin.js';
import Loginmodel from './database/Model/Loginmodel.js';

const app=express();
const port=3000
app.use(cors())
app.use(express.json())
connectdb()


app.listen(port,()=>{
    console.log('listeinng')
})


app.post('/login' , (req,res)=>{
   
    loginentry(req.body)
   return req.body
})
app.post('/signup',async(req,res)=>{
   const {Name,Password}=req.body
   try{
    const user= await Loginmodel.findOne({Name})
    if(!user)
    {
        console.log("error name")
        return res.status(404).json({"message":"User not found"})
    }
    const psw = user.Password === Password
    if(!psw)
    {
        console.log("error psw")
        return res.status(400).json({"message":"Password didnot match"})
    
}
return res.status(200).json({"message":"user found okkk"})
console.log("successful check")


   }
 
catch(error)
{
    return res.json({"message":"Error finding username and password"})
}
  
})