import React from 'react'
import { Link } from "react-router-dom"


const Navbar = () => {
  return (
    <nav style={{ marginBottom: '20px'}}>
      <Link to="/">Home</Link>
      <Link to="chips">Eat</Link>
      <Link to="milk">Milk</Link>
      <Link to="cookies">Cookies</Link>
    </nav>
  )
}

export default Navbar