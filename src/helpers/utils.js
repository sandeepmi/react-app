export function cloneObj (obj) {
  return JSON.parse(JSON.stringify(obj))
}

export function delay (callback, delayTime = 250) {
  const timeoutId = setTimeout(() => {
    callback()
  }, delayTime)

  return timeoutId
}

export function cancelDelayedAction (delayId) {
  clearTimeout(delayId)
}

export function randomInt (min, max) {
  const randomNum = Math.floor(Math.random() * (max - min + 1)) + min
  console.log('random number', randomNum)

  return randomNum
}

export function promiseResult (promise) {
  return promise.then(data => {
    return [null, data]
  })
    .catch(err => [err])
}

export function isMobile () {
  const width = (window.innerWidth > 0) ? window.innerWidth : window.screen.width
  return width <= 768
}
