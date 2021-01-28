import React, { useState } from 'react'
import { useAuth } from '../../contexts/AuthContext'
import './Dashboard.css'
import Sidebar from '../../components/Sidebar/Sidebar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from '../../components/Home/Home'
import UpdateProfile from '../../components/UpdateProfile/UpdateProfile'
import NoContent from '../../components/NoContent/NoContent'
import Navbar from '../../components/Navbar/Navbar'
import { HiMenuAlt4 } from 'react-icons/hi'
import { IconContext } from 'react-icons/lib'
import { MdClose } from 'react-icons/md'

export default function Dashboard() {
  const { currentUser } = useAuth()
  const [menuOpen, setMenuOpen] = useState(true)

  return (
    <Router>
      <div className='dashboard'>
        <div className='dashboard__sidebar'>{menuOpen && <Sidebar />}</div>
        <Switch>
          <div className='dashboard__container'>
            <div className='dashboard__header'>
              <div onClick={() => setMenuOpen(!menuOpen)}>
                <IconContext.Provider value={{ className: 'dashboard__icon' }}>
                  {!menuOpen && <HiMenuAlt4 />}
                  {menuOpen && <MdClose />}
                </IconContext.Provider>
              </div>
              <Navbar />
            </div>
            <Route exact path='/'>
              <Home name={currentUser.email} />
              <NoContent />
            </Route>
            <Route path='/settings'>
              <UpdateProfile />
            </Route>
          </div>
        </Switch>
      </div>
    </Router>
  )
}
