import React from 'react'

const Button = (props) => {
  return (
    <div>
      <button className=' ease-in duration-500 h-[3rem] w-[10rem] bg-[white] rounded-[3rem] border-0 text-[#e60700] font-fontRoboto font-medium text-2xl'>{props.content}</button>
    </div>
  )
}

export default Button
