import { FaChevronDown } from 'react-icons/fa';
import image1 from '../../../assets/Image3.png'
import image2 from '../../../assets/image4.png'
import React from 'react';
import { Button } from '@headlessui/react';


const Experiences = () => {
    return (
        <div className='py-20'>
            <div className="container">
                <div className="grid grid-cols-6 gap-10 items-center">
                    <div className="col-span-full md:col-span-3">
                        <div className="flex">
                            <div className="Saticfied flex-1 me-4">
                                <div className="expContent w-72 h-80 rounded-3xl">
                                    <img className='w-56 h-80 round rounded-3xl' src={image1} alt="" />
                                    <h2 className='font-Montserrat text-lg  font-medium text-right'>Saticfied Customers <span className='pl-5 text-7xl font-Anton text-primaryTextColor'>15</span> </h2>
                                </div>
                            </div>
                            <div className="flex-1">
                                <div className="expContent2 rounded-3xl">
                                    <h2 className="font-Montserrat text-lg font-medium mb-11 mt-12 pr-12"><span className='text-7xl pr-5 font-Anton text-primaryTextColor'>2+</span> Year of experience</h2>
                                    <h2></h2>
                                    <img src={image2} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-span-full md:col-span-3">
                        <div className="expContent3">
                            <h1 className="expTitle text-6xl font-NotoSans pb-6 font-bold">I'm Here to Help Your Next <span className='text-primaryTextColor'>Project!</span></h1>
                            <p className="text-2xl text-textColor font-Rubik font-light pb-6">I have 2 years pluse of experience in Front End Development section. My passion is developing & solving problems through user experience and research.</p>
                            <Button className="NavButton mt-6 font-Rubik text-lg font-medium inline-flex items-center justify-center gap-2 rounded-lg w-40 h-10 border-2 py-6 bg-transparent text-primaryTextColor border-primaryTextColor hover:bg-primaryTextColor hover:text-white">
                                <FaChevronDown />
                                Hire Me
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Experiences;