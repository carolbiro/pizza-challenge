import React from 'react'

import './summary-item.styles.scss'

const SummaryItem =  ({itemKey, itemValue}) => (
    <div className='summary-item'>
        <span className='item-key'>{itemKey}</span>:&nbsp;
        <span className='item-value'>{itemValue}</span>
    </div>
)

export default SummaryItem