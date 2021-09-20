import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import authReducer from './Reducers/authReducer'
import productsReducer from './Reducers/productsReducer'
import productsCustomReducer from './Reducers/productsCustomReducer';

const Store = createStore(
  combineReducers({authReducer, productsReducer, productsCustomReducer}),
  composeWithDevTools(applyMiddleware(thunk))
);

export default Store