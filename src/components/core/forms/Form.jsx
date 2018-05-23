import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Form extends Component {
  constructor (props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit (event) {
    event.preventDefault()

    this.props.validateForm(isValid => {
      if (isValid) {
        this.props.onSubmit()
      }
    })
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        {this.props.children}
      </form>
    )
  }
}

Form.propTypes = {
  validateForm: PropTypes.func,
  onSubmit: PropTypes.func
}

export default Form
