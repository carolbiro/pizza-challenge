import React from 'react'
import { connect } from 'react-redux'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'
import { setCurrentCustomerInfo } from '../../redux/order/order.actions'

import './customer-info.styles.scss'

const CustomerInfo = ( {history, setCurrentCustomerInfo, ...currentUserInformation} ) => {
    const handleChange = event => {
        const { name, value } = event.target
        setCurrentCustomerInfo({[name]: value})
    }

    const handleSubmit = async event => {
        event.preventDefault()
        history.push("/pizzaSelection");
    }

    const { customerName, street, houseNumber, postalCode, city, phone } = currentUserInformation

    return (<div className='customer-info'>
                <h2 className='title'>Please fill in the following form:</h2>
                <form className='cutomer-info-form' onSubmit={handleSubmit}>
                    <FormInput type='text' name='customerName' value={customerName} onChange={handleChange} label='Customer Name'  required />
                    <FormInput type='text' name='street' value={street} onChange={handleChange} label='Street' required />
                    <FormInput type='text' name='houseNumber' value={houseNumber} onChange={handleChange} label='House Number' required />
                    <FormInput type='text' name='postalCode' value={postalCode} onChange={handleChange} label='Postal Code' required />
                    <FormInput type='text' name='city' value={city} onChange={handleChange} label='City' required />
                    <FormInput type='text' name='phone' value={phone} onChange={handleChange} label='Phone' required />
                    
                    <CustomButton type='submit'>NEXT</CustomButton>
                </form>
            </div>
        ) 
}

const mapDispatchToProps = dispatch => ({
    setCurrentCustomerInfo: customerInfo => dispatch(setCurrentCustomerInfo(customerInfo))
})

const mapStateToProps = ({order : { currentUserInformation }}) => ({
    currentUserInformation 
})

export default connect(mapStateToProps, mapDispatchToProps)(CustomerInfo)