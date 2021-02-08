export const AppReducer = (state, action) => {
  switch (action.type) {
    case 'REMOVE_CARD':
      return {
        ...state,
        cards: state.cards.filter((card) => card.id !== action.payload),
      }
    case 'ADD_CARD':
      return {
        ...state,
        cards: [...state.cards, action.payload],
      }
    case 'EDIT_CARD':
      const updatedCard = action.payload

      const updatedCards = state.cards.map((card) => {
        if (card.id === updatedCard.id) {
          return updatedCard
        }
        return card
      })

      return {
        ...state,
        cards: updatedCards,
      }
    default:
      return state
  }
}
