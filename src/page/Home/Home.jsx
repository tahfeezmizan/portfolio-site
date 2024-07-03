import React from 'react';
import BannerSlider from './BannerSlider';
import Experiences from '../share/Experiences/Experiences';
import Service from '../share/Service/Service';

const Home = () => {
    return (
        <div className=''>
            <BannerSlider></BannerSlider>
            <Experiences></Experiences>
            <Service></Service>
        </div>
    );
};

export default Home;