
import { configureStore } from '@reduxjs/toolkit'


const noteReducer = (state = [], action) => {
    switch (action.type) {
      case 'NEW_NOTE':
        return state.concat(action.payload)
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
  }, 
  {
    type: 'TOGGLE_IMP',
    payload: { 
      id: 1 
    }
  }
  )

  export default {
    store, 
  }