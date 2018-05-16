import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const Alert = ({ children, cssClass }) => {
  if (!children) return null

  return (
    <div className={classNames('alert', cssClass)}>
      {children}
    </div>
  )
}

Alert.propTypes = {
  cssClass: PropTypes.string
}

Alert.defaultProps = {
  cssClass: 'alert-danger'
}

export default Alert
