import React from "react";
import logo from "../../ema-john-simple-resources-master/images/logo.png";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartArrowDown } from "@fortawesome/free-solid-svg-icons";

const Header = (props) => {
  return (
    <div>
      <div className="img-container">
        <img className="logoImg" src={logo} alt="" />
      </div>
      <div className="navigation-conatiner">
        <ul>
          <li>
            <a href="/Shop">Shop</a>
          </li>
          <li>
            <a href="/Review">Order Review</a>
          </li>
          <li>
            <a href="/Inventory">Manage Inventory Here</a>
          </li>
        </ul>
      </div>
      <div className="search-box">
        <input className="search" type="search" name="searchBox" id="search" placeholder="Search Your Iteam " />
        <span className="search-with-shoppping-cut">
          <a href="/#">
            <FontAwesomeIcon className="shopping-cut" icon={faCartArrowDown} />
            <span className="total-cut"> {props.totaoCut}</span>
          </a>
        </span>
      </div>
    </div>
  );
};

export default Header;
