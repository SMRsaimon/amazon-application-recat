import React, { useState } from "react";
import "./BodyContent.css"
import Header from "../Header/Header"
import fakeData from "../../ema-john-simple-resources-master/fakeData"

import Cut from "../Cut/Cut"
import Shop from "../Header/Shop/Shop";
import { addToDatabaseCart } from "../../ema-john-simple-resources-master/utilities/databaseManager";

const BodyContent = () => {
  const [products, setProducts] = useState(fakeData.slice(0, 50));
  const [cut, setCut] = useState([]);

  const onHendelChange = (product) => {

    const newCut = [...cut, product];
    setCut(newCut);
    const sameProduct = newCut.filter((pd) => pd.key === product.key)
    let count = sameProduct.length

    addToDatabaseCart(product.key, count)
  };
  return (

    <div className="main-container">

      <div className="main-body">
        <div className="body-product">
          {products.map((product) => (
            <Shop disableAdtoCut={true} onHendelChange={onHendelChange} products={product}></Shop>
          ))}
        </div>
        <div className="order-summary">
          <Cut cut={cut}></Cut>

        </div>
      </div>

    </div>
  );
};

export default BodyContent;