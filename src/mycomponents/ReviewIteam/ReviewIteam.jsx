import React from "react";
import "./ReviewIteam.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";

const ReviewIteam = (props) => {
  const { key, img, name, price, quentity, seller } = props.product;

  return (
    <div className="review-iteam-container">
      <div className="productDtails">
        <h3>{name}</h3>
        <img src={img} alt="" srcset="" />
        <p>Seller : {seller}</p>
        <p>Price: {price}</p>

        <button onClick={() => props.onHendelIncress(key)} className="product-button">
          Incress Quentity
        </button>

        <h3>Quentity: {quentity}</h3>
        <button className="product-button">Decress Quentity</button>

        <button onClick={() => props.hendelProduct(key)} className="product-button removeButton">
          <FontAwesomeIcon className="delete-shopping-cut" icon={faTimesCircle} />
        </button>
      </div>
    </div>
  );
};

export default ReviewIteam;
