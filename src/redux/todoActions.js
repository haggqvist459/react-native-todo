import { ACTIONS } from '../utils/constants';


export const addItem = textInput => ({
  type: ACTIONS.ADD_ITEM,
  payload: { textInput }
});

// not done yet
export const toggleItem = id => ({
  type: ACTIONS.TOGGLE_ITEM,
  payload: { id }
});

export const setFilter = filter => ({
  type: ACTIONS.SET_FILTER,
  payload: { filter }
});

export const deleteItem = item => ({
  type: ACTIONS.DELETE_ITEM,
  payload: {
    id: item.id,
    content: item.content
  }
});

export const deleteAll = () => ({
  type: ACTIONS.DELETE_ALL
})