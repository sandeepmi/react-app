import React from 'react'

function ProductRow (props) {
  return (
    <div className="row">
      <div className="col">{props.product.name}</div>
      <div className="col">{props.product.price}</div>
    </div>
  )
}

export default ProductRow
