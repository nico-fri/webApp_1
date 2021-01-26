import React from 'react'
import './Sidebar.css'
import { useAuth } from '../../contexts/AuthContext'
import links from '../../data/links'
import { NavLink } from 'react-router-dom'

function Sidebar() {
  const { currentUser } = useAuth()
  return (
    <aside className='sidebar'>
      <h2 className='sidebar__title'>Logo</h2>
      <div className='sidebar__links'>
        <ul>
          {links.map((item, index) => (
            <li className='sidebar__link ' key={index}>
              <NavLink exact to={item.link} activeClassName='active'>
                {item.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      <div className='sidebar__profile'>
        <h4>{currentUser.email}</h4>
      </div>
    </aside>
  )
}

export default Sidebar
