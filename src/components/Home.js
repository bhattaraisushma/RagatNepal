import React from 'react'
import { home } from '../data'
import Button from './Button'
import Navbar from './Navbar'
import About from './About'
import Footer from './Footer'
import Lottie from "lottie-react";


import Bloodanimation from "../assets/Bloodanimation.json"
const Home = () => {
const style={
width: "400px",

}

  return (
  <>
 
    <div className="  h-screen bg-cover   text-[#B4BDCB]  " id="/">
   
      <div className="  bg-[#08111C]   h-full flex md:flex-row flex-col justify-evenly  ">
      
         <div className="flex   flex-col   h-full justify-center  items-center  text-2xl font-roberto float-start   ">
         <h1 className="scroll-m-20 text-6xl font-extrabold tracking-tight  mb-5 animate__animated  animate__bounceInDown  flex justify-center">
        {home.title}
      </h1>
          <div className="font-semibold text-3xl mb-5 animate__animated  animate__bounceInLeft  ">{home.sub}</div>
          <div className="text-xl mb-[2rem] animate__animated   animate__bounceInLeft">{home.content}</div>
          <div className=' flex flex-row gap-[3rem]'>
        {/* <Button content={ {title:"Signup"}}  /> */}
        {/* <Button content={{title:"Login",bg:"#0D273F"}} /> */}
       
        </div>
        </div>
        <div className="float-end flex items-center">
        <Lottie animationData={Bloodanimation} loop={true}  style={style}></Lottie>
        </div>
      </div>
  
     </div>
     <About/>
    
     </>
  )
}
export default Home
