import React from 'react';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import HomePage from './homePage';
import ShopItems from './ShopItems';
import ShopPatterns from './ShopPatterns';
import Navbar from './Navbar';
import Cart from'./Cart';

const App=()=>{
  return (
    
    <BrowserRouter>
    <Navbar/>
    <Cart/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/ShopPatterns" element={<ShopPatterns/>}/>
        <Route path="/ShopItems" element={<ShopItems/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
