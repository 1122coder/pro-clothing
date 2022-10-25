import './App.css';
import React from 'react';
import Homepage from './pages/homepage/Homepage.component.jsx';
import {Route, Routes} from 'react-router-dom'
import ShopPage from './pages/Shop/shop.component.jsx'
import HeaderPage from './components/header/header.component.jsx'
import SignInAndSignOut from './pages/sign-in-And-sign-out/sign-in-And-sign-out.component'





function App() {
  return (
    <div>
    <HeaderPage />
    <Routes>
      <Route exact path='/' element={ <Homepage/> }/>
      <Route exact path='/shop' element={<ShopPage/>}/>
      <Route exact path='/signin' element={<SignInAndSignOut/>}/>
    </Routes>
    </div>
  );
}

export default App;
