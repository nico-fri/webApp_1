import React from 'react'
import './Information.css'

function Information({ title }) {
  return (
    <div className='information'>
      <div>
        <h1>
          {title} to <br /> Recharge Direct
        </h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
    </div>
  )
}

export default Information
