import React, { useCallback } from 'react'
import { Link } from 'react-router-dom'

export default function Register ()
{
  const onsubmit = useCallback(e => {
  e.preventDefault()
  try {
    const registerdata = new FormData(e.currentTarget)
    const register = Object.fromEntries(registerdata)
    console.log(register)
  } catch (error) {}
}, [])

  return (
    <div className='auth'>
      <h1>Register</h1>
      <form onSubmit={onsubmit}>
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
