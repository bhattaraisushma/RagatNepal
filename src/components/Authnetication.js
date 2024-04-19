import React, { createContext,useContext, useState } from 'react'
const authcontext = createContext()
const Authnetication = ({children}) => {
  
    const [authenticate,setAuthenticate]=useState(false)
  return (
    <div>
      <authcontext.Provider value={{authenticate,setAuthenticate}}>
{children}
      </authcontext.Provider>
    </div>
  )
}
export default Authnetication;

export const useAuth = () => {
  const { authentication, setAuthentication } = useContext(AuthContext);
  return { authentication, setAuthentication };
};
