import React from 'react'

import Post from '../component/Post';
import {PostsCat} from '../Redux/Slice/PostSlice';
export default function Home ()
{

  const posts = PostsCat();
  return (
    <div className="home">
    <div className='posts'>
      {posts.map(post => (
        <Post postid={post} key={post}/>
      ))}
      </div>
      </div>
  )
}
