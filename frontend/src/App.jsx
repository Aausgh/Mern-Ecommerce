import React, { useState, useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import Header from './components/Header'
import Footer from './components/Footer'
import About from './pages/About'
import Home from './pages/Home'
import Contact from './pages/Contact'
import PageNotFound from './pages/PageNotFound'
import Register from './pages/Auth/Register'
import Login from './pages/Auth/Login'
import Dashboard from './pages/User/Dashboard'
import PrivateRoute from './Routes/PrivateRoute'
import ForgotPassword from './pages/Auth/ForgotPassword'
import AdminDashboard from './pages/Admin/AdminDashboard'
import AdminRoute from './Routes/AdminRoute'
import Products from './pages/Admin/Products'
import Categories from './pages/Admin/Categories'
import Users from './pages/Admin/Users'
import Order from './pages/User/Order'
import Blog from './pages/Blog'
import UserProducts from './pages/UserProducts'

const App = () => {
  const location = useLocation();
  const [hideFooter, setHideFooter] = useState(false);

  useEffect(() => {
    if (location.pathname.includes('/admin')) {
      setHideFooter(true);
    } else {
      setHideFooter(false);
    }
  }, [location]);

  return (
    <>
      <Header />

      <main className='min-h-screen w-[98%] m-auto mt-4'>
        <ToastContainer />

        <Routes>

          <Route path="/dashboard" element={<PrivateRoute />} >
            <Route path="user" element={<Dashboard />} />
            <Route path="user/orders" element={<Order />} />
          </Route>

          <Route path="/dashboard" element={<AdminRoute />} >
            <Route path="admin" element={<AdminDashboard />} />
            <Route path="admin/products" element={<Products />} />
            <Route path="admin/categories" element={<Categories />} />
            <Route path="admin/users" element={<Users />} />
          </Route>

          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/products" element={<UserProducts />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>

      </main>

      {!hideFooter && <Footer />}
    </>
  )
}

export default App
