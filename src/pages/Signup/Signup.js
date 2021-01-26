import React, { useRef, useState } from 'react'
import { useAuth } from '../../contexts/AuthContext'
import { Link, useHistory } from 'react-router-dom'
import Information from '../../components/Information/Information'
import './Signup.css'

export default function Signup() {
  const title = 'Sign Up'
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const { signup } = useAuth()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  async function handleSubmit(e) {
    e.preventDefault()

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError('Passwords do not match')
    }

    try {
      setError('')
      setLoading(true)
      await signup(emailRef.current.value, passwordRef.current.value)
      history.push('/')
    } catch {
      setError('Failed to create an account')
    }

    setLoading(false)
  }

  return (
    <div className='signup container'>
      <div className='signup__left'>
        <Information title={title} />
      </div>
      <div className='signup__right'>
        <form className='signup__form' onSubmit={handleSubmit}>
          <input
            id='email'
            placeholder='Email'
            type='email'
            ref={emailRef}
            required
          ></input>
          <input
            id='password'
            placeholder='Password'
            type='password'
            ref={passwordRef}
            required
          ></input>
          <input
            id='password-confirmation'
            placeholder='Password Confirmation'
            type='password'
            ref={passwordConfirmRef}
            required
          ></input>
          <button className='btn btn--primary' disabled={loading} type='submit'>
            Sign Up
          </button>
        </form>
        {error && (
          <div className='msg msg--danger'>
            <p>{error}</p>
          </div>
        )}
        <div className='signup__login'>
          <p>Already have an account?</p> <Link to='/login'>Log In here</Link>
        </div>
      </div>
    </div>
  )
}
