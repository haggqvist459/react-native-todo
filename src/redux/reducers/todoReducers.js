import { ACTIONS } from '../../utils/constants';
import { v4 as uuid } from 'uuid';

const initialState = [];

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.ADD_ITEM: {
      return [
        ...state,
        {
          id: uuid(),
          text: action.payload.text,
          completed: false
        }
      ];
    }
    case ACTIONS.TOGGLE_ITEM: {
      /* 
      console.log("toggleTodoHandler: ", id);
      return todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo)
      */
    }
    case ACTIONS.DELETE_ITEM: {
      /* 
      console.log("removeTodoHandler: ", id);
      return todos.filter(todo => todo.id != id);
      */
    }
    case ACTIONS.DELETE_ALL: {
      /* 
        return state = initialState;
      */
    }
    default:
      return state;
  }
}

export default todoReducer;

/* 
case ACTIONS.ADD_ITEM: {
      const { id, content } = action.payload;
      return {
        ...state,
        allIds: [...state.allIds, id],
        byIds: {
          ...state.byIds,
          [id]: {
            content,
            completed: false
          }
        }
      };
    }
case ACTIONS.TOGGLE_ITEM: {
      const { id } = action.payload;
      return {
        ...state,
        byIds: {
          ...state.byIds,
          [id]: {
            ...state.byIds[id],
            picked: !state.byIds[id].picked
          }
        }
      };
    }
    case ACTIONS.DELETE_ITEM: {
      // probably not the way to go about it. check the javascript stuff project!
      delete state.byIds[action.payload.id];
      return {
        allIds: state.allIds.filter(item => item !== action.payload.id),
        byIds: state.byIds
      };
    }
    case ACTIONS.DELETE_ALL: {
      return state = initialState
    }
    
    */