import { OrderActionTypes } from "./order.types"

export const setCurrentCustomerInfo = customerInfo => ({
    type: OrderActionTypes.SET_CURRENT_CUSTOMER_INFORMATION,
    payload: customerInfo
})

export const setPizzaType = pizzaType => ({
    type: OrderActionTypes.SET_PIZZA_TYPE,
    payload: pizzaType
})

export const setPaymentInfo = paymentInfo => ({
    type: OrderActionTypes.SET_PAYMENT_INFO,
    payload: paymentInfo
})