
import React, { useState } from 'react'
import Button from '../components/Button'
import Signup from './Signup'
import axios from 'axios'


const Login = () => {
  const[name,setName]=useState()
  const[address,setAddress]=useState()
  const[password,setPassword]=useState()
  const[confirmpsw,setConfirmpsw]=useState()
  const[blood,setBlood]=useState()
  const[contact,setContact]=useState()
    const [login ,setLogin]=useState(true)
    const check=()=>{
        setLogin(false)

    }
    const checklog=()=>{
        setLogin(true)
    }
    const formhandler=async()=>{
      if(password===confirmpsw)
      try{
        {
           const data= await axios.post("http://localhost:3000/login",{
            Name:name,
            Address:address,
            Password:password,
            Contact: contact,
            Bloodgroup:blood
           
          })
          
                }
                console.log("adeed to db")
              }
              catch(error)
              {
                console.log("error submitting", error)
              }
              else{
                console.log("Password dont match")
              }
      
        
      }
    
  return (
    <div className='h-screen flex justify-center bg-[#f4f2f2]  ' >
      
    <div className=' inline-block bg-[#ffffff]  w-[25rem]  h-fit rounded-md  justify-center items-center mt-[5rem] gap-[2rem] p-6  '>
   
     { login ? (
        <>
         
        <label className='flex flex-col  w-full' >
         <p> Full Name </p>  
          <input type=" text" className='h-8 w-full rounded-md' required value={name} onChange={(e)=>{setName(e.target.value)}} ></input>
         </label>
   
         <label className='inline-block flex-col w-full' >
          <p>Contact Number</p> <input type=" number" value={contact}  onChange={(e)=>{setContact(e.target.value)}} className='h-8 w-full rounded-md'required></input></label>
   
          <label className='inline-block flex-col w-full' >
            <p>Address </p> <input type=" address"  className='h-8 w-full rounded-md'  value={address} onChange={(e)=>{setAddress(e.target.value)}} required></input></label>
  
          <label className='inline-block flex-col w-full' ><p>Password  </p> <input type=" password" value={password} onChange={(e)=>setPassword(e.target.value)} className='h-8 w-full rounded-md' required></input></label>
          <label className='inline-block flex-col w-full' ><p>Confirm password </p> <input type=" password" className='h-8 w-full rounded-md' vlaue={confirmpsw} onChange={(e)=>{setConfirmpsw(e.target.value)}} required></input></label>
          <label className='inline-block flex-col w-full' ><p>Blood Group </p><input type=" drop down" required className='h-8 w-full rounded-md' value={blood} onChange={(e)=>{setBlood(e.target.value)}}></input></label>
   <p className=' underline hover:cursor-pointer flex justify-center' onClick={()=>check()} >Sign in?</p>
   </> )
   : 
   (
   <>
     
   <Signup/>
   <p className=' underline hover:cursor-pointer flex justify-center' onClick={()=>checklog()} >Login in?</p>
   </>
   )
  
   }
      
     
   <button className='w-full h-12 rounded-lg bg-[red] border-0  text-white text-xl ml-2 mr-2' onClick={()=>formhandler()}>Submit</button>
    
    </div>
    </div>
  )
}

export default Login
