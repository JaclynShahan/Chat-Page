import { createStore, applyMiddleware, combineReducers } from 'redux'
import promiseMiddleware from 'redux-promise-middleware'
import login from './reducers/login'
import signup from './reducers/signup'

export default createStore(
  combineReducers({
      login,
      signup
  }),
  applyMiddleware(promiseMiddleware)
)
