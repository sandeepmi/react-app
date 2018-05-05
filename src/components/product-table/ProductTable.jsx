import React, { Component } from 'react'
import ProductCategoryRow from './ProductCategoryRow'
import ProductRow from './ProductRow'

class ProductTable extends Component {
  groupProducts (products) {
    const grouped = {}

    products.forEach(product => {
      const category = product.category
      if (!grouped.hasOwnProperty(category)) {
        grouped[category] = []
      }
      grouped[category].push(product)
    })

    return grouped
  }

  render() {
    const grouped = this.groupProducts(this.props.products)

    return (
      <div>
        <div className="row bold">
          <div className="col">Name</div>
          <div className="col">Price</div>
        </div>

        {Object.keys(grouped).map(key => (
          <div key={key}>
            <ProductCategoryRow category={key} />

            {grouped[key].map(product => (
              <ProductRow product={product} key={product.name} />
            ))}
          </div>
        ))}
      </div>
    )
  }
}

export default ProductTable
