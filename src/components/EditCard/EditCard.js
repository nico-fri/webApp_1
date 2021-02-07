import React, { useContext, useEffect, useState } from 'react'
import { CardContext } from '../../contexts/CardContext'
import './EditCard.css'

function EditCard({ closeModal, id }) {
  const { cards, editCard } = useContext(CardContext)
  const [name, setName] = useState('')
  const [number, setNumber] = useState('')
  const [currentCard, setCurrentCard] = useState('')

  const handleEdit = (e) => {
    e.preventDefault()
    const editedCard = {
      id: id,
      name: name,
      number: number,
    }
    editCard(editedCard)
    closeModal()
  }

  useEffect(() => {
    cards.map((item) => {
      if (item.id === id) {
        setCurrentCard(item)
        setName(item.name)
        setNumber(item.number)
      }
    })
  }, [])

  return (
    <div className='editCard'>
      <h3>Edit Card</h3>
      <form className='editCard__form' onSubmit={handleEdit}>
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
        <div className='editCard__actions'>
          <button
            type='button'
            className='btn btn--secondary'
            onClick={() => closeModal()}
          >
            Cancel
          </button>

          <button type='submit' className='btn btn--primary'>
            Update card
          </button>
        </div>
      </form>
    </div>
  )
}

export default EditCard
