import React from 'react'
import Navbar from './Navbar'
import { home } from '../data'
import Button from './Button'


const Home = () => {
  return (
    <div className="  h-full bg-hero bg-cover  bg-[#EB7979]  bg-opacity-[53%]" id="/">
      <div className=" bg-[#EB7979] h-screen  bg-opacity-[53%]">
      
         <div className="flex   flex-col justify-center items-center h-screen   text-2xl font-fontRoboto  text-white  ">
          <div className=" text-4xl font-bold">{home.title}</div>
          <div className="font-semibold text-3xl">{home.sub}</div>
          <div className="text-2xl mb-[2rem] ">{home.content}</div>
        <Button content={"Discover"}/>
        </div>

      </div>
    </div>
  )
}
export default Home
