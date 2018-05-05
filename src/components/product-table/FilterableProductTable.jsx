import React, { Component } from 'react'
import SearchBar from './SearchBar'
import ProductTable from './ProductTable'

class FilterableProductTable extends Component {
  constructor (props) {
    super(props)
    this.state = {
      search: {
        searchText: '',
        inStockOnly: false
      },
      filteredProducts: this.props.products
    }
    this.handleSearchChange = this.handleSearchChange.bind(this)
  }

  handleSearchChange (key, value) {
    this.setState(prevState => ({
      search: Object.assign(prevState.search, {
        [key]: value
      })
    }))
  }

  render() {
    const { search, filteredProducts } = this.state

    return (
      <div className="container">
        <SearchBar search={search} onChange={this.handleSearchChange} />
        <ProductTable products={filteredProducts} search={search} />
      </div>
    )
  }
}

export default FilterableProductTable
