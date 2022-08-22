import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='logo'>
            <img src='./Logo.png' alt='logo' />
            
        </div>
<ul className="nav-list">
    <li>
        <a href="#home">Home</a>
    </li>
    <li>
        <a href="#about">About</a>
    </li>
    <li>
        <a href="#projects">Projects</a>
    </li>
    <li>
        <button className="contact-button">Let's Talk</button>
    </li>
</ul>

    </div>
  )
}

export default Navbar