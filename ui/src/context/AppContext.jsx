import React, { createContext, useContext, useState } from 'react'

const AppContext=createContext(null)
export default function AppContextProvider ({ children })
{
    const [login, setLogin] = useState(sessionStorage.getItem("user") !== null ?? false);
    const [auth, setAuth] = useState(sessionStorage.getItem('user'));
  return (
      <AppContext.Provider value={{login, setLogin,auth, setAuth

}}>
{children}
    </AppContext.Provider>
  )
}

export function useAppContext ()
{
    return useContext(AppContext);
}
