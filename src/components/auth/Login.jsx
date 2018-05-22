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
      email: '',
      password: '',
      message: '',
      isLoading: false
    }
    this.handleLogin = this.handleLogin.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
  }

  handleInputChange (name, value) {
    this.setState({ [name]: value })
  }

  async handleLogin () {
    const { email, password } = this.state
    const { location, history } = this.props

    this.setState({ message: '' })
    this.setState({ isLoading: true })

    try {
      const response = await login(email, password)

      if (response.success && response.token) {
        setAuthToken(response.token)
        // TODO: this.$store.dispatch('user/getUserInfo')

        // redirect to target
        const redirectPath = location.query.redirect || '/account'
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
    const { email, password, message, isLoading } = this.state

    return (
      <div className="card login-wrapper my-5 mx-auto">
        <div className="card-body text-center">
          <h2>Login</h2>
          <Form onSubmit={this.handleLogin}>
            <Input label="Email" name="email" required email
              value={email} onChange={this.handleInputChange} />
            <Input type="password" label="Password" name="password" required
              value={password} onChange={this.handleInputChange} />
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
