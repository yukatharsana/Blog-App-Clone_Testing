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
import 'react-quill/dist/quill.snow.css'
import { Provider } from 'react-redux'
import { store } from './Redux/Store'
import { getPost } from './Redux/Thunk/PostThunk'
import { getUser } from './Redux/Thunk/UserThunk'
store.dispatch(getPost())
store.dispatch(getUser())
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
        path: '/',
        element: <Home />
      },

      {
        path: '/post/:id',
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
  },
  {
    path: '/register',
    element: <Register />
  }
])
export default function App () {
  return (
    <Provider store={store}>
      <div className='app'>
        <div className='container'>
          <RouterProvider router={router} />
        </div>
      </div>
    </Provider>
  )
}
