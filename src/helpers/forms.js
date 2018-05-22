export function validateForm ($this) {
  const fields = $this.$children
  let isFormValid = true

  // validate all fields
  fields.forEach(field => {
    // TODO: find all form group elements
    if (typeof field.validate === 'function') {
      const isValid = field.validate()
      if (!isValid) isFormValid = false
    }
  })

  return isFormValid
}

export function isEmail (email) {
  var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(email)
}
