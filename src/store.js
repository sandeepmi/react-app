import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { userReducer, itemsReducer, loginReducer } from './reducers'

const allReducers = combineReducers({
  user: userReducer,
  items: itemsReducer,
  login: loginReducer
})

const allEnhancers = compose(
  applyMiddleware(thunk),
  window.devToolsExtension && window.devToolsExtension()
)

const store = createStore(allReducers, {}, allEnhancers)

export default store
