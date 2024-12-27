import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Navbar from './NavBar'
import VendingMachine from './VendingMachine'
import Chips from './Chips'
import Cookies from './Cookies'
import Milk from './Milk'

const App = () => {
  return (
    <div>
      <h1>Vending Machine</h1>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<VendingMachine />} />
          <Route path="chips" element={<Chips />} />
          <Route path="cookies" element={<Cookies />} />
          <Route path="milk" element={<Milk />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App