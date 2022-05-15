import { Link, Routes, Route } from "react-router-dom";
import Button from "../ui/Button";
import Profile from "../../section/Profile";
import Account from "../../section/Account";
import "./product.css";
import { useEffect } from "react";

const Product = () => {
  const clickButton = () => {
    console.log("Button clicked");
  };

  useEffect(() => {
    console.log("khang2");
  }, []);

  return (
    <div className="profile">
      <h2>Product</h2>

      <div className="container">
        <div className="menu">
          <ul>
            <li>
              <Link to="/product/profile">Profile</Link>
            </li>
            <li>
              <Link to="/product/account">Account</Link>
            </li>
          </ul>
        </div>
        <div className="content">
          <div className="screen">
            <Routes>
              <Route path="profile" element={<Profile />} />
              <Route path="account" element={<Account />} />
            </Routes>
          </div>
        </div>
      </div>
      <button onClick={clickButton}>OK</button>

      <Button onClick={clickButton} text="Click Me" />
    </div>
  );
};

export default Product;
