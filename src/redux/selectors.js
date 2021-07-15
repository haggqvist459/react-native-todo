import { VISIBILITY_FILTERS } from "./constants";

export const getItemsState = store => store.items;

export const getItemList = store =>
    getItemsState(store) ? getItemsState(store).allIds : [];

export const getItemId = (store, id) =>
    getItemsState(store) ? { ...getItemsState(store).byIds[id], id } : {};

export const getItems = store =>
    getItemList(store).map(id => getItemId(store, id));

export const getItemsByVisibilityFilter = (store, visibilityFilter) => {
    const allTodos = getItems(store);
    switch (visibilityFilter) {
        case VISIBILITY_FILTERS.COMPLETED:
            return allTodos.filter(todo => todo.completed);
        case VISIBILITY_FILTERS.REMAINING:
            return allTodos.filter(todo => !todo.completed);
        case VISIBILITY_FILTERS.ALL:
        default:
            return allTodos;
    }
};
