import React from 'react'

import Post from '../component/Post';
import { useSelector } from 'react-redux';
import {postIds} from '../Redux/Slice/PostSlice';
export default function Home () {
  const posts =useSelector(postIds)
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
