import React from 'react';
import './SliderStyle.css';
import { Grid } from '@mui/material';
import userimg from '../../../Assets/indoor-picture-cheerful-handsome-young-man-having-folded-hands-looking-directly-smiling-sincerely-wearing-casual-clothes-removebg-preview 1.png'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/swiper.min.css";
const Slider = () => {
    return (
        <>
            <div className='Slider-container'>
                <Swiper
                    spaceBetween={0}
                    slidesPerView={1}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper">
                    <SwiperSlide>
                        <div className="slider-container-box">
                            <Grid container>
                                <Grid item xs={12} sm={12} md={7}>
                                    <div className="left-side-slider">
                                        <p className='para-text1'>Hi I am</p>
                                        <h6 className='heading-text1'>Muheem Ameen</h6>
                                        <h1 className='heading-text2'>UI & UX</h1>
                                        <h1 className='heading-text3'>Designer</h1>
                                        <p className='para-text2'>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                            sed do eiusmod tempor incididunt ut labore et dolore
                                            magna aliqua. Ut enim ad minim veniam, quis nostrud
                                            exercitation ullamco laboris nisi ut aliquip ex ea
                                            commodo consequat.
                                        </p>
                                        <button className='hireme-btn'>Hire me</button>
                                    </div>
                                </Grid>
                                <Grid xs={12} sm={12} md={5}>
                                    <div className="right-side-slider">
                                        <div className="first-border-box">
                                            <div className="second-box">
                                                <img src={userimg} alt="" className='user-img' />
                                            </div>
                                        </div>
                                    </div>
                                </Grid>
                            </Grid>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slider-container-box">
                            <Grid container>
                                <Grid item xs={12} sm={12} md={7}>
                                    <div className="left-side-slider">
                                        <p className='para-text1'>Hi I am</p>
                                        <h6 className='heading-text1'>Muheem Ameen</h6>
                                        <h1 className='heading-text2'>UI & UX</h1>
                                        <h1 className='heading-text3'>Designer</h1>
                                        <p className='para-text2'>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                            sed do eiusmod tempor incididunt ut labore et dolore
                                            magna aliqua. Ut enim ad minim veniam, quis nostrud
                                            exercitation ullamco laboris nisi ut aliquip ex ea
                                            commodo consequat.
                                        </p>
                                        <button className='hireme-btn'>Hire me</button>
                                    </div>
                                </Grid>
                                <Grid xs={12} sm={12} md={5}>
                                    <div className="right-side-slider">
                                        <div className="first-border-box">
                                            <div className="second-box">
                                                <img src={userimg} alt="" className='user-img' />
                                            </div>
                                        </div>
                                    </div>
                                </Grid>
                            </Grid>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slider-container-box">
                            <Grid container>
                                <Grid item xs={12} sm={12} md={7}>
                                    <div className="left-side-slider">
                                        <p className='para-text1'>Hi I am</p>
                                        <h6 className='heading-text1'>Muheem Ameen</h6>
                                        <h1 className='heading-text2'>UI & UX</h1>
                                        <h1 className='heading-text3'>Designer</h1>
                                        <p className='para-text2'>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                            sed do eiusmod tempor incididunt ut labore et dolore
                                            magna aliqua. Ut enim ad minim veniam, quis nostrud
                                            exercitation ullamco laboris nisi ut aliquip ex ea
                                            commodo consequat.
                                        </p>
                                        <button className='hireme-btn'>Hire me</button>
                                    </div>
                                </Grid>
                                <Grid xs={12} sm={12} md={5}>
                                    <div className="right-side-slider">
                                        <div className="first-border-box">
                                            <div className="second-box">
                                                <img src={userimg} alt="" className='user-img' />
                                            </div>
                                        </div>
                                    </div>
                                </Grid>
                            </Grid>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div >
        </>
    )
}

export default Slider
