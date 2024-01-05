import React from 'react'
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Write from './pages/Write'
import Single from './pages/Single'
import NavBar from './component/NavBar'
import Footer from './component/Footer'
import './style/style.scss'
const Layout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  )
}
const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/home',
        element: <Home />
      },

      {
        path: '/',
        element: <Single />
      },
      {
        path: '/write',
        element: <Write />
      }
    ]
  },

  {
    path: '/login',
    element: <Login />
  }, {
        path: '/register',
        element: <Register />
      }
])
export default function App ()
{

  return (
    <div className="app">
      <div className="container">
<RouterProvider router={router} />

      </div>
    </div>
  )
}
