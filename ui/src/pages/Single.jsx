import React from 'react'
import { Link, useParams } from 'react-router-dom';
import { CiEdit } from 'react-icons/ci'
import { MdDeleteForever } from "react-icons/md"
import { useSelector } from 'react-redux'
import {postById} from '../Redux/Slice/PostSlice'
import Menu from '../component/Menu';
import { BolBImage } from '../component/Util';
export default function Single ()
{
  const { postid } = useParams();

  const {posturl,title,description,createdAt} = useSelector(state=>postById(state,postid))??{};
  return (
    <div className='single'>
      <div className="content">
        <BolBImage url={posturl} alt = { title }/>
        <div className="user">
          <img src='https://api.slingacademy.com/public/sample-photos/7.jpeg' alt="" />
          <div className="info">
            <span>John</span>
            <p>{ createdAt}</p>
          </div>
          <div className="edit">
            <Link to={'/write/?edit=2'}>
<CiEdit className = 'icons editico' />

            </Link>
            <Link>
              <MdDeleteForever className='icons delioc' />

            </Link>
          </div>
        </div>
        <h1>{ title}</h1>
        <p>{description}</p>
      </div>
      <Menu/>
    </div>
  )
}
