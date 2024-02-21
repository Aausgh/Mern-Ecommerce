import React from 'react'
import { useSearch } from '../context/search'
import Card from '../components/Card'

const Search = () => {

      const [value, setValue] = useSearch()

      console.log(value)

      return (
            <div className='w-[98%] m-auto'>
                  <div className='text-center'>
                        <h1 className='text-3xl mb-2'>Search Result</h1>
                        <h1>
                              {value?.results?.length < 1 ? 'No Products Found' : `Found ${value?.results?.length}`}
                        </h1>
                        <div className='col-span-4 flex justify-center
                        lg:justify-start items-center flex-wrap gap-14 py-8'>
                              {value?.results && value?.results.map((product) => (
                                    <div key={product._id} >
                                          <Card product={product} />
                                    </div>
                              ))}
                        </div>
                  </div>
            </div>
      )
}

export default Search