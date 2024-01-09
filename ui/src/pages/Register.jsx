import React from 'react'
import { Link } from 'react-router-dom'

export default function Register () {
  return (
    <div className='auth'>
      <h1>Register</h1>
      <form action=''>
        <input type='text' placeholder='username' name='username' id='user' />
        <input type='email' placeholder='email' name='email' id='email' />
        <input type='password' name='password' placeholder='password' id='password'/>
        <button type='submit'>Register</button>
        <p>Error !</p>
        <span>
          Do you have an account? <Link to='/login' className = 'action link'
>Login</Link>
        </span>
      </form>
    </div>
  )
}
