import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes, useLocation } from 'react-router-dom'
import Homepage from './pages/Homepage'
import Footer from './components/Footer'
import { Toaster } from 'react-hot-toast'
import Movies from './pages/Movies'
import MovieDetails from "./pages/MovieDetails"
import SeatPage from "./pages/SeatPage"
import MyBookings from "./pages/MyBookings"
import Favorite from "./pages/Favorite"

const App = () => {
  const isAdminRoute = useLocation().pathname.startsWith('/admin')
  return (
    <div>
      <Toaster/>
       {!isAdminRoute &&  <Navbar/>}
        <Routes>
          <Route path='/' element={<Homepage/>}/>
          <Route path='/movies' element={<Movies/>}/>
          <Route path='/movies/:id' element={<MovieDetails/>}/>
          <Route path='/movies/:id/:date' element={<SeatPage/>}/>
          <Route path='/mybookings' element={<MyBookings/>}/>
          <Route path='/favorite' element={<Favorite/>}/>
        </Routes>
        {!isAdminRoute &&   <Footer/>}
       
    </div>
  )
}

export default App