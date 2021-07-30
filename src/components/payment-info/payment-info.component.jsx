import React from 'react'
import { connect } from 'react-redux'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'
import validator from 'validator'
import { setPaymentInfo } from '../../redux/order/order.actions'

import './payment.info.scss'

const PaymentInfo = ({ history, setPaymentInfo, ...paymentInformation}) => {
    const { cardNumber, expirationDate, securityCode } = paymentInformation
    
    const handleChange = event => {
        const { name, value } = event.target
        setPaymentInfo({[name]: value})
    }

    const handleSubmit = async event => {
        event.preventDefault()
        if(!validator.isCreditCard(paymentInformation.paymentInformation.cardNumber)){
            alert('Invalid card number')
            return false
        }
        history.push("/order");
    }

    return (
        <div className='payment-info'>
            <h2 className='title'>Please provide payment information:</h2>
            <form className='payment-info-form' onSubmit={ handleSubmit }>
                <FormInput type='text' name='cardNumber' value={ cardNumber } onChange={ handleChange } label='Card Number' required />
                <FormInput type='text' name='expirationDate' value={ expirationDate } onChange={ handleChange } label='Expiration Date' required />
                <FormInput type='text' name='securityCode' value={ securityCode }  onChange={ handleChange } label='Security Code' required />
                <CustomButton type='submit'>NEXT</CustomButton>
            </form>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    setPaymentInfo: info => dispatch(setPaymentInfo(info))
})

const mapStateToProps = ({order : { paymentInformation }}) => ({
    paymentInformation 
})

export default connect(mapStateToProps, mapDispatchToProps)(PaymentInfo)