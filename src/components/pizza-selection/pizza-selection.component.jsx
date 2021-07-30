import React from 'react'
import { connect } from 'react-redux'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'
import { setPizzaType } from '../../redux/order/order.actions'

import './pizza-selection.styles.scss'

const PizzaSelection = ({ history, setPizzaType}) => {
    const handleChange = event => {
        const { name, value } = event.target
        setPizzaType({[name]: value})
    }

    const handleSubmit = async event => {
        event.preventDefault()
        history.push("/paymentInfo");
    }

    return (
        <div className='pizza-selection'>
            <h2 className='title'>Select the size and the topping of the pizza you wish to order:</h2>
            <form className='pizza-selection-form' onSubmit={handleSubmit}>
                <fieldset>
                    <legend><h2 className='title'>Size:</h2></legend>
                    <FormInput type='radio' name='size' value='Small' onChange={handleChange} label='Small' />
                    <FormInput type='radio' name='size' value='Medium' onChange={handleChange} label='Medium' />
                    <FormInput type='radio' name='size' value='Large' onChange={handleChange} label='Large' />
                </fieldset>
                <fieldset>
                    <legend><h2 className='title'>Topping:</h2></legend>
                    <FormInput type='radio' name='topping' value='Olives' onChange={handleChange} label='Olives' />
                    <FormInput type='radio' name='topping' value='Pepperoni' onChange={handleChange} label='Pepperoni' />
                    <FormInput type='radio' name='topping' value='Mushrooms' onChange={handleChange} label='Mushrooms' />
                    <FormInput type='radio' name='topping' value='Pepper' onChange={handleChange} label='Pepper' />
                </fieldset>
                <CustomButton type='submit'>NEXT</CustomButton>
            </form>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    setPizzaType: pizza => dispatch(setPizzaType(pizza))
})

export default connect(null, mapDispatchToProps)(PizzaSelection)