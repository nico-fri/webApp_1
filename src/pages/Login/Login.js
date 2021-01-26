import React, { useRef, useState } from 'react'
import { useAuth } from '../../contexts/AuthContext'
import { Link, useHistory } from 'react-router-dom'
import './Login.css'
import Information from '../../components/Information/Information'
import { FcGoogle } from 'react-icons/fc'
import { IconContext } from 'react-icons'
import { AiFillApple } from 'react-icons/ai'
import { FaFacebook } from 'react-icons/fa'

export default function Login() {
  const title = 'Login'
  const emailRef = useRef()
  const passwordRef = useRef()
  const { login } = useAuth()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      setError('')
      setLoading(true)
      await login(emailRef.current.value, passwordRef.current.value)
      history.push('/app')
    } catch {
      setError('Failed to log in')
    }

    setLoading(false)
  }

  return (
    <>
      <div className='login container'>
        <div className='login__left'>
          <Information title={title} />
        </div>
        <div className='login__right'>
          <form className='login__form' onSubmit={handleSubmit}>
            <input
              className='login__input'
              type='email'
              ref={emailRef}
              required
              placeholder='Enter email'
            ></input>
            <input
              className='login__input'
              placeholder='Password'
              type='password'
              ref={passwordRef}
              required
            ></input>
            <Link className='login__recover' to='/forgot-password'>
              Recovery Password
            </Link>
            <button
              className='btn btn--primary'
              disabled={loading}
              type='submit'
            >
              Log In
            </button>
          </form>
          {error && (
            <div className='msg msg--danger'>
              <p>{error}</p>
            </div>
          )}
          <div className='login__alternative'>
            <div className='login__signup'>
              <p>Don't have an account?</p>
              <Link to='/signup'>Register here</Link>
            </div>
            <div className='login__seperator'>
              <span></span>
              <p>or continue with</p>
              <span></span>
            </div>
            <div className='login__cards'>
              <div
                className='login__card'
                onClick={() => setError('Not available at the moment.')}
              >
                <IconContext.Provider value={{ className: 'login__icon' }}>
                  <FcGoogle />
                </IconContext.Provider>
              </div>
              <div
                className='login__card'
                onClick={() => setError('Not available at the moment.')}
              >
                <IconContext.Provider value={{ className: 'login__icon' }}>
                  <AiFillApple />
                </IconContext.Provider>
              </div>
              <div
                className='login__card'
                onClick={() => setError('Not available at the moment.')}
              >
                <IconContext.Provider
                  value={{ className: 'login__icon login--iconColor' }}
                >
                  <FaFacebook />
                </IconContext.Provider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
