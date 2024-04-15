import express from 'express'
import { connectdb } from './database/db.js';
import { loginentry } from './controller/login.js';
// import {cors} from 'cors'
const app=express();
const port=3000
app.use(express.json())
connectdb()
app.listen(port,()=>{
    console.log('listeinng')
})
app.post('/login' , (req,res)=>{
    console.log(req.body)
    loginentry(req.body)
   return req.body
})