import React, { useContext, useEffect, useState } from 'react'
import Sidebar from './Sidebar'
import Authnav from './Authnetication'
import axios from 'axios'
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'
import {useNavigate} from 'react-router-dom'
import { displaydata } from '../data'
import { IoSearch } from "react-icons/io5";
import Selectblood from './Selectblood'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card"

const Usersection = () => {
  const[bloodgroup,setBloodgroup]=useState(null)
  const[location,setLocation]=useState()

  const [bloodcheck,setBloodcheck]=useState([{
  
  } ])
  const [search,setSearch]=useState(false)
  
  const navigate=useNavigate()
  const option=[
"    Logout"
  ]
  const bloodoption=[
  "O+",
  "O-",

    "A+",
  "A-",
  "B+",
  "B-",
  "AB+",
  "AB-"
  ]
      const {authentication,setAuthentication,name, setName,login,loggedin,setLoggedin } = useContext(Authnav)

      useEffect(()=>{
        if(!loggedin)
         { navigate('/login')}
        
   setAuthentication(true)
              // console.log("hello user "+ name + authentication)
      })
      
const logout=()=>{
      navigate('/')
     }
     
          const fetchdata= async(bloodgroup,location)=>{
            // console.log("i am bloodgroup"+  bloodgroup)
            // console.log("i am location"+  location)
setSearch(true)

          try{
            const bloodcheck = await axios.post("https://ragatnepal-1.onrender.com/bloodfetch",{
           
              blood:bloodgroup,
              loc:location
          
           }
          )
          setBloodgroup(bloodgroup)

          // console.log( "result" )
          // console.log(bloodcheck)   
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
                  src={'red-bg.jpg'}
                  className="h-[4rem] w-[4rem] rounded-full"  ></img>
                  <Dropdown
                   options={option} placeholder={ "Profile"} className='w-[9rem]  ' onChange={(e)=>logout()}></Dropdown>
              </div>
              {/* <p className='text-2xl'>Your profile</p> */}
            </p>
          </div>
          <p className='mt-[4rem] text-2xl ml-[4rem] text-[#810000]'>Find Donors</p>
          <div className="  h-[6rem] w-screen ml-[2rem] text-2xl bg-[white] grid grid-flow-col my-4 rounded-lg  items-center   pl-2">
            
            <div className=' grid md:grid-cols-2 grid-cols-1 gap-4 '> 

             
         <Dropdown
         
         options={bloodoption} placeholder={ "Select Blood"} value={bloodgroup}
          onChange={ async(bloodgroup)=> {
        //     setBloodgroup(bloodgroup.label); 
         await fetchdata(bloodgroup.label,location);

        console.log(bloodgroup.value)
          }  }
          className='w-[12rem] h-fit bg-[#810000] rounded-lg  '> 
          </Dropdown>
        
<div className=' flex flex-row '>
<input type='text' placeholder='Search location' value={location} onChange={(e)=>  setLocation(e.target.value)} className=' border-2 border-[#BA882C] rounded-xl justify-center md:w-[24rem] w-[10rem] right-0' ></input>
<button className='w-[5rem] h-7 rounded-xl flex justify-center items-center mt-2 ' onClick={async()=>await fetchdata(bloodgroup,location)}><IoSearch /></button>
</div>
</div>
          </div>
          <div className="h-fit grid md:grid-cols-4 grid-cols-1 m-4  text-black font-roberto">
            
  {
    search ? (bloodcheck?.data?.length > 0 ? (
      bloodcheck.data.map((y, index) => (
        
              <Card className='h-fit w-[16rem] hover:scale-105'>
  <CardHeader>
    {/* <CardTitle>Donor</CardTitle> */}
    {/* <CardDescription>Card Description</CardDescription> */}
  </CardHeader>
  <CardContent>
  <p>Name:{y.Name}</p>
  </CardContent>
  <CardContent>
  <p>Address:{y.Address}</p>
  </CardContent>
  <CardContent>
  <p>Contact : {y.Contact}</p>
  </CardContent>
  {/* <CardFooter>
    <p>Card Footer</p>
  </CardFooter> */}
  <CardFooter>
  <p>{y.BloodG}</p>
  </CardFooter>
</Card>

       
        
      ))
    ) : (
      <p>No User  available</p>
    ))
    :(
displaydata.map((s,index)=>{
  return(
   
     <Card className='h-fit w-[16rem] hover:scale-105'>
  <CardHeader>
    {/* <CardTitle>Donor</CardTitle> */}
    {/* <CardDescription>Card Description</CardDescription> */}
  </CardHeader>
  <CardContent>
  <p>Name:{s.Name}</p>
  </CardContent>
  <CardContent>
  <p>Address:{s.Address}</p>
  </CardContent>
  <CardContent>
  <p>Contact : {s.Contact}</p>
  </CardContent>
  {/* <CardFooter>
    <p>Card Footer</p>
  </CardFooter> */}
  <CardFooter>
  <p>{s.BloodG}</p>
  </CardFooter>
</Card>


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
