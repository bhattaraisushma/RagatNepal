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
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../components/ui/table"

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
   
    const handleclick=(e)=>{
      if(e.key==='Enter')
      {
        fetchdata(bloodgroup,location)
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
<input type='text' placeholder='Search location' value={location} onChange={(e)=>  setLocation(e.target.value)} className=' border-2 border-[#BA882C] rounded-xl justify-center md:w-[24rem] w-[10rem] right-0'onKeyDown={handleclick} ></input>
<button className='w-[5rem] h-7 rounded-xl flex justify-center items-center mt-2 '  onClick={async()=>await fetchdata(bloodgroup,location)}><IoSearch /></button>
</div>
</div>
          </div>
          <div className="h-fit m-4  text-black  font-roberto">
            
  {
    search ? (bloodcheck?.data?.length > 0 ? (
<div className='flex flex-col w-full gap-9 '>
      {bloodcheck.data.map((y, index) => (
        
        
        <Table  className='w-full text-2xl  shadow-lg'>
        <TableCaption></TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px] px-8 text-start  ">Name</TableHead>
            <TableHead  className="w-[100px] px-8 text-start">Address</TableHead>
          
            <TableHead  className="w-[100px] px-8 text-start">Contact</TableHead>
            <TableHead   className="w-[100px] px-8 text-start">Blood Group</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell  className="w-[100px] px-8 text-start">{y.Name}</TableCell>
            <TableCell  className="w-[100px] px-8 text-start" >{y.Address}</TableCell>
            <TableCell  className="w-[100px] px-8 text-start">{y.Contact}</TableCell>
            <TableCell  className="w-[100px] px-8 text-start">{y.BloodG}</TableCell>
          </TableRow>
        </TableBody>
        </Table>
       
        
      ))}
      </div>

    ) : (
      <p>No User  available</p>
    ))
    :(
      <div className='flex flex-col w-full text-2xl  gap-9'>
{displaydata.map((s,index)=>{
  return(
   

    <Table  className='w-full text-2xl '>
    <TableCaption></TableCaption>
    <TableHeader>
      <TableRow>
        <TableHead className="w-[100px] px-8 text-start  ">Name</TableHead>
        <TableHead  className="w-[100px] px-8 text-start">Address</TableHead>
      
        <TableHead  className="w-[100px] px-8 text-start">Contact</TableHead>
        <TableHead   className="w-[100px] px-8 text-start">Blood Group</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      <TableRow>
        <TableCell  className="w-[100px] px-8 text-start">{s.Name}</TableCell>
        <TableCell  className="w-[100px] px-8 text-start" >{s.Address}</TableCell>
        <TableCell  className="w-[100px] px-8 text-start">{s.Contact}</TableCell>
        <TableCell  className="w-[100px] px-8 text-start">{s.BloodG}</TableCell>
      </TableRow>
    </TableBody>
    </Table>
   

)
})}
</div>
    )
  }

            
          </div>
        </div>
      </div>
    </>
  )
}

export default Usersection
