import { OrderActionTypes } from "./order.types"

const INITIAL_STATE = {
    currentUserInformation: null,
    pizzaType: null,
    paymentInformation: null
}

const orderReducer = (state = INITIAL_STATE, action) =>  {
    switch(action.type) {
        case OrderActionTypes.SET_CURRENT_CUSTOMER_INFORMATION:
            return {
                ...state, 
                currentUserInformation: {
                    ...state.currentUserInformation,
                    ...action.payload
                }
            }
        case OrderActionTypes.SET_PIZZA_TYPE:
            return {
                ...state,
                pizzaType: {
                    ...state.pizzaType,
                    ...action.payload
                }
            }
        case OrderActionTypes.SET_PAYMENT_INFO:
            return {
                ...state,
                paymentInformation: {
                    ...state.paymentInformation,
                    ...action.payload
                }
            }

        default:
            return state
    }
}

export default orderReducer