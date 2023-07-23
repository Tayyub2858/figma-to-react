import React, { useState } from 'react';
import './NavbarStyle.css';
const Navbar = () => {
    const [MenuClosed, setMenuClosed] = useState(true);
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
                        <button className='navbar-active-btn'>Download Cv</button>
                    </div>
                    <div>
                        <div className="nav-hamburguer-icon" onClick={() => setMenuClosed(!MenuClosed)}>☰</div>
                    </div>
                </nav>
                <div className={`overlay-container${MenuClosed ? "-hidden" : "-show"}`}>
                    <div>
                        <div className="overlay-buttonclose" onClick={() => setMenuClosed(!MenuClosed)}><span>&times;</span></div>
                        <div className="overlay-menu-wrapper">
                            <div className="overlay-menu">
                                <button className='nav-btn-mb'>Home</button>
                                <button className='nav-btn-mb'>About Us</button>
                                <button className='nav-btn-mb'>Services</button>
                                <button className='nav-btn-mb'>Projects</button>
                                <button className='nav-btn-mb'>Testimonial</button>
                                <button className='nav-btn-mb'>Contact</button>
                                <button className='nav-btn-acitve'>Download Cv</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
