import React, { useRef } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAuth } from '../context/auth';
import { toast } from 'react-toastify';
import logoo from '../assets/images/logoo.png'
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
      Heading,
} from '@chakra-ui/react'
import { HiOutlineLogout, HiMenuAlt3, HiOutlineShoppingCart } from "react-icons/hi";
import { RxDashboard } from "react-icons/rx";
import SearchInput from './Form/SearchInput';

const Header = () => {
      const [auth, setAuth] = useAuth();
      const navigate = useNavigate()

      const { isOpen, onOpen, onClose } = useDisclosure()

      const handleLogout = () => {
            setAuth({
                  ...auth,
                  user: null,
                  token: ''
            });
            localStorage.removeItem('auth');
            navigate('/login');
            toast.success("Logout Successfully");
      }


      const Links = [
            { name: "Home", link: "/" },
            { name: "About", link: "/about" },
            { name: "Blog", link: "/blog" },
            { name: "Contact", link: "/contact" },
      ];


      return (
            <>
                  <nav className=" sticky top-0 z-50 w-[98%] m-auto bg-white px-4 py-4 flex justify-between items-end ">



                        <div className='flex justify-between items-center gap-8'>
                              <NavLink to={"/"} className="text-3xl md:text-3xl font-bold font-fira leading-none text-[#aeaeae]">
                                    eLectro
                              </NavLink>


                              <ul className="hidden lg:mx-auto lg:flex lg:items-center lg:w-auto lg:space-x-6">

                                    {Links.map((links) => (
                                          <li key={links.name}>
                                                <NavLink
                                                      to={links.link}
                                                      className="text-lg font-medium text-[#797979] hover:text-[#aeaeae]"
                                                >
                                                      {links.name}
                                                </NavLink>

                                          </li>
                                    ))}
                              </ul>
                        </div>



                        <div className='flex justify-center items-center gap-4'>

                              <SearchInput />

                              <div className='lg:hidden'>

                                    <Icon as={HiMenuAlt3} w={8} h={8} onClick={onOpen} className={` transition duration-300 transform ${isOpen ? 'rotate-180' : 'rotate-0'}`} />

                              </div>

                              <Drawer
                                    isOpen={isOpen}
                                    placement='left'
                                    onClose={onClose}
                              >
                                    <DrawerOverlay />
                                    <DrawerContent sx={{ borderRadius: '12px', marginY: '10px', marginX: '10px' }}>
                                          <DrawerCloseButton />
                                          <Heading className="text-3xl px-3 py-2 font-bold font-fira leading-none bg-gradient-to-r from-[#6dcdf5] to-[#645df1] bg-clip-text text-transparent">eLectronify</Heading>

                                          <DrawerBody>
                                                <ul>
                                                      {Links.map((links) => (
                                                            <li key={links.name} className="mb-1">
                                                                  <NavLink
                                                                        to={links.link}
                                                                        className="block p-4 text-lg font-semibold border-b border-gray-200 text-gray-800 hover:bg-blue-50 hover:text-blue-600 rounded-md"
                                                                  >
                                                                        {links.name}
                                                                  </NavLink>
                                                            </li>
                                                      ))}
                                                </ul>

                                          </DrawerBody>

                                          <DrawerFooter>
                                                {
                                                      !auth.user ? (
                                                            <div div className="w-full mr-auto flex justify-center gap-4">
                                                                  <NavLink
                                                                        to={"/login"}
                                                                        className="w-full px-4 py-3 mb-3 leading-loose text-lg text-center font-semibold bg-gray-200 hover:bg-gray-100 rounded-xl">
                                                                        Log In
                                                                  </NavLink>

                                                                  <NavLink
                                                                        to={"/register"}
                                                                        className="w-full px-4 py-3 mb-3 leading-loose text-lg text-center text-white font-semibold bg-blue-600 hover:bg-blue-700  rounded-xl">
                                                                        Register
                                                                  </NavLink>
                                                            </div>
                                                      ) : (
                                                            <div className="mr-auto">
                                                                  <Avatar name={auth.user.name} size='sm' src='' />


                                                            </div>
                                                      )
                                                }
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

                                          <>
                                                <Icon as={HiOutlineShoppingCart} w={8} h={8} marginEnd={2} onClick={onOpen} />
                                                <Menu >
                                                      <MenuButton >
                                                            <Avatar name={auth.user.name} size='sm' src='' />
                                                      </MenuButton>
                                                      <MenuList >
                                                            <MenuGroup as="h1" title={auth.user.name} className="capitalize text-xl border-b border-gray-200" >

                                                                  <MenuItem
                                                                        as={NavLink}
                                                                        icon={<RxDashboard size={15} />}
                                                                        color="gary.800"
                                                                        to={`/dashboard/${auth?.user?.role === 1 ? "admin" : "user"}`}
                                                                        className="text-lg font-medium  hover:text-black"
                                                                  >

                                                                        Dashboard
                                                                  </MenuItem>
                                                                  <MenuItem
                                                                        onClick={handleLogout}
                                                                        icon={<HiOutlineLogout size={20} />}
                                                                        color="red.300"
                                                                        className="text-lg font-medium hover:text-red-700"
                                                                  >
                                                                        Logout
                                                                  </MenuItem>
                                                            </MenuGroup>

                                                      </MenuList>
                                                </Menu>
                                          </>
                                    )
                              }


                        </div >
                  </nav >


            </>
      );
};

export default Header;
