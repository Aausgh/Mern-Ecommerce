import { useState, useEffect } from "react";
import axios from 'axios'

export const useCategory = () => {
      const [categories, setCategories] = useState([])

      const getCategories = async () => {
            try {
                  const api = import.meta.env.VITE_SERVER_URL
                  const { data } = await axios.get(`${api}/category/get-category`)
                  setCategories(data?.category)

            } catch (error) {
                  console.log(error)
            }
      }

      useEffect(() => {
            getCategories()
      }, [])

      return categories;
}