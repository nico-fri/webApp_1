import React from 'react'
import './Modal.css'

function Modal({ children, closeModal }) {
  return (
    <>
      <div className='modal'>
        <div className='modal__content'>{children}</div>
        <div className='modal__wrapper' onClick={() => closeModal(false)}></div>
      </div>
    </>
  )
}

export default Modal
