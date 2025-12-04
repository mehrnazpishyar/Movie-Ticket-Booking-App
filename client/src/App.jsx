import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes, useLocation } from 'react-router-dom'
import Homepage from './pages/Homepage'
import Footer from './components/Footer'
import { Toaster } from 'react-hot-toast'

const App = () => {
  const isAdminRoute = useLocation().pathname.startsWith('/admin')
  return (
    <div>
      <Toaster/>
       {!isAdminRoute &&  <Navbar/>}
        <Routes>
          <Route path='/' element={<Homepage/>}/>
        </Routes>
        {!isAdminRoute &&   <Footer/>}
       
    </div>
  )
}

export default App