import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import AdminMenu from '../../components/Menu/AdminMenu';
import { toast } from 'react-toastify';
import axios from 'axios';
import ProductForm from '../../components/Form/ProductForm';

import { Drawer } from 'antd';
import { FaPlus } from "react-icons/fa6";
import ProductsTable from '../../components/Table/ProductsTable';
import UpdateProductForm from '../../components/Form/UpdateProductForm';

const Products = () => {
      const [categories, setCategories] = useState([]);
      const [name, setName] = useState('');
      const [description, setDescription] = useState('');
      const [price, setPrice] = useState('');
      const [category, setCategory] = useState('');
      const [quantity, setQuantity] = useState('');
      const [photo, setPhoto] = useState(null);


      const [products, setProducts] = useState([]);
      const [productData, setProductData] = useState({});

      const [uName, setUName] = useState('');
      const [uDescription, setUDescription] = useState('');
      const [uPrice, setUPrice] = useState('');
      const [uQuantity, setUQuantity] = useState('');
      const [uCategory, setUCategory] = useState('');
      const [uPhoto, setUPhoto] = useState('');
      const [id, setId] = useState('');



      const [open, setOpen] = useState(false);
      const [show, setShow] = useState(false);
      const showDrawer = () => {
            setOpen(true);
      };
      const onClose = () => {
            setOpen(false);
            setShow(false);
      };
      const showUpdateDrawer = async (product) => {
            setShow(true);
            try {
                  const api = import.meta.env.VITE_SERVER_URL;
                  const { data } = await axios.get(`${api}/product/get-product/${product._id}`);

                  setId(data.product._id);
                  setUName(data.product.name);
                  setUDescription(data.product.description);
                  setUPrice(data.product.price);
                  setUQuantity(data.product.quantity);
                  setUCategory(data.product.category._id);
                  setUPhoto(data.product.photo);

            } catch (error) {
                  console.error(error)

            }
      };



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
            getProducts();
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
                        setOpen(false);
                        getProducts();
                  } else {
                        toast.error(data.message);
                  }
            } catch (error) {
                  console.log(error);
                  toast.error('Something went wrong!');
            }
      };

      const getProducts = async () => {
            try {
                  const api = import.meta.env.VITE_SERVER_URL;
                  const { data } = await axios.get(`${api}/product/get-products`);
                  if (data?.success) {
                        setProducts(data.products);
                  }

            } catch (error) {
                  console.log(error);

            }
      }


      const handleUpdate = async (e) => {
            e.preventDefault();
            try {
                  const api = import.meta.env.VITE_SERVER_URL;
                  const formData = new FormData();
                  formData.append('name', uName);
                  formData.append('description', uDescription);
                  formData.append('price', uPrice);
                  formData.append('category', uCategory);
                  formData.append('quantity', uQuantity);
                  uPhoto && formData.append('photo', uPhoto);
                  const { data } = await axios.put(`${api}/product/update-product/${id}`, formData);
                  if (data?.success) {
                        toast.success(data.message);
                        setShow(false);
                        getProducts();
                  } else {
                        toast.error(data.message);
                  }

            } catch (error) {
                  console.log(error);
                  toast.error('Something went wrong!');

            }

      }


      const handleDelete = async (id) => {
            try {
                  const api = import.meta.env.VITE_SERVER_URL;
                  const { data } = await axios.delete(`${api}/product/delete-product/${id}`);
                  if (data.success) {
                        toast.success(data.message);
                        getProducts();
                  } else {
                        toast.error('Something went wrong!');
                  }
            } catch (error) {
                  console.log(error);
            }
      }

      return (
            <>
                  <div className='relative w-full grid grid-cols-12'>
                        <div className=' col-span-2 lg:col-span-2'>
                              <div className='fixed'>
                                    <AdminMenu />
                              </div>
                        </div>
                        <div className='col-span-10 lg:col-span-10'>
                              <div className='w-full px-2 py-2'>

                                    <h1 className='text-xl font-bold mb-2'>Products</h1>

                                    <button
                                          onClick={showDrawer}
                                          type="button"
                                          className="text-white flex justify-center items-center gap-2 bg-purple-700 hover:bg-purple-800  font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 "
                                    >
                                          <FaPlus />
                                          Add Product
                                    </button>


                                    <Drawer
                                          title="Add Product"
                                          onClose={onClose}
                                          open={open}
                                          className='rounded-xl'
                                          width={520}
                                    >

                                          <ProductForm
                                                handleCreate={handleCreate}
                                                name={name}
                                                description={description}
                                                price={price}
                                                quantity={quantity}
                                                photo={photo}
                                                setName={setName}
                                                setDescription={setDescription}
                                                setPrice={setPrice}
                                                setCategory={setCategory}
                                                setQuantity={setQuantity}
                                                setPhoto={setPhoto}
                                                categories={categories}
                                          />

                                    </Drawer>


                                    <Drawer
                                          title="Update Product"
                                          onClose={onClose}
                                          open={show}
                                          className='rounded-xl'
                                          width={520}

                                    >
                                          <UpdateProductForm
                                                handleUpdate={handleUpdate}
                                                id={id}
                                                name={uName}
                                                description={uDescription}
                                                price={uPrice}
                                                category={uCategory}
                                                quantity={uQuantity}
                                                photo={uPhoto}
                                                setName={setUName}
                                                setDescription={setUDescription}
                                                setPrice={setUPrice}
                                                setCategory={setUCategory}
                                                setQuantity={setUQuantity}
                                                setPhoto={setUPhoto}
                                                categories={categories}
                                          />


                                    </Drawer>

                                    <ProductsTable
                                          products={products}
                                          handleDelete={handleDelete}
                                          showDrawer={showUpdateDrawer}
                                    />





                              </div>
                        </div>
                  </div>
            </>
      );
};

export default Products;
