import React, { Component } from 'react'
import Item from './Item'
import { getItems } from '../../services/itemsService'
import { delay, cancelDelayedAction, getErrorMsg, messages } from '../../helpers'
import { Loading, Alert } from "../core"

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
    const delayId = delay(() => this.setState({ isLoading: true }))

    try {
      const items = await getItems()

      if (items) {
        if (items.length > 0) {
          this.setState({ items })
        } else {
          this.setState({ message: messages.items.noItems });
        }
      }
    } catch (err) {
      this.setState({ message: getErrorMsg(err) })
    } finally {
      cancelDelayedAction(delayId)
      this.setState({ isLoading: false })
    }
  }

  componentWillMount () {
    this.showItems()
  }

  render () {
    const { items, isLoading, message } = this.state
    const itemList = items.map(item => (
      <Item item={item} key={item._id} />
    ))

    return (
      <div className="container">
        <h1 className="my-3">
          Items
          {items.length > 0 && (<span className="item-count">({items.length})</span>)}
          {/* <a className="btn float-right" @click="showAddItemView()">Add Item</a> */}
        </h1>

        {isLoading ? (
          <Loading type="card" />
        ) : (items && items.length > 0) ? (
          <ul className="list-group">{itemList}</ul>
        ) : (
          <Alert>{message}</Alert>
        )}
      </div>
    )
  }
}

export default ItemList
