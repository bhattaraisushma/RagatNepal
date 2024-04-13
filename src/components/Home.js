import React from 'react'
import Navbar from './Navbar'
import { home } from '../data'

const Home = () => {
  return (
    <div className='bg-red-500'>
    <Navbar/>
    <div className=' bg-red-500 flex flex-col justify-center items-center h-[70rem]  w-screen text-2xl font-fontRoboto '>

<p className=' text-3xl '>{home.title}</p>
<p>{home.content}</p>
  </div>
  </div>
  )
}
export default Home
