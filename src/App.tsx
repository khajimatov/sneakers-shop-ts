import React, { Suspense } from 'react';

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
        <Route path="cart" element={<Suspense fallback={<div>Loading cart...</div>}>
          <Cart />
        </Suspense>} />
        <Route path="favorites" element={<Suspense fallback={<div>Loading favorites...</div>}>
          <Favorites />
        </Suspense>} />
        <Route path="orders" element={<Suspense fallback={<div>Loading orders...</div>}>
          <Orders />
        </Suspense>} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
