import React from 'react'
import Logo from '../img/logo.jpg'

export default function Footer() {
  return (
    <footer>
      <img src={Logo} alt='logo'/>
      <span>
        create By ThanuMahee and <b>React && Springboot</b>
      </span>
    </footer>
  )
}
