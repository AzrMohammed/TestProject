import { createStore, applyMiddleware } from 'redux'
import BaseReducer from './reducers/BaseReducer'
import thunk from 'redux-thunk'

const store = createStore(BaseReducer, applyMiddleware(thunk))

export default store
