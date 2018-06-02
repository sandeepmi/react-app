import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { login } from '../../services/authService'
import { setAuthToken, getErrorMsg, messages, handleInputChange, handleInputValidate, validateForm } from '../../helpers'
import { Form, Input, Button, Alert } from '../core'
import { getUserInfo } from '../../actions'

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
      validateForm: false,
      redirectToReferrer: false
    }

    this.handleInputChange = handleInputChange.bind(this)
    this.handleInputValidate = handleInputValidate.bind(this)
    this.validateForm = validateForm.bind(this)
    this.handleLogin = this.handleLogin.bind(this)
  }

  async handleLogin () {
    const { email, password } = this.state.formData

    this.setState({ message: '' })
    this.setState({ isLoading: true })

    try {
      const response = await login(email.value, password.value)

      if (response.success && response.token) {
        setAuthToken(response.token)
        this.props.onUserLogin()

        // redirect to target
        this.setState({ redirectToReferrer: true })
      } else {
        this.setState({ message: messages.login.loginFail, isLoading: false })
      }
    } catch (err) {
      console.log('err :', err)
      this.setState({ message: getErrorMsg(err), isLoading: false })
    }
  }

  render () {
    const { formData, message, isLoading, validateForm, redirectToReferrer } = this.state
    const { email, password } = formData
    const { isLoggedIn, location } = this.props

    if (redirectToReferrer || isLoggedIn) {
      const { from } = location.state || { from: { pathname: '/account' } }
      return <Redirect to={from} />
    }

    return (
      <div className="card login-wrapper my-5 mx-auto">
        <div className="card-body text-center">
          <h2>Login</h2>
          <Form onSubmit={this.handleLogin} validateForm={this.validateForm}>
            <Input label="Email" name="email" required email
              value={email.value} onChange={this.handleInputChange}
              error={email.error} onValidate={this.handleInputValidate} validate={validateForm} />
            <Input type="password" label="Password" name="password" required
              value={password.value} onChange={this.handleInputChange}
              error={password.error} onValidate={this.handleInputValidate} validate={validateForm} />
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

const mapStateToProps = state => ({
  isLoggedIn: state.user.isLoggedIn
})

const mapActionsToProps = {
  onUserLogin: getUserInfo
}

export default connect(mapStateToProps, mapActionsToProps)(Login)
