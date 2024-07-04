import React, { useEffect, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { NavLink } from 'react-router-dom';
import { FaGithub, FaGlobe } from 'react-icons/fa';

const Project = () => {
    return (
        <div className='container'>
            <div className="servicesTitle text-center mb-10">
                <h1 className="pb-7 text-6xl font-NotoSans font-bold ">My Recent <span className='text-primaryTextColor'>Works</span></h1>
            </div>

            <Swiper
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                    },
                    768: {
                        slidesPerView: 2,
                    },
                    1024: {
                        slidesPerView: 3,
                    },
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="projectBox h-[350px] md:h-[420px] flex items-end bg-green-400 rounded-2xl relative overflow-hidden">
                        <div className="projectAbout absolute bottom-0 left-0 w-full bg-primaryTextColor h-32 text-center py-5 transition-transform duration-300 ease-in-out transform translate-y-full">
                            <h1 className="text-white text-4xl font-bold">Saint Martin</h1>
                            <p className="text-white">Real Estate Project</p>
                            <div className="flex items-center justify-center gap-5">
                                <NavLink to={''} target='_blank'><FaGlobe /></NavLink>
                                <NavLink to={''} target='_blank'><FaGithub /></NavLink>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="projectBox h-[350px] md:h-[420px] flex items-end bg-green-400 rounded-2xl relative overflow-hidden">
                        <div className="projectAbout absolute bottom-0 left-0 w-full bg-primaryTextColor h-32 text-center py-5 transition-transform duration-300 ease-in-out transform translate-y-full">
                            <h1 className="text-white text-4xl font-bold">Saint Martin</h1>
                            <p className="text-white">Real Estate Project</p>
                            <div className="flex items-center justify-center gap-5">
                                <NavLink to={''} target='_blank'><FaGlobe /></NavLink>
                                <NavLink to={''} target='_blank'><FaGithub /></NavLink>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="projectBox h-[350px] md:h-[420px] flex items-end bg-green-400 rounded-2xl relative overflow-hidden">
                        <div className="projectAbout absolute bottom-0 left-0 w-full bg-primaryTextColor h-32 text-center py-5 transition-transform duration-300 ease-in-out transform translate-y-full">
                            <h1 className="text-white text-4xl font-bold">Saint Martin</h1>
                            <p className="text-white">Real Estate Project</p>
                            <div className="flex items-center justify-center gap-5">
                                <NavLink to={''} target='_blank'><FaGlobe /></NavLink>
                                <NavLink to={''} target='_blank'><FaGithub /></NavLink>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="projectBox h-[350px] md:h-[420px] flex items-end bg-green-400 rounded-2xl relative overflow-hidden">
                        <div className="projectAbout absolute bottom-0 left-0 w-full bg-primaryTextColor h-36 text-center py-5 transition-transform duration-400 ease-in-out transform translate-y-full">
                            <h1 className="text-white text-4xl font-bold">Saint Martin</h1>
                            <p className="text-white">Real Estate Project</p>
                            <div className="flex items-center justify-center gap-5">
                                <NavLink to={''} target='_blank'><FaGlobe /></NavLink>
                                <NavLink to={''} target='_blank'><FaGithub /></NavLink>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Project;