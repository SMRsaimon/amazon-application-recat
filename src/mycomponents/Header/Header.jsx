import React from "react";
import logo from "../../ema-john-simple-resources-master/images/logo.png";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartArrowDown } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <div>
      <div className="img-container">
        <img className="logoImg" src={logo} alt="" />
      </div>
      <div className="navigation-conatiner">
        <ul>
          <li>
            <Link to="/Shop">Shop </Link>
          </li>
          <li>
            <Link to="/Review">Order Review</Link>
          </li>
          <li>
            <Link to="/Inventory">Manage Inventory Here</Link>
          </li>
        </ul>
      </div>
      <div className="search-box">
        <input className="search" type="search" name="searchBox" id="search" placeholder="Search Your Iteam " />
        <span className="search-with-shoppping-cut">
          <Link to="/">
            <FontAwesomeIcon className="shopping-cut" icon={faCartArrowDown} />
            <span className="total-cut"> {props.totaoCut}</span>
          </Link>
        </span>
      </div>
    </div>
  );
};

export default Header;
