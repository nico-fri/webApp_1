import React, { createContext, useReducer } from 'react'
import { AppReducer } from '../reducers/AppReducer'

const initialState = {
  cards: [
    {
      id: 0,
      name: 'Max Mustermann',
      number: 113222741193,
      value: 5000,
    },
  ],
}

export const CardContext = createContext(initialState)
export const CardProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState)

  function removeCard(id) {
    dispatch({
      type: 'REMOVE_CARD',
      payload: id,
    })
  }

  function addCard(cards) {
    dispatch({
      type: 'ADD_CARD',
      payload: cards,
    })
  }

  function editCard(cards) {
    dispatch({
      type: 'EDIT_CARD',
      payload: cards,
    })
  }

  return (
    <CardContext.Provider
      value={{
        cards: state.cards,
        removeCard,
        addCard,
        editCard,
      }}
    >
      {children}
    </CardContext.Provider>
  )
}
