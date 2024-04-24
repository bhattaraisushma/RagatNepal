import React from 'react'
import { home } from '../data'
import Button from './Button'
import Navbar from './Navbar'
import About from './About'
import Footer from './Footer'

const Home = () => {

  return (<>
 
    <div className="  h-screen bg-cover   text-[#B4BDCB] " id="/">
   
      <div className="  bg-[#08111C]   h-full  ">
      
         <div className="flex   flex-col  h-full justify-center items-center  text-2xl font-roberto    ">
         <h1 className="scroll-m-20 text-6xl font-extrabold tracking-tight  mb-5">
        {home.title}
      </h1>
          <div className="font-semibold text-3xl mb-5">{home.sub}</div>
          <div className="text-xl mb-[2rem] ">{home.content}</div>
          <div className=' flex flex-row gap-[3rem]'>
        {/* <Button content={ {title:"Signup"}}  /> */}
        {/* <Button content={{title:"Login",bg:"#0D273F"}} /> */}
        </div>
        </div>

      </div>
  
     </div>
     <About/>
    
     </>
  )
}
export default Home
