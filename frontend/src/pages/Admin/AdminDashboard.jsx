import React from 'react'
import AdminMenu from '../../components/AdminMenu'
import Contact from '../Contact'

const AdminDashboard = () => {
      return (
            <div className='grid grid-cols-5 '>
                  <div className='col-span-0 lg:col-span-1'>
                        <AdminMenu />
                  </div>
                  <div className='col-span-5  lg:col-span-4 border border-black mx-8 py-3'>

                  </div>
            </div>
      )
}

export default AdminDashboard