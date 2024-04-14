import React from 'react'

const Signup = () => {
  return (
    <div className='flex flex-col justify-center gap-8'> 
     <label className='inline-block flex-col w-full' >Name<input type="text" value= " " className='h-8 w-full rounded-md' required></input> </label>
     <label className='inline-block flex-col w-full' >Password <input  type="password"className='h-8 w-full rounded-md' value="" required ></input> </label>
     
    </div>
  )
}

export default Signup
