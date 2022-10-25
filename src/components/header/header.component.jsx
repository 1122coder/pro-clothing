import React from 'react'
import {Link} from 'react-router-dom'
import './header.styles.scss'


const HeaderPage = ()=> (
  <div className='header'>
    <Link className='logo-container' to='/'>
      <img src='./pics/93139d4d42b9baf76c1199817e38e513.jpg' placeholder='LOGO'/>
    </Link>

    <div className='options'>
    <Link className='option' to='/shop'>
      SHOP
    </Link>
    <Link className='option' to='/contact'>
      CONTACT
    </Link>
    </div>
  </div>
);

export default HeaderPage;
