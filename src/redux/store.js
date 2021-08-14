import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers/rootReducer';

const store = createStore(
        rootReducer,
        composeWithDevTools(applyMiddleware()));

console.log("initialState, ", store.getState());


const unsubscribe = store.subscribe(() => console.log('updated state: ', store.getState()));
unsubscribe();

export default store;