import React from 'react'
import './Information.css'
import Logo from '../../assets/Logo.png'

function Information({ title }) {
  return (
    <div className='information'>
      <div>
        <img className='information__logo' src={Logo} alt='Payment' />
        <h1 className='information__heading'>
          {title} to <br /> Recharge Direct
        </h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
    </div>
  )
}

export default Information
