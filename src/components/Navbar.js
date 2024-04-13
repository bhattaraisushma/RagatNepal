import { useEffect, useState } from "react"
import {Link} from 'react-scroll'

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
        <p className='flex flex-row float-end gap-[4rem] font-fontRoboto"'>
        <Link to='/' smooth={true} duration={1000}><p className="font-fontRoboto">Home</p></Link>
       <Link to ='login' smooth={true} duration={1000}>  <p>Log in /Sign up</p></Link>
      
      
        <p>Contact</p>
       
        

        </p>
        </div>
  )
}

export default Navbar
