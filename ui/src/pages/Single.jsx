import React, { useCallback } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { CiEdit } from 'react-icons/ci'
import { MdDeleteForever } from 'react-icons/md'
import { useSelector, useDispatch } from 'react-redux'
import { postById } from '../Redux/Slice/PostSlice'
import Swal from 'sweetalert2'
import Menu from '../component/Menu'
import { toast } from 'react-toastify'
import { deletePost } from '../Redux/Thunk/PostThunk'

import { BolBImage } from '../component/Util'
import { userById } from '../Redux/Slice/UserSlice';
export default function Single ()
{
  const navi = useNavigate();
  const { postid } = useParams()
  const Dispatcher = useDispatch()
  const onClick = useCallback(async () => {
    const confirm =await Swal.fire({
      title: 'Delete Post',
      text: 'Do You want Delete This Post?',
      showCancelButton: true,
      cancelButtonColor: '#af8920',
      confirmButtonColor: '#ff0000',
      icon: 'question',
      confirmButtonText: 'Yes',
      allowOutsideClick: () => !Swal.isLoading()
    })
    if (confirm.isConfirmed)
      try
      {
        Dispatcher(deletePost(postid))
       await Swal.fire({
          icon: 'success',
          title: 'Post Delete',
          confirmButtonColor: '#af8920',
          timer: 1500,
          iconColor: '#af8920'
       })
        navi("/");
      } catch (error) {
        toast.error(error)
      }
  }, [Dispatcher, postid])

  const { posturl, title, description, createdAt, userid } =
    useSelector(state => postById(state, postid)) ?? {};
  const {name,profile}=useSelector(state=>userById(state,userid))??{}
  return (
    <div className='single'>
      <div className='content'>
        <BolBImage url={posturl} alt={title} />
        <div className='user'>
        <BolBImage url={profile} alt={name} />

          <div className='info'>
            <span>{name}</span>
            <p>{createdAt}</p>
          </div>
          <div className='edit'>
            <Link to={'/write/?edit=2'}>
              <CiEdit className='icons editico' />
            </Link>
            <Link onClick={onClick}>
              <MdDeleteForever className='icons delioc' />
            </Link>
          </div>
        </div>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
      <Menu />
    </div>
  )
}
