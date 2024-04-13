import { useEffect, useState } from "react"


const Navbar = () => {
   
     const[scroll,setScroll]=useState(false)
  useEffect(()=>{
    const change=()=>{
      if(window.scrollY>=100)
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


    <div className={ ` ${ scroll ? 'sticky top-0  bg-[#F20505]  ': " "} flex flex-row w-[100%] h-[4rem] justify-between items-center text-2xl  text-white   px-[4rem] ` }>
        <p className=' font-Inter text-2xl'>Ragat Nepal</p>
        <span className='flex flex-row float-end gap-[4rem] font-fontRoboto"'>
        <p className="font-fontRoboto">Home</p>
        <p>Find donor</p>
        <p>Contact</p>
       
        

        </span>
        </div>
  )
}

export default Navbar
