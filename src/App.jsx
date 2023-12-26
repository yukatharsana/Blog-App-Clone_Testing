import React, { useEffect, useState } from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './style/index.css'
import Router from './Pages/Routing'
import Start from './Pages/Start/Start'
import { all } from './DataStorage/User';
import { UseUserContext } from './Context/UserContext';
import ServerError from './Pages/ErrorBoundary/ServerError';


export default function App () {
  const [Stating, setStarting] = useState(<Start />)
  const { setUsers} = UseUserContext();

  useEffect(() =>
  {
    (async () =>
    {
      try {
        const users = await all();
        setUsers({ type: 'SET', payload: users });
        setStarting(<Router />);
      } catch (error) {
        <ServerError />
        console.error(error);
      }

  })()
// eslint-disable-next-line react-hooks/exhaustive-deps
},[])

  return Stating;
}
