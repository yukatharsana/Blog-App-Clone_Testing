import React, { useCallback, useState } from 'react'
import { Link } from 'react-router-dom'
import { addUser } from '../Redux/Thunk/UserThunk';
import { useDispatch } from 'react-redux';
import { FaUser } from 'react-icons/fa'

export default function Register ()
{
  const disatcher=useDispatch();
  const [err,seterr]=useState('')
  const onsubmit = useCallback(e => {
  e.preventDefault()
  try {
    const registerdata = new FormData(e.currentTarget)
    const register = Object.fromEntries(registerdata)
   // disatcher(addUser(register));

  } catch (error)
  {
    console.log(error);
    seterr(error);
  }
}, [])

  return (
    <div className='auth'>
      <h1>Register</h1>
      <form onSubmit={onsubmit}>
        <label className='profile' htmlFor='profile'>
  <FaUser />
</label>

        <input type='text' placeholder='username' name='username' id='user' />
        <input type='email' placeholder='email' name='email' id='email' />
        <input type='password' name='password' placeholder='password' id='password' />
        <input type='file' accept='image/*' style={{display:"none"}} id='profile' name='profile' />

        <button type='submit'>Register</button>
        <p> {err}</p>
        <span>
          Do you have an account? <Link to='/login' className = 'action link'
>Login</Link>
        </span>
      </form>
    </div>
  )
}
