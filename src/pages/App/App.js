import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Product from "../../components/Product";
import Customer from "../../components/Customer";

import "../../assets/css/App.css";
import "../../assets/scss/main.scss";

import Login from "../Login";
import Home from "../Home";
import { decrement, increment } from "../../store/actionCreators/app";

function App() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.count);

  React.useEffect(() => {
    console.log("khang1");
  }, []);

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

      <div className="main-router">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
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
