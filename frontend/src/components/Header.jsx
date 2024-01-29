import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';


const Header = () => {
      const [isMenuOpen, setMenuOpen] = useState(false);

      const toggleMenu = () => {
            setMenuOpen(!isMenuOpen);
      };

      const Links = [
            { name: "Home", link: "/" },
            { name: "About", link: "/about" },
            { name: "Contact", link: "/contact" },
      ];


      return (
            <>
                  <nav className="relative px-4 py-4 font-[FiraCode] flex justify-between items-center bg-gray-100">


                        <div>
                              <a className="text-3xl font-bold leading-none" href="#">
                                    Hello
                              </a>

                              <ul className="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:mx-auto lg:flex lg:items-center lg:w-auto lg:space-x-6">
                                    {Links.map((links) => (
                                          <li key={links.name}>
                                                <NavLink
                                                      to={links.link}
                                                      className="text-lg font-semibold text-gray-800 hover:text-gray-600"
                                                >
                                                      {links.name}
                                                </NavLink>

                                          </li>
                                    ))}
                              </ul>
                        </div>


                        <div className="lg:hidden">
                              <button className={`navbar-burger flex items-center text-blue-600 p-3 transition duration-300 transform ${isMenuOpen ? 'rotate-180' : ''
                                    }`} onClick={toggleMenu}>
                                    <svg className="block h-4 w-4 fill-[#14213d]" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                          <title>Mobile menu</title>
                                          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                                    </svg>
                              </button>
                        </div>

                        <NavLink to={"/login"} className="hidden lg:inline-block lg:ml-auto lg:mr-3 py-2 px-6 bg-gray-200 hover:bg-gray-100 text-xl text-gray-900 font-bold rounded-xl transition duration-200">
                              Log In
                        </NavLink>

                        <NavLink to={"/register"} className="hidden lg:inline-block py-2 px-6 bg-blue-500 hover:bg-blue-600 text-xl text-white font-bold rounded-xl transition duration-200">
                              Register
                        </NavLink>
                  </nav>

                  <motion.div
                        className={`fixed inset-0 z-50  ${isMenuOpen ? '' : 'hidden'}`}
                        animate={{ x: isMenuOpen ? '0%' : '-100%' }}
                        transition={{ duration: 0.5, ease: 'easeInOut' }}
                  >

                        <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-[#e5e5e5] backdrop-blur-xl border-r-2 rounded-r-lg overflow-y-auto">
                              <div className="flex items-center mb-8 border-b">
                                    <a className="mr-auto text-3xl font-bold leading-none" href="#">
                                          Hello
                                    </a>

                                    <button className="navbar-close" onClick={toggleMenu}>
                                          <svg className="h-6 w-6 text-[#14213d] cursor-pointer hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">

                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>

                                          </svg>
                                    </button>
                              </div>

                              <div>
                                    <ul>
                                          {Links.map((links) => (
                                                <li key={links.name} className="mb-1">
                                                      <NavLink
                                                            to={links.link}
                                                            className="block p-4 text-lg font-semibold text-gray-800 hover:bg-blue-50 hover:text-blue-600 rounded-md"
                                                      >
                                                            {links.name}
                                                      </NavLink>
                                                </li>
                                          ))}
                                    </ul>
                              </div>

                              <div className="mt-auto">
                                    <div className="pt-6">
                                          <NavLink to={"/login"} className="block px-4 py-3 mb-3 leading-loose text-lg text-center font-semibold bg-gray-50 hover:bg-gray-100 rounded-xl">
                                                Log In
                                          </NavLink>

                                          <NavLink to={"/register"} className="block px-4 py-3 mb-2 leading-loose text-lg text-center text-white font-semibold bg-blue-600 hover:bg-blue-700  rounded-xl">
                                                Register
                                          </NavLink>
                                    </div>

                                    {/* <p className="my-4 text-xs text-center text-gray-400">
                                          <span>Copyright © 2021</span>
                                    </p> */}
                              </div>
                        </nav>
                  </motion.div>
            </>
      );
};

export default Header;
