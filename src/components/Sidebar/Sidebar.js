import React, { useState } from 'react'
import './Sidebar.css'
import { useAuth } from '../../contexts/AuthContext'
import links from '../../data/links'
import { NavLink } from 'react-router-dom'
import { useHistory } from 'react-router-dom'

function Sidebar() {
  const { currentUser, logout } = useAuth()
  const [error, setError] = useState('')
  const history = useHistory()

  async function handleLogout() {
    setError('')

    try {
      await logout()
      history.push('/login')
    } catch {
      setError('Failed to log out')
    }
  }

  return (
    <aside className='sidebar'>
      <h2 className='sidebar__title'>Logo</h2>
      <ul className='sidebar__links'>
        {links.map((item, index) => (
          <li className='sidebar__item ' key={index}>
            <NavLink
              className='sidebar__link'
              exact
              to={item.link}
              activeClassName='active'
            >
              {item.title}
            </NavLink>
          </li>
        ))}
      </ul>
      <div className='sidebar__profile'>
        <div>
          {error && (
            <div className='msg msg--danger'>
              <p>{error}</p>
            </div>
          )}
          <button
            className='btn btn--primary btn--large sidebar__btn'
            onClick={handleLogout}
          >
            Log Out
          </button>
        </div>
      </div>
    </aside>
  )
}

export default Sidebar
