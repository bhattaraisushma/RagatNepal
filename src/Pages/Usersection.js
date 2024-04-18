import React from 'react'
import Sidebar from '../components/Sidebar'

const Usersection = () => {
  return (
    <div className=' h-screen w-full text-[#e60700]  pt-[2rem]  font-fontRoboto flex flex-row overflow-x-hidden '>
        <Sidebar/>
        <div className='h-[8rem]   bg-[#e2d7d7] pr-[5rem] pl-[10rem] flex justify-between items-center  w-[80%]'>

       
      <p className=' text-2xl'>Hello ,User</p>

      <p className=''>
        <p className=' h-[4rem] w-[4rem] rounded-full bg-[#e60700]'></p>
        <p className='text-2xl'>Your profile</p>
      </p>
    </div>
    <div>
        <p>Find Donors</p>
    </div>
    </div>
  )
}

export default Usersection
