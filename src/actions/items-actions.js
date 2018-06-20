import { createActions } from 'redux-actions'
import { getItems } from '../services/itemsService'
import { delay, cancelDelayedAction, getErrorMsg, messages } from '../helpers'

export const {
  getItemsInit,
  getItemsSuccess,
  getItemsFailure
} = createActions(
  'GET_ITEMS_INIT',
  'GET_ITEMS_SUCCESS',
  'GET_ITEMS_FAILURE'
)

export const getItemsRequest = () => async dispatch => {
  const delayId = delay(() => dispatch(getItemsInit()))

  try {
    const items = await getItems()
    const message = (items.length === 0) ? messages.items.noItems : ''

    dispatch(getItemsSuccess({ items, message }))
  } catch (err) {
    dispatch(getItemsFailure(getErrorMsg(err)))
  } finally {
    cancelDelayedAction(delayId)
  }
}
