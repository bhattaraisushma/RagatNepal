import React from 'react'
import { aboutdata } from '../data/Data'
const About = () => {
  return (
    <div className=' h-[43rem] w-full  flex  flex-col  pt-[7rem] items-center gap-4   bg-[#B4BDCB]  text-[#0D273F]' id='/about'>
       <h1 className='font-popins text-4xl '>About Ragat Nepal</h1>
       <p>_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ __ _ _ _ _ _ _ _ _ __ _ _ _ _ _ _ _ _ __</p>
            <h2 className=' font-popins w-[18rem] h-fit text-center text-xl'>Lorem adipisicing elit. Similique, amet. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, adipisci! 
            </h2>
          <div className='grid grid-cols-3 gap-3  mt-4'>
           
         {
          

           
            aboutdata.map((data)=>{
                return(

             
                <div className=' h-fit font-popins w-[20rem] border-solid   m-2  p-4 rounded-3xl  border hover:border-[#810000]  shadow-[#810000] hover:shadow-2xl'>
       
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
