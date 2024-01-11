import React from 'react'
import { useSelector } from 'react-redux';
import { postById } from '../Redux/Slice/PostSlice'
import { Link, useNavigate } from 'react-router-dom'

export default function BigPost ({ postid })
{
    const { title,description,posturl} = useSelector(state => postById(state, postid))
  console.log(posturl.data);
  const navigate=useNavigate()
    return (

    <div className='post' key={postById}>
  <div className='img'>
              <img  src={`data:image/png;base64,${posturl}`}
 alt={title} />
  </div>
  <div className='content'>
    <Link className='link' to={`/post/${postid}`}>
      <h1>{title}</h1>
    </Link>
    <p>{description}</p>
    <button onClick={()=>navigate(`/post/${postid}`)} >Read More</button>
  </div>
</div>

  )
}
