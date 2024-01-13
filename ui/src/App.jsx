import React from 'react'
import { Navigate, Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Write from './pages/Write'
import Single from './pages/Single'
import NavBar from './component/NavBar'
import Footer from './component/Footer'
import './style/style.scss'
import 'react-quill/dist/quill.snow.css'
import 'sweetalert2/src/sweetalert2.scss'
import { Provider } from 'react-redux'
import { store } from './Redux/Store'
import { ToastContainer } from 'react-toastify'
import { getPost } from './Redux/Thunk/PostThunk'
import { getUser } from './Redux/Thunk/UserThunk'
import AppContextProvider, { useAppContext } from './context/AppContext';
store.dispatch(getPost())
store.dispatch(getUser())
const Layout = () =>
{
  const { login} = useAppContext();
  return login? (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  ) : (<Navigate to='/login' replace={ true} />)
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
        path: '/post/:postid',
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


<AppContextProvider>
      <div className='app'> <ToastContainer draggable={true } />
        <div className='container'>
          <RouterProvider router={router} />
        </div>
        </div>
</AppContextProvider>
    </Provider>
  )
}
