import React from 'react'
import Navbar from './Navbar'
import { home } from '../data'

const Home = () => {
  return (
    <>
    <Navbar/>
    <div className=' bg-red-500 flex flex-col justify-center items-center h-screen  w-screen text-2xl font-fontRoboto '>

<p className=' text-3xl '>{home.title}</p>
<p>{home.content}</p>
  </div>
  </>
  )
}
export default Home
