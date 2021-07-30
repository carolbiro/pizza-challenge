import React from 'react'

import SummaryItem from '../summary-item/summary-item.component'

import './collection-preview.styles.scss'

const CollectionPreview = ({title, items}) => (
    <div className='collection-preview'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <div className='preview'>
            {items.map(({ itemKey,  itemValue}) => (
                    <SummaryItem 
                        key={itemKey} 
                        itemKey={itemKey}  
                        itemValue={itemValue}
                    />
                ))
            }
        </div>
    </div>
)

export default CollectionPreview