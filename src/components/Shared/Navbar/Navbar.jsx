import { useState } from 'react';
import { CgMenuRightAlt } from "react-icons/cg";
import { FiChevronDown, FiChevronUp, FiMenu, FiX } from 'react-icons/fi';
import { NavLink } from 'react-router-dom';
import "./navbar.css";


const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [servicesOpen, setServicesOpen] = useState(false);
    const [isClosing, setIsClosing] = useState(false);


    const toggleMenu = () => {
        if (menuOpen) {
            setIsClosing(true);
            setTimeout(() => {
                setMenuOpen(false);
                setIsClosing(false);
            }, 500);
        } else {
            setMenuOpen(true);
        }
    };

    const toggleServices = () => {
        setServicesOpen(!servicesOpen);
    };

   
    const closeMenuOnNavItemClick = () => {
        setMenuOpen(false);
        setIsClosing(false); 
    };
    




    return (
        <nav className="bg-white shadow">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex-shrink-0">
                        <img src="/path-to-logo.png" alt="Logo" className="h-8" />
                    </div>

                    {/* Menu for larger screens */}
                    <div className="hidden md:flex space-x-4 items-center">
                        <NavLink to="/" className="block px-4 py-2 text-gray-800 hover:bg-green-600 hover:text-white">Home</NavLink>
                        <div className="relative group">
                            <button
                                onMouseEnter={toggleServices}
                                className="text-gray-800 hover:bg-green-600 hover:text-white flex items-center"
                            >
                                Services {servicesOpen ? <FiChevronUp /> : <FiChevronDown />}
                            </button>

                            {/* Mega menu */}
                            {servicesOpen && (
                                <div
                                    onMouseLeave={() => setServicesOpen(false)}
                                    className="absolute left-0 mt-2 w-48 bg-white shadow-lg py-2 transition-all ease-in-out duration-300"
                                >
                                    <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">IT Consultancy</a>
                                    <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Managed IT</a>
                                    <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Digital Marketing</a>
                                    <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Technology Training</a>
                                </div>
                            )}
                        </div>
                        <a href="#" className="text-gray-800 hover:bg-green-600 hover:text-white px-4 py-2">Solutions </a>
                        <a href="#" className="text-gray-800 hover:bg-green-600 hover:text-white px-4 py-2">About </a>
                        <a href="#" className="text-gray-800 hover:bg-green-600 hover:text-white px-4 py-2">Contact</a>
                    </div>
                    <div className="hidden md:flex">
                        <button className="ml-4 bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition">
                            Sign Up
                        </button>
                    </div>

                    {/* Mobile Menu Icon */}
                    <div className="md:hidden flex items-center border-2 p-1 rounded hover:bg-green-500">
                        <button onClick={toggleMenu}>
                            {menuOpen ? (
                                <CgMenuRightAlt className="text-2xl text-gray-800 hover:text-white" />
                            ) : (
                                <FiMenu className="text-2xl text-gray-800 hover:text-white" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {(menuOpen && !isClosing) && (
                <div className="side-menu">
                    <div className="side-menu-2">
                        <div className="flex justify-between items-center p-4">
                            <img src="/path-to-logo.png" alt="Logo" className="h-8" />
                            <button onClick={toggleMenu}>
                                <FiX className="text-4xl text-black border-2 p-1 hover:bg-red-500 hover:text-white rounded" />
                            </button>
                        </div>
                        <div className="mt-4">
                            <NavLink 
                                to="/" 
                                className="block px-4 py-2 text-gray-800 hover:bg-green-600 hover:text-white" 
                                onClick={closeMenuOnNavItemClick}  // Close menu on click
                            >
                                Home
                            </NavLink>
                            <div>
                                <button onClick={toggleServices} className="w-full text-left px-4 py-2 flex justify-between text-gray-800">
                                    Services
                                    <span className='border-2 active:border-green-500 active:text-green-500 px-1.5 py-.5 rounded-xl'>
                                        {servicesOpen ? <FiChevronUp /> : <FiChevronDown />}
                                    </span>
                                </button>
                                {servicesOpen && (
                                    <div className="pl-8">
                                        <a href="#" className="block px-4 py-2 hover:bg-green-600 hover:text-white" onClick={closeMenuOnNavItemClick}>IT Consultancy</a>
                                        <a href="#" className="block px-4 py-2 hover:bg-green-600 hover:text-white" onClick={closeMenuOnNavItemClick}>Managed IT</a>
                                        <a href="#" className="block px-4 py-2 hover:bg-green-600 hover:text-white" onClick={closeMenuOnNavItemClick}>Digital Marketing</a>
                                        <a href="#" className="block px-4 py-2 hover:bg-green-600 hover:text-white" onClick={closeMenuOnNavItemClick}>Technology Training</a>
                                    </div>
                                )}
                            </div>
                            <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-green-600 hover:text-white" onClick={closeMenuOnNavItemClick}>Solutions</a>
                            <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-green-600 hover:text-white" onClick={closeMenuOnNavItemClick}>About</a>
                            <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-green-600 hover:text-white" onClick={closeMenuOnNavItemClick}>Contact</a>
                        </div>
                        {/* Button in the Mobile Menu */}
                        <div className="mt-4 px-4">
                            <button className="w-full bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition">Sign Up</button>
                        </div>
                    </div>
                </div>
            )}

            {isClosing && (
                <div className="side-menu closing">
                    <div className="side-menu-2 close"></div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
