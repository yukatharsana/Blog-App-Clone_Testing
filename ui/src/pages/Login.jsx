import React from 'react'
import { Link } from 'react-router-dom';

export default function Login () {
  return (
    <div className='auth'>
      <h1>Login</h1>
      <form action=''>
        <input type='text' placeholder='username' name='username' id='user' />
        <input type='password' name='password' placeholder='password' id='password' />
        <button>Login</button>
        <p>Error !</p>
        <span>Don't you have an account? <Link to='/register'>Register</Link></span>
      </form>
    </div>
  )
}
