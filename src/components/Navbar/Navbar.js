import React from 'react'
import { useLocation } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  const location = useLocation()

  return (
    <div className='navbar'>
      <h4>{location.pathname}</h4>
    </div>
  )
}

export default Navbar
