import React from 'react'
import { useNavigate, NavLink } from 'react-router-dom'

import { useCart } from '../context/cart'
import { useAuth } from '../context/auth';


import { IoClose } from "react-icons/io5";

const Cart = () => {

      const navigate = useNavigate()

      const [cart, setCart] = useCart();
      const [auth, setAuth] = useAuth();

      const api = import.meta.env.VITE_SERVER_URL;

      const totalPrice = () => {
            try {
                  let total = 0;
                  cart?.map((item) => {
                        total = total + item.price
                  })
                  return total.toLocaleString("en-US", {
                        style: "currency",
                        currency: "USD"
                  });

            } catch (error) {
                  console.log(error)

            }
      }

      const removeItem = (pid) => {
            try {
                  let myCart = [...cart];
                  let index = myCart.findIndex((item) => item._id === pid);
                  myCart.splice(index, 1);
                  setCart(myCart);
                  localStorage.setItem("cart", JSON.stringify(myCart));

            } catch (error) {
                  console.log(error)

            }

      }

      return (
            <main className='w-[98%] m-auto'>

                  <div className='px-4 py-6 grid grid-cols-5 gap-4'>

                        <div className='col-span-5 md:col-span-3 shadow-xl rounded-xl border'>
                              {cart?.length > 0 ? (
                                    <div className='py-4'>
                                          <h4 className=" text-2xl font-bold text-center mb-3"> Cart</h4>

                                          <div className=''>
                                                {cart?.map((product) => (
                                                      <div key={product._id} className='w-[90%] m-auto flex items-center justify-between px-2  py-4 mb-6 shadow-xl rounded-xl border'>
                                                            <div className='col-span-3'>
                                                                  <img
                                                                        src={`${api}/product/product-photo/${product._id}`}
                                                                        alt={product.name}
                                                                        className='w-12 md:w-24  h-9 md:h-20  drop-shadow-[0_15px_15px_rgba(0,0,0,0.75)] '
                                                                  />
                                                            </div>


                                                            <h4 className="text-sm md:text-base  lg:text-lg font-medium "> {product?.name}</h4>
                                                            <h4 className=" text-sm md:text-base  lg:text-lg font-medium "> Quantity</h4>
                                                            <h4 className=" text-sm md:text-base  lg:text-lg font-medium "> ${product.price}</h4>
                                                            <button onClick={() => removeItem(product._id)}>
                                                                  <IoClose size={25} color='red' />
                                                            </button>




                                                      </div>
                                                ))}
                                          </div>


                                    </div>
                              ) : (
                                    <div className='w-[85%] m-auto  py-12'>

                                          <h2 className=" text-2xl font-extrabold text-center mb-3">
                                                There is no item in your cart.
                                          </h2>

                                          <button
                                                onClick={() => navigate('/products')}
                                                className="w-[180px] bg-[#e4e5e5]  text-gray-900 font-semibold py-2 px-2 rounded-3xl block mx-auto mt-4"
                                          >
                                                Continue Shopping
                                          </button>

                                    </div>
                              )}
                        </div>

                        <div className='col-span-0 md:col-span-2 shadow-xl rounded-xl border h-72 py-4 px-6'>
                              <h4 className=" text-2xl font-bold text-center mb-3"> Checkout</h4>

                              <div>
                                    <h4 className=" text-sm md:text-base  lg:text-lg font-medium mb-3"> Total : {totalPrice()}</h4>

                                    {/* <h4 className=" text-sm md:text-base  lg:text-lg font-medium mb-3"> Promo Code : </h4> */}

                                    {/* <h4 className=" text-sm md:text-base  lg:text-lg font-medium mb-3"> Discount : </h4> */}


                                    <hr className='my-2' />

                                    {/* <h4 className=" text-sm md:text-base  lg:text-lg font-medium mb-3"> Total Payable : </h4> */}

                                    <button
                                          onClick={() => navigate('/products')}
                                          className="w-[130px] bg-[#82a9e2]  text-gray-900 font-semibold py-2 px-2 rounded-3xl block ml-auto mt-4"
                                    >
                                          Go to Payment
                                    </button>

                              </div>

                        </div>

                  </div>
            </main>
      )
}

export default Cart