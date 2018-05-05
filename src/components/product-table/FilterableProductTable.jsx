import React, { Component } from 'react'
import SearchBar from './SearchBar'
import ProductTable from './ProductTable'

class FilterableProductTable extends Component {
  constructor(props) {
    super(props)
    this.state = {
      filteredProducts: this.props.products
    }
  }

  render() {
    return (
      <div className="container">
        <SearchBar />
        <ProductTable products={this.state.filteredProducts} />
      </div>
    )
  }
}

export default FilterableProductTable
