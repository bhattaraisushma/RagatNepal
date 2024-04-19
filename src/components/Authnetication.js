import { createContext, useState } from 'react'

const Authnav = createContext();

export const Contextauth = ({ children }) => {
  const [authentication, setAuthentication] = useState(true);

  return ( 
  <Authnav.Provider value={{ authentication, setAuthentication }}>
      {children}
    </Authnav.Provider>
  );
};

export default Authnav;
