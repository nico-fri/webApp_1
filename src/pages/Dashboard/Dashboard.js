import React from 'react'
import { useAuth } from '../../contexts/AuthContext'
import './Dashboard.css'
import Sidebar from '../../components/Sidebar/Sidebar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from '../../components/Home/Home'
import UpdateProfile from '../../components/UpdateProfile/UpdateProfile'
import NoContent from '../../components/NoContent/NoContent'

export default function Dashboard() {
  const { currentUser } = useAuth()

  return (
    <Router>
      <div className='dashboard'>
        <div className='dashboard__sidebar'>
          <Sidebar />
        </div>
        <Switch>
          <div className='dashboard__container'>
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
