import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import "react-phone-number-input/style.css";
import 'react-perfect-scrollbar/dist/css/styles.css';

// reference to react-slick 
// https://react-slick.neostack.com/docs/get-started

import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();