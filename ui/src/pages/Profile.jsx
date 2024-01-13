import React from 'react'
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { userById } from '../Redux/Slice/UserSlice';
import { UsersPost } from '../Redux/Slice/PostSlice';
import { SmallPost } from '../component/Post';
import { BolBImage } from '../component/Util';
import { FaRegEdit } from 'react-icons/fa'


export default function Profile ()
{
  const navigate = useNavigate();
    const { userid } = useParams();
    const { profile, name, email } = useSelector(state => userById(state, userid))??{};
    const posts = UsersPost(userid);
  return (
      <div className='profile'>
          <div className='userdetails'>
              <div>
                  <BolBImage url={profile} alt={name} />
                  <h3>{name}</h3>
                  <p>{email}</p>
                  <p><small>
  <b>{posts.length}</b> Posts
</small>
</p>
          <FaRegEdit className='editbtn' onClick={()=>navigate("editusr/:"+userid)} />


</div>
      </div>
          <div className='posts'>
              {
          posts.map(post => (
            <div>
              <SmallPost postid={post} key={post} />
              </div>))
}

          </div>

    </div>
  )
}
