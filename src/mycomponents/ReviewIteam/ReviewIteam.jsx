import "./ReviewIteam.css";

import React from "react";

const ReviewIteam = (props) => {
  const { key, img, name, price, quentity, seller } = props.product;

  return (
    <div className="review-iteam-container">
      <div>
        <h3>{name}</h3>
        <img src={img} alt="" srcset="" />
        <p>Seller : {seller}</p>
        <p>Price: {price}</p>
        <h3>Quentity: {quentity}</h3>
        <button onClick={() => props.hendelProduct(key)} className="product-button">
          Remove Product
        </button>
      </div>
    </div>
  );
};

export default ReviewIteam;
