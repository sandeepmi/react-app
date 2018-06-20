import { handleActions } from 'redux-actions'
import {
  getItemsInit,
  getItemsSuccess,
  getItemsFailure
} from '../actions'

const initialState = {
  list: [],
  isLoading: false,
  message: ''
}

export default handleActions({
  [getItemsInit] (state = {}) {
    return {
      ...state,
      isLoading: true
    }
  },
  [getItemsSuccess] (state = {}, { payload }) {
    return {
      ...state,
      list: payload.items,
      message: payload.message,
      isLoading: false
    }
  },
  [getItemsFailure] (state = {}, { payload }) {
    return {
      ...state,
      message: payload,
      isLoading: false
    }
  }
}, initialState)
