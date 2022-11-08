import React from 'react';

import { Routes, Route } from 'react-router-dom';

import './App.css';

import Home from './pages/Home';
import Cart from './pages/Cart';
import Favorites from './pages/Favorites';
import Orders from './pages/Orders';
import NotFound from './components/NotFound';
import MainLayout from './layouts/MainLayout';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="" element={<Home />} />
        <Route path="cart" element={<Cart />} />
        <Route path="favorites" element={<Favorites />} />
        <Route path="orders" element={<Orders />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
