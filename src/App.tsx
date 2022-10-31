import React, { Suspense } from 'react';

import { Routes, Route } from 'react-router-dom';

import './App.css';

import Header from './components/Header';
import Home from './pages/Home';
import Cart from './pages/Cart';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="cart" element={<Suspense fallback={<div>Loading cart...</div>}>
          <Cart />
        </Suspense>} />
      </Routes>
    </div>
  );
}

export default App;
