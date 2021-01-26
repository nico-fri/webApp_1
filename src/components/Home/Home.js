import React from 'react'
import './Home.css'

function Home({ name }) {
  return (
    <div className='home'>
      <h1>Welcome {name}</h1>
    </div>
  )
}

export default Home
