import React from 'react'
import Home from './pages/landingPage/Home'
import Menu from './pages/menuPage/Menu'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/menu' element={<Menu />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App