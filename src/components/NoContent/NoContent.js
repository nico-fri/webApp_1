import React from 'react'
import './NoContent.css'
import Empty from '../../assets/NoContent/empty.svg'

function NoContent() {
  return (
    <div className='noContent'>
      <h2>No content yet</h2>
      <p>There will be amazing stuff soon</p>
      <img className='noContent__img' src={Empty} alt=' ' />
    </div>
  )
}

export default NoContent
