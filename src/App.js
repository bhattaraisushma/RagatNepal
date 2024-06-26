import React, { createContext } from 'react'
import Home from './components/Home'
import Login from './Pages/Login'
import  {BrowserRouter,Routes,Route, } from 'react-router-dom'
import Usersection from './components/Usersection'
import Signup from './Pages/Signup'

import  { Contextauth} from './components/Authnetication';
import Navbar from './components/Navbar'
import About from './components/About'

import Footer from './components/Footer'

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
         
          (<Route path='/usersection'element={<Usersection/>}></Route>)
        
          
            <Route path ='/about' element={<About/>}></Route>
          

         
        </Routes>
        
  
        <Footer/>
        </BrowserRouter>
      
        </Contextauth>

     
    
  )
}

export default App
