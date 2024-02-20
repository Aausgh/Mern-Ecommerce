import React, { useEffect, useState } from 'react';
import axios from "axios"

import { Checkbox, Stack } from '@chakra-ui/react'
import { Radio } from 'antd';

import Card from '../components/Card';
import { Prices } from '../components/Prices';

const UserProducts = () => {

      const [product, setProduct] = useState([]);
      const [categories, setCategories] = useState([])
      const [checked, setChecked] = useState([]);
      const [radio, setRadio] = useState([]);

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

            if (!checked.length || !radio.length) getProduct();
      }, [])

      useEffect(() => {
            if (checked.length || radio.length) filterProduct()
      }, [checked, radio])

      const handleFilter = (value, id) => {
            let all = [...checked]
            if (value) {
                  all.push(id)
            } else {
                  all = all.filter((c) => c !== id)
            }
            setChecked(all)
      }

      const filterProduct = async () => {
            try {
                  const api = import.meta.env.VITE_SERVER_URL
                  const { data } = await axios.post(`${api}/product/filter-product`, { checked, radio })
                  setProduct(data.products)
            } catch (error) {
                  console.log(error)
            }
      }



      return (
            <main className='w-[99%] m-auto'>

                  <div className='w-full lg:grid grid-cols-5 gap-12'>

                        <div className='col-span-1 rounded-2xl shadow-xl px-4 py-2 border border-gray-100 mt-4'>

                              <h1 className='text-2xl text-center font-bold mb-2'>Filter </h1>

                              <div className='mb-4'>
                                    <h1 className='text-xl font-semibold mb-2'>Category</h1>


                                    <Stack mt={1} spacing={1}>
                                          {categories.map((category) => (
                                                <Checkbox
                                                      key={category._id}
                                                      onChange={(e) => handleFilter(e.target.checked, category._id)}
                                                >
                                                      {category.name}
                                                </Checkbox>
                                          ))}

                                    </Stack>
                              </div>

                              <div>
                                    <h1 className='text-xl font-semibold mb-2'>Price</h1>


                                    <Radio.Group
                                          onChange={(e) => setRadio(e.target.value)}
                                          className='flex flex-col gap-2'
                                    >
                                          {Prices.map((p) => (
                                                <Radio
                                                      key={p._id}
                                                      value={p.array}
                                                >
                                                      {p.name}
                                                </Radio>
                                          ))}

                                    </Radio.Group>

                              </div>

                        </div>

                        <div className='col-span-4 flex justify-center
                        lg:justify-start items-center flex-wrap gap-14 py-8'>

                              {product && product.map((product) => (
                                    <div key={product._id} >
                                          <Card product={product} />
                                    </div>
                              ))}

                        </div>
                  </div>

            </main >
      )
}

export default UserProducts