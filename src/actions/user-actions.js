import { isLoggedIn } from '../helpers'
import { getUserProfile } from '../services/userService'

export const UPDATE_USER_NAME = 'user:updateName'
export const UPDATE_USER_STATUS = 'user:updateStatus'

export function updateUserName (userName) {
  return {
    type: UPDATE_USER_NAME,
    payload: userName
  }
}

export function updateUserStatus (isLoggedIn) {
  return {
    type: UPDATE_USER_STATUS,
    payload: isLoggedIn
  }
}

export function getUserInfo () {
  const isUserLoggedIn = isLoggedIn()

  if (!isUserLoggedIn) {
    return updateUserStatus(false)
  }

  return dispatch => {
    getUserProfile()
      .then(userProfile => {
        const name = getDisplayName(userProfile)
        dispatch(updateUserName(name))
        dispatch(updateUserStatus(true))
      })
  }
}

function getDisplayName (userProfile) {
  const { firstName, lastName } = userProfile
  const displayName = `${firstName} ${lastName}`

  return displayName
}
