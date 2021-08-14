import { ACTIONS } from "../../utils/constants";
import { v4 as uuid } from 'uuid';

const initialState = [];

const todos = (state = initialState, action) => {
        switch (action.type) {
                case ACTIONS.ADD_ITEM:
                        console.log("ADD_ITEM triggered");
                        return [
                                ...state,
                                {
                                        id: uuid(),
                                        text: action.payload.text,
                                        completed: false
                                }
                        ];
                case ACTIONS.TOGGLE_ITEM:
                        console.log("TOGGLE_ITEM triggered");
                        return state.map(todo => todo.id === action.payload.id ? {...todo, completed: !todo.completed} : todo);
                case ACTIONS.DELETE_ITEM:
                        console.log("DELETE_ITEM triggered");
                        return state.filter(todo => todo.id != action.payload.id);
                case ACTIONS.DELETE_ALL:
                        console.log("DELETE_ALL triggered");
                        return initialState
                default:
                        return state;
        }
}

export default todos;