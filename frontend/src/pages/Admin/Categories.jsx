import React, { useEffect, useState } from 'react'
import AdminMenu from '../../components/Menu/AdminMenu'
import { toast } from 'react-toastify';
import axios from 'axios';
import CategoryTable from '../../components/Table/CategoryTable';
import CategoryForm from '../../components/Form/CategoryForm';
import { Modal } from 'antd'

const Categories = () => {

      const [categories, setCategories] = useState([])
      const [name, setName] = useState('')
      const [visible, setVisible] = useState(false)
      const [selected, setSelected] = useState(null)
      const [updatedName, setUpdatedName] = useState('')

      const getCategories = async () => {
            try {
                  const api = import.meta.env.VITE_SERVER_URL;
                  const { data } = await axios.get(`${api}/category/get-category`)
                  if (data.success) {
                        setCategories(data.category)
                  }

            } catch (error) {
                  console.log(error)
            }
      }

      useEffect(() => {
            getCategories();

      }, [])

      const handleSubmit = async (e) => {
            e.preventDefault()
            try {

                  const api = import.meta.env.VITE_SERVER_URL
                  const { data } = await axios.post(`${api}/category/create-category`, { name })
                  if (data.success) {
                        toast.success(data.message)
                        getCategories()
                  } else {
                        toast.error(data.message)
                  }

            } catch (error) {
                  console.log(error)
                  toast.error('Something went wrong!')

            }

      }


      const handleUpdate = async (e) => {
            e.preventDefault();
            try {

                  const api = import.meta.env.VITE_SERVER_URL
                  const { data } = await axios.put(`${api}/category/update-category/${selected._id}`, { name: updatedName })
                  if (data.success) {
                        toast.success(data.message)
                        setSelected(null)
                        setUpdatedName('')
                        setVisible(false)
                        getCategories()
                  } else {
                        toast.error('Something went wrong!')
                  }

            } catch (error) {
                  console.log(error)
            }

      }

      const handleDelete = async (id) => {
            try {

                  const api = import.meta.env.VITE_SERVER_URL
                  const { data } = await axios.delete(`${api}/category/delete-category/${id}`)
                  if (data.success) {
                        toast.success(data.message)
                        getCategories()
                  } else {
                        toast.error('Something went wrong!')
                  }

            } catch (error) {
                  console.log(error)
            }

      }

      return (
            <>
                  <div className='w-full grid grid-cols-12'>
                        <div className=' col-span-2 lg:col-span-2'>

                              <div className='fixed'>
                                    <AdminMenu />
                              </div>

                        </div>
                        <div className='col-span-10 lg:col-span-10'>
                              <div className='w-full px-2 py-2'>

                                    <h1 className='text-xl font-bold mb-2'>Categories</h1>

                                    <div className='w-full ml-auto mb-3'>
                                          <CategoryForm
                                                handleSubmit={handleSubmit}
                                                value={name}
                                                setValue={setName}
                                          />
                                    </div>

                                    <div>
                                          <CategoryTable
                                                categories={categories}
                                                setVisible={setVisible}
                                                setUpdatedName={setUpdatedName}
                                                setSelected={setSelected}
                                                handleDelete={handleDelete}
                                          />
                                    </div>
                              </div>

                              <Modal
                                    onCancel={() => setVisible(false)} footer={null}
                                    open={visible}
                              >
                                    <CategoryForm value={updatedName} setValue={setUpdatedName} handleSubmit={handleUpdate} />

                              </Modal>
                        </div>

                  </div>
            </>
      )
}

export default Categories