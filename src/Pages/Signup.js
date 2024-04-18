import React, { useState } from 'react'
import axios from "axios"
const Signup = () => {
  const[name,setName]=useState()
  const[psw,setPsw]=useState()
  const signincheck= async()=>{
   try{
    console.log("clicked")
       const hit =  await axios.post("http://localhost:3000/signup",{
       
        Name:name,
        Password:psw
       
      }
    )


    
   
    if (hit.status === 200)
    {
      console.log("User found")
    }
 else if(hit.status === 404)
 {
  console.log("User not found")

}
else if(hit.status === 400)
{
  console.log("Password didnot match")
}
else{
  console.log("Unexpected eror")
}
}

catch(error)
{
  console.error("idk what error",error)
}

  }
  return (
    <div className='flex flex-col justify-center gap-8'> 
     <label className='inline-block flex-col w-full' >Name<input type="text" value={name} onChange={(e)=>setName(e.target.value)} className='h-8 w-full rounded-md' required></input> </label>
     <label className='inline-block flex-col w-full' >Password <input  type="password"className='h-8 w-full rounded-md' value={psw} onChange={(e)=>setPsw(e.target.value)} required ></input> </label>
     <button className='w-full h-12 rounded-lg bg-[red] border-0  text-white text-xl ml-2 mr-2' onClick={()=>signincheck()}>Submit</button>
  
    </div>
  )
}

export default Signup
