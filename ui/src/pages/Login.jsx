import React, { useCallback } from 'react'
import { Link } from 'react-router-dom';

export default function Login ()
{
  const onsubmit = useCallback(e=>
  {
    e.preventDefault();
    try {
const logindata = new FormData(e.currentTarget)
const login = Object.fromEntries(logindata)
      console.log(login);
    } catch (error) {

    }

  },[])
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
