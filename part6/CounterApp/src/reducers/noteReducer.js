
import { configureStore } from '@reduxjs/toolkit'

const noteReducer = (state = [], action) => {
  switch(action.type) {
    case 'NEW_NOTE':
     return [...state, action.payload]
    case 'TOGGLE_IMPORTANCE': {
      const id = action.payload.id
      const noteToChange = state.find(n => n.id === id)
      const changedNote = { 
        ...noteToChange, 
        important: !noteToChange.important 
      }
      return state.map(note =>
        note.id !== id ? note : changedNote 
      )
     }
    default:
      return state
  }
}
  
  const store = configureStore({reducer: noteReducer})
  
  store.dispatch({
    type: 'NEW_NOTE',
    payload: { 
      content: 'the app state is in redux store',
      important: true,
      id: 1
    }
  })

  store.dispatch({
      type: 'TOGGLE_IMP',
      payload: { 
        id: 1 
      }
    })

  export default {
    store, 
  }