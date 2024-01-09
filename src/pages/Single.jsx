import React from 'react'
import { Link } from 'react-router-dom';
import { CiEdit } from 'react-icons/ci'
import { MdDeleteForever } from "react-icons/md"
export default function Single() {
  return (
    <div className='single'>
      <div className="content">
        <img src='https://api.slingacademy.com/public/sample-photos/7.jpeg'
          alt='' />
        <div className="user">
          <img src='https://api.slingacademy.com/public/sample-photos/7.jpeg' alt="" />
          <div className="info">
            <span>John</span>
            <p>Posted 2 days ago</p>
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
        <h1>dfdsfdsfdsfsdfsdfsdfdsf</h1>
        <p>fgfdgfdgdfg
          f
          gfdg
          fd
          g
          fg
          fdg
          fd
          g
          fdg
          fd
          g
          fdg
          fd
          gdfgdfg
        </p>
      </div>
      <div className="menu"></div>
    </div>
  )
}
