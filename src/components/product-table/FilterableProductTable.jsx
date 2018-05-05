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
      }
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

  filterProducts () {
    const products = this.props.products
    const { searchText, inStockOnly } = this.state.search

    if (!searchText && !inStockOnly) return products

    return products.filter(p => {
      if (inStockOnly && !p.stocked) return false
      if (!searchText) return true

      return (p.name.includes(searchText) || p.category.includes(searchText))
    })
  }

  render() {
    const { search } = this.state
    const filteredProducts = this.filterProducts()

    return (
      <div className="container">
        <SearchBar search={search} onChange={this.handleSearchChange} />
        <ProductTable products={filteredProducts} search={search} />
      </div>
    )
  }
}

export default FilterableProductTable
