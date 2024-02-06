import React from 'react'
import UserMenu from '../../components/Menu/UserMenu'

const Dashboard = () => {
      return (
            <>
                  <div className='w-full grid grid-cols-12 gap-4'>
                        <div className=' col-span-2 lg:col-span-2'>

                              <div className='fixed '>
                                    <UserMenu />
                              </div>

                        </div>
                        <div className='col-span-10 lg:col-span-10'>
                              <h1>Dashboard</h1>
                        </div>

                  </div>
            </>
      )
}

export default Dashboard