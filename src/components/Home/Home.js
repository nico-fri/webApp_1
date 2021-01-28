import React from 'react'
import './Home.css'

function Home({ name }) {
  return (
    <div className='home'>
      <h2>Welcome {name}</h2>
    </div>
  )
}

export default Home
