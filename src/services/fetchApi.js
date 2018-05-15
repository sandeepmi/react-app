require('es6-promise').polyfill()
require('isomorphic-fetch')

export function fetchWrapper (url, options) {
  url = 'http://smvue.herokuapp.com/api' + url

  const request = options
    ? fetch(url, options)
    : fetch(url)

  return request.then(handleResponse)
}

export function fetchJson (url, payload, method) {
  return fetchWrapper(url, createOptions(payload, method))
}

export function fetchGet (url, payload) {
  return fetchJson(url, payload)
}

export function fetchPost (url, payload) {
  return fetchJson(url, payload, 'POST')
}

export function fetchPut (url, payload) {
  return fetchJson(url, payload, 'PUT')
}

export function fetchDelete (url, payload) {
  return fetchJson(url, payload, 'DELETE')
}

function createOptions (payload, method) {
  const options = {}

  if (method) {
    options.method = method
  }

  if (payload) {
    if (typeof payload === 'object') {
      options.body = JSON.stringify(payload)
    } else {
      options.body = payload
    }

    options.headers = {
      'Content-Type': 'application/json'
    }
  }

  return options
}

function handleResponse (response) {
  let contentType = response.headers.get('content-type')

  if (!contentType || contentType.includes('text/html')) {
    return handleTextResponse(response)
  } else if (contentType.includes('application/json')) {
    return handleJSONResponse(response)
  } else {
    throw new Error(`Sorry, content-type ${contentType} not supported`)
  }
}

function handleJSONResponse (response) {
  return response.json()
    .then(json => {
      if (response.ok) {
        return json
      } else {
        return Promise.reject(Object.assign({}, json, {
          status: response.status,
          statusText: response.statusText
        }))
      }
    })
}

function handleTextResponse (response) {
  return response.text()
    .then(text => {
      if (response.ok) {
        return text
      } else {
        return Promise.reject(Object.assign({}, {
          status: response.status,
          statusText: response.statusText,
          err: text
        }))
      }
    })
}
