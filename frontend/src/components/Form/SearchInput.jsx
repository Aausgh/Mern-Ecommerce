import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useSearch } from '../../context/search'

import { FaSearch } from "react-icons/fa";

const SearchInput = () => {

      const [value, setValue] = useSearch();
      const navigate = useNavigate()

      const handleSubmit = async (e) => {
            e.preventDefault()
            try {
                  const api = import.meta.env.VITE_SERVER_URL
                  const { data } = await axios.get(`${api}/product/search/${value.keyword}`)
                  setValue({ ...value, results: data })
                  navigate(`/search`)

            } catch (error) {
                  console.log(error)
            }
      }

      return (
            <form
                  onSubmit={handleSubmit}
                  className="relative text-gray-600"
            >

                  <input
                        type="search"
                        value={value.keyword}
                        onChange={(e) => setValue({ ...value, keyword: e.target.value })}
                        className="bg-white h-10 px-5 pr-10 rounded-full text-sm focus:outline-none"
                        placeholder="Search"
                        required
                  />

                  <button
                        type="submit"
                        className="absolute right-0 top-0 mt-3 mr-4">
                        <FaSearch />
                  </button>
            </form>

      )
}

export default SearchInput