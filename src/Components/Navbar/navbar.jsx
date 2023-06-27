import React from 'react'
import Logo from '../logo/Logo'
import "./navbar.css"
import Search from '../Search Icon/search'
import OrangeButton from '../Orange button/orangeButton'
function Navbar() {
  return (
    <div className='navbar'>
        <Logo/>
        <ul className='nav-list'>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About Us</a></li>
          <li><a href="#special">Special</a></li>
          <li><a href="#menu">Menu</a></li>
          <li><a href="#blogs">Blogs</a></li>
        </ul>
        <Search/>
        <OrangeButton text = "--- Book Now ---"/>
    </div>
  )
}

export default Navbar
