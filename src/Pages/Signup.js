import React, { useContext, useState } from 'react'
import {useNavigate} from 'react-router-dom'
import axios from "axios"
import Authnav from '../components/Authnetication'

const Signup = () => {
  const navigate=useNavigate()

  const[psw,setPsw]=useState(null)
  // const[cname,setCname]=useState(null)
  // const[cpsw,setCpsw]=useContext
  const {name, setName, login, setLogin }=useContext(Authnav)

  const signincheck= async()=>{
if(name===null || psw === null )
{
  alert("fill")
}
else{


   try{
    console.log(" from signin clicked" ,name)
        const hit = await axios.post("https://ragatnepal-1.onrender.com/signup",{
       
        Name:name,
        Password:psw
       
      }
    )
 
    if (hit.status === 200)
{
  console.log("User found")
  navigate('/usersection')
 
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
  console.error("Eroor",error)
}


  }
}
  const checklog=()=>{
    setLogin(true)
 
}
  return (
    
   
    <div className='flex flex-col justify-center gap-8 h-fit  font-roberto'> 
    <label className='text-[#08111C] flex text-3xl justify-center'>Welcome back</label>
     <label className='inline-block flex-col w-full' >Name<input type="text" value={name} onChange={(e)=>setName(e.target.value)} className='h-8 w-full rounded-md border-2 border-[#f2f4f7] ' required></input> </label>
     <label className='inline-block flex-col w-full' >Password <input  type="password"className='h-8 w-full rounded-md border-2 border-[#f2f4f7] ' value={psw} onChange={(e)=>setPsw(e.target.value)} required ></input> </label>
     <p className='  hover:cursor-pointer flex justify-center' onClick={()=>checklog()} >Login in?</p>
     <button className='w-full h-12 rounded-lg  bg-[#BA882C]   border-0  text-white text-xl ml-2 mr-2' onClick={()=>signincheck()}>Submit</button>
  
    </div>
  
  )
}

export default Signup
