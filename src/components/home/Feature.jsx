import React from 'react'
import PropTypes from 'prop-types'

const Feature = props => {
  return (
    <div className="card">
      <div className="card-body text-center">
        <i className="material-icons medium">insert_emoticon</i>
        <h5>{props.title}</h5>
        <p className="light center">{props.children}</p>
      </div>
    </div>
  )
}

Feature.propTypes = {
  title: PropTypes.string
}

export default Feature
