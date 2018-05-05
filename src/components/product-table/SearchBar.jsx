import React, { Component } from 'react'

class SearchBar extends Component {
  constructor (props) {
    super(props)
    this.handleInputChange = this.handleInputChange.bind(this)
  }

  handleInputChange (event) {
    const target = event.target
    const value = target.type === 'checkbox' ? target.checked : target.value
    const name = target.name

    this.props.onChange(name, value)
  }

  render() {
    const { searchText, inStockOnly } = this.props.search

    return (
      <div className="search-form">
        <form>
          <input type="text" name="searchText" value={searchText} onChange={this.handleInputChange} /><br />
          <input type="checkbox" name="inStockOnly" value={inStockOnly} onChange={this.handleInputChange} />
          <label>Only show products in stock</label>
        </form>
      </div>
    )
  }
}

export default SearchBar
