import React from 'react'
import { Redirect } from "react-router-dom"
import store from '../store'
import { updateUserStatus } from '../actions'

const AUTH_TOKEN_KEY = 'auth_token'

export function logout () {
  clearAuthToken()
  store.dispatch(updateUserStatus(false))

  return <Redirect to='/login' />
}

export function setAuthToken (token) {
  // remove 'JWT ' at the beginning of the token
  token = token.substring(4)

  localStorage.setItem(AUTH_TOKEN_KEY, token)
}

export function getAuthToken () {
  return localStorage.getItem(AUTH_TOKEN_KEY)
}

export function isLoggedIn () {
  const token = getAuthToken()
  return !!token && !isAuthTokenExpired(token)
}

function getAuthTokenExpirationDate (token) {
  const decodedToken = parseJwt(token)
  if (!decodedToken.exp) return null

  const date = new Date(0)
  date.setUTCSeconds(decodedToken.exp)

  return date
}

function isAuthTokenExpired (token) {
  const expirationDate = getAuthTokenExpirationDate(token)
  return expirationDate < new Date()
}

function parseJwt (token) {
  var base64Url = token.split('.')[1]
  var base64 = base64Url.replace('-', '+').replace('_', '/')
  return JSON.parse(window.atob(base64))
}

function clearAuthToken () {
  localStorage.removeItem(AUTH_TOKEN_KEY)
}
