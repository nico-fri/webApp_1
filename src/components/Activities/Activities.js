import React from 'react'
import './Activities.css'
import activities from '../../data/activities'
import { MdRestaurant } from 'react-icons/md'
import { IconContext } from 'react-icons/lib'

function Acitvities() {
  return (
    <div className='activities'>
      <div className='activities__header'>
        <h4>Activities</h4>
        <p>$ 0</p>
      </div>
      <div className='activities__content'>
        {activities.map((item) => (
          <div className='activities__item' key={item.id}>
            <IconContext.Provider value={{ className: 'activities__icon' }}>
              {item.icon === 'restaurant' && <MdRestaurant />}
            </IconContext.Provider>
            <div className='activities__description'>
              <h5>{item.name}</h5>
              <p>$ {item.value}</p>
            </div>
            <p className='activities__percent'>{item.percent} %</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Acitvities
