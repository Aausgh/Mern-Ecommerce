import React from 'react'
import { HiOutlineMailOpen } from "react-icons/hi";
import { FaMobile } from "react-icons/fa6";
import { BsFillPinMapFill } from "react-icons/bs";
import { IoPhonePortrait } from "react-icons/io5";

const Contact = () => {


      const card = [
            {
                  id: 1,
                  icon: <HiOutlineMailOpen size={98} color='#fa9500' />,
                  title: "Email",
                  desc: "mebakod436@rentaen.com",
                  desc2: "daanyaal.barron@aol.com",
            },
            {
                  id: 2,
                  icon: <IoPhonePortrait size={98} color='#fa9500' />,
                  title: "Phone",
                  desc: "561-552-9770",
                  desc2: " 407-911-4821",
            },
            {
                  id: 3,
                  icon: <BsFillPinMapFill size={98} color='#fa9500' />,
                  title: "Address",
                  desc: "2267 Geneva Street, NY",
                  desc2: "2058 Wyatt Street, FL"
            }
      ]

      const Hours = [
            {
                  id: 1,
                  day: "Monday - Friday",
                  time: "9:00 AM - 5:00 PM"
            },
            {
                  id: 2,
                  day: "Saturday",
                  time: "9:00 AM - 12:00 PM"
            },
            {
                  id: 3,
                  day: "Sunday",
                  time: "Closed"
            }
      ]

      const faq = [
            {
                  id: 1,
                  title: "What is your opening hours?",
                  desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus, expedita!"
            },
            {
                  id: 2,
                  title: "Do you accept online payments?",
                  desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus, expedita!"
            },
            {
                  id: 3,
                  title: "Do you deliver?",
                  desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus, expedita!"
            },

      ]

      const faq2 = [
            {
                  id: 1,
                  title: "Where is your location?",
                  desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus, expedita!"
            },
            {
                  id: 2,
                  title: "Do you accept returns?",
                  desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus, expedita!"
            },
            {
                  id: 3,
                  title: "What payment methods do you accept?",
                  desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus, expedita!"
            }
      ]

      return (
            <>

                  <main className=" relative w-full m-auto">
                        <section className='w-[90%] m-auto rounded-xl px-6 lg:px-12 py-20 bg-gradient-to-r from-[#fb5607] to-[#fa9500]'>

                              <div className='w-full lg:w-[90%] grid grid-cols-1 lg:grid-cols-2 gap-6 m-auto'>

                                    <div className='col-span-1 w-full lg:w-[80%]'>
                                          <h1 className='text-sm text-black font-bold'>Contact</h1>
                                          <h1 className='text-6xl font-medium'>Get In Touch</h1>
                                          <p className='text-base py-6 text-justify'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti magnam veniam officia tenetur et omnis necessitatibus ullam quaerat harum voluptate ipsam, rerum quis reiciendis similique facilis quo. Asperiores, excepturi adipisci!</p>
                                    </div>

                                    <form className='col-span-1 bg-black rounded-xl px-4 py-8 flex flex-col justify-center gap-8 shadow-xl '>
                                          <input type='text' placeholder='Name' className='rounded-xl h-12' />
                                          <input type='email' placeholder='Email' className='rounded-xl h-12' />
                                          <textarea type='text' placeholder='Message' className='rounded-xl h-36' />

                                          <button className='w-[60%] ml-auto text-lg font-medium  bg-[#fb5607] hover:bg-[#fa9500] text-[#f7ede2] rounded-xl py-3'>Submit</button>
                                    </form>
                              </div>

                        </section>

                        <div className='w-[35%]  lg:w-[75%] grid grid-cols-1 lg:grid-cols-3 gap-6 m-auto -translate-y-14'>

                              {card.map((card) => (
                                    <div key={card.id} className=' shadow-xl bg-gray-100 py-2 rounded-xl flex justify-center items-center gap-2 lg:gap-6'>

                                          {card.icon}

                                          <div className='font-serif'>
                                                <h1 className='text-lg font-bold py-1'>{card.title}</h1>

                                                <p className='text-sm mb-1 text-[#023047]'>{card.desc}</p>
                                                <p className='text-sm text-[#023047]'>{card.desc2}</p>

                                          </div>

                                    </div>
                              ))}


                        </div>

                        <section className='lg:px-12 py-16'>

                              <div className='w-[80%] grid grid-cols-1 lg:grid-cols-3 gap-6 m-auto'>

                                    <div className='col-span-2 lg:w-[80%]'>
                                          <h1 className='text-5xl font-medium'>Visit our office or  warehouse!</h1>
                                          <p className='text-base py-6 text-justify'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti magnam veniam officia tenetur et omnis necessitatibus ullam quaerat harum voluptate ipsam, rerum quis reiciendis similique facilis quo. Asperiores, excepturi adipisci!</p>

                                          <button className=' text-lg font-medium bg-[#fb5607] hover:bg-[#fa9500] text-white rounded-xl py-3 px-3'>Get Directions</button>
                                    </div>

                                    <div className='w-full py-2 bg-black rounded-xl text-center'>

                                          <h1 className='w-[50%] lg:w-[25%] m-auto py-1 -translate-y-4 font-medium rounded-2xl bg-[#fa9500] text-xl text-white'>HOURS</h1>

                                          {Hours.map((hour, i) => (
                                                <div className='py-3 font-serif'>
                                                      <h1 className='text-gray-200 font-semibold text-xl'>{hour.day}</h1>
                                                      <p className='text-gray-300 text-sm'>{hour.time}</p>
                                                </div>
                                          ))}

                                    </div>

                              </div>


                        </section>

                        <section className="text-gray-700">
                              <div className="container px-5 py-24 mx-auto">
                                    <div className="text-center mb-20">
                                          <h1 className="text-5xl font-medium text-center title-font text-gray-900 mb-4">
                                                Frequently Asked Question
                                          </h1>
                                          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
                                                The most common questions about how our business works and what
                                                can do for you.
                                          </p>
                                    </div>
                                    <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
                                          <div className="w-full lg:w-1/2 px-4 pt-2 lg:pb-2">


                                                {faq.map((faq, i) => (
                                                      <details className="mb-4">
                                                            <summary className="font-semibold bg-[#fa9500] text-white rounded-md py-2 px-4">
                                                                  {faq.title}
                                                            </summary>
                                                            <p className='rounded-md bg-gray-200 py-2 px-4'>
                                                                  {faq.desc}
                                                            </p>
                                                      </details>

                                                ))}


                                          </div>

                                          <div className="w-full lg:w-1/2 px-4 pb-2 lg:pt-2">
                                                {faq2.map((faq, i) => (
                                                      <details className="mb-4">
                                                            <summary className="font-semibold bg-[#fa9500] text-white rounded-md py-2 px-4">
                                                                  {faq.title}
                                                            </summary>
                                                            <p className='rounded-md bg-gray-200 py-2 px-4'>
                                                                  {faq.desc}
                                                            </p>
                                                      </details>

                                                ))}

                                          </div>
                                    </div>
                              </div>
                        </section>


                  </main>



            </>
      )
}

export default Contact