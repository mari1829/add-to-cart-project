import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Addtocart from './Add to cart/Addtocart';
import Childfile from './Add to cart/Childfile';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Childfile />
  </React.StrictMode>
);


