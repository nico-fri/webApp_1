import React from 'react'
import { Link } from 'react-router-dom'
import './ErrorPath.css'
import Page from '../../assets/ErrorPath/error.svg'

function ErrorPath() {
  return (
    <div className='errorpath container'>
      <div className='errorpath__left'>
        <div>
          <h1>Woops...</h1>
          <p>This page is not available.</p>
          <Link to='/app'>Back to home</Link>
        </div>
      </div>
      <div className='errorpath__right'>
        <img src={Page} alt='' />
      </div>
    </div>
  )
}

export default ErrorPath
