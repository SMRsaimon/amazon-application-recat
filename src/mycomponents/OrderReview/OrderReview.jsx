import React, { useState, useEffect } from "react";
import fakeData from "../../ema-john-simple-resources-master/fakeData";
import { getDatabaseCart, removeFromDatabaseCart } from "../../ema-john-simple-resources-master/utilities/databaseManager";
import ReviewIteam from "../ReviewIteam/ReviewIteam";
import "./OrderReview.css";

const OrderReview = () => {
  const [Cut, setCut] = useState([]);
  // load data and find target product
  useEffect(() => {
    const saveCard = getDatabaseCart();
    const productkey = Object.keys(saveCard);

    const addCard = productkey.map((pd) => {
      const product = fakeData.find((x) => x.key === pd);
      product.quentity = saveCard[pd];
      return product;
    });
    setCut(addCard);
  }, []);

  // remove product

  const hendelProduct = (id) => {
    removeFromDatabaseCart(id);
    const remainningProduct = Cut.filter((x) => x.key !== id);
    setCut(remainningProduct);
  };

  const totalIteam = Cut.reduce((total, current) => {
    return total + current.quentity;
  }, 0);
  return (
    <div>
      <h1>Total Iteam: {totalIteam}</h1>

      {Cut.map((x) => (
        <ReviewIteam hendelProduct={hendelProduct} key={x.key} product={x}></ReviewIteam>
      ))}
    </div>
  );
};

export default OrderReview;
