import React, { Component } from 'react'
import { connect } from 'react-redux'
import { CSSTransitionGroup } from 'react-transition-group'
import Item from './Item'
import { Loading, Alert } from '../core'
import { getItemsRequest } from '../../actions'

class ItemList extends Component {
  componentWillMount () {
    this.props.getItems()
  }

  render () {
    const { items, isLoading, message } = this.props
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

        <CSSTransitionGroup transitionName="fade" transitionEnterTimeout={250} transitionLeaveTimeout={0}>
          {isLoading ? (
            <Loading type="card" key="loading" />
          ) : (items && items.length > 0) ? (
            <ul className="list-group" key="items">{itemList}</ul>
          ) : (
            <Alert key="alert">{message}</Alert>
          )}
        </CSSTransitionGroup>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  items: state.items.list,
  isLoading: state.items.isLoading,
  message: state.items.message
})

const mapActionsToProps = {
  getItems: getItemsRequest
}

export default connect(mapStateToProps, mapActionsToProps)(ItemList)
