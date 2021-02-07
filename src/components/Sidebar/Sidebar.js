import React, { useState } from 'react'
import './Sidebar.css'
import { useAuth } from '../../contexts/AuthContext'
import links from '../../data/links'
import { NavLink } from 'react-router-dom'
import { useHistory } from 'react-router-dom'
import { MdSettings, MdDashboard, MdPayment } from 'react-icons/md'
import { IconContext } from 'react-icons/lib'
import Logo from '../../assets/Logo.png'

function Sidebar({ setMenuOpen }) {
  const { logout } = useAuth()
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
      <div className='sidebar__header'>
        <img className='sidebar__logo' src={Logo} alt='' />
      </div>

      <ul className='sidebar__links'>
        {links.map((item, index) => (
          <li className='sidebar__item ' key={index}>
            <NavLink
              className='sidebar__link'
              exact
              to={item.link}
              activeClassName='active'
            >
              <IconContext.Provider value={{ className: 'sidebar__icons' }}>
                {item.icon === 'home' && <MdDashboard />}
                {item.icon === 'cards' && <MdPayment />}
                {item.icon === 'settings' && <MdSettings />}
              </IconContext.Provider>
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
            className='btn btn--secondary btn--large sidebar__btn'
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
