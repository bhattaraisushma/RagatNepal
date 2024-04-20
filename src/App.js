import React from 'react'
import Home from './components/Home'
import Login from './Pages/Login'
import  {BrowserRouter,Routes,Route, } from 'react-router-dom'
import Usersection from './Pages/Usersection'
import Signup from './Pages/Signup'

import  { Contextauth} from './components/Authnetication';
import Navbar from './components/Navbar'
import About from './components/About'
const App = () => {
  return (
    
      <Contextauth>
       
         <BrowserRouter>
         <Navbar/>
         
        <Routes>
           <Route path='/' element ={ <Home/>}/> 
           {/* <Route path='/navbar' element={<Navbar/>}></Route> */}
         
          <Route path='/login' element={ <Login/>}> </Route>
          <Route path='/signup' element={<Signup/>}></Route>
          
          <Route path='/usersection'element={<Usersection/>}>
          </Route>

         
        </Routes>
        </BrowserRouter>
        <About/>
        </Contextauth>

     
    
  )
}

export default App
