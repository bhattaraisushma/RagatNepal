import React from 'react'

const Button = (props) => {
  return (
    <div>
      <button className=' ease-in duration-500 h-[3rem] w-[10rem] bg-[red] rounded-[3rem] border-0 text-white font-fontRoboto font-medium text-2xl'>{props.content}</button>
    </div>
  )
}

export default Button
