export default (state, action) => {
  switch (action.type) {
    case 'TOGGLE_ADD':
      return { ...state, modalOpen: !state.modalOpen }
    case 'TOGGLE_EDIT':
      return { ...state, modalOpen: !state.modalOpen }
    default:
      return state
  }
}
