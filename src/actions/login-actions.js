import { createActions } from 'redux-actions'
import { login } from '../services/authService'
import { setAuthToken, getErrorMsg, messages, isFormValid } from '../helpers'
import { getUserInfo } from '../actions'

export const {
  formInputChange,
  formInputValidate,
  formValidate,
  loginInit,
  loginSuccess,
  loginFailure
} = createActions(
  'FORM_INPUT_CHANGE',
  'FORM_INPUT_VALIDATE',
  'FORM_VALIDATE',
  'LOGIN_INIT',
  'LOGIN_SUCCESS',
  'LOGIN_FAILURE'
)

export const formSubmit = () => (dispatch, getState) => {
  dispatch(formValidate())

  setTimeout(() => {
    const { formData } = getState().login
    if (isFormValid(formData)) {
      dispatch(loginRequest())
    }
  }, 10)
}

export const loginRequest = () => async (dispatch, getState) => {
  const { formData } = getState().login
  const { email, password } = formData

  dispatch(loginInit())

  try {
    const response = await login(email.value, password.value)

    if (response.success && response.token) {
      setAuthToken(response.token)
      getUserInfo()

      dispatch(loginSuccess())
    } else {
      dispatch(loginFailure(messages.login.loginFail))
    }
  } catch (err) {
    dispatch(loginFailure(getErrorMsg(err)))
  }
}
