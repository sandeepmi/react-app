const svcErrorMsgs = {
  500: 'Error occurred, please try again later',
  404: 'Site unavailable, please try again later',
  401: 'Unauthorized',
  400: 'Required data is missing',
  'network': 'Network error, please try again later',
  'default': 'Unexpected error occurred, please try again later'
}

const messages = {
  items: {
    noItems: 'There are no items at this time.',
    editSuccess: 'Item has been saved succesfully.',
    deleteSuccess: 'Item has been deleted succesfully.'
  },
  login: {
    loginFail: 'Incorrect email or password'
  },
  register: {
    emailExists: 'This email was already registered',
    registerFail: 'Failed to register'
  },
  profile: {
    updateSuccess: 'Profile has been updated successfully',
    updateFail: 'Failed to update profile',
    emailExists: 'This email was already registered'
  },
  password: {
    changeSuccess: 'Password has been updated successfully',
    changeFail: 'Failed to change password',
    incorrectPassword: 'Incorrect password',
    forgotSuccess: 'An email with instructions on how to reset your password has been sent to ',
    forgotFail: 'Failed to process forgot password request',
    resetSuccess: 'Your password has been successfully reset, you can now <a href="/login">login</a> with your new password',
    resetFail: 'Failed to reset password',
    resetInvalid: 'Your password reset link is either expired or invalid'
  }
}

export { messages }

export function getErrorMsg (svcResponse) {
  // no error
  if (svcResponse.ok) return null

  // network error
  if (svcResponse.toString().includes('TypeError:')) {
    return svcErrorMsgs.network
  }

  // http error with status code
  const msg = svcErrorMsgs[svcResponse.status]

  return msg || svcErrorMsgs.default
}
