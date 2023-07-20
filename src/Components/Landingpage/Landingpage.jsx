import React from 'react';
import './LandingpageStyle.css';
import Navbar from '../Modules/Navbar/Navbar'
import Slider from '../Modules/Slider/Slider';
import Footer from '../Modules/Footer/Footer';
import OtherContant from '../OtherContant/OtherContant';
const Landingpage = () =>{
  return (
   <>
    <div className="landingpage-container">
    <Navbar/>
    <Slider/>
    <OtherContant/>
    <Footer/>
    </div>
   </>
  )
}

export default Landingpage
