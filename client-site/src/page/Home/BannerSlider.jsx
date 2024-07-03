import { Button } from '@headlessui/react';
import React from 'react';
import { FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { FaChevronDown, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa6';

const BannerSlider = () => {
    return (
        <div className='h-screen bg-black' id='homeSlider'>
            <div class="sliderWrapper">
                <span class="bgTxt z-0 font-Anton uppercase">TAHFEEZ MIZAN</span>
                <div className="container z-40 mx-auto px-3 md:px-0">
                    <div className="grid grid-cols-12 gap-3">
                        <div className="col-span-6">
                            <div class="sliderContent1 text-white mt-56 pr-10">
                                <h4 class="text-lg font-NotoSans font-medium">Hello</h4>
                                <h1 class="sliderTitle pb-4 font-NotoSans sliderTitle text-6xl font-bold">I'm <span className='text-primaryTextColor'>Tahfeez Mizan </span>Front-End Developer</h1>
                                <p class="pb-5 text-2xl text-textColor font-light font-Rubik pr-28 slider-Dec">I love to create things that people love. If you are looking for an ongoing development, don't hesitate to contact me!</p>

                                <Button className="NavButton mb-5 font-Rubik text-lg font-medium inline-flex items-center justify-center gap-2 rounded-lg w-40 h-10 border-2 py-6 bg-transparent text-primaryTextColor border-primaryTextColor hover:bg-primaryTextColor hover:text-white">
                                    <FaChevronDown />
                                    Hire Me
                                </Button>
                            </div>
                        </div>
                        <div className="col-span-5 sliderSubjectImg relative">

                        </div>
                        <div className="col-span-1 flex items-center justify-center flex-col">
                            <div class="socialMedia  text-white flex flex-col gap-10">
                                <a href="https://www.linkedin.com/in/tahfeezmizan/" target="_blank">
                                    <i class="fa-brands fa-linkedin-in mb-4"></i>
                                    <FaLinkedinIn />
                                </a>
                                <a href="https://twitter.com/tahfeezmizan" target="_blank">
                                    <FaTwitter />
                                </a>
                                <a href="https://github.com/tahfeezmizan" target="_blank">
                                    <FaGithub />
                                </a>
                                <a href="https://www.instagram.com/tahfeezmizan64/" target="_blank">
                                    <i class="fa-brands fa-instagram mb-4"></i>
                                    <FaInstagram />
                                </a>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BannerSlider;