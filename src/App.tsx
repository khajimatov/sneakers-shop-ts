import React, { Suspense } from 'react';

import { Routes, Route } from 'react-router-dom';

import './App.css';

import Header from './components/Header';

import Home from './pages/Home';
import Cart from './pages/Cart';
import Favorites from './pages/Favorites';
import Orders from './pages/Orders';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="cart" element={<Suspense fallback={<div>Loading cart...</div>}>
          <Cart />
        </Suspense>} />
        <Route path="favorites" element={<Suspense fallback={<div>Loading favorites...</div>}>
          <Favorites />
        </Suspense>} />
        <Route path="orders" element={<Suspense fallback={<div>Loading orders...</div>}>
          <Orders />
        </Suspense>} />
        <Route path="*" element={<strong>404: NOT FOUND</strong>} />
      </Routes>
    </div>
  );
}

export default App;
