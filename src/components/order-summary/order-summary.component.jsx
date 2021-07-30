import React, { useContext }  from 'react'
import { ReactReduxContext } from 'react-redux'
import CollectionPreview from '../collection-preview/collection-preview.component'
import CustomButton from '../custom-button/custom-button.component'

import './order-summary.style.scss'

const OrderSummary = () => {
    
    const { store } = useContext(ReactReduxContext)

    console.log(store.getState())

    const ourStore = store.getState().order

    const customerInformation = [] 
    for (const [key, value] of Object.entries(ourStore.currentUserInformation)) {
        customerInformation.push({itemKey:key, itemValue:value})
    }
    const paymentInformation = [] 
    for (const [key, value] of Object.entries(ourStore.paymentInformation)) {
        paymentInformation.push({itemKey:key, itemValue:value})
    }
    const pizzaType = [] 
    for (const [key, value] of Object.entries(ourStore.pizzaType)) {
        pizzaType.push({itemKey:key, itemValue:value})
    }

    const collections = [
        { id:1, title: 'Customer Info', items: customerInformation},
        { id:2, title: 'Pizza Type', items: pizzaType},
        { id:3, title: 'Payment Information', items: paymentInformation},
    ]

    const sendOrder = () => {
        console.log(ourStore)
    }

    return (
        <div className='order-summary'>
            {
                collections.map(({id, ...otherCollectionProps}) => (
                    <CollectionPreview key={id} {...otherCollectionProps} />   
                ))
            }
            <CustomButton onClick={sendOrder}>Send Order</CustomButton>
        </div>
    )
}

export default OrderSummary