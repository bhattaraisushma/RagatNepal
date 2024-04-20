import React from 'react'
import { aboutdata } from '../data/Data'
const About = () => {
  return (
    <div className=' h-screen w-full bg-[#ebe5e5] flex  justify-center items-center ' id='/about'>
          <div className='grid grid-cols-3 gap-3 '>
         {
          

           
            aboutdata.map((data)=>{
                return(

             
                <div className=' h-fit w-[20rem] border-solid border-gray-200   m-2  p-4 bg-[white]  rounded-3xl'>
       
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit, earum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium quasi ad asperiores recusandae vitae itaque corporis alias maxime commodi eveniet.   
                   </div>
                      )

            }
          )
        }
       </div>
   
    </div>
    
  )
}

export default About
