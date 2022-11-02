import React from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter } from 'react-router-dom';

import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import reducer from './store/reducer';

const store = configureStore({ reducer: reducer });
export type RootState = ReturnType<typeof store.getState>;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
