import React from 'react'

const ProductsTable = ({ products, handleDelete, showDrawer }) => {

      const api = import.meta.env.VITE_SERVER_URL;
      return (

            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">

                  <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">

                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                              <tr>
                                    <th scope="col" className="px-6 py-3">
                                          Image
                                    </th>

                                    <th scope="col" className="px-6 py-3">
                                          Product name
                                    </th>

                                    <th scope="col" className="px-6 py-3">
                                          Category
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                          Quantity
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                          Price
                                    </th>

                                    <th scope="col" className="px-6 py-3">
                                          Action
                                    </th>
                              </tr>
                        </thead>
                        <tbody>
                              {products && products.map((product) => (

                                    <tr key={product._id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">

                                          <td className="px-6 py-4">
                                                <img
                                                      src={`${api}/product/product-photo/${product._id}`}
                                                      alt={product.name}
                                                      className='w-10 lg:w-20 h-10  lg:h-20 rounded-full'
                                                />
                                          </td>

                                          <th scope="row" className="px-6 py-4 font-medium capitalize text-gray-900 whitespace-nowrap dark:text-white">
                                                {product.name}
                                          </th>


                                          <td className="px-6 py-4">
                                                {product?.category?.name}
                                          </td>

                                          <td className="px-6 py-4">
                                                {product.quantity}
                                          </td>

                                          <td className="px-6 py-4">
                                                ${product.price}
                                          </td>

                                          <td className=" px-6 py-4">
                                                <button
                                                      onClick={() => showDrawer(product)}
                                                      className="font-bold text-blue-600 dark:text-blue-500 hover:underline"
                                                >
                                                      Edit
                                                </button>
                                                <button
                                                      onClick={() => handleDelete(product._id)}
                                                      className="font-bold text-red-600 dark:text-red-500 hover:underline ms-0 md:ms-1 lg:ms-3"
                                                >
                                                      Remove
                                                </button>
                                          </td>
                                    </tr>
                              ))}

                        </tbody>
                  </table>
            </div>

      )
}

export default ProductsTable