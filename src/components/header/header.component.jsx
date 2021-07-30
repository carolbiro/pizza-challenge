import React from 'react'
import { Link } from 'react-router-dom'

import { ReactComponent as Logo } from '../../logo.svg'

import './header.component.scss'

const Header = () => (
    <div className='header'>
        <Link to='/' className='logo-container'>
            <Logo className='logo' />
        </Link>
        <div className='options'>
            <Link className='option' to='/customerInfo'>
                CUSTOMER INFO
            </Link>
            <Link className='option' to='/pizzaSelection'>
                PIZZA SELECTION
            </Link>
            <Link className='option' to='/paymentInfo'>
                PAYMENT INFORMATION
            </Link>
            <Link className='option' to='/order'>
                ORDER
            </Link>
        </div>
    </div>
)

export default Header