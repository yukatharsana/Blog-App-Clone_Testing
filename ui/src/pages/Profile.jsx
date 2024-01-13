import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { userById } from '../Redux/Slice/UserSlice';
import { UsersPost } from '../Redux/Slice/PostSlice';
import { SmallPost } from '../component/Post';

export default function Profile ()
{
    const { userid } = useParams();
    const { profile, name, email } = useSelector(state => userById(state, userid))??{};
    const posts = UsersPost(userid);
  return (
      <div className='profile'>
          <div className='posts'>
              {
  posts.map(post => <SmallPost postid={post} key={post} />)
}

          </div>

    </div>
  )
}
