import React from 'react'
import { FaCartPlus } from "react-icons/fa6";


const Card = ({ product }) => {

      const api = import.meta.env.VITE_SERVER_URL;

      return (
            <>

                  <div className='w-full h-80'>

                        <div className=' rounded-2xl shadow-xl bg-gradient-to-br from-[#dbdbdb] to-[#e9e9e9] p-3'>
                              <img
                                    src={`${api}/product/product-photo/${product._id}`}
                                    alt={product.name}
                                    className='w-72 h-64'
                              />
                        </div>

                        <div className='flex justify-between items-center px-2 py-2'>
                              <div>
                                    <h1 className='text-lg font-medium'>{product.name}</h1>
                                    <h1 className='text-xl font-bold'>${product.price}</h1>
                              </div>

                              <button >
                                    <FaCartPlus size={30} />
                              </button>

                        </div>

                  </div>


            </>
      )
}

export default Card