import { combineReducers } from 'redux'

import orderReducer from './order/order.reducer'

export default combineReducers({
    order: orderReducer
})