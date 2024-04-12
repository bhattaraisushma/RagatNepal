import React, { useEffect, useState } from 'react'

const Navbar = () => {
    const [scroll,setScroll]=useState(false);
    useEffect(()=>{
        const changeColor= ()=>{
            if(window.scrollY>=10)
            {
                setScroll(true)
            }
        }
        window.addEventListener('scroll', changeColor);
        return () => {
            window.removeEventListener('scroll', changeColor);
        };
    },[])
   
  return (


    <div className={'${ scroll ? " bg-black" : "" } flex flex-row px-[10rem] pt-2 text-white  h-[4rem] justify-center text-2xl  w-full fixed'}>
        <p className='flex-grow'>Ragat Nepal</p>
        <span className='flex flex-row float-end gap-[4rem]'>
        <p>Home</p>
        <p>Find donor</p>
        <p>Contact</p>
       
        

        </span>
        </div>
  )
}

export default Navbar
