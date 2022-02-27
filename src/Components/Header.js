import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <span className="header">Relearning useContext</span>
      <ul className="nav">
        <li className="prod">
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/cart">Cart</Link>
        </li>
      </ul>
    </>
  );
}

export default Header;
