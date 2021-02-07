import React, { useContext, useState } from 'react'
import { CardContext } from '../../contexts/CardContext'
import './AddCard.css'

function AddCard({ closeModal }) {
  const { cards, addCard } = useContext(CardContext)
  const [name, setName] = useState('')
  const [number, setNumber] = useState('')

  const handleAdd = (e) => {
    e.preventDefault()
    const newCard = {
      id: cards.length + 1,
      name: name,
      number: number,
    }
    addCard(newCard)
    setName('')
    setNumber('')
    closeModal()
  }

  return (
    <div className='addCard'>
      <h3>New card</h3>
      <form className='addCard__form' onSubmit={handleAdd}>
        <input
          required
          placeholder='Name'
          type='text'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          required
          placeholder='Number'
          type='number'
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
        <div className='addCard__actions'>
          <button
            type='button'
            className='btn btn--secondary'
            onClick={() => closeModal()}
          >
            Cancel
          </button>

          <button type='submit' className='btn btn--primary'>
            Add card
          </button>
        </div>
      </form>
    </div>
  )
}

export default AddCard
