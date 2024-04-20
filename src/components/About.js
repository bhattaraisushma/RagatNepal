import React from 'react'
import { aboutdata } from '../data/Data'
const About = () => {
  return (
    <div className=' h-screen w-full  flex  flex-col  pt-[7rem] items-center gap-4 ' id='/about'>
       <h1 className='font-popins text-3xl '>About Ragat Nepal</h1>
            <h2 className=' font-popins w-[18rem] h-fit text-center'>Lorem adipisicing elit. Similique, amet. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, adipisci! 
            </h2>
          <div className='grid grid-cols-3 gap-3  mt-4'>
           
         {
          

           
            aboutdata.map((data)=>{
                return(

             
                <div className=' h-fit font-popins w-[20rem] border-solid   m-2  p-4 rounded-3xl  border hover:border-[red]  shadow-red-900 hover:shadow-2xl'>
       
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
