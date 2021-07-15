import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { loadFromStorage, saveToStorage } from './asyncStorage';
import rootReducer from './reducers';
import throttle from 'lodash/throttle';

const persistedState = loadFromStorage();

const store = createStore(
        rootReducer,
        // persistedState,
        composeWithDevTools(applyMiddleware())
);

store.subscribe(throttle(
        () => {
                saveToStorage({
                        items: store.getState().items
                });
                console.log("saveToStorage: ", store.getState());
        }
), 1000);

export default store;