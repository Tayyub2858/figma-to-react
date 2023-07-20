import React from 'react';
import './FooterStyle.css';
import { Grid } from '@mui/material';
import {AiFillFacebook , AiFillInstagram, AiFillTwitterSquare, AiFillLinkedin} from 'react-icons/ai'
const Footer = () => {
    return (
        <>
            <div className="footer-container">
                <Grid container>
                    <Grid item xs={12} sm={12} md={12}>
                        <div className="footer-brand">
                            <p className='footer-logo'>mk</p>
                            <p className='footer-logo-text'>Muheem</p>
                        </div>
                        <div className="Footer-links">
                            <button className='footer-btn'>Home</button>
                            <button className='footer-btn'>About Us</button>
                            <button className='footer-btn'>Services</button>
                            <button className='footer-btn'>Projects</button>
                            <button className='footer-btn'>Testimonial</button>
                            <button className='footer-btn'>Contact</button>
                        </div>
                        <div className="footer-icons">
                            <AiFillFacebook className='socialmedia-icons'/>
                            <AiFillInstagram className='socialmedia-icons'/>
                            <AiFillTwitterSquare className='socialmedia-icons'/>
                            <AiFillLinkedin className='socialmedia-icons'/>
                        </div>
                        <div className="footer-rights">
                            <p className='para-footer-rights'>@ 2023 <span className='name-rights'> Muheem </span>  All Rights Reserved, Inc</p>
                        </div>
                    </Grid>
                </Grid>
            </div>
        </>
    )
}

export default Footer
