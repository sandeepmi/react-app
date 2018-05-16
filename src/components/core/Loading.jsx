import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const Loading = ({ type, centered, size }) => {
  const isCard = (type === 'card')
  const cssClass = classNames('loading-wrapper', {
    'card': isCard,
    'centered': centered || isCard
  }, size)

  return (
    <div className={cssClass}>
      <div className="loading"></div>
    </div>
  )
}

Loading.propTypes = {
  type: PropTypes.string,
  centered: PropTypes.bool,
  size: PropTypes.string
}

export default Loading
