import React from 'react'
import UserMenu from '../../components/Menu/UserMenu'

const Order = () => {
      return (
            <>
                  <div className='w-full grid grid-cols-12 gap-4'>
                        <div className=' col-span-2 lg:col-span-3'>

                              <div className='fixed '>
                                    <UserMenu />
                              </div>

                        </div>
                        <div className='col-span-10 lg:col-span-9'>
                              <h1>Orders</h1>
                        </div>

                  </div>
            </>
      )
}

export default Order