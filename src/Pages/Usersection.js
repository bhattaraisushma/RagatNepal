import React, { useContext, useEffect, useState } from 'react'
import Sidebar from '../components/Sidebar'
import Authnav from '../components/Authnetication'
import axios from 'axios'
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'
import {useNavigate} from 'react-router-dom'
import { displaydata } from '../data'
import { IoSearch } from "react-icons/io5";
const Usersection = () => {
  const[bloodgroup,setBloodgroup]=useState(null)
  const[location,setLocation]=useState()
  const[profile,setProfile]=useState()
  const [bloodcheck,setBloodcheck]=useState([{
  
  } ])
  const [search,setSearch]=useState(false)
  
  const navigate=useNavigate()
  const option=[
"    Logout"
  ]
  const bloodoption=[
    "A+",
  "A-",
  "B+"
  ]
      const {authentication,setAuthentication,name, setName } = useContext(Authnav)

      useEffect(()=>{
   setAuthentication(true)
              console.log("hello user "+ name + authentication)
      })
      
const logout=()=>{
      navigate('/')
     }
     
          const fetchdata= async(bloodgroup,location)=>{
            console.log("i am bloodgroup"+  bloodgroup)
            console.log("i am location"+  location)
setSearch(true)

          try{
            const bloodcheck = await axios.post("http://localhost:3001/bloodfetch",{
           
              blood:bloodgroup,
              loc:location
          
           }
          )
          setBloodgroup(bloodgroup)

          console.log( "result" )
          console.log(bloodcheck)   
          setBloodcheck(bloodcheck)
          setLocation(location);
          }
      

      catch(error)
          {
            console.log("blood fetch error",error)
          }
        }
   
    
     

  return (
    <>
      <div className=" h-screen w-full   font-fontRoboto  text-black bg-[#f2f4f7] flex overflow-x-hidden ">
        <Sidebar />

        <div className="grid grid-cols-1   h-fit font-roberto ">
          <div className="h-[6rem] px-2 flex justify-between items-center  bg-[white] rounded-lg ">
            <p className=" text-2xl">Hello ,{name}</p>

            <p>
              <div className="  mr-[3rem] h-[4rem] w-[4rem] rounded-full bg-[#e60700] ">
                <img
                  src={'homebg.jpg'}
                  className="h-[4rem] w-[4rem] rounded-full"  ></img>
                  <Dropdown
                   options={option} placeholder={ "Profile"} className='w-[9rem]  ' onChange={(e)=>logout()}></Dropdown>
              </div>
              {/* <p className='text-2xl'>Your profile</p> */}
            </p>
          </div>
          <p className='mt-[4rem] text-2xl ml-[4rem] text-[#810000]'>Find Donors</p>
          <div className="  h-[6rem] w-screen ml-[2rem] text-2xl bg-[white] grid grid-flow-col my-4 rounded-lg  items-center   pl-2">
            
            <div className=' grid grid-cols-2 '> 
         <Dropdown
         
         options={bloodoption} placeholder={ "Select Blood"} value={bloodgroup}
          onChange={ async(bloodgroup)=> {
        //     setBloodgroup(bloodgroup.label); 
         await fetchdata(bloodgroup.label,location);

        console.log(bloodgroup.value)
          }  }
          className='w-[12rem] bg-[#810000] rounded-lg  '> 
          </Dropdown>
        
<div className=' flex flex-row'>
<input type='text' placeholder='Search location' value={location} onChange={(e)=>  setLocation(e.target.value)} className=' border-2 border-red-600 rounded-xl justify-center w-[24rem]' ></input>
<button className='w-[5rem] h-7 rounded-xl flex justify-center items-center mt-2 ' onClick={async()=>await fetchdata(bloodgroup,location)}><IoSearch /></button>
</div>
</div>
          </div>
          <div className="h-fit grid grid-cols-4 m-4  text-black font-roberto">
            
  {
    search ? (bloodcheck?.data?.length > 0 ? (
      bloodcheck.data.map((y, index) => (
        
        <div key={index} className="h-fit w-[15rem] rounded-lg text-xl mr-2 p-2 mb-4 font-roberto hover:border-white   border-solid border-2 border-red-500 ">
        <p>{y.Name}</p>
          <p>Address:{y.Address}</p>
          <p>Contact : {y.Contact}</p>
          <p>{y.BloodG}</p>
        </div>
      ))
    ) : (
      <p>No User  available</p>
    ))
    :(
displaydata.map((s,index)=>{
  return(
  <div key={index} className="h-fit w-[15rem] rounded-lg text-xl mr-2 p-2 mb-4 font-roberto hover:border-white   border-solid border-2 border-red-500 ">
  <p>{s.Name}</p>
  <p>Address:{s.Address}</p>
  <p>Contact : {s.Contact}</p>
  <p>BloodGroup:{s.BloodGroup}</p>
</div>
)
})

    )
  }

            
          </div>
        </div>
      </div>
    </>
  )
}

export default Usersection
