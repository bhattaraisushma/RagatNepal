import React from 'react'
import Navbar from './Navbar'
import { home } from '../data'

const Home = () => {
  return (
    <div className='  h-[70rem] bg-hero bg-cover  bg-[#EB7979]  bg-opacity-[53%]'>
<div className='absolute bg-[#EB7979] h-screen w-full bg-opacity-[53%]'>

    <Navbar/>
    <div className='flex  flex-col  justify-center items-center h-screen  w-screen text-2xl font-fontRoboto  text-white  '>


<p className=' text-4xl font-bold'>{home.title}</p>
<p className='font-semibold'>{home.sub}</p>
<p className='text-3xl  '>{home.content}</p>
  </div>
  </div></div>
  )
}
export default Home
