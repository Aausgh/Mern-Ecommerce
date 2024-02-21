import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { FaCartPlus } from "react-icons/fa6";
import Card from '../components/Card';

const ProductDetails = () => {
      const params = useParams();
      const api = import.meta.env.VITE_SERVER_URL;
      const [product, setProduct] = useState({});
      const [relatedProduct, setRelatedProduct] = useState([]);

      useEffect(() => {
            if (params?.slug) getProduct();
      }, [params?.slug])

      const getProduct = async () => {
            try {
                  const api = import.meta.env.VITE_SERVER_URL;
                  const { data } = await axios.get(`${api}/product/get-product/${params.slug}`);
                  setProduct(data?.product);
                  getSimilarProduct(data?.product._id, data?.product.category._id);
            }
            catch (error) {
                  console.log(error)
            }
      }



      const getSimilarProduct = async (pid, cid) => {
            try {
                  const api = import.meta.env.VITE_SERVER_URL;
                  const { data } = await axios.get(`${api}/product/similar-product/${pid}/${cid}`);
                  setRelatedProduct(data?.products);

            } catch (error) {
                  console.log(error)
            }
      }

      return (
            <main className=" w-[98%] m-auto">

                  <div className='grid grid-cols-1 lg:grid-cols-2 justify-center items-center gap-4 px-4 py-12'>

                        <img
                              src={`${api}/product/product-photo/${product._id}`}
                              alt={product.name}
                              className='w-full h-[700px] drop-shadow-[0_15px_15px_rgba(0,0,0,0.65)]'
                        />

                        <div className='flex flex-col justify-center items-center gap-4 px-4 mb-12'>
                              <h1 className='text-4xl font-bold'>{product.name}</h1>
                              <h1 className='text-xl font-bold'>${product.price}</h1>
                              <p className='text-sm w-10/12 text-center'>{product.description}</p>

                              <button >
                                    <FaCartPlus size={30} />
                              </button>
                        </div>

                  </div>

                  <div className='px-4 py-6'>
                        <h1 className='text-3xl font-bold mb-6'>
                              Related Products
                        </h1>

                        <div className='flex justify-start items-center flex-wrap gap-14 py-4'>
                              {relatedProduct && relatedProduct.map((product) => (
                                    <div key={product._id} >
                                          <Card product={product} />
                                    </div>
                              ))}

                        </div>
                  </div>

            </main>
      )
}

export default ProductDetails