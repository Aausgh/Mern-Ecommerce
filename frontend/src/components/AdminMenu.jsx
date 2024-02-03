import React from 'react'
import { FaUsers } from "react-icons/fa";
import { NavLink } from 'react-router-dom';

import { useAuth } from '../context/auth';

import { MdSpaceDashboard, MdProductionQuantityLimits, MdOutlineReviews } from "react-icons/md";
import { BiSolidCategoryAlt, BiSolidCoupon } from "react-icons/bi";
import { TiThList } from "react-icons/ti";


const AdminMenu = () => {
      const [auth, setAuth] = useAuth();

      const handleLogout = () => {
            setAuth({
                  ...auth,
                  user: null,
                  token: ''
            });
            localStorage.removeItem('auth');
            toast.success("Logout Successfully");
      }

      const AdminLinks = [
            { name: "Dashboard", icon: <MdSpaceDashboard />, link: "/dashboard/admin" },
            { name: "Products", icon: <MdProductionQuantityLimits />, link: "/dashboard/admin/products" },
            { name: "Categories", icon: <BiSolidCategoryAlt />, link: "/dashboard/admin/categories" },
            { name: "Orders", icon: <TiThList />, link: "/dashboard/admin/orders" },
            { name: "Users", icon: <FaUsers />, link: "/dashboard/admin/users" },
            { name: "Reviews", icon: <MdOutlineReviews />, link: "/dashboard/admin/reviews" },
            { name: "Coupons", icon: <BiSolidCoupon />, link: "/dashboard/admin/coupons" },

      ]


      return (
            <div>

                  <aside id="logo-sidebar" className="fixed left-0 w-64 pt-10 h-screen rounded-xl transition-transform -translate-x-full bg-white border-r border-gray-200 lg:translate-x-0 dark:bg-gray-800 dark:border-gray-700" aria-label="Sidebar">

                        <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
                              <ul className="space-y-2 font-medium">
                                    {
                                          AdminLinks.map((link, i) => (
                                                <li>
                                                      <NavLink to={link.link} className="flex items-center p-2 text-gray-600 hover:text-black rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">

                                                            {link.icon}
                                                            <span className="ms-3 ">{link.name}</span>

                                                      </NavLink>
                                                </li>
                                          ))
                                    }

                              </ul>
                        </div>
                  </aside>

            </div>


      )
}

export default AdminMenu