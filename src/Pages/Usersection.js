import React, {  useEffect } from 'react'
import Sidebar from '../components/Sidebar'

import  { useAuth } from '.././components/Authnetication.js'

const Usersection = () => {
      const {authentication,setAuthentication }= useAuth()
     useEffect(()=>{
setAuthentication(true)
     },[])

 
  return (
    <div className=' h-screen w-full text-[#e60700]  pt-[2rem]  font-fontRoboto bg-[#ebe5e5] flex overflow-x-hidden '>
        <Sidebar/>
       
        <div className='grid grid-cols-1   h-fit '>
        <div className='h-[8rem] pr-[5rem] pl-[10rem] flex justify-between items-center  w-full  bg-[white]'>

       
      <p className=' text-2xl'>Hello ,User</p>

      <p>
        <p className=' h-[4rem] w-[4rem] rounded-full bg-[#e60700]'></p>
        <p className='text-2xl'>Your profile</p>
      </p>
    
    </div>
    <div className='  h-[6rem] w-full grid grid-cols-3 m-2 bg-[white] items-center   p-2'> 
    <p>Find Donors</p>
    <p>Blood group</p>
<p>Search</p>
      </div>
      <div className=' h-fit w-full grid grid-cols-3 '>
      <div className=' h-fit w-[20rem] rounded-lg text-xl m-2 p-2  bg-[red] text-white '>
<p>Sushma Bhattarai</p>
<p>B +</p>
<p>Butwal</p>
<p>85533666</p>
      </div>
      <div className=' h-fit w-[20rem] rounded-lg text-xl m-2 p-2  bg-[red] text-white '>
<p>Sushma Bhattarai</p>
<p>B +</p>
<p>Butwal</p>
<p>85533666</p>
      </div>
      <div className=' h-fit w-[20rem] rounded-lg text-xl m-2 p-2  bg-[red] text-white '>
<p>Sushma Bhattarai</p>
<p>B +</p>
<p>Butwal</p>
<p>85533666</p>
      </div>
      <div className=' h-fit w-[20rem] rounded-lg text-xl m-2 p-2  bg-[red] text-white '>
<p>Sushma Bhattarai</p>
<p>B +</p>
<p>Butwal</p>
<p>85533666</p>
      </div>
      <div className=' h-fit w-[20rem] rounded-lg text-xl m-2 p-2  bg-[red] text-white '>
<p>Sushma Bhattarai</p>
<p>B +</p>
<p>Butwal</p>
<p>85533666</p>
      </div>

      </div>
    </div>
    </div>
  )
}

export default Usersection
