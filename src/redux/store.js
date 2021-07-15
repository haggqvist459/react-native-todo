import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { loadFromStorage, saveToStorage } from './asyncStorage';
import throttle from 'lodash/throttle';

const persistedState = loadFromStorage();

const store = createStore(
        persistedState,
        composeWithDevTools()
);

store.subscribe(throttle(
        () => {
                saveState({
                        items: store.getState().items
                });
        }
), 1000);

export default store;