import React from 'react'

import './component-items.styles.scss'

const CollectionsItems = ({id, name, imageUrl, price})=>(
  <div className='collection-item'>
  <div className='image' style={{
    backgroundImage: `url(${imageUrl})`
  }} />
  <div className='collection-footer'>
    <span className='name'>{name}</span>
    <span className='price'> ${price}</span>
  </div>

  </div>
);

export default CollectionsItems;
