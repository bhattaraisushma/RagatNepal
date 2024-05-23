
import React, { useContext, useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import Signup from './Signup'
import axios from 'axios'
import Authnav from '../components/Authnetication'
import { useNavigate } from 'react-router-dom'
const Login = () => {
  const navigate=useNavigate()
  const {name,setName, login,setLogin,loggedin,setLoggedin}= useContext(Authnav)

 
  // const[name,setName]=useState(null)
  const[address,setAddress]=useState(null)
  const[password,setPassword]=useState(null)
  const[confirmpsw,setConfirmpsw]=useState(null)
  const[blood,setBlood]=useState(null)
  const[contact,setContact]=useState(null)
   const[nameerror,setNameerror]=useState(false)
   
   
   const [processing, setProcessing] = useState(false); 
 
    const check=()=>{

        setLogin(false)

    }
   
    const formhandler=async()=>{
      setProcessing(true)
      console.log("from login")
      if(name===null || address=== null || password === null)
      {
        alert("Fill")
      }
      else
      {
        if(password===confirmpsw)
      {
      try{
        const data= await axios.post("https://ragatnepal-1.onrender.com/login",{
            Name:name,
            Address:address,
            Password:password,
            Contact: contact,
            Bloodgroup:blood
           
          }
        
        )
        console.log("hello")
        console.log(data)
       if (data.status === 200)
       {
        console.log("adeed to db")
        setLoggedin(true)
        navigate('/usersection')
       }
    
              
              }
            
              catch(error)
              {
                console.log("error submitting", error)
              }
              finally{
                setProcessing(false)
               } 
            }
            else{
              console.log("Password dont match")
            }
          }
          
        
           
      }
      
    
  return (
    <div className='md:h-screen h-screen flex justify-center  items-center    ' >
    
    <div className=' inline-block bg-[white]     w-[25rem]  h-fit rounded-lg shadow-2xl  justify-center items-center mt-[5rem] gap-[4rem] p-6  '>
   
     { login ? (
        <>
    
        <label className={`flex flex-col   w-full ${ nameerror?'border-red-500':''}`} >
         <p> Full Name </p>  
          <input type=" text" className='h-8 rounded-md border-2 border-[#f2f4f7]' required value={name} onChange={(e)=>{setName(e.target.value); setNameerror(!e.target.value);}} ></input>
         </label>
        
         <label className='inline-block flex-col w-full' >
          <p>Contact Number</p> 
          <input type=" number" value={contact}  onChange={(e)=>{setContact(e.target.value)}} className='h-8 w-full rounded-md  border-2 border-[#f2f4f7]  'required ></input></label>
   
          <label className='inline-block flex-col w-full' >
            <p>Address </p> <input type=" address"  className='h-8 w-full rounded-md border-2 border-[#f2f4f7] '  value={address} onChange={(e)=>{setAddress(e.target.value)}}  required></input></label>
  
          <label className='inline-block flex-col w-full' ><p>Password  </p> <input type=" password" value={password} onChange={(e)=>setPassword(e.target.value)} className='h-8 w-full rounded-md border-2 border-[#f2f4f7]   ' required></input></label>
          <label className='inline-block flex-col w-full' ><p>Confirm password </p> <input type=" password" className='h-8 w-full rounded-md border-2 border-[#f2f4f7]  ' vlaue={confirmpsw} onChange={(e)=>{setConfirmpsw(e.target.value)}} required></input></label>
          <label className='inline-block flex-col w-full' ><p>Blood Group </p><input type=" drop down" required className='h-8 w-full rounded-md border-3 border-[#f2f4f7] ' value={blood} onChange={(e)=>{setBlood(e.target.value)}}></input></label>
   
   <p className=' underline hover:cursor-pointer flex justify-center' onClick={()=>check()} >Login?</p>
 
   
   <button className='w-full h-12 rounded-lg bg-[#BA882C] border-0 text-white text-xl ml-2 mr-2 flex justify-center items-center' onClick={formhandler}>
              { processing ? ( 
                <svg className="animate-spin h-7 w-7 mr-3 bg-white" viewBox="0 0 24 24">
                 <p>Submit</p>
                </svg>
              ) : (
                <>
              <p>Submit</p>
              </>
              )
              }
              </button>
              </>
              ) :
  ( <>
   <Signup/>
  

    </>
    )
   
  
     }
      
     

    
    </div>
    </div>
  )
}

 

export default Login
