import React from 'react';
import './app.css';
import Product from './product/product';

function App() {
  return (
    <div className="app">
      <Product name="apple" count="10">
        <strong>🍏</strong>
      </Product>
      <Product name="lemon" count="3">
        <strong>🍋</strong>
      </Product>
    </div>
  );
}

export default App;
