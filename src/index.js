import React from 'react';
import ReactDOM from 'react-dom/client';
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./../node_modules/jquery/dist/jquery.min.js";
import "./../node_modules/bootstrap/dist/js/bootstrap.bundle.js";

import "react-slick/dist/react-slick.min.js"; 
import "react-slick/lib/utils/innerSliderUtils";
import "react-slick/lib/slider";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './redux/configStore';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
