import { fetchPost } from './fetchApi'

export function login (email, password) {
  return fetchPost('/auth/authenticate', { email, password })
}

export function register (email, password, firstName, lastName) {
  return fetchPost('/auth/register', { email, password, firstName, lastName })
}

export function changePassword (password, newPassword) {
  return fetchPost('/auth/changePassword', { password, newPassword })
}

export function forgotPassword (email) {
  return fetchPost('/auth/forgotPassword', { email })
}

export function resetPassword (token, password) {
  return fetchPost('/auth/resetPassword', { token, password })
}

export function resetPasswordValidity (token) {
  return fetchPost('/auth/resetPassword/valid', { token })
}
