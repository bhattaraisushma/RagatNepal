import Loginmodel from '../database/Model.js'

export const loginentry=async( reqdata )=>{
    const {Name,Address,Password,Bloodgroup,Contact}=reqdata
    console.log(reqdata)
    const logindetail= new Loginmodel({
        Name:Name,
        Address:Address,
        Contact:Contact,
        Password:Password,
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
