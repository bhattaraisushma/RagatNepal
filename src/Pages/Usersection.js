import React, { useContext, useEffect } from 'react'
import Sidebar from '../components/Sidebar'
import Authnav from '../components/Authnetication'
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'
const Usersection = () => {
  const option=[
"    Logout"
  ]
      const {authentication,setAuthentication,name, setName } = useContext(Authnav)

      useEffect(()=>{

            
            setAuthentication(true)
              console.log("hello user "+ name + authentication)
      })
     

  return (
    <>
      <div className=" h-screen w-full text-[#e60700]  pt-[2rem]  font-fontRoboto bg-[#ebe5e5] flex overflow-x-hidden ">
        <Sidebar />

        <div className="grid grid-cols-1   h-fit ">
          <div className="h-[8rem]   flex justify-between items-center  w-full  bg-[white]">
            <p className=" text-2xl">Hello ,{name}</p>

            <p>
              <div className="  mr-[3rem] h-[4rem] w-[4rem] rounded-full bg-[#e60700] ">
                <img
                  src={'homebg.jpg'}
                  className="h-[4rem] w-[4rem] rounded-full"  ></img>
                  <Dropdown options={option} placeholder={ "Settings"} className='w-[4rem]  bg-[red]'></Dropdown>
              </div>
              {/* <p className='text-2xl'>Your profile</p> */}
            </p>
          </div>
          <div className="  h-[6rem] w-screen ml-4  text-2xl grid grid-cols-3 my-4 bg-[white] items-center   p-2">
            <p>Find Donors</p>
            <p>Blood group</p>
            <p>Search</p>
          </div>
          <div className=" h-fit  grid grid-cols-3  m-4">
            <div className=" h-fit w-[20rem] rounded-lg text-xl m-2 p-2  bg-[red] text-white ">
              <p>Sushma Bhattarai</p>
              <p>B +</p>
              <p>Butwal</p>
              <p>85533666</p>
            </div>
            <div className=" h-fit w-[20rem] rounded-lg text-xl m-2 p-2  bg-[red] text-white ">
              <p>Sushma Bhattarai</p>
              <p>B +</p>
              <p>Butwal</p>
              <p>85533666</p>
            </div>
            <div className=" h-fit w-[20rem] rounded-lg text-xl m-2 p-2  bg-[red] text-white ">
              <p>Sushma Bhattarai</p>
              <p>B +</p>
              <p>Butwal</p>
              <p>85533666</p>
            </div>
            <div className=" h-fit w-[20rem] rounded-lg text-xl m-2 p-2  bg-[red] text-white ">
              <p>Sushma Bhattarai</p>
              <p>B +</p>
              <p>Butwal</p>
              <p>85533666</p>
            </div>
            <div className=" h-fit w-[20rem] rounded-lg text-xl m-2 p-2  bg-[red] text-white ">
              <p>Sushma Bhattarai</p>
              <p>B +</p>
              <p>Butwal</p>
              <p>85533666</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Usersection
