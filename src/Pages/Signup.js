import React from 'react'

const Signup = () => {
  return (
    <div className='flex flex-col justify-center gap-8'> 
      <label>Name<input type="text" value= " " required></input> </label>
      <label>Password <input  type="password" value="" required ></input> </label>
     
    </div>
  )
}

export default Signup
