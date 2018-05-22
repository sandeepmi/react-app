import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import FormGroup from './FormGroup'
import { isEmail } from '../../../helpers'

class Input extends Component {
  constructor (props) {
    super(props)
    this.inputRef = React.createRef()
    this.handleInputChange = this.handleInputChange.bind(this)
    this.validate = this.validate.bind(this)
  }

  focus () {
    this.inputRef.current.focus()
  }

  handleInputChange (event) {
    const target = event.target
    const value = target.type === 'checkbox' ? target.checked : target.value
    const name = target.name

    this.props.onChange(name, value)
  }

  validate () {
    let error = ''
    const { name, value, required, email, matchValue } = this.props

    // validate required
    if (required && !value) {
      error = 'Required'
    }

    // validate email
    else if (email && !isEmail(value)) {
      error = 'Invalid email'
    }

    // validate match
    else if (matchValue && value !== matchValue) {
      error = 'Not a match'
    }

    this.props.onBlur(name, error)

    return !error
  }

  componentDidMount () {
    if (this.props.setFocus) {
      this.focus()
    }
  }

  render () {
    const { label, name, error, plainText, srOnly, email, matchValue, onChange, ...passThroughProps } = this.props
    const cssClass = {
      error: !!error,
      'form-control': !plainText,
      'form-control-plaintext': !!plainText
    }
    const srOnlyComputed = !plainText && srOnly

    return (
      <FormGroup label={label} name={name} error={error} srOnly={srOnlyComputed}>
        <input
          {...passThroughProps}
          name={name}
          placeholder={label}
          className={classNames(cssClass)}
          readOnly={plainText}
          disabled={plainText}
          ref={this.inputRef}
          onChange={this.handleInputChange}
          onBlur={this.validate} />
      </FormGroup>
    )
  }
}

Input.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  srOnly: PropTypes.bool,
  type: PropTypes.string,
  value: PropTypes.string,
  setFocus: PropTypes.bool,
  plainText: PropTypes.bool,
  required: PropTypes.bool,
  email: PropTypes.bool,
  matchValue: PropTypes.string
}

Input.defaultProps = {
  srOnly: true,
  type: 'text'
}

export default Input
