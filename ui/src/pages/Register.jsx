import React, { useCallback } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { addUser } from '../Redux/Thunk/UserThunk'
import { useDispatch } from 'react-redux'
import { FaUser } from 'react-icons/fa'
import Swal from 'sweetalert2'
import { toast } from 'react-toastify'

export default function Register () {
  const disatcher = useDispatch()
  const navigate = useNavigate()
  const onsubmit = useCallback(
    async e => {
      e.preventDefault()
      const registerdata = new FormData(e.currentTarget)
      const verif = await verify(registerdata)

      try {
        if (verif)
        {
          alert("dfdfdf")
          disatcher(addUser(registerdata))
          Swal.fire({
            title: 'Register',
            icon: 'success',
            text: 'Register SucessFully',
            showConfirmButton: false,
            timer: 1200
          })
          navigate('/login')
        }
      } catch (error) {
        console.log(error)
      }
    },
    [disatcher,navigate]
  )

  return (
    <div className='auth'>
      <h1>Register</h1>
      <form onSubmit={onsubmit}>
        <label className='profile' htmlFor='profile'>
          <FaUser />
        </label>

        <input type='text' placeholder='username' name='name' id='user' />
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

        <button type='submit'>Register</button>
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

async function verify (formadata) {
  const data = Object.fromEntries(formadata)

  if (!data?.name) toast.warning('username is Requied')
  if (!data?.password) toast.warning('password is Requied')
  if (!data?.email) toast.warning('email is Requied')
  if (!data?.profile) toast.warning('Profile is Requied')
  if (!data?.name || !data?.profile || !data?.email || !data?.password) {
    Swal.fire({
      title: 'Register',
      icon: 'error',
      text: 'Please check Your inputs',
      confirmButtonColor: '#af8920'
    })
    return false
  } else {
    return true
  }
}
