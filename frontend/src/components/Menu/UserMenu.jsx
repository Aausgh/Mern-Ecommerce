import React from 'react'
import { FaUsers } from "react-icons/fa";
import { NavLink } from 'react-router-dom';

import { useAuth } from '../../context/auth';

import { MdSpaceDashboard } from "react-icons/md";
import { BiSolidCoupon } from "react-icons/bi";
import { TiThList } from "react-icons/ti";
import { CgProfile } from "react-icons/cg";


const UserMenu = () => {


      const AdminLinks = [
            { name: "Profile", icon: <CgProfile size={25} />, link: "/dashboard/user" },
            { name: "Orders", icon: <TiThList size={25} />, link: "/dashboard/user/orders" },
            // { name: "Coupons", icon: <BiSolidCoupon size={25} />, link: "/dashboard/user/coupons" },

      ]


      return (
            <>

                  <div className=" w-full h-auto my-4 mx-2 md:mx-6 lg:mx-8 bg-gray-200 pt-10 rounded-xl border-r border-white dark:bg-gray-800 dark:border-gray-700">

                        <div className="w-full h-full  px-3 pb-4 overflow-y-auto  dark:bg-gray-800">
                              <ul className="space-y-2 font-medium">
                                    {
                                          AdminLinks.map((link, i) => (
                                                <li>
                                                      <NavLink to={link.link} className="flex flex-col md:flex-col lg:flex-row items-center p-2 text-gray-600 hover:text-black rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">

                                                            {link.icon}
                                                            <span className="hidden md:inline ms-0 lg:ms-3 text-sm  ">{link.name}</span>

                                                      </NavLink>
                                                </li>
                                          ))
                                    }

                              </ul>
                        </div>
                  </div>


            </>


      )
}

export default UserMenu