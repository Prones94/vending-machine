import React from 'react'
import { Link } from 'react-router-dom'

const Snack = ({ name }) => {
  return (
    <div>
      <h2>{name}</h2>
      <Link to="/">Go Back</Link>
    </div>
  )
}

export default Snack