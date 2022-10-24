import './App.css';
import React from 'react';
import Homepage from './pages/homepage/Homepage.component.jsx';
import {Route, Routes} from 'react-router-dom'
import ShopPage from './pages/Shop/shop.component.jsx'






function App() {
  return (
    <div>
    <Routes>
      <Route exact path='/' element={ <Homepage/> }/>
      <Route exact path='/shop' element={<ShopPage/>}/>
    </Routes>
    </div>
  );
}

export default App;
