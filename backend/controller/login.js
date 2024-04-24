import Loginmodel from '../database/Model/Loginmodel.js'
import bcrypt from 'bcrypt'
export const loginentry=async( reqdata )=>{
    const saltRounds = 10;

    const {Name,Address,Password,Bloodgroup,Contact}=reqdata
    const hash_psw= await bcrypt.hash(Password,saltRounds)
    console.log(hash_psw)
    reqdata.Password=hash_psw;
    console.log(Password)
    console.log(reqdata)
    const logindetail= new Loginmodel({
        Name:Name,
        Address:Address,
        Contact:Contact,
        Password:hash_psw,
        BloodG:Bloodgroup
       
    
            
        })
        try{
            const data= await logindetail.save()
            console.log("Successfully saved data")
        }
        catch(error)
        {
            console.log("Unsuccessful",error)
        }
      
      
        
       
}
