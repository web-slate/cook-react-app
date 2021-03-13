import { createStore } from 'redux'

function reducer(state, action) {
  state = {
    loader: {
      loading: false,
    },
  }
  return state
}

const store = createStore(reducer, ['Use Redux'])

export default store
