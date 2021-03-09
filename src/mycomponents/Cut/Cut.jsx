import React from "react";
import "./cut.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Cut = (props) => {
  console.log(props);
  let productPrice = props.cut.reduce((total, currentValue) => {
    return total + currentValue.price * currentValue.quentity;
  }, 0);

  // Find quentity

  const totalQuantity = props.cut.reduce((total, current) => {
    return (total = total + current.quentity);
  }, 0);
  // delivary charge
  let shipping = 0;
  if (productPrice > 35) {
    shipping = 3.5;
  } else if (productPrice > 15) {
    shipping = 4.45;
  } else if (productPrice > 0) {
    shipping = 15.6;
  }
  const vat = productPrice / 10;

  // convert Number
  const numberConverter = (num) => {
    const convertNumber = num.toFixed(2);
    return Number(convertNumber);
  };

  return (
    <div>
      {props.cut.length > 0 && (
        <>
          <h1 style={{ textAlign: "center", textTransform: "uppercase", textDecoration: "underline" }}>Order Summerey </h1>
          <div className="container">
            <h3>Total Iteam : {props.cut.length}</h3>
            <hr />
            <h4>Total Quentity : {totalQuantity}</h4>
            <hr />
            <h4>Product Price: ${numberConverter(productPrice)}</h4>
            <hr />

            <p>Vat/Text: {numberConverter(vat)}</p>
            <hr />
            <p>Shipping cost :${shipping} </p>
            <hr />

            {/* <h5>Dalivary Charge Total: {numberConverter(shipping)}</h5> */}
            <h4>Total Price: ${numberConverter(productPrice + vat)}</h4>

            <Link to="/Review">
              <button style={{ marginTop: "20px" }} className="product-button">
                <FontAwesomeIcon className="button-shopping-cut" icon={faCartPlus} />
                Review Order
              </button>
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default Cut;
