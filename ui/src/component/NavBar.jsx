import React, { useEffect, useRef } from 'react'
import Logo from '../img/logo.png'
import { Link, useNavigate } from 'react-router-dom'
import { useAppContext } from '../context/AppContext';
import { useSelector } from 'react-redux';
import { userById } from '../Redux/Slice/UserSlice';
export default function NavBar ()
{
  const navref = useRef(null);
  const navigate = useNavigate();
  const { auth } = useAppContext();
  const {name}=useSelector(state=>userById(state,auth))??{}
  useEffect(() =>
  {
const handleScroll = () => {
  if (window.scrollY > 100) {
    navref.current.classList.add("active")
  } else {
   navref.current.classList.remove('active')

  }
}

window.addEventListener('scroll', handleScroll)

return () => {
  window.removeEventListener('scroll', handleScroll)
}

},[])

  return (
    <div
 className='navbar' ref={navref}>
      <div className='container'>
        <div className='logo'>
          <Link className='link' to='/'>
            <img src={Logo} alt='logo' />
          </Link>
        </div>
        <div className='links'>
          <Link to='/?cat=art' className='link'>
            <h6>ART</h6>
          </Link>
          <Link  className='link' to='/?cat=science'>
            <h6>SCINCE</h6>
          </Link>
          <Link to='/?cat=tec' className='link'>
            <h6>TECHNOLOGY</h6>
          </Link>
          <Link to='/?cat=chinema' className='link'>
            <h6>CHINEMA</h6>
          </Link>
          <Link to='/?cat=design' className='link'>
            <h6>DESIGN</h6>
          </Link>
          <Link to='/?cat=food' className='link'>
            <h6>FOOD</h6>
          </Link>
          <span onClick={()=>navigate("/profile/"+auth)}>
            {name}</span>
          <span>LogOut</span>
          <span className='write'>
            <Link to='/write' className='link'>Write</Link>
          </span>
        </div>
      </div>
    </div>
  )
}
