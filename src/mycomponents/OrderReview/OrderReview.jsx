import React, { useState, useEffect } from "react";
import fakeData from "../../ema-john-simple-resources-master/fakeData";
import {
  addToDatabaseCart,
  getDatabaseCart,
  removeFromDatabaseCart,
} from "../../ema-john-simple-resources-master/utilities/databaseManager";
import ReviewIteam from "../ReviewIteam/ReviewIteam";
import "./OrderReview.css";
import Cut from "../Cut/Cut";

const OrderReview = () => {
  const [Cuts, setCut] = useState([]);

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

  // Incress Iteam
  const onHendelIncress = (id) => {
    const product = Cuts.find((x) => x.key === id);
    const count = product.quentity + 1;
    product.quentity = count;
    const allProduct = Cuts.filter((x) => x.key !== id);

    const newProduct = [...allProduct, product];
    setCut(newProduct);
    addToDatabaseCart(id, count);
  };

  // remove product

  const hendelProduct = (id) => {
    removeFromDatabaseCart(id);
    const remainningProduct = Cuts.filter((x) => x.key !== id);
    setCut(remainningProduct);
  };

  const totalIteam = Cuts.reduce((total, current) => {
    return total + current.quentity;
  }, 0);
  return (
    <div className="order-review-Container">
      <div>
        <h1>Total Iteam: {totalIteam}</h1>

        {Cuts.map((x) => (
          <ReviewIteam onHendelIncress={onHendelIncress} hendelProduct={hendelProduct} key={x.key} product={x}></ReviewIteam>
        ))}
      </div>
      <div className="review-card-Container">
        <Cut cut={Cuts}></Cut>
      </div>
    </div>
  );
};

export default OrderReview;
