import React from 'react'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "../components/ui/sheet"
  
const Dashboard = () => {
  return (
    <div className='bg-black'>
      <Sheet>
  <SheetTrigger>Dashboard</SheetTrigger>
  <SheetContent className="bg-black text-white">
    <SheetHeader>
      <SheetTitle>Do you want to be a donor?</SheetTitle>
      <SheetDescription>
        This action cannot be undone. This will permanently delete your account
        and remove your data from our servers.
      </SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>

    </div>
  )
}

export default Dashboard
