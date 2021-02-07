import React, { useContext } from 'react'
import { CardContext } from '../../contexts/CardContext'
import Card from '../Card/Card'
import Transactions from '../Transactions/Transactions'
import './Home.css'
import Empty from '../../assets/NoContent/empty.svg'
import { Link } from 'react-router-dom'

function Home({ name }) {
  const { cards } = useContext(CardContext)

  return (
    <div className='home'>
      <h2 className='home__heading'>Welcome {name}</h2>

      {cards.length > 0 ? (
        <>
          {cards?.map((item) => (
            <Card key={item.id} item={item} />
          ))}
          <Transactions />
        </>
      ) : (
        <div className='home__empty'>
          <h3>Nothing here</h3>
          <p>No card added yet</p>
          <Link to='/cards'>
            <button className='home__emptyBtn btn btn--primary'>
              Add card
            </button>
          </Link>

          <img className='home__emptyImg' src={Empty} alt='' />
        </div>
      )}
    </div>
  )
}

export default Home
