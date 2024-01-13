import React, { useCallback } from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { allUser } from '../Redux/Slice/UserSlice';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';


export default function Login ()
{
  const users=useSelector(allUser)
  const onsubmit = useCallback(e=>
  {
    e.preventDefault();
    try {
const logindata = new FormData(e.currentTarget)
      const login = Object.fromEntries(logindata);
      const userd = users.find(use => use.name === login.username || use.email === login.email)
      console.log(userd);
      if (!userd)
        toast.error("invalid Username or password!");
      else
      {
        if (userd.password === login.password)
        {
          localStorage.setItem('user', userd.userid);
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
  return (
    <div className='auth'>
      <h1>Login</h1>
      <form onSubmit={onsubmit}>
        <input type='text' placeholder='username' name='username' id='user' autoFocus required/>
        <input type='password' required name='password' placeholder='password' id='password' />
        <button type='submit'>Login</button>
        <p>Error !</p>
        <span>Don't you have an account? <Link to='/register' className='action link'>Register</Link></span>
      </form>
    </div>
  )
}
