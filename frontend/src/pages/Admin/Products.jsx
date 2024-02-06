import React, { useState, useEffect } from 'react';
import AdminMenu from '../../components/Menu/AdminMenu';
import { toast } from 'react-toastify';
import axios from 'axios';
import { Select } from 'antd';

const { Option } = Select;

const Products = () => {
      const [categories, setCategories] = useState([]);
      const [name, setName] = useState('');
      const [description, setDescription] = useState('');
      const [price, setPrice] = useState('');
      const [category, setCategory] = useState('');
      const [quantity, setQuantity] = useState('');
      const [photo, setPhoto] = useState(null);

      const getCategories = async () => {
            try {
                  const api = import.meta.env.VITE_SERVER_URL;
                  const { data } = await axios.get(`${api}/category/get-category`);
                  if (data?.success) {
                        setCategories(data.category);
                  }
            } catch (error) {
                  console.log(error);
            }
      };

      useEffect(() => {
            getCategories();
      }, []);

      const handleCreate = async (e) => {
            e.preventDefault();
            try {
                  const api = import.meta.env.VITE_SERVER_URL;
                  const formData = new FormData();
                  formData.append('name', name);
                  formData.append('description', description);
                  formData.append('price', price);
                  formData.append('category', category);
                  formData.append('quantity', quantity);
                  formData.append('photo', photo);

                  const { data } = await axios.post(`${api}/product/create-product`, formData);
                  if (data?.success) {
                        toast.success(data.message);
                        setName('');
                        setDescription('');
                        setPrice('');
                        setCategory('');
                        setQuantity('');
                        setPhoto(null);
                  } else {
                        toast.error(data.message);
                  }
            } catch (error) {
                  console.log(error);
                  toast.error('Something went wrong!');
            }
      };

      return (
            <>
                  <div className='w-full grid grid-cols-12'>
                        <div className='col-span-2 lg:col-span-2'>
                              <div className='fixed'>
                                    <AdminMenu />
                              </div>
                        </div>
                        <div className='col-span-10 lg:col-span-10'>
                              <div className='w-full px-2 py-2'>

                                    <h1 className='text-xl font-bold mb-2'>Products</h1>

                                    <form className='w-full mb-3 shadow-xl px-4 py-2 rounded-xl border' onSubmit={handleCreate}>
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
                                          <div className="mb-4">
                                                <textarea
                                                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                                      type="text"
                                                      placeholder="Description"
                                                      value={description}
                                                      onChange={(e) => setDescription(e.target.value)}
                                                ></textarea>
                                          </div>
                                          <Select
                                                showSearch
                                                placeholder={'Select Category'}
                                                className='shadow appearance-none border rounded w-36 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4'
                                                onChange={(value) => {
                                                      setCategory(value);
                                                }}
                                          >
                                                {categories.map((category) => (
                                                      <Option key={category._id} value={category._id} className='capitalize '>
                                                            {category.name}
                                                      </Option>
                                                ))}
                                          </Select>
                                          <div className='w-full flex justify-start items-center gap-4'>
                                                <div className='mb-3'>
                                                      <label className='bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded'>
                                                            {photo ? photo.name : 'Upload Photo'}
                                                            <input
                                                                  type='file'
                                                                  name='photo'
                                                                  accept='image/*'
                                                                  hidden
                                                                  onChange={(e) => setPhoto(e.target.files[0])}
                                                            />
                                                      </label>
                                                </div>
                                                <div className='mb-3'>
                                                      {photo && (
                                                            <div>
                                                                  <img
                                                                        src={URL.createObjectURL(photo)}
                                                                        alt='product_photo'
                                                                        className='w-20 h-20 rounded-full'
                                                                  />
                                                            </div>
                                                      )}
                                                </div>
                                          </div>
                                          <div>
                                                <button
                                                      className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded'
                                                      type='submit'
                                                >
                                                      Create
                                                </button>
                                          </div>
                                    </form>
                              </div>
                        </div>
                  </div>
            </>
      );
};

export default Products;
