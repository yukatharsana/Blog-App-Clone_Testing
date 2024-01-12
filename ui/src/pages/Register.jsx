import React, { useCallback, useState } from 'react'
import { Link } from 'react-router-dom'
import { addUser } from '../Redux/Thunk/UserThunk'
import { useDispatch } from 'react-redux'
import { FaUser } from 'react-icons/fa'
import Swal from 'sweetalert2';

export default function Register () {
  const disatcher = useDispatch()
  const [err, seterr] = useState('')
  const onsubmit = useCallback(async e => {
    e.preventDefault()
    try {
      const registerdata = new FormData(e.currentTarget)
      const register = Object.fromEntries(registerdata)
    disatcher(addUser(registerdata))
      Swal.fire({
        title: "Login",
        icon: "success",
        text: 'Login SucessFully',
        timer:1200
      })
    } catch (error) {
      console.log(error)
      seterr(error)
    }
  }, [disatcher])

  return (
    <div className='auth'>
      <h1>Register</h1>
      <form onSubmit={onsubmit} encType ='multipart/form-data'>
        <label className='profile' htmlFor='profile'>
          <FaUser />
        </label>

        <input type='text' placeholder='username' name='username' id='user' />
        <input type='email' placeholder='email' name='email' id='email' />
        <input
          type='password'
          name='password'
          placeholder='password'
          id='password'
        />
        <input
          type='file'
          accept='image/*'
          style={{ display: 'none' }}
          id='profile'
          name='profile'
        />

        <button type='submit' >Register</button>
        <p> {err}</p>
        <span>
          Do you have an account?{' '}
          <Link to='/login' className='action link'>
            Login
          </Link>
        </span>
      </form>
    </div>
  )
}
