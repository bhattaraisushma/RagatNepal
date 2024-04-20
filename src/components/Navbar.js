import {  useContext, useEffect, useState } from "react"
import { NavLink } from "react-router-dom"
import {Link} from  'react-scroll'
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
    <>
{!authentication && (
<div className={ ` ${ scroll ? 'sticky top-0  bg-[white] text-[#e60700]  ': " "}  sticky top-0 flex flex-row  bg-[#e60700] h-[4rem] justify-between items-center text-2xl  text-white    px-[4rem]  ` }>
<p className=' font-Inter text-2xl'>Ragat Nepal</p>
<div className='flex flex-row  items-centerfloat-end gap-[4rem] font-fontRoboto'>
 
<NavLink to='/'  className=' font-fontRoboto list-none  flex items-center text-xl  no-underline text-white  active:underline'  >Home</NavLink>
 <NavLink to = '/login'   className='flex items-center no-underline text-white active:underline   text-xl '> Log in /Sign up</NavLink>
<Link to='/about' smooth={true} duration={1000}>About</Link>

<p className=" text-xl">Contact</p>



</div>
</div>
 )} 
</>
)

}

    

export default Navbar
