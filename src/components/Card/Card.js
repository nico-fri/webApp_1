import React from 'react'
import './Card.css'
import { RiVisaLine } from 'react-icons/ri'
import { IconContext } from 'react-icons/lib'
import { FcSimCardChip } from 'react-icons/fc'
import { BiWifi2 } from 'react-icons/bi'

function Card({ item }) {
  return (
    <div className='card box--shadow'>
      <div className='card__header'>
        <IconContext.Provider
          value={{ className: 'card__icon card--iconLarge' }}
        >
          <FcSimCardChip />
        </IconContext.Provider>
        <IconContext.Provider
          value={{ className: 'card__icon card--transform' }}
        >
          <BiWifi2 />
        </IconContext.Provider>
      </div>
      <div className='card__text'>
        <div className='card__name'>
          <p className='card__heading'>NAME</p>
          <p> {item.name}</p>
        </div>
        <div className='card__number'>
          <p className='card__heading'>NUMBER</p>
          <p>{item.number}</p>
        </div>
      </div>
      <div className='card__footer'>
        <div className='card__balance'>
          <p className='card_balanceNumber'>$ {item.value}</p>
          <p className='card__heading'>Balance</p>
        </div>
        <div className='card__type'>
          <IconContext.Provider value={{ className: 'card__icon' }}>
            <RiVisaLine />
          </IconContext.Provider>
        </div>
      </div>
    </div>
  )
}

export default Card
