import mongoose,{connect} from 'mongoose'


export const connectdb= async(req,res)=>{

try{


const uri = "mongodb+srv://bhattaraisushma260:KdnOrzmo3UqlvRki@login.zqdacbr.mongodb.net/?retryWrites=true&w=majority&appName=Login";
 await mongoose.connect(uri)

.then(()=>{
    console.log("connected")
    
}
)
}

catch(error)
{
    console.log("Cannot connect")
}
}


