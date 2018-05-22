import React from 'react'
import PropTypes from 'prop-types'
import Loading from '../Loading'

const Button = ({ loading, children, ...passThroughProps }) => {
  return (
    <button className="btn" disabled={loading} {...passThroughProps}>
      {!loading && children}
      {loading && (<Loading centered />)}
    </button>
  )
}

Button.propTypes = {
  loading: PropTypes.bool
}

export default Button
