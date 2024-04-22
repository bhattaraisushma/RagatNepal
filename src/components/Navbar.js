import {  useContext, useEffect, useState } from "react"
import { NavLink } from "react-router-dom"
import {  Link} from  'react-scroll'
import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";


import { CiLinkedin } from "react-icons/ci";
import Authnav from "./Authnetication"




const Navbar = () => {
 
  const {authentication,setAuthentication} = useContext(Authnav)

  useEffect(()=>{

        
        setAuthentication(false)
          console.log("hello from nav"+ authentication)
  })
 

  

     const[scroll,setScroll]=useState(false)
     console.log( " from nav", authentication)

  useEffect(()=>{
   
    const change=()=>{
      if(window.scrollY>=40)
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
    <>
{!authentication && (
<div className={ ` ${ scroll ? 'sticky top-0  bg-[#87070e] text-white  ': " "}  sticky top-0 flex flex-row  bg-[#810000]   bg-opacity-[95%] h-[4rem]  font-fontRoboto  items-center  text-2xl  text-white   px-[4rem]  ` }>
<div className=' font-Inter text-2xl flex flex-row  text-[2rem] '>
  <p className="text-[#ff0505]  mr-4">Ragat</p> Nepal
  </div>
<div className='flex flex-row w-full items-center gap-[4rem] font-fontRoboto justify-center '>
 


<NavLink to='/'  className=' font-fontRoboto list-none  flex items-center text-xl   text-white  '>  Home </NavLink>

 <NavLink to = "/login"  className='flex items-center no-underline text-white text-xl'> Log in /Sign up </NavLink>
<Link to='/about' smooth={true} duration={1000} >About</Link>

<p className=" text-xl">Contact</p>



</div>
<div><CiFacebook/></div>
<div><FaInstagram /></div>
<div><CiLinkedin /></div>
</div>
 )} 
</>
)

}

    

export default Navbar
