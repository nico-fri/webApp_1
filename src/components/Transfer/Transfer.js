import React from 'react'
import './Transfer.css'
import { MdCallReceived, MdCallMade } from 'react-icons/md'
import { IconContext } from 'react-icons/lib'

function Transfer() {
  return (
    <div className='transfer'>
      <h4>Fast Transfer</h4>
      <div className='transfer__content'>
        <div className='transfer__item'>
          <div className='transfer__iconWrapper'>
            <IconContext.Provider value={{ className: 'transfer__icon' }}>
              <MdCallReceived />
            </IconContext.Provider>
          </div>

          <h5>Receive</h5>
        </div>
        <div className='transfer__item'>
          <div className='transfer__iconWrapper'>
            <IconContext.Provider value={{ className: 'transfer__icon' }}>
              <MdCallMade />
            </IconContext.Provider>
          </div>

          <h5>Send</h5>
        </div>
      </div>
    </div>
  )
}

export default Transfer
