import React from 'react';
import BannerSlider from './BannerSlider';
import Experiences from '../share/Experiences/Experiences';
import Service from '../share/Service/Service';
import Contactus from '../share/ContactUs/Contactus';
import Footer from '../share/Footer/Footer';
import Skills from '../Skills/Skills';

const Home = () => {
    return (
        <div className=''>
            <BannerSlider></BannerSlider>
            <Experiences></Experiences>
            <Skills />
            <Service></Service>

            <Contactus></Contactus>
            <Footer></Footer>
        </div>
    );
};

export default Home;