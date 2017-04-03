import { combineReducers } from 'redux';
import customers from './customers';
import visibilityFilter from './visibilityFilter'

const rootReducer = combineReducers({
  customers,
  visibilityFilter
})

export default rootReducer
