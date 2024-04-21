import express, { response } from 'express'
import { connectdb } from './database/db.js';
import { loginentry } from './controller/login.js';
import cors from 'cors'
import { signinentry } from './controller/Signin.js';
import Loginmodel from './database/Model/Loginmodel.js';

const app=express();
const port=3001
app.use(cors())
app.use(express.json())
connectdb()


app.listen(port,()=>{
    console.log('listeinng')
})


app.post('/login' , (req,res)=>{
   
    loginentry(req.body)
   return res.status(200).send("added")
})
app.post('/signup',async(req,res)=>{
   const {Name,Password}=req.body
   try{
    const user= await Loginmodel.findOne({Name})
    if(!user)
    {
        console.log("error name")
        return res.status(404)
    }
    const psw = user.Password === Password
    if(!psw)
    {
        console.log("error psw")
        return res.status(400).send("user not found")
    
}
console.log("user found")
    return res.status(200).send("User found")
   
 
}
 
catch(error)
{
    return res.json({"message":"Error finding username and password"})
}
  
})