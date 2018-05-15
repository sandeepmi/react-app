import React, { Component } from 'react'
import Item from './Item'

class ItemList extends Component {
  constructor (props) {
    super(props)
    this.state = {
      items: [
        { _id: '1', title: 'sdfas', type: 'sdfas' },
        { _id: '2', title: 'trsgfd', type: 'jtrughf' }
      ]
    }
  }

  render () {
    const { items } = this.state

    return (
      <div className="container">
        <h1 className="my-3">
          Items
          {items.length > 0 && (<span className="item-count">({items.length})</span>)}
          {/* <a className="btn float-right" @click="showAddItemView()">Add Item</a> */}
        </h1>
        {/* <Loading v-if="isLoading" type="card" /> */}
        <div>
          <ul className="list-group">
            {items.map(item => (
              <Item item={item} key={item._id} />
            ))}
          </ul>
        </div>
        {/* <Alert :text="status" /> */}
      </div>
    )
  }
}

export default ItemList
