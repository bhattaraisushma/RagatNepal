import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Login from './Pages/Login'

const App = () => {
  return (
    <div>
        
        <Navbar />
      <Home/>
      <div className=' flex justify-center'>
        <Login/>
      </div>
    </div>
  )
}

export default App
