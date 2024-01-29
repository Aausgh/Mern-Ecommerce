import React from 'react'
import { NavLink } from 'react-router-dom'

const PNF = () => {
      return (
            <section className="min-h-screen py-40 bg-white font-[Arvo] w-full">

                  <div className=" text-center">
                        <div className="h-[400px] bg-[url(https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif)] bg-no-repeat bg-center">
                              <h1 className="text-center text-8xl mb-16">404</h1>

                        </div>

                        <div className="-mt-12">
                              <h3 className="text-xl">
                                    Look like you're lost
                              </h3>

                              <p>the page you are looking for is not avaible!</p>

                              <button className="py-3 px-5 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-400 my-8 block w-32 mx-auto rounded-xl">
                                    <NavLink to={"/"} className="text-white text-lg">Home</NavLink>
                              </button>
                        </div>
                  </div>

            </section>
      )
}

export default PNF