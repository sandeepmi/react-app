import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const FormGroup = props => {
  const { label, name, srOnly, error, children } = props
  const cssClass = {
    'sr-only': srOnly
  }

  return (
    <div className="form-group">
      <label htmlFor={name} className={classNames(cssClass)}>{label}</label>
      {children}
      {error && (<div className="form-group-error">{error}</div>)}
    </div>
  )
}

FormGroup.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  srOnly: PropTypes.bool,
  error: PropTypes.string
}

FormGroup.defaultProps = {
  srOnly: true
}

export default FormGroup
