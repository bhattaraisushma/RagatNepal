import React from 'react'
import { home } from '../data'
import Button from './Button'
import Navbar from './Navbar'
import About from './About'
import Footer from './Footer'

const Home = () => {

  return (<>
 
    <div className="  h-[70vh] bg-cover    " id="/">
   
      <div className="  bg-[#810000]   h-full  ">
      
         <div className="flex   flex-col justify-center items-center h-screen   text-2xl font-roberto  text-white  ">
          <div className=" text-4xl font-bold">{home.title}</div>
          <div className="font-semibold text-3xl">{home.sub}</div>
          <div className="text-2xl mb-[2rem] ">{home.content}</div>
        <Button content={"Discover"}/>
        </div>

      </div>
  
     </div>
     <About/>
    
     </>
  )
}
export default Home
