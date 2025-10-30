import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Signin from './pages/Signin'
import Signup from './pages/Signup'
import { Route, Routes } from 'react-router-dom'
import Notfound from './pages/Notfound'

const App = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path='/' element={<><Hero /><Footer /></>} />
        <Route path='/signin' element={<Signin />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='*' element={<Notfound />} />
      </Routes>
    </>
  )
}

export default App