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

    const handleLinkClick = () => {
        // Close the menu when a link is clicked (mobile)
        setMenuOpen(false);
    };

    return (
        <nav className="bg-white shadow">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex-shrink-0">
                        {/* <img src="/path-to-logo.png" alt="Logo" className="h-8" /> */}
                        <h2 className='text-3xl font-bold'>Heaven</h2>
                    </div>

                    {/* Menu for larger screens */}
                    <div className="hidden md:flex space-x-4 items-center">
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                isActive ? "block px-4 py-2 text-white bg-green-600 rounded" :
                                    "block px-4 py-2 text-gray-800 hover:bg-green-600 hover:text-white"
                            }
                            onClick={handleLinkClick}
                        >
                            Home
                        </NavLink>

                        {/* Service menu Item with mega menu */}
                        <div className="relative group">
                            <button
                                onMouseEnter={toggleServices}
                                className="text-gray-800 py-2 px-3  rounded hover:bg-green-600 hover:text-white flex items-center"
                            >
                                Services {servicesOpen ? <FiChevronUp className='ml-1 text-xl' /> : <FiChevronDown className='ml-1 text-xl' />}
                            </button>

                            {/* Mega menu */}
                            {servicesOpen && (
                                <div
                                    onMouseLeave={() => setServicesOpen(false)}
                                    className="mega-menu"
                                >
                                    <NavLink to="/a" onClick={handleLinkClick} className={({ isActive }) =>
                                        isActive ? "block px-4 py-1 rounded text-white bg-green-600" :
                                            "block px-4 py-2 text-gray-800 hover:bg-green-600 hover:text-white"} >
                                        IT Consultancy
                                    </NavLink>
                                    <NavLink to="/b" onClick={handleLinkClick} className={({ isActive }) =>
                                        isActive ? "block px-4 py-1 rounded text-white bg-green-600" :
                                            "block px-4 py-2 text-gray-800 hover:bg-green-600 hover:text-white"} >
                                        Managed IT
                                    </NavLink>
                                    <NavLink to="/c" onClick={handleLinkClick} className={({ isActive }) =>
                                        isActive ? "block px-4 py-1 rounded text-white bg-green-600" :
                                            "block px-4 py-2 text-gray-800 hover:bg-green-600 hover:text-white"} >
                                        Digital Marketing
                                    </NavLink>
                                    <NavLink to="/d" onClick={handleLinkClick} className={({ isActive }) =>
                                        isActive ? "block px-4 py-1 rounded text-white bg-green-600" :
                                            "block px-4 py-2 text-gray-800 hover:bg-green-600 hover:text-white"} >
                                        Technology Training
                                    </NavLink>
                                </div>
                            )}
                        </div>



                        <NavLink
                            to="/blog"
                            className={({ isActive }) =>
                                isActive ? "block px-4 py-2 text-white bg-green-600 rounded" :
                                    "block px-4 py-2 text-gray-800 hover:bg-green-600 hover:text-white"
                            }
                            onClick={handleLinkClick}
                        >
                            Blog
                        </NavLink>
                        <NavLink
                            to="/about"
                            className={({ isActive }) =>
                                isActive ? "block px-4 py-2 text-white bg-green-600 rounded" :
                                    "block px-4 py-2 text-gray-800 hover:bg-green-600 hover:text-white"
                            }
                            onClick={handleLinkClick}
                        >
                            About
                        </NavLink>
                        <NavLink
                            to="/contact"
                            className={({ isActive }) =>
                                isActive ? "block px-4 py-2 text-white bg-green-600 rounded" :
                                    "block px-4 py-2 text-gray-800 hover:bg-green-600 hover:text-white"
                            }
                            onClick={handleLinkClick}
                        >
                            Contact
                        </NavLink>
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


            {/* 
            ------------------------------------------------------------
                                     MOBILE DEVICE NAVBAR
            ------------------------------------------------------------ */}

            {(menuOpen && !isClosing) && (
                <div className="side-menu">
                    <div className="side-menu-2">
                        <div className="flex justify-between items-center p-4">
                            {/* <img src="/path-to-logo.png" alt="Logo" className="h-8" /> */}
                            <h2 className='text-3xl font-bold'>Heaven</h2>
                            <button
                                onClick={toggleMenu}>
                                <FiX className="text-4xl text-black border-2 p-1 hover:bg-red-500 hover:text-white rounded" />
                            </button>
                        </div>
                        <div className="mt-4">
                            <NavLink
                                to="/"
                                onClick={handleLinkClick}
                                className={({ isActive }) =>
                                    isActive ? "block px-4 py-2 text-green-600 font-bold hover:bg-green-600 hover:text-white " :
                                        "block px-4 py-2 text-gray-900 "} >
                                Home
                            </NavLink>

                            <div
                                className={({ isActive }) =>
                                    isActive ? "block px-4 py-2 text-green-600 font-bold hover:bg-green-600 hover:text-white " :
                                        "block px-4 py-2 text-gray-900 "}>
                                <button
                                    onClick={toggleServices}
                                    className="w-full  text-left px-4 py-2 flex justify-between text-gray-800">
                                    Services
                                    <span className='border-2 active:border-green-500 active:text-green-500 px-1.5 py-.5 rounded-xl'>
                                        {servicesOpen ? <FiChevronUp /> : <FiChevronDown />}
                                    </span>
                                </button>
                                {servicesOpen && (
                                    <div className="pl-8 text-[13px] space-y-2">
                                        <NavLink to="/"
                                            onClick={handleLinkClick}
                                            className={({ isActive }) =>
                                                isActive ? "block px-4 py-1 rounded text-white bg-green-600" :
                                                    "block px-4 py-2 text-gray-800 hover:bg-green-600 hover:text-white"} >
                                            IT Consultancy
                                        </NavLink>
                                        <NavLink
                                            to="/"
                                            onClick={handleLinkClick}
                                            className={({ isActive }) =>
                                                isActive ? "block px-4 py-1 rounded text-white bg-green-600" :
                                                    "block px-4 py-2 text-gray-800 hover:bg-green-600 hover:text-white"} >
                                            Managed IT
                                        </NavLink>
                                        <NavLink
                                            to="/"
                                            onClick={handleLinkClick}
                                            className={({ isActive }) =>
                                                isActive ? "block px-4 py-1 rounded text-white bg-green-600" :
                                                    "block px-4 py-2 text-gray-800 hover:bg-green-600 hover:text-white"} >
                                            Digital Marketing
                                        </NavLink>
                                        <NavLink
                                            to="/"
                                            onClick={handleLinkClick}
                                            className={({ isActive }) =>
                                                isActive ? "block px-4 py-1 rounded text-white bg-green-600" :
                                                    "block px-4 py-2 text-gray-800 hover:bg-green-600 hover:text-white"} >
                                            Technology Training
                                        </NavLink>
                                    </div>
                                )}
                            </div>
                            <NavLink
                                to="/blog"
                                onClick={handleLinkClick}
                                className={({ isActive }) =>
                                    isActive ? "block px-4 py-2 text-white bg-green-600 rounded" :
                                        "block px-4 py-2 text-gray-800 hover:bg-green-600 hover:text-white"
                                }
                            >
                                Blog
                            </NavLink>
                            <NavLink
                                to="/about"
                                onClick={handleLinkClick}
                                className={({ isActive }) =>
                                    isActive ? "block px-4 py-2 text-white bg-green-600 rounded" :
                                        "block px-4 py-2 text-gray-800 hover:bg-green-600 hover:text-white"
                                }
                            >
                                About
                            </NavLink>
                            <NavLink
                                to="/contact"
                                onClick={handleLinkClick}
                                className={({ isActive }) =>
                                    isActive ? "block px-4 py-2 text-green-600 " :
                                        "block px-4 py-2 text-gray-800 hover:bg-green-600 hover:text-white"
                                }
                            >
                                Contact
                            </NavLink>
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
                    <div className="side-menu-2 closing"></div>
                </div>
            )}
        </nav>
    );
};
export default Navbar;