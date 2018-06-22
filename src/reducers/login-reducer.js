import { handleActions } from 'redux-actions'
import {
  formInputChange,
  formInputValidate,
  formValidate,
  loginInit,
  loginSuccess,
  loginFailure
} from '../actions'

const initialState = {
  formData: {
    email: {
      value: '',
      error: ''
    },
    password: {
      value: '',
      error: ''
    }
  },
  isLoading: false,
  message: '',
  isValidateForm: false,
  redirectToReferrer: false
}

export default handleActions({
  [formInputChange] (state = {}, { payload: { name, value } }) {
    return {
      ...state,
      formData: {
        ...state.formData,
        [name]: {
          ...state.formData[name],
          value
        }
      }
    }
  },
  [formInputValidate] (state = {}, { payload: { name, error } }) {
    return {
      ...state,
      formData: {
        ...state.formData,
        [name]: {
          ...state.formData[name],
          error
        }
      }
    }
  },
  [formValidate] (state = {}) {
    return {
      ...state,
      formData: {
        ...state.formData
      },
      isValidateForm: true
    }
  },
  [loginInit] (state = {}) {
    return {
      ...state,
      isLoading: true,
      message: ''
    }
  },
  [loginSuccess] (state = {}) {
    return {
      ...state,
      redirectToReferrer: true,
      message: '',
      isLoading: false
    }
  },
  [loginFailure] (state = {}, { payload }) {
    return {
      ...state,
      message: payload,
      isLoading: false
    }
  }
}, initialState)
