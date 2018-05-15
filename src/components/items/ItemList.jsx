import React, { Component } from 'react'
import Item from './Item'
import { getItems } from '../../services/itemsService'
import { getErrorMsg } from '../../helpers'

class ItemList extends Component {
  constructor (props) {
    super(props)
    this.state = {
      items: [],
      isLoading: false,
      message: ''
    }
  }

  async showItems () {
    try {
      const items = await getItems()

      if (items && items.length > 0) {
        this.setState({ items })
      }
    } catch (err) {
      this.setState({ message: getErrorMsg(err) })
    }
  }

  componentDidMount () {
    this.showItems()
  }

  render () {
    const { items, message } = this.state

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
            {items.length > 0 && items.map(item => (
              <Item item={item} key={item._id} />
            ))}
          </ul>
        </div>
        {/* <Alert :text="status" /> */}
        <div className="alert-danger">{message}</div>
      </div>
    )
  }
}

export default ItemList
