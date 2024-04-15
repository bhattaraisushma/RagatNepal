import express from 'express'
import { connectdb } from './database/db.js';
// import {cors} from 'cors'
const app=express();
const port=3000

connectdb()
app.listen(port,()=>{
    console.log('listeinng')
})
app.get('/login',(req,res)=>{
    res.send("Hello world")
})