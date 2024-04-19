import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { useAuth } from "./Authnetication.js"

const Navbar = () => {
   
const { authenticate}=useAuth()
     const[scroll,setScroll]=useState(false)

  useEffect(()=>{

    const change=()=>{
      if(window.scrollY>=460)
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

!authenticate && (<div className={ ` ${ scroll ? 'sticky top-0  bg-[white] text-[#e60700]  ': " "}  sticky top-0 flex flex-row  bg-[#e60700] h-[4rem] justify-between items-center text-2xl  text-white    px-[4rem]  ` }>
<p className=' font-Inter text-2xl'>Ragat Nepal</p>
<div className='flex flex-row  items-centerfloat-end gap-[4rem] font-fontRoboto'>
 
<Link to='/'  className=' font-fontRoboto list-none  flex items-center text-xl  no-underline text-white  active:underline'  >Home</Link>
 <Link to = '/login'   className='flex items-center no-underline text-white active:underline   text-xl '> Log in /Sign up</Link>


<p className=" text-xl">Contact</p>



</div>
</div>
)

)}
    

export default Navbar
