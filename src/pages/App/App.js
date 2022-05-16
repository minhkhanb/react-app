import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Product from "../../components/Product";
import Customer from "../../components/Customer";

import "../../assets/css/App.css";
import "../../assets/scss/main.scss";

import Login from "../Login";
import Home from "../Home";
import Github from "../Github";
import { decrement, increment } from "../../store/actionCreators/app";
import { getProductTypeAction, addProductTypeAction } from '../../store/actionCreators/thunk';

function App() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.count);
  const [nameProduct, setNameProduct] = useState();
  const listProduct = useSelector((state) => state.listProductTypes);

  console.log('data list producttype: ', listProduct);
  React.useEffect(() => {
    dispatch(getProductTypeAction())
  }, []);

  const handleAddProduct = () =>{
    dispatch(addProductTypeAction(nameProduct))
    setNameProduct('');
  }
  return (
    <div className="App">
      <div className="header">
        <h2>Header {count}</h2>
        <button onClick={() => dispatch(increment())}>Increment</button> |{" "}
        <button onClick={() => dispatch(decrement())}>Decrement</button>
        <ul>
          <li>
            <Link to="/product">Product</Link>
          </li>
          <li>
            <Link to="/customer">Customer</Link>
          </li>
        </ul>
      </div>
      <br />
      <div>
        <h2>List api test</h2>
        <div>
          <input value={nameProduct} onChange={(e)=> setNameProduct(e.target.value)} type="text" />
          <button onClick={handleAddProduct}>Add Product</button>
        </div>
        <ul>
          {listProduct.map((element, index) => (<li key={index}>{element.TypeName} <button>Sửa</button></li>))}
        </ul>

      </div>


      <div className="main-router">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/github" element={<Github />} />
          <Route path="/product/*" element={<Product />} />
          <Route path="/customer" element={<Customer />} />
        </Routes>
      </div>

      <div className="footer">
        <h2>Footer</h2>
      </div>
    </div>
  );
}

export default App;
