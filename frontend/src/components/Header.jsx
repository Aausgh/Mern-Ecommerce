import React, { useState, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAuth } from '../context/auth';
import { toast } from 'react-toastify';
import logo from '../assets/images/logo.png'
import {
      Menu,
      MenuButton,
      MenuList,
      MenuItem,
      MenuGroup,
      Button,
      Avatar,
      Icon,
      Image,
      useDisclosure,
      Drawer,
      DrawerBody,
      DrawerFooter,
      DrawerHeader,
      DrawerOverlay,
      DrawerContent,
      DrawerCloseButton,
      Input
} from '@chakra-ui/react'
import { HiOutlineLogout, HiMenuAlt3 } from "react-icons/hi";
import { RxHamburgerMenu, RxDashboard } from "react-icons/rx";
import { IoCloseOutline } from "react-icons/io5";


const Header = () => {
      const [auth, setAuth] = useAuth();

      const { isOpen, onOpen, onClose } = useDisclosure()
      const btnRef = useRef()

      const handleLogout = () => {
            setAuth({
                  ...auth,
                  user: null,
                  token: ''
            });
            localStorage.removeItem('auth');
            toast.success("Logout Successfully");
      }


      const Links = [
            { name: "Home", link: "/" },
            { name: "About", link: "/about" },
            { name: "Contact", link: "/contact" },
      ];


      return (
            <>
                  <nav className=" sticky top-0 z-50 px-4 py-4 font-[FiraCode] flex justify-between items-center bg-gray-100">


                        <NavLink to={"/"} className="text-3xl font-bold font-fira leading-none bg-gradient-to-r from-[#6dcdf5] to-[#645df1] bg-clip-text text-transparent">
                              eLectronify
                        </NavLink>


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



                        <div className='flex justify-center items-center'>

                              <div className='lg:hidden'>

                                    <Icon as={HiMenuAlt3} w={8} h={8} ref={btnRef} onClick={onOpen} className={` transition duration-300 transform ${isOpen ? 'rotate-180' : ''
                                          }`} />

                              </div>

                              <Drawer
                                    isOpen={isOpen}
                                    placement='left'
                                    onClose={onClose}
                                    finalFocusRef={btnRef}
                              >
                                    <DrawerOverlay />
                                    <DrawerContent>
                                          <DrawerCloseButton />
                                          <DrawerHeader className="text-3xl font-bold font-fira leading-none bg-gradient-to-r from-[#6dcdf5] to-[#645df1] bg-clip-text text-transparent">eLectronify</DrawerHeader>

                                          <DrawerBody>
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

                                          </DrawerBody>

                                          <DrawerFooter>
                                                <Button variant='outline' mr={3} onClick={onClose}>
                                                      Cancel
                                                </Button>
                                                <Button colorScheme='blue'>Save</Button>
                                          </DrawerFooter>
                                    </DrawerContent>
                              </Drawer>


                              {
                                    !auth.user ? (
                                          <>
                                                <NavLink
                                                      to={"/login"}
                                                      className="hidden lg:inline-block lg:ml-auto lg:mr-3 py-2 px-6 bg-gray-200 hover:bg-gray-100 text-xl text-gray-900 font-bold rounded-xl transition duration-200"
                                                >
                                                      Log In
                                                </NavLink>

                                                <NavLink
                                                      to={"/register"}
                                                      className="hidden lg:inline-block py-2 px-6 bg-blue-500 hover:bg-blue-600 text-xl text-white font-bold rounded-xl transition duration-200"
                                                >
                                                      Register
                                                </NavLink>
                                          </>
                                    ) : (

                                          <Menu >
                                                <MenuButton >
                                                      <Avatar name={auth.user.name} size='sm' src='' />
                                                </MenuButton>
                                                <MenuList>
                                                      <MenuGroup >
                                                            <MenuItem as={NavLink} icon={<RxDashboard size={20} />} to={`/dashboard/${auth?.user?.role === 1 ? "admin" : "user"}`} className="text-lg font-semibold ">

                                                                  Dashboard
                                                            </MenuItem>
                                                            <MenuItem onClick={handleLogout} icon={<HiOutlineLogout size={20} />} color="red" className="text-lg font-semibold text-red-600 ">Logout</MenuItem>
                                                      </MenuGroup>

                                                </MenuList>
                                          </Menu>
                                    )
                              }


                        </div>
                  </nav >

                  {/* <motion.div
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
                                          <Icon as={IoCloseOutline} w={8} h={8} color="black" />
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
                                          {
                                                !auth.user ? (
                                                      <>
                                                            <NavLink
                                                                  to={"/login"}
                                                                  className="block px-4 py-3 mb-3 leading-loose text-lg text-center font-semibold bg-gray-50 hover:bg-gray-100 rounded-xl">
                                                                  Log In
                                                            </NavLink>

                                                            <NavLink
                                                                  to={"/register"}
                                                                  className="block px-4 py-3 mb-2 leading-loose text-lg text-center text-white font-semibold bg-blue-600 hover:bg-blue-700  rounded-xl">
                                                                  Register
                                                            </NavLink>
                                                      </>
                                                ) : (
                                                      <>
                                                            <NavLink
                                                                  onClick={handleLogout}
                                                                  to={"/login"}
                                                                  className="block px-4 py-3 mb-2 leading-loose text-lg text-center text-white font-semibold bg-blue-600 hover:bg-blue-700  rounded-xl"
                                                            >
                                                                  Logout
                                                            </NavLink>
                                                      </>
                                                )
                                          }
                                    </div>

                                    
                              </div>
                        </nav>
                  </motion.div> */}
            </>
      );
};

export default Header;
