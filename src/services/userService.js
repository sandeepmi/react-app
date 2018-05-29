import { fetchGet, fetchPost } from './fetchApi.js'

export function getUserProfile () {
  return fetchGet('/user/profile')
}

export function updateUserProfile (profile) {
  return fetchPost('/user/profile', profile)
}
