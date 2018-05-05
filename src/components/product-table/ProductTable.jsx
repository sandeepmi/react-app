import React, { Component } from 'react'
import ProductCategoryRow from './ProductCategoryRow'
import ProductRow from './ProductRow'

class ProductTable extends Component {
  render() {
    return (
      <div>
        <div className="row bold">
          <div className="col">Name</div>
          <div className="col">Price</div>
        </div>
        <ProductCategoryRow category={this.props.category} />
        <ProductRow product={this.props.products[0]} />
      </div>
    )
  }
}

export default ProductTable
