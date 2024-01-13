import React from 'react'
import { FilterPost } from '../Redux/Slice/PostSlice';
import { SmallPost } from './Post';
import { useParams } from 'react-router-dom';

export default function Menu ({ cat})
{
  const posts = FilterPost(cat)
  const { postid } = useParams();
  return (
    <div className='menu'>
          <h1>Other Post you may like</h1>
          {posts.map(post =>
          post!==parseInt(postid)&&(
            <SmallPost key={post} postid={post}/>
         ))}
    </div>
  )
}
