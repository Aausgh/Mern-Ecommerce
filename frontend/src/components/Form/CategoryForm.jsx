import React from 'react'

const CategoryForm = ({ handleSubmit, value, setValue }) => {
      return (
            <form className="max-w-sm  md:flex gap-2" onSubmit={handleSubmit}>

                  <input
                        type="text"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[50%] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-2 md:mb-0"
                        placeholder="Enter New Category"
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                        required />



                  <button
                        type="submit"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-[50%] sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Submit
                  </button>
            </form>


      )
}

export default CategoryForm