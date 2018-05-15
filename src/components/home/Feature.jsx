import React from 'react'
import PropTypes from 'prop-types'

const Feature = props => {
  return (
    <div class="card">
      <div class="card-body text-center">
        <i class="material-icons medium">insert_emoticon</i>
        <h5>{props.title}</h5>
        <p class="light center">{props.children}</p>
      </div>
    </div>
  )
}

Feature.propTypes = {
  title: PropTypes.string
}

export default Feature
