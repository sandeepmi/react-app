import React, { Component } from 'react'

class SearchBar extends Component {
  constructor (props) {
    super(props)
    this.state = {
      searchText: '',
      showInStock: false
    }
  }

  render() {
    return (
      <div className="search-form">
        <form>
          <input type="text" name="searchText" /><br />
          <input type="checkbox" name="showInStock" />
          <label>Only show products in stock</label>
        </form>
      </div>
    )
  }
}

export default SearchBar
