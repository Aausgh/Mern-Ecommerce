import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import Card from '../components/Card';

const CategoryProduct = () => {
      const params = useParams();

      const [product, setProduct] = useState([])
      const [category, setCategory] = useState([])

      const getProductByCat = async () => {
            try {
                  const api = import.meta.env.VITE_SERVER_URL;
                  const { data } = await axios.get(`${api}/product/product-category/${params.slug}`)
                  setProduct(data?.products)
                  setCategory(data?.category)

            } catch (error) {
                  console.log(error)
            }
      }

      useEffect(() => {
            if (params?.slug)
                  getProductByCat()
      }, [params?.slug])

      return (
            <main className='w-[98%] m-auto'>

                  <div className='px-4 py-6'>
                        <h2 className=" text-4xl font-extrabold text-center mb-3">Results for "{category?.name}"</h2>
                        <h4 className=" text-2xl font-semibold text-center mb-3"> {product?.length} products found</h4>


                        <div className=' flex justify-center
                        lg:justify-start items-center flex-wrap gap-14 py-8'>

                              {product && product.map((product) => (
                                    <div key={product._id} >
                                          <Card product={product} />
                                    </div>
                              ))}

                        </div>

                  </div>

            </main>
      )
}

export default CategoryProduct