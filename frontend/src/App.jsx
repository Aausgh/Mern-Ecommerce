import React from 'react'
import { Routes, Route } from 'react-router-dom'
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
import { useAuth } from './context/auth'
import AdminMenu from './components/AdminMenu'

const App = () => {
  const [auth, setAuth] = useAuth();
  return (
    <>
      <Header />



      <main className='min-h-screen w-full bg-gray-100'>
        <ToastContainer />

        <Routes>

          <Route path="/dashboard" element={<PrivateRoute />} >
            <Route path="user" element={<Dashboard />} />
          </Route>

          <Route path="/dashboard" element={<AdminRoute />} >
            <Route path="admin" element={<AdminDashboard />} />
          </Route>

          {/* <Route path="/dashboard" element={<Dashboard />} /> */}
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>

      </main>
      <Footer />
    </>

  )
}

export default App
