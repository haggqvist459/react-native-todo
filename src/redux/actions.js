import { ACTIONS } from "../utils/constants";


export const addItem = text => ({
        type: ACTIONS.ADD_ITEM,
        payload: { 
                text: text,
        } 
});

export const toggleItem = id => ({
        type: ACTIONS.TOGGLE_ITEM,
        payload: { id }
});

export const setFilter = filter => ({
        type: ACTIONS.SET_FILTER,
        payload: { filter }
});

export const deleteItem = id => ({
        type: ACTIONS.DELETE_ITEM,
        payload: { id },
});

export const deleteAll = () => ({
        type: ACTIONS.DELETE_ALL
});