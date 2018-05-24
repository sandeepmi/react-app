export function isEmail (email) {
  var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(email)
}

export function handleInputChange (name, value) {
  this.setState(prevState => {
    const formData = {...prevState.formData}
    formData[name].value = value
    return { formData }
  })
}

export function handleInputValidate (name, error) {
  this.setState(prevState => {
    const formData = {...prevState.formData}
    formData[name].error = error
    return { formData }
  })
}

export function validateForm (callback) {
  this.setState({ validateForm: true }, () => {
    this.setState({ validateForm: false })
  })

  setTimeout(() => {
    const { formData } = this.state

    for (var key in formData) {
      if (!formData.hasOwnProperty(key)) continue
      if (formData[key].error) {
        console.log('validation failed')
        return callback(false)
      }
    }

    console.log('validation success')
    return callback(true)
  }, 10)
}
