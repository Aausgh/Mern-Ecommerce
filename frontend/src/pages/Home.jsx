import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'
import axios from "axios"

import beats_solo from '../assets/images/beatsSolo3.png'
import ps5 from '../assets/images/ps5.png'
import macbookpro from '../assets/images/macbookpro.png'
import beatsearphone from '../assets/images/beatsearphone.png'
import applewatch from '../assets/images/applewatch.png'
import iphone15pro from '../assets/images/iphone15pro.jpg'
import beatsspeaker from '../assets/images/beatsspeaker.png'
import razerbarracuda from '../assets/images/razerbarracuda.png'

import { FaShippingFast } from "react-icons/fa";
import { TbTimeDuration30 } from "react-icons/tb";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { IoWalletOutline } from "react-icons/io5";
import Card from '../components/Card';

const Home = () => {
      const navigate = useNavigate();

      const [product, setProduct] = useState([]);
      const [categories, setCategories] = useState([])

      const getCategories = async () => {
            try {
                  const api = import.meta.env.VITE_SERVER_URL;
                  const { data } = await axios.get(`${api}/category/get-category`)
                  if (data?.success) {
                        setCategories(data?.category)
                  }

            } catch (error) {
                  console.log(error)
            }
      }

      useEffect(() => {
            getCategories();

      }, [])

      const getProduct = async () => {
            try {
                  const api = import.meta.env.VITE_SERVER_URL;
                  const { data } = await axios.get(`${api}/product/get-products`);
                  setProduct(data.products);


            } catch (error) {
                  console.log(error)
            }

      }


      useEffect(() => {
            getProduct();
      }, [])


      return (
            <main className=" w-full m-auto">

                  <section className=' w-[98%] m-auto rounded-xl py-4 px-4 bg-gradient-to-r to-[#d3d2d2] from-[#e5e4e4]'>


                        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4 px-4">


                              <div className='mx-auto'>
                                    <img src={beats_solo} className="w-[400px] drop-shadow-[0_15px_15px_rgba(0,0,0,0.85)] shadow-black" alt="solo" />
                              </div>

                              <div className=' mt-auto text-end'>
                                    <h1 className=" text-xl font-semibold mb-3 ">
                                          Beats Solo 3
                                    </h1>

                                    <h1 className=" text-6xl font-bold mb-3">
                                          Wireless
                                    </h1>

                                    <h1 className=" text-9xl font-extrabold text-gray-100 mb-3">
                                          HEADPHONE
                                    </h1>
                                    <button className="w-[200px] bg-gradient-to-r from-[#740811] to-[#f3293a] hover:from-[#f3293a] hover:to-[#740811] text-white font-semibold py-3 rounded-3xl">
                                          Buy Now
                                    </button>

                              </div>




                        </div>


                  </section>

                  <section className=' w-[98%] m-auto py-4 '>

                        <div className='grid grid-cols-1 xl:grid-cols-2'>

                              <div className='col-span-1 mx-2 my-2'>

                                    <div className='flex gap-4'>

                                          <div className="w-full rounded-2xl bg-gradient-to-br from-[#212120] to-[#373736] px-4 py-2 flex justify-around">

                                                <div className='my-auto'>
                                                      <h3 className=" text-sm font-semibold text-gray-200">
                                                            Enjoy
                                                      </h3>

                                                      <h3 className=" text-2xl font-bold text-gray-200">
                                                            With
                                                      </h3>

                                                      <h3 className=" text-4xl font-extrabold text-[#373736] mb-3">
                                                            EARPHONE
                                                      </h3>
                                                      <button className="w-[100px] bg-[#eb292e]  text-white font-semibold py-2 rounded-3xl">
                                                            Browse
                                                      </button>
                                                </div>

                                                <img src={beatsearphone} alt="beatsearphone" className='w-[150px] ' />

                                          </div>

                                          <div className="w-full rounded-2xl bg-gradient-to-br from-[#eec128] to-[#f3bf2d] px-4 py-2 flex justify-around">

                                                <div className='my-auto'>
                                                      <h3 className=" text-sm font-semibold text-gray-200">
                                                            New
                                                      </h3>

                                                      <h3 className=" text-2xl font-bold text-gray-200">
                                                            Apple
                                                      </h3>

                                                      <h3 className=" text-4xl font-extrabold text-[#dbed34] mb-3">
                                                            WATCH
                                                      </h3>
                                                      <button className="w-[100px] bg-[#e4e5e5]  text-gray-900 font-semibold py-2 rounded-3xl">
                                                            Browse
                                                      </button>
                                                </div>

                                                <img src={applewatch} alt="applewatch" className='w-[220px] ' />

                                          </div>
                                    </div>

                                    <div className='w-full rounded-2xl bg-gradient-to-r to-[#e4e5e5] from-[#aeaeae] mt-3 px-4 py-2 flex justify-around '>
                                          <div className='my-auto'>
                                                <h3 className=" text-lg font-semibold ">
                                                      Best
                                                </h3>

                                                <h3 className=" text-3xl font-bold">
                                                      Gaming
                                                </h3>

                                                <h3 className=" text-6xl font-extrabold text-gray-100 mb-3">
                                                      CONSOLE
                                                </h3>
                                                <button className="w-[150px] bg-[#eb292e]  text-white font-semibold py-2 rounded-3xl">
                                                      Browse
                                                </button>
                                          </div>

                                          <img src={ps5} alt="ps5" className='w-[500px] ' />

                                    </div>
                              </div>

                              <div className='col-span-1 mx-2 my-2'>

                                    <div className='w-full rounded-2xl bg-gradient-to-br to-[#0a4e7c] from-[#0b184c]  py-3 flex justify-around '>
                                          <div className='my-auto'>
                                                <h3 className=" text-lg font-semibold text-gray-200">
                                                      Trend
                                                </h3>

                                                <h3 className=" text-3xl font-bold text-gray-200">
                                                      Devices
                                                </h3>

                                                <h3 className=" text-6xl font-extrabold text-[#0a4e7c] mb-3">
                                                      LAPTOP
                                                </h3>
                                                <button className="w-[150px] bg-[#e4e5e5] text-gray-800 font-semibold py-2 rounded-3xl">
                                                      Browse
                                                </button>
                                          </div>

                                          <img src={macbookpro} alt="ps5" className='w-[460px] ' />

                                    </div>



                                    <div className='flex gap-4 mt-3'>

                                          <div className="w-full rounded-2xl bg-gradient-to-br from-[#fb5707] to-[#fa9400] px-4 py-2 flex justify-around">

                                                <div className='my-auto'>
                                                      <h3 className=" text-sm font-semibold text-gray-200">
                                                            New
                                                      </h3>

                                                      <h3 className=" text-2xl font-bold text-gray-200">
                                                            Beats
                                                      </h3>

                                                      <h3 className=" text-4xl font-extrabold text-[#fa9400] mb-3">
                                                            SPEAKER
                                                      </h3>
                                                      <button className="w-[100px] bg-[#e4e5e5]  text-gray-900 font-semibold py-2 rounded-3xl">
                                                            Browse
                                                      </button>
                                                </div>

                                                <img src={beatsspeaker} alt="applewatch" className='w-[200px] ' />

                                          </div>

                                          <div className="w-full rounded-2xl bg-gradient-to-br from-[#726e62] to-[#bab3ad] px-4 py-2 flex justify-around">

                                                <div className='my-auto'>
                                                      <h3 className=" text-sm font-semibold text-gray-200">
                                                            New
                                                      </h3>

                                                      <h3 className=" text-2xl font-bold text-gray-200">
                                                            Premium
                                                      </h3>

                                                      <h3 className=" text-3xl font-extrabold text-[#bab3ad] mb-3">
                                                            SMARTPHONE
                                                      </h3>
                                                      <button className="w-[100px] bg-[#e4e5e5]  text-gray-900 font-semibold py-2 rounded-3xl">
                                                            Browse
                                                      </button>
                                                </div>

                                                <img src={iphone15pro} alt="applewatch" className='w-[200px] ' />

                                          </div>


                                    </div>
                              </div>

                        </div>

                  </section>

                  <section className='w-[98%] m-auto py-4'>

                        <div className='flex justify-around items-center gap-8'>

                              <div className=' flex justify-around items-center gap-4 px-4 py-2'>
                                    <FaShippingFast size={60} color='#b5a3a4' />
                                    <div>
                                          <h5 className='text-lg font-bold'>Free Shiping</h5>
                                          <p className='text-sm'>Free shipping on all orders</p>
                                    </div>

                              </div>

                              <div className=' flex justify-around items-center gap-4'>
                                    <TbTimeDuration30 size={60} color='#b5a3a4' />
                                    <div>
                                          <h1 className='text-lg font-bold'>Money Guarantee</h1>
                                          <p className='text-sm'>30 days money back guarantee</p>
                                    </div>

                              </div>

                              <div className=' flex justify-around items-center gap-4'>

                                    <TfiHeadphoneAlt size={60} color='#b5a3a4' />
                                    <div>
                                          <h1 className='text-lg font-bold'>Online Support 24/7</h1>
                                          <p className='text-sm'>Technical support 24 hours</p>
                                    </div>

                              </div>

                              <div className=' flex justify-around items-center gap-4'>
                                    <IoWalletOutline size={60} color='#b5a3a4' />

                                    <div>
                                          <h1 className='text-lg font-bold'>Secure Payment</h1>
                                          <p className='text-sm'>All Cards Accepted</p>
                                    </div>

                              </div>



                        </div>

                  </section>

                  <section className='w-[98%] m-auto py-4'>
                        <div className='w-full flex justify-between items-center gap-8 bg-[#eb2a34] rounded-xl px-12 py-6'>
                              <div className='my-auto w-[35%]'>
                                    <p className='text-sm lg:text-lg text-gray-300 px-2'>20% OFF</p>
                                    <h1 className='text-7xl lg:text-9xl font-bold text-gray-100'>FINE </h1>
                                    <h1 className='text-7xl lg:text-9xl font-bold text-gray-100'> SMILE</h1>
                                    <p className='text-sm lg:text-lg text-gray-300 px-2'>19 NOV TO 7 DEC</p>

                              </div>

                              <div className='my-auto w-[30%]'>
                                    <img src={razerbarracuda} alt="razerbarracuda" className='w-[500px] lg:w-[400px] overflow-visible' />

                              </div>

                              <div className='my-auto w-[35%]'>
                                    <p className='text-base lg:text-lg font-normal text-gray-300 '>Razer Barracuda</p>
                                    <h1 className='text-5xl lg:text-8xl font-semibold text-gray-100 mb-2'>Summer Sale </h1>
                                    <p className='text-sm lg:text-base font-light text-pretty text-gray-300 mb-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod, vel amet ex laboriosam ducimus nam quo veniam? Ipsa, dicta optio.</p>

                                    <button className="w-[100px] bg-[#e4e5e5]  text-gray-900 font-semibold py-2 rounded-3xl">
                                          Buy Now
                                    </button>

                              </div>
                        </div>
                  </section>

                  <section className='w-[98%] m-auto mb-16 mt-12'>

                        <div className='w- full px-6'>

                              <div className='flex justify-between items-center'>
                                    <h1 className='text-4xl font-semibold mb-5'>Best Selling Products</h1>

                                    <button
                                          onClick={() => navigate('/products')}
                                          className="w-[150px] bg-[#e4e5e5]  text-gray-900 font-semibold py-2 rounded-3xl">
                                          More Products
                                    </button>
                              </div>


                              <div className='flex justify-start items-center flex-wrap gap-14 py-4'>

                                    {product && product.map((product) => (
                                          <div key={product._id} >
                                                <Card product={product} />
                                          </div>
                                    ))}

                              </div>

                        </div>

                  </section>

            </main>
      );
}

export default Home;
