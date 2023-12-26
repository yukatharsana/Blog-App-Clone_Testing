import { createContext, useContext, useReducer } from 'react'
export const UserContext = createContext(null);
const reducer = (state, action) =>
{
  switch (action.type)
  {
    case "SET": return action.payload;
    default: return state;
  }
}
export default function UserContextProvider ({ children })
{
  const [users, setUsers] = useReducer(reducer, []);
  return (
    <UserContext.Provider value={{users, setUsers}}>
{children}
    </UserContext.Provider>
  )
}
export const UseUserContext = () =>
{
  return useContext(UserContext)
}
