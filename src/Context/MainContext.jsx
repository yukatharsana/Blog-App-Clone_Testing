import React, { createContext} from 'react'
import UserContextProvider from './UserContext'
import AuthContextProvider from './AuthContext'
export const MainContext = createContext()
export default function MainContextProvider ({children}) {
  return (
    <MainContext.Provider value={{ nk: 23 }}>
      <UserContextProvider>
        <AuthContextProvider>{children}</AuthContextProvider>
      </UserContextProvider>
    </MainContext.Provider>
  )
}
