import { UPDATE_USER_NAME, UPDATE_USER_STATUS } from '../actions/user-actions'

export default function userReducer (state = {}, { type, payload }) {
  switch (type) {
    case UPDATE_USER_NAME:
      return { ...state, name: payload }
    case UPDATE_USER_STATUS:
      return { ...state, isLoggedIn: payload }
    default:
      return state
  }
}
