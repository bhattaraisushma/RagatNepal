import React from 'react'

const Button = (props) => {
  const{title,bg}=props.content
  return (
    <div>
      <button className=' ease-in duration-500 h-[3rem] w-[10rem] bg-[#BA882C] text-[#B4BDCB]  shadow-md shadow-yellow-100 rounded-[3rem] border-0 font-fontRoboto font-medium text-2xl' 
      style={{backgroundColor:bg}}
      >{title}</button>
    </div>
  )
}

export default Button
