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
    <div className='h-screen' id ="login">
    <div className=' flex flex-col  h-[30rem] w-[25rem] border-[2px]  border-solid border-[#DD3B3B]  justify-center items-center mt-[5rem] gap-[2rem] pt-2  '>
     { login ? (
        <>
        <label >Full Name    <input type=" text" value=" " required></input></label>
   
   <label>Contact Number <input type=" number" value=" " required></input></label>
   
   <label>Address  <input type=" address" value=" " required></input></label>
  
   <label>Password   <input type=" password" value=" "required></input></label>
 
   <label>Confirm password  <input type=" password" value=" "required></input></label>
   <label>Blood Group <input type=" drop down" value=" "required></input></label>
   <p className=' underline hover:cursor-pointer' onClick={()=>check()} >Sign in?</p>
   </> )
   : 
   (
   <>
   <Signup/>
   <p className=' underline hover:cursor-pointer' onClick={()=>checklog()} >Login in?</p>
   </>
   )
  
   }
      
     
      <Button content={"Submit"}/>
    
    </div>
    </div>
  )
}

export default Login
