import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Write from './pages/Write';
import Single from './pages/Single';
const router = createBrowserRouter([
  {
  path: '/home',
  element:<Home/>
},
  {
  path: '/',
  element:<Login/>
},
  {
  path: '/',
  element:<Register/>
},
  {
  path: '/',
  element:<Write/>
},
  {
  path: '/',
  element:<Single/>
},

]);
export default function App() {
  return (
    <RouterProvider router={router}/>
  )
}
