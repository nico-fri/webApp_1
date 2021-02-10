import React from 'react'
import './Transaction.css'
import { SiUber } from 'react-icons/si'
import { IconContext } from 'react-icons/lib'

function Transaction({ item }) {
  return (
    <div className='transaction'>
      <div className='transaction__iconWrapper'>
        <IconContext.Provider value={{ className: 'transaction__icon' }}>
          <SiUber />
        </IconContext.Provider>
      </div>
      <div className='transaction__description'>
        <h5>{item.name}</h5>
        <p>{item.description}</p>
      </div>
      <p className='transaction__date'>{item.date}</p>
      <p className='transaction__value'>$ {item.value}</p>
    </div>
  )
}

export default Transaction
