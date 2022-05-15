import React from "react";
import { Link } from "react-router-dom";
import { AuthStatus } from "../AuthProvider";

const Layout = ({ children }) => {
  return (
    <>
      <AuthStatus />

      <div className="layout">
        <h1>Layout</h1>

        <ul className="menu">
          <li>
            <Link className="menu-item" to="/login">
              Login
            </Link>{" "}
            |{" "}
            <Link className="menu-item" to="/home">
              Home
            </Link>
          </li>
        </ul>

        <div>{children}</div>
      </div>
    </>
  );
};

export default Layout;
