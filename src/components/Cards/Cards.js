import React, { useContext, useState } from 'react'
import { CardContext } from '../../contexts/CardContext'
import { MdAdd, MdEdit, MdClose } from 'react-icons/md'
import './Cards.css'
import { IconContext } from 'react-icons/lib'
import Modal from '../Modal/Modal'
import AddCard from '../AddCard/AddCard'
import EditCard from '../EditCard/EditCard'

function Cards() {
  const { cards, removeCard } = useContext(CardContext)
  const [addModal, setAddModal] = useState(false)
  const [editModal, setEditModal] = useState(false)
  const [itemId, setItemId] = useState(0)

  const handleEdit = (item) => {
    setEditModal(true)
    setItemId(item)
  }

  return (
    <div className='cards'>
      {addModal && (
        <Modal closeModal={setAddModal}>
          <AddCard closeModal={setAddModal} />
        </Modal>
      )}
      {editModal && (
        <Modal closeModal={setEditModal}>
          <EditCard closeModal={setEditModal} id={itemId} />
        </Modal>
      )}
      <div className='cards__header'>
        <h2>Cards</h2>
        <button
          className='cards__btn btn btn--primary'
          onClick={() => setAddModal(true)}
        >
          <IconContext.Provider value={{ clasName: 'cards__addIcon' }}>
            <MdAdd />
          </IconContext.Provider>
        </button>
      </div>
      <table className='cards__list'>
        <thead>
          <tr className='cards__listHeader'>
            <th>Name</th> <th>Number</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {cards?.map((item) => (
            <tr key={item.id} className='cards__listRow box--shadow'>
              <td>
                <p>{item.name}</p>
              </td>
              <td>
                <p>{item.number}</p>
              </td>
              <td>
                <button
                  className='btn btn--secondary'
                  onClick={() => handleEdit(item.id)}
                >
                  <MdEdit />
                </button>
                <button
                  className='btn btn--secondary'
                  onClick={() => removeCard(item.id)}
                >
                  <MdClose />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Cards
