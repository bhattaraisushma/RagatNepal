import { createContext, useState } from 'react'


const Authnav = createContext();

export const Contextauth = ({ children }) => {
  const [authentication, setAuthentication] = useState(true);
  const[name,setName]=useState(null)
  const [login ,setLogin]=useState(true)
  const[loggedin,setLoggedin]=useState(false)

  return ( 
  <Authnav.Provider value={{ authentication, setAuthentication ,name,setName, login,setLogin,loggedin,setLoggedin}}>
{children}
    </Authnav.Provider>
  );
};

export default Authnav;
