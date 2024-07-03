import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/main-logo.png'
import { Button } from '@headlessui/react';
import { FaPaperPlane } from 'react-icons/fa';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const handleToggleOpen = () => {
        setIsOpen(!isOpen)
    }

    return (
        <nav className="relative shadow bg-HeaderBG">
            <div className="container px-6 py-4 mx-auto lg:flex lg:justify-between lg:items-center">
                <div className="flex items-center justify-around">
                    <Link to="/" className="flex gap-3">
                        <img className="w-auto h-6 sm:h-7" src={logo} alt="" />
                    </Link>

                    {/* <!-- Mobile menu button --> */}
                    <div className="flex  lg:hidden">
                        <button onClick={handleToggleOpen} type="button" className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400" aria-label="toggle menu">
                            {
                                !isOpen ? (<svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
                                </svg>) : (<svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>)
                            }
                        </button>
                    </div>
                </div>

                {/* <!-- Mobile Menu open: "block", Menu closed: "hidden" --> */}
                <div className={`absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-base-100   lg:top-0 lg:relative lg:bg-transparent lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center ${isOpen ? 'block' : 'hidden'}`}>

                    <div className="text-white font-Montserrat text-base font-medium flex flex-col lg:items-center lg:flex-row lg:mx-6">
                        <Link to="/" className="my-2   transition-colors duration-300 transform hover:text-[#6A38C2]  md:mx-4 md:my-0">Home</Link>
                        <Link to="/blogs" className="my-2  transition-colors duration-300 transform dark:text-gray-200 hover:text-[#6A38C2]  md:mx-4 md:my-0">About</Link>
                        <Link to="/all-jobs" className="my-2  transition-colors duration-300 transform dark:text-gray-200 hover:text-[#6A38C2]  md:mx-4 md:my-0">Services</Link>

                        <Link to="" className="my-2  transition-colors duration-300 transform lg:hidden dark:text-gray-200 hover:text-[#6A38C2]  md:mx-4 md:my-0">Portflio</Link>
                    </div>
                </div>


                <Button className="NavButton font-Rubik text-lg font-medium inline-flex items-center justify-center gap-2 rounded-lg w-40 h-10 border-2 py-6 bg-transparent text-primaryTextColor border-primaryTextColor hover:bg-primaryTextColor hover:text-white">
                    <FaPaperPlane />
                    Let's Talk
                </Button>

            </div>
        </nav >
    );
};

export default Navbar;