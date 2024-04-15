import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Login from './Pages/Login'
import  {BrowserRouter,Routes,Route, } from 'react-router-dom'
const App = () => {
  return (
    <div>
       
         <BrowserRouter>
         <Navbar/>
        <Routes>
       
          <Route path='/' element ={ <Home/>}/> 
          <Route path='/login' element={ <Login/>}> 
           </Route>

         
        </Routes>
        </BrowserRouter>
     

      <div className=' flex justify-center'>
        
      </div>
    </div>
  )
}

export default App
