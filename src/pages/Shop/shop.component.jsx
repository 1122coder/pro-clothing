import React from 'react'

import Shop_Data from './shop.component.js'
import CollectionPreview from '../../components/collection-preview/collection-preview.component.jsx'

class ShopPage extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      collections: Shop_Data
    }
  }

  render(){
    const {collections}=this.state;
    return(
      <div className='shop-page'>
        {
          collections.map(({id, title, items})=> (
            <CollectionPreview key={id} title={title} items={items} />
          ))
        }
      </div>
    );
  }
}

export default ShopPage;
