import React from 'react'
import { Link } from 'react-router-dom'
import { FaCartPlus } from "react-icons/fa6";
import { useCart } from '../context/cart';


const Card = ({ product }) => {

      const [cart, setCart] = useCart();

      const api = import.meta.env.VITE_SERVER_URL;

      return (
            <>

                  <div className='w-full h-80'>

                        <div className=' rounded-2xl shadow-xl bg-gradient-to-br from-[#dbdbdb] to-[#e9e9e9] p-3'>
                              <img
                                    src={`${api}/product/product-photo/${product._id}`}
                                    alt={product.name}
                                    className='w-72 h-64 drop-shadow-[0_15px_15px_rgba(0,0,0,0.75)]'
                              />
                        </div>

                        <div className='flex justify-between items-center px-2 py-2'>
                              <div>
                                    <Link to={`/product/${product.slug}`}>
                                          <h1 className='text-lg font-medium'>{product.name}</h1>
                                    </Link>
                                    <h1 className='text-xl font-bold'>${product.price}</h1>
                              </div>

                              <button
                                    onClick={() => {
                                          setCart([...cart, product]);
                                          localStorage.setItem(
                                                "cart",
                                                JSON.stringify([...cart, product])
                                          )
                                    }}
                              >
                                    <FaCartPlus size={30} />
                              </button>

                        </div>

                  </div>


            </>
      )
}

export default Card