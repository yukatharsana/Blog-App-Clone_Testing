import { createContext, useReducer, useState} from 'react'
const AuthContext = createContext(null);


export default function AuthContextProvide ({ children })
{
    const [Authuser, setAuthUser] = useReducer();
    const [login, setLogin] = useState(false);
    return (
        <AuthContext.Provider value={{ Authuser, setAuthUser,login, setLogin }}>
            {children}
        </AuthContext.Provider>
    )
}
