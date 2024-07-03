import React from 'react';
import BannerSlider from './BannerSlider';
import Experiences from '../share/Experiences/Experiences';
import Service from '../share/Service/Service';
import Contactus from '../share/ContactUs/Contactus';

const Home = () => {
    return (
        <div className=''>
            <BannerSlider></BannerSlider>
            <Experiences></Experiences>
            <Service></Service>

            <Contactus></Contactus>
        </div>
    );
};

export default Home;