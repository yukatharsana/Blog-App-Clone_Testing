import React from 'react'
import Logo from '../img/logo.jpg'
import { Link } from 'react-router-dom'
export default function NavBar () {
  return (
    <div className='navbar'>
      <div className='container'>
        <div className='logo'>
          <img src={Logo} alt='logo' />
        </div>
        <div className='links'>
          <Link to='' className='link'>
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
          <span>John</span>
          <span>LogOut</span>
          <span className='write'>
            <Link to='/write' className='link'>Write</Link>
          </span>
        </div>
      </div>
    </div>
  )
}
