import React from 'react'
import PropTypes from 'prop-types'

const Item = ({ item }) => {
  return (
    <li className="list-group-item item">
      {/* <div className="item-actions float-right mt-1">
        <div v-if="!item.isDeleting">
          <a className="item-delete float-right icon-link pt-2" @click="showDeleteConfirmView(item)">
            <i className="material-icons">delete</i>
          </a>
          <a className="item-edit float-right icon-link pt-2" @click="showEditItemView(item)">
            <i className="material-icons">mode_edit</i>
          </a>
        </div>
        <Loading v-else size="small" />
      </div> */}
      <h5 className="mb-0 text-truncate">{item.title}</h5>
      <div className="text-muted">{item.type}</div>
    </li>
  )
}

Item.propTypes = {
  item: PropTypes.object
}

export default Item
