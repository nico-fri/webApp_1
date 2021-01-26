import React, { useState } from 'react'
import { useAuth } from '../../contexts/AuthContext'
import './Dashboard.css'
import Sidebar from '../../components/Sidebar/Sidebar'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
} from 'react-router-dom'
import Home from '../../components/Home/Home'
import UpdateProfile from '../../components/UpdateProfile/UpdateProfile'

export default function Dashboard() {
  const [error, setError] = useState('')
  const { currentUser, logout } = useAuth()
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
    <Router>
      <div className='dashboard'>
        <div className='dashboard__sidebar'>
          <Sidebar />
        </div>
        <Switch>
          <Route exact path='/'>
            <Home name={currentUser.email} />
          </Route>
          <Route path='/settings'>
            <UpdateProfile />
          </Route>
        </Switch>
        <div>
          {error && (
            <div className='msg msg--danger'>
              <p>{error}</p>
            </div>
          )}
          <button variant='link' onClick={handleLogout}>
            Log Out
          </button>
        </div>
      </div>
    </Router>
  )
}
