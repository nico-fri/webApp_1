import React, { useRef, useState } from 'react'
import { useAuth } from '../../contexts/AuthContext'
import { Link } from 'react-router-dom'
import Information from '../../components/Information/Information'
import './ForgotPassword.css'

export default function ForgotPassword() {
  const title = 'Recover Password'
  const emailRef = useRef()
  const { resetPassword } = useAuth()
  const [error, setError] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      setMessage('')
      setError('')
      setLoading(true)
      await resetPassword(emailRef.current.value)
      setMessage('Check your inbox for further instructions')
    } catch {
      setError('Failed to reset password')
    }

    setLoading(false)
  }

  return (
    <>
      <div className='forgot container'>
        <div className='forgot__left'>
          <Information title={title} />
        </div>
        <div className='forgot__right'>
          <div>
            <form className='forgot__form' onSubmit={handleSubmit}>
              <input
                placeholder='Email'
                type='email'
                ref={emailRef}
                required
              ></input>
              <button
                className='btn btn--primary'
                disabled={loading}
                type='submit'
              >
                Reset Password
              </button>
            </form>
            {error && (
              <div className='msg msg--danger'>
                <p>{error}</p>
              </div>
            )}
            {message && (
              <div className='msg msg--success'>
                <p>{message}</p>
              </div>
            )}
            <div className='forgot__login'>
              <p>Remember again?</p>
              <Link to='/login'>Login here</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
