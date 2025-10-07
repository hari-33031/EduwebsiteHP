import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
      <p>© {new Date().getFullYear()} Eduschool. All rights reserved.</p>
    </div>
  )
}

export default Footer