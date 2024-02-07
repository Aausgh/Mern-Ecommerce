import React from 'react'
import { Select } from 'antd';
const { Option } = Select;

const UpdateProductForm = ({ handleUpdate, name, id, price, description, category, quantity, photo, setName, setPrice, setDescription, setQuantity, setCategory, setPhoto, categories }) => {

      const api = import.meta.env.VITE_SERVER_URL;
      return (
            <form className='w-full' onSubmit={handleUpdate}>

                  <div className='w-full flex flex-col justify-center items-center gap-4 mb-6'>

                        <div className='mb-3 border w-36 h-36 rounded-full'>
                              {photo ? (
                                    <div>
                                          <img
                                                src={URL.createObjectURL(photo)}
                                                alt='product_photo'
                                                className='w-36 h-36 rounded-full'
                                          />
                                    </div>
                              ) : (
                                    <div>
                                          <img
                                                src={`${api}/product/product-photo/${id}`}
                                                alt='product_photo'
                                                className='w-36 h-36 rounded-full'
                                          />
                                    </div>
                              )}
                        </div>
                        <div className='mb-3'>
                              <label className='bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded'>
                                    {photo ? photo?.name : 'Upload Photo'}
                                    <input
                                          type='file'
                                          name='photo'
                                          accept='image/*'
                                          hidden
                                          onChange={(e) => setPhoto(e.target.files[0])}
                                    />
                              </label>
                        </div>

                  </div>
                  <div className="mb-4">
                        <input
                              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                              id="name"
                              type="text"
                              placeholder="Name"
                              value={name}
                              onChange={(e) => setName(e.target.value)}
                        />
                  </div>
                  <div className='w-full flex justify-center items-center gap-4'>
                        <div className="w-full mb-4">
                              <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    type="number"
                                    placeholder="Price"
                                    value={price}
                                    onChange={(e) => setPrice(e.target.value)}
                              />
                        </div>
                        <div className="w-full mb-4">
                              <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    type="number"
                                    placeholder="Quantity"
                                    value={quantity}
                                    onChange={(e) => setQuantity(e.target.value)}
                              />
                        </div>
                  </div>

                  <Select
                        showSearch
                        placeholder={'Select Category'}
                        className='shadow appearance-none border rounded w-36 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4'
                        onChange={(value) => {
                              setCategory(value);
                        }}
                        value={category}
                  >
                        {categories.map((category) => (
                              <Option key={category._id} value={category._id} className='capitalize '>
                                    {category.name}
                              </Option>
                        ))}
                  </Select>
                  <div className="mb-4">
                        <textarea
                              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                              type="text"
                              placeholder="Description"
                              value={description}
                              onChange={(e) => setDescription(e.target.value)}
                        ></textarea>
                  </div>


                  <div>

                        <button
                              type='submit'
                              className="w-full text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
                        >
                              Update
                        </button>


                  </div>
            </form>
      )

}

export default UpdateProductForm