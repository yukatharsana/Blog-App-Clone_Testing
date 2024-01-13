import React, { useCallback } from 'react'
import { useSelector } from 'react-redux';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { allUser } from '../Redux/Slice/UserSlice';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';
import { useAppContext } from '../context/AppContext';


export default function Login ()
{
  const { setLogin, setAuth,login } = useAppContext();
  const navigate = useNavigate();
  const users=useSelector(allUser)
  const onsubmit = useCallback(e=>
  {
    e.preventDefault();
    try {
const logindata = new FormData(e.currentTarget)
      const login = Object.fromEntries(logindata);
      const userd = users.find(use => use.name === login.username || use.email === login.email)
      if (!userd)
        toast.error("invalid Username or password!");
      else
      {
        if (userd.password === login.password)
        {
          sessionStorage.setItem('user', userd.userid);
          Swal.fire({
            title: "Login SuccessFully",
            showConfirmButton: false,
            timer: 1700,
            icon:"success"
          })
          setLogin(true);
          setAuth(userd.userid);
          navigate("/");

        } else
        {
          Swal.fire({
            title: "Invalid Login",
            text: 'User Name Or Password is InCorrect',
            icon: "error",
            showConfirmButton: false,
            timer:2000
          })
        }
      }


    } catch (error) {

    }

  },[users])
  return login ? (<Navigate to='/' replace={ true } />) : (
    <div className='auth'>
      <h1>Login</h1>
      <form onSubmit={onsubmit}>
        <input type='text' placeholder='username' name='username' id='user' autoFocus required/>
        <input type='password' required name='password' placeholder='password' id='password' />
        <button type='submit'>Login</button>
        <span>Don't you have an account? <Link to='/register' className='action link'>Register</Link></span>
      </form>
    </div>
  )
}
