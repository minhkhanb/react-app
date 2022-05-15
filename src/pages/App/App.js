import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Product from '../../components/Product';
import Customer from '../../components/Customer';

import '../../assets/css/App.css';
import '../../assets/scss/main.scss';

import Login from '../Login';
import Home from '../Home';

function App() {

  React.useEffect(() => {
    console.log('khang1');
  }, []);

  return (
    <div className="App">

      <div className="header">
        <h2>Header</h2>
        <ul>
          <li><Link to="/product">Product</Link></li>
          <li><Link to="/customer">Customer</Link></li>
        </ul>
      </div>

      <div className="main-router">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/product/*" element={<Product/>}/>
          <Route path="/customer" element={<Customer/>}/>
        </Routes>
      </div>

      <div className="footer">
        <h2>Footer</h2>
      </div>
    </div>
  );
}

export default App;
