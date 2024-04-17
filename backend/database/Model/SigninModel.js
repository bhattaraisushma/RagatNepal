import mongoose from "mongoose";
const Signinschema=new mongoose.Schema({
    Name: String,
    Password:String
 })
 const Signinmodel= mongoose.model("signin",Signinschema)
 export default  Signinmodel;