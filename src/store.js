import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { userReducer, itemsReducer } from './reducers'

const allReducers = combineReducers({
  user: userReducer,
  items: itemsReducer
})

const initialState = {
  user: {},
  items: []
}

const allEnhancers = compose(
  applyMiddleware(thunk),
  window.devToolsExtension && window.devToolsExtension()
)

const store = createStore(allReducers, initialState, allEnhancers)

export default store
