import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { Form, Input, Button, Alert } from '../core'
import { formSubmit, formInputChange, formInputValidate } from '../../actions'

class Login extends Component {
  render () {
    const { isLoggedIn, location, formData, message, isLoading, isValidateForm, redirectToReferrer, onInputChange, onInputValidate, onSubmit } = this.props
    const { email, password } = formData

    if (redirectToReferrer || isLoggedIn) {
      const { from } = location.state || { from: { pathname: '/account' } }
      return <Redirect to={from} />
    }

    return (
      <div className="card login-wrapper my-5 mx-auto">
        <div className="card-body text-center">
          <h2>Login</h2>
          <Form onSubmit={onSubmit}>
            <Input label="Email" name="email" required email
              value={email.value} onChange={onInputChange}
              error={email.error} onValidate={onInputValidate} validate={isValidateForm} />
            <Input type="password" label="Password" name="password" required
              value={password.value} onChange={onInputChange}
              error={password.error} onValidate={onInputValidate} validate={isValidateForm} />
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
  isLoggedIn: state.user.isLoggedIn,
  formData: state.login.formData,
  isLoading: state.login.isLoading,
  message: state.login.message,
  isValidateForm: state.login.isValidateForm,
  redirectToReferrer: state.login.redirectToReferrer
})

const mapActionsToProps = {
  onInputChange: formInputChange,
  onInputValidate: formInputValidate,
  onSubmit: formSubmit
}

export default connect(mapStateToProps, mapActionsToProps)(Login)
