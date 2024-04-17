import Signinmodel from "../database/Model/SigninModel.js";

 export const signinentry= async(reqdata)=>{
    const sign = new Signinmodel({
        Name:reqdata.name,
        Password:reqdata.psw
    })
    try{
        const sdata = await sign.save()
    }
    
    catch(error)
    {
        console.log("Signing error",error)
    }
    
}

