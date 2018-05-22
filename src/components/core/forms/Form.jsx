import React, { Component } from 'react'
import PropTypes from 'prop-types'
// import { validateForm } from '../../../helpers'

class Form extends Component {
  handleSubmit (event) {
    event.preventDefault()

    // const isFormValid = validateForm(this)
    // if (!isFormValid) return

    this.props.onSubmit()
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        {this.props.children}
      </form>
    )
  }
}

Form.propTypes = {
  onSubmit: PropTypes.func
}

export default Form
