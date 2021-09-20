import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import authReducer from './Reducers/authReducer'
import productsReducer from './Reducers/productsReducer'

const Store = createStore(
  combineReducers({authReducer, productsReducer}),
  composeWithDevTools(applyMiddleware(thunk))
);

export default Store