import React from 'react';

import './custom-button.styles.scss';

const CustomButton = ({children, ...ButtonProps}) =>(

  <button className='custom-button' {...ButtonProps}>
      {children}
  </button>
)

export default CustomButton;
