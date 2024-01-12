import React from 'react'
import Swal from 'sweetalert2'
import { toast } from 'react-toastify'
import { useDispatch } from 'react-redux'
import {deletePost} from '../Redux/Thunk/PostThunk';


export function BolBImage ({ url, alt, ...others }) {
  return <img src={`data:image/png;base64,${url}`} alt={alt} {...others} />
}

export async function ScussAlert ({ title, text }) {
  return await Swal.fire({
    title: title,
    text: text,
    icon: 'success',
    confirmButtonColor: '#09e72a',
    timer: 1200
  })
}

export async function ErrorAlert ({ title, text }) {
  return Swal.fire({
    title: title,
    text: text,
    icon: 'error',
    confirmButtonColor: '#e70909',
    timer: 1500
  })
}

export async function SignOut ({}) {
  return Swal.fire({
    title: 'Delete Post',
    input: 'text',
    inputAttributes: {
      autocapitalize: 'off'
    },
    showCancelButton: true,
    confirmButtonText: 'Look up',
    showLoaderOnConfirm: true,
    preConfirm: async login => {
      try {
        const githubUrl = `
        https://api.github.com/users/${login}
      `
        const response = await fetch(githubUrl)
        if (!response.ok) {
          return Swal.showValidationMessage(`
          ${JSON.stringify(await response.json())}
        `)
        }
        return response.json()
      } catch (error) {
        Swal.showValidationMessage(`
        Request failed: ${error}
      `)
      }
    },
    allowOutsideClick: () => !Swal.isLoading()
  }).then(result => {
    if (result.isConfirmed) {
      Swal.fire({
        title: `${result.value.login}'s avatar`,
        imageUrl: result.value.avatar_url
      })
    }
  })
}

 
