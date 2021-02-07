import React, { createContext, useReducer } from 'react'
import GlobalReducer from '../reducers/GlobalReducer'

const initialState = {
  addModal: false,
  editModal: false,
}

export const GlobalContext = createContext(initialState)
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(GlobalReducer, initialState)

  function setAddModalOpen() {
    dispatch({
      type: 'TOGGLE_ADD',
    })
  }

  function setEditModalOpen() {
    dispatch({
      type: 'TOGGLE_EDIT',
    })
  }

  return (
    <GlobalContext.Provider
      value={{
        addModal: state.addModal,
        setAddModalOpen,
        editModal: state.editModal,
        setEditModalOpen,
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}
