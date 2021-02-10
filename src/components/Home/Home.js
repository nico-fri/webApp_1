import React, { useContext, useEffect, useState } from 'react'
import { CardContext } from '../../contexts/CardContext'
import Card from '../Card/Card'
import Transactions from '../Transactions/Transactions'
import './Home.css'
import Empty from '../../assets/NoContent/empty.svg'
import { Link } from 'react-router-dom'
import Transfer from '../Transfer/Transfer'
import Acitvities from '../Activities/Activities'

function Home({ name }) {
  const { cards } = useContext(CardContext)
  const [currentCard, setCurrentCard] = useState('')

  useEffect(() => {
    setCurrentCard(cards[0])
  }, [cards])

  return (
    <div className='home'>
      {cards.length > 0 ? (
        <>
          <div className='home__left'>
            <Card item={currentCard} />
            <Transfer />
            <Acitvities />
          </div>
          <div className='home__right'>
            <Transactions />
          </div>
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
