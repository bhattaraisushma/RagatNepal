import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"

const Navbar = () => {
   
     const[scroll,setScroll]=useState(false)
  useEffect(()=>{
    const change=()=>{
      if(window.scrollY>=60)
      {
        setScroll(true);
       
      }
      else{
        setScroll(false)
      }
     }
 
   window.addEventListener('scroll',change)
   return () => {
    window.removeEventListener('scroll', change);
  };
  },[])
    
  return (


    <div className={ ` ${ scroll ? 'sticky top-0  bg-[#dd3b3b]  ': " "}  flex flex-row  bg-[#F26C6C] h-[4rem] justify-between items-center text-2xl  text-white   px-[4rem]  ` }>
        <p className=' font-Inter text-2xl'>Ragat Nepal</p>
        <div className='flex flex-row  items-centerfloat-end gap-[4rem] font-fontRoboto"'>
         
        <NavLink to='/' activeClassName='active-link' className='active:to-red-200 font-fontRoboto list-none  flex items-center  no-underline text-white active:underline'  >Home</NavLink>
       <NavLink to = '/login' activeClassName="active-link"  className='flex items-center no-underline text-white active:underline '> Log in /Sign up</NavLink>
      
      
        <p>Contact</p>
       
        

        </div>
        </div>
  )
}

export default Navbar
