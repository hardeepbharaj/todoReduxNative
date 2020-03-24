import {createStore, combineReducers} from 'redux';

import TodoReducer from './reducers';

const rootReducer = combineReducers({
  TodoReducer,
});

const configureStore = () => createStore(rootReducer);

export default configureStore;
