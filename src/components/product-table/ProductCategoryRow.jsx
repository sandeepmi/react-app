import React from 'react'

function ProductCategoryRow (props) {
  return (
    <div className="row bold">
      <div>{props.category}</div>
    </div>
  )
}

export default ProductCategoryRow
