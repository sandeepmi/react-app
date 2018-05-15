import { fetchGet, fetchPost, fetchPut, fetchDelete } from './fetchApi.js'

export function getItems () {
  return fetchGet('/items')
}

export function createItem (item) {
  return fetchPost('/items', item)
}

export function updateItem (item) {
  return fetchPut('/items/' + item._id, item)
}

export function deleteItem (item) {
  return fetchDelete('/items/' + item._id)
}
