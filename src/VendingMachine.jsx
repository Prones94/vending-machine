import React from 'react'
import { Link } from "react-router-dom"

const VendingMachine = () => {
  return (
    <div>
      <h2>Welcome to the Vending Machine</h2>
      <ul>
        <li><Link to="/chips">Chips</Link></li>
        <li><Link to="/cookies">Cookies</Link></li>
        <li><Link to="/milk">Milk</Link></li>
      </ul>
    </div>
  )
}

export default VendingMachine