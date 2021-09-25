import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import authReducer from './Reducers/authReducer'
import productsReducer from './Reducers/productsReducer'
import transactionReducer from "./Reducers/transactionReducer";

const Store = createStore(
  combineReducers({authReducer, productsReducer, transactionReducer}),
  composeWithDevTools(applyMiddleware(thunk))
);

export default Store