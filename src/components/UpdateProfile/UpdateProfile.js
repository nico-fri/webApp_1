import React, { useRef, useState } from 'react'
import { useAuth } from '../../contexts/AuthContext'
import { Link, useHistory } from 'react-router-dom'

export default function UpdateProfile() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const { currentUser, updatePassword, updateEmail } = useAuth()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  function handleSubmit(e) {
    e.preventDefault()
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError('Passwords do not match')
    }

    const promises = []
    setLoading(true)
    setError('')

    if (emailRef.current.value !== currentUser.email) {
      promises.push(updateEmail(emailRef.current.value))
    }
    if (passwordRef.current.value) {
      promises.push(updatePassword(passwordRef.current.value))
    }

    Promise.all(promises)
      .then(() => {
        history.push('/')
      })
      .catch(() => {
        setError('Failed to update account')
      })
      .finally(() => {
        setLoading(false)
      })
  }

  return (
    <>
      <div>
        <div>
          <h2>Update Profile</h2>
          {error && <div variant='danger'>{error}</div>}
          <form onSubmit={handleSubmit}>
            <fieldset id='email'>
              <input
                placeholder='Email'
                type='email'
                ref={emailRef}
                required
                defaultValue={currentUser.email}
              ></input>
            </fieldset>
            <fieldset id='password'>
              <input
                type='password'
                ref={passwordRef}
                placeholder='Password'
              ></input>
            </fieldset>
            <fieldset id='password-confirm'>
              <input
                type='password'
                ref={passwordConfirmRef}
                placeholder='Password Confirmation'
              ></input>
            </fieldset>
            <button disabled={loading} type='submit'>
              Update
            </button>
          </form>
        </div>
      </div>
      <div>
        <Link to='/'>Cancel</Link>
      </div>
    </>
  )
}
