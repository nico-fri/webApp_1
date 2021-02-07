import React from 'react'
import Signup from './pages/Signup/Signup'
import { AuthProvider } from './contexts/AuthContext'
import { GlobalProvider } from './contexts/GlobalContext'
import { CardProvider } from './contexts/CardContext'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard/Dashboard'
import Login from './pages/Login/Login'
import PrivateRoute from './components/PrivateRoute/PrivateRoute'
import ForgotPassword from './pages/ForgotPassword/ForgotPassword'
import UpdateProfile from './components/UpdateProfile/UpdateProfile'
import ErrorPath from './pages/ErrorPath/ErrorPath'
import './App.css'

function App() {
  return (
    <>
      <Router>
        <AuthProvider>
          <GlobalProvider>
            <CardProvider>
              <Switch>
                <PrivateRoute exact path='/' component={Dashboard} />
                <PrivateRoute
                  path='/update-profile'
                  component={UpdateProfile}
                />
                <Route path='/signup' component={Signup} />
                <Route path='/login' component={Login} />
                <Route path='/forgot-password' component={ForgotPassword} />
                <Route path='/' component={ErrorPath} />
              </Switch>
            </CardProvider>
          </GlobalProvider>
        </AuthProvider>
      </Router>
    </>
  )
}

export default App
