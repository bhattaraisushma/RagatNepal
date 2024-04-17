import mongoose from "mongoose"

const loginschema= new mongoose.Schema( {
    Name:String,
    Address:String,
    Contact:Number,
    Password:String,
    Confirm:String,
    BloodG:String
}
)
 const Loginmodel= mongoose.model("login",loginschema)
 export default Loginmodel

