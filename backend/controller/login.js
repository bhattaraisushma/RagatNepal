import Loginmodel from '../database/Model.js'

export const loginentry=async( reqdata )=>{
    const {name,address}=reqdata
    console.log(reqdata)
    const logindetail= new Loginmodel({
        Name:name,
        Address:address
            
        })
        const data= await logindetail.save()
      
        return data
       
}
