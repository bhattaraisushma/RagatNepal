import { createContext, useState } from 'react'


const Authnav = createContext();

export const Contextauth = ({ children }) => {
  const [authentication, setAuthentication] = useState(true);
  const[name,setName]=useState()

  return ( 
  <Authnav.Provider value={{ authentication, setAuthentication ,name,setName}}>
      {children}
    </Authnav.Provider>
  );
};

export default Authnav;
