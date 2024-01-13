import React from 'react'
import { useSelector } from 'react-redux';
import { postById } from '../Redux/Slice/PostSlice'
import { Link, useNavigate } from 'react-router-dom'
import { BolBImage } from './Util';

export default function BigPost ({ postid })
{
    const { title,description,posturl} = useSelector(state => postById(state, postid))
  const navigate=useNavigate()
    return (

    <div className='post' key={postById}>
        <div className='img'>
          <BolBImage url={posturl} alt={title}/>

  </div>
  <div className='content'>
    <Link className='link' to={`/post/${postid}`}>
      <h1>{title}</h1>
    </Link>
    <div dangerouslySetInnerHTML={{ __html: description }}/>
    <button onClick={()=>navigate(`/post/${postid}`)} >Read More</button>
  </div>
</div>

  )
}
export function SmallPost ({ postid })
{
  const { posturl, title } = useSelector(state => postById(state, postid)) ?? {};
  return (
    <div className='post' key={postid}>
      <BolBImage url={posturl} alt={title } />
  <h2>{title}</h2>
  <button>Read More</button>
</div>

  )
}
