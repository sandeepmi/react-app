import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { login } from '../../services/authService'
import { setAuthToken, getErrorMsg, messages } from '../../helpers'
import { Form, Input, Button, Alert } from '../core'
/*
  TODO: isLoggedIn from redux state
  TODO: watch isLoggedIn to redirect to account page if logged in
*/

class Login extends Component {
  constructor (props) {
    super(props)
    this.state = {
      formData: {
        email: {
          value: '',
          error: ''
        },
        password: {
          value: '',
          error: ''
        }
      },
      message: '',
      isLoading: false,
      validateForm: false
    }
    this.handleLogin = this.handleLogin.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleInputBlur = this.handleInputBlur.bind(this)
    this.validateForm = this.validateForm.bind(this)
  }

  handleInputChange (name, value) {
    this.setState(prevState => {
      const formData = {...prevState.formData}
      formData[name].value = value
      return { formData }
    })
  }

  handleInputBlur (name, error) {
    this.setState(prevState => {
      const formData = {...prevState.formData}
      formData[name].error = error
      return { formData }
    })
  }

  validateForm (callback) {
    this.setState({ validateForm: true }, () => {
      this.setState({ validateForm: false })
    })

    setTimeout(() => {
      const { formData } = this.state

      for (var key in formData) {
        if (!formData.hasOwnProperty(key)) continue
        if (formData[key].error) {
          console.log('actual validation')
          return callback(false)
        }
      }

      return callback(true)
    }, 10)
  }

  async handleLogin () {
    const { email, password } = this.state.formData
    const { location, history } = this.props

    this.setState({ message: '' })
    this.setState({ isLoading: true })

    try {
      const response = await login(email.value, password.value)

      if (response.success && response.token) {
        setAuthToken(response.token)
        // TODO: this.$store.dispatch('user/getUserInfo')

        // redirect to target
        const { query } = location
        const redirectPath = (query && query.redirect) || '/account'
        history.push(redirectPath)
      } else {
        this.setState({ message: messages.login.loginFail })
      }
    } catch (err) {
      this.setState({ message: getErrorMsg(err) })
    } finally {
      this.setState({ isLoading: false })
    }
  }

  render () {
    const { formData, message, isLoading, validateForm } = this.state
    const { email, password } = formData

    return (
      <div className="card login-wrapper my-5 mx-auto">
        <div className="card-body text-center">
          <h2>Login</h2>
          <Form onSubmit={this.handleLogin} validateForm={this.validateForm}>
            <Input label="Email" name="email" required email
              value={email.value} onChange={this.handleInputChange}
              error={email.error} onValidate={this.handleInputBlur} validate={validateForm} />
            <Input type="password" label="Password" name="password" required
              value={password.value} onChange={this.handleInputChange}
              error={password.error} onValidate={this.handleInputBlur} validate={validateForm} />
            <Alert>{message}</Alert>
            <Button type="submit" loading={isLoading}>Log In</Button>
          </Form>
          <div className="mt-3">
            New user? <Link to='/register'>Sign up</Link>
            <span className="px-2">|</span>
            <Link to='/forgot-password'>Forgot Password?</Link>
          </div>
        </div>
      </div>
    )
  }
}

export default Login
