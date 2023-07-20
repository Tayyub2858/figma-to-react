import React from 'react';
import './NavbarStyle.css';
const Navbar = () => {
  return (
    <div className="navbar-container">
        <div className="navbar-container-text">
            <nav className='nav'>
                <div className="navbar-brand">
                    <p className='brand-logo'>mk</p>
                    <p className='logo-text'>Muheem</p>
                </div>
                <div className="Navbar-links">
                    <button className='navbar-btn'>Home</button>
                    <button className='navbar-btn'>About Us</button>
                    <button className='navbar-btn'>Services</button>
                    <button className='navbar-btn'>Projects</button>
                    <button className='navbar-btn'>Testimonial</button>
                    <button className='navbar-btn'>Contact</button>
                </div>
                <div className="navbar-actve-links">
                    <button className='navbar-active-btn'>Download Cv</button>
                </div>
            </nav>
        </div>
    </div>
  )
}

export default Navbar
