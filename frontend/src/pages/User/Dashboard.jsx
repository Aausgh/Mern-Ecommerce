import React, { useEffect, useState } from 'react'
import { useAuth } from '../../context/auth';
import axios from 'axios';
import { toast } from 'react-toastify'
import UserMenu from '../../components/Menu/UserMenu'
import { NavLink } from 'react-router-dom';

const Dashboard = () => {

      const [auth, setAuth] = useAuth();
      const [name, setName] = useState("");
      const [email, setEmail] = useState("");
      const [password, setPassword] = useState("");
      const [phone, setPhone] = useState("");
      const [address, setAddress] = useState("");

      useEffect(() => {
            const { email, name, phone, address } = auth?.user;
            setName(name);
            setPhone(phone);
            setEmail(email);
            setAddress(address);
      }, [auth?.user]);

      const handleSubmit = async (e) => {
            e.preventDefault();
            try {
                  const api = import.meta.env.VITE_SERVER_URL;
                  const { data } = await axios.put(`${api}/auth/profile`, {
                        name,
                        email,
                        password,
                        phone,
                        address,
                  });

                  if (data?.error) {
                        toast.error(data?.error)
                  } else {
                        setAuth({ ...auth, user: data?.updatedUser })
                        let ls = localStorage.getItem('auth');
                        ls = JSON.parse(ls);
                        ls.user = data.updatedUser;
                        localStorage.setItem('auth', JSON.stringify(ls));
                        toast.success('Profile Updated Successfully');
                  }


            } catch (error) {
                  toast.error('Something went wrong!')

            }
      }

      return (
            <>
                  <div className='w-full grid grid-cols-12 gap-4'>
                        <div className=' col-span-2 lg:col-span-2'>

                              <div className='fixed '>
                                    <UserMenu />
                              </div>

                        </div>
                        <div className='col-span-10 lg:col-span-10'>
                              <div className="py-16 px-12 sm:px-24 md:px-48 lg:px-14 xl:px-24 xl:max-w-2xl">

                                    <h2 className="text-center text-4xl text-indigo-900 font-semibold lg:text-left xl:text-5xl
                                  xl:text-bold">User Details</h2>

                                    <div className="mt-10">

                                          <form onSubmit={handleSubmit}>
                                                <div className='py-2'>
                                                      <label htmlFor='name' className="text-sm font-bold px-2 text-gray-700 tracking-wide">Name</label>
                                                      <input
                                                            className="w-full text-lg py-2 border-b border-gray-300 rounded-xl focus:outline-none focus:border-indigo-500"
                                                            type='text'
                                                            value={name}
                                                            onChange={(e) => setName(e.target.value)}
                                                            placeholder="Mike"
                                                      />
                                                </div>

                                                <div className='py-2'>
                                                      <label htmlFor='email' className="text-sm px-2 font-bold text-gray-700 tracking-wide">Email Address</label>
                                                      <input
                                                            className="w-full text-lg py-2 border-b border-gray-300 rounded-xl focus:outline-none focus:border-indigo-500"
                                                            type='email'
                                                            value={email}
                                                            onChange={(e) => setEmail(e.target.value)}
                                                            placeholder="mike@gmail.com"
                                                            disabled={true}
                                                      />
                                                </div>

                                                <div className='py-2'>
                                                      <label htmlFor='password' className="text-sm px-2 font-bold text-gray-700 tracking-wide">Password </label>
                                                      <input
                                                            className="w-full text-lg py-2 border-b border-gray-300 rounded-xl focus:outline-none focus:border-indigo-500"
                                                            type='password'
                                                            value={password}
                                                            onChange={(e) => setPassword(e.target.value)}
                                                            placeholder="********"

                                                      />
                                                </div>

                                                <div className='py-2'>
                                                      <label htmlFor='phone' className="text-sm px-2 font-bold text-gray-700 tracking-wide">Phone </label>
                                                      <input
                                                            className="w-full text-lg py-2 border-b border-gray-300 rounded-xl focus:outline-none focus:border-indigo-500"
                                                            type='number'
                                                            value={phone}
                                                            onChange={(e) => setPhone(e.target.value)}
                                                            placeholder="561-552-9770" />
                                                </div>

                                                <div className='py-2'>
                                                      <label htmlFor='address' className="text-sm px-2 font-bold text-gray-700 tracking-wide">Address </label>
                                                      <input
                                                            className="w-full text-lg py-2 border-b border-gray-300 rounded-xl focus:outline-none focus:border-indigo-500"
                                                            type='text'
                                                            value={address}
                                                            onChange={(e) => setAddress(e.target.value)}
                                                            placeholder="2267 Geneva Street"
                                                      />
                                                </div>

                                                <div className="py-8">
                                                      <button className="bg-[#fb5607] hover:bg-[#fa9500] text-gray-100 p-4 w-full rounded-full tracking-wide
                                                font-semibold font-display focus:outline-none focus:shadow-outline
                                                shadow-lg">
                                                            Update
                                                      </button>
                                                </div>

                                          </form>


                                    </div>
                              </div>
                        </div>

                  </div>
            </>
      )
}

export default Dashboard