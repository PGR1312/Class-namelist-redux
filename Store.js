import { createStore, combineReducers } from 'redux';
import foodReducer from './Reducer';

const rootReducer = combineReducers({
  foodReducer: foodReducer
})

const configureStore =  createStore(rootReducer);

export default configureStore;