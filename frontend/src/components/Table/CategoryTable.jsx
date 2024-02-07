import React from 'react'

const CategoryTable = ({ categories, setVisible, setUpdatedName, setSelected, handleDelete }) => {
      return (

            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                  <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead className="text-lg text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                              <tr>
                                    <th scope="col" className=" px-6 py-3">
                                          Category name
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                          Actions
                                    </th>
                              </tr>
                        </thead>
                        <tbody>
                              {categories && categories.map((category, i) => (
                                    <tr key={category._id} className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">

                                          <td scope="row" className="px-6 py-4 font-medium text-base text-gray-900 whitespace-nowrap dark:text-white">
                                                {category.name}
                                          </td>

                                          <td className="flex items-center px-6 py-4">
                                                <button
                                                      onClick={() => {
                                                            setSelected(category);
                                                            setVisible(true);
                                                            setUpdatedName(category.name);
                                                      }}
                                                      className="font-semibold text-blue-600 dark:text-blue-500 hover:underline"
                                                >
                                                      Edit
                                                </button>
                                                <button
                                                      onClick={() => handleDelete(category._id)}
                                                      className="font-semibold text-red-600 dark:text-red-500 hover:underline ms-3"
                                                >
                                                      Remove
                                                </button>
                                          </td>
                                    </tr>
                              ))}

                        </tbody>
                  </table>
            </div>


      )
}

export default CategoryTable