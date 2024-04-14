import React, { useState } from 'react'
import Button from '../components/Button'
import Signup from './Signup'


const Login = () => {
    const [login ,setLogin]=useState(true)
    const check=()=>{
        setLogin(false)

    }
    const checklog=()=>{
        setLogin(true)
    }
  return (
    <div className='h-screen flex justify-center bg-[#f4f2f2]  ' >
      
    <div className=' inline-block bg-[#ffffff]  w-[25rem]  h-fit rounded-md  justify-center items-center mt-[5rem] gap-[2rem] p-6  '>
   
     { login ? (
        <>
         
        <label className='flex flex-col w-full' >
         <p> Full Name </p>  
          <input type=" text" value=" " className='h-8 w-full rounded-md' required  ></input>
         </label>
   
         <label className='inline-block flex-col w-full' >
          <p>Contact Number</p> <input type=" number" value=" " className='h-8 w-full rounded-md'required></input></label>
   
          <label className='inline-block flex-col w-full' >
            <p>Address </p> <input type=" address" value=" " className='h-8 w-full rounded-md' required></input></label>
  
          <label className='inline-block flex-col w-full' ><p>Password  </p> <input type=" password" value=" "className='h-8 w-full rounded-md' required></input></label>
          <label className='inline-block flex-col w-full' ><p>Confirm password </p> <input type=" password" value=" "className='h-8 w-full rounded-md' required></input></label>
          <label className='inline-block flex-col w-full' ><p>Blood Group </p><input type=" drop down" value=" "required className='h-8 w-full rounded-md'></input></label>
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
      
     
   <button className='w-full h-12 rounded-lg bg-[red] border-0  text-white text-xl ml-2 mr-2'>Submit</button>
    
    </div>
    </div>
  )
}

export default Login
