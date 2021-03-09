import React, { useState, useEffect } from "react";
import "./BodyContent.css"
import Header from "../Header/Header"
import fakeData from "../../ema-john-simple-resources-master/fakeData"

import Cut from "../Cut/Cut"
import Shop from "../Header/Shop/Shop";
import { addToDatabaseCart, getDatabaseCart } from "../../ema-john-simple-resources-master/utilities/databaseManager";

const BodyContent = () => {
  const [products, setProducts] = useState(fakeData.slice(0, 50));
  const [cut, setCut] = useState([]);

  useEffect(() => {
    const saveCart = getDatabaseCart()
    const productKeys = Object.keys(saveCart)
    const previousCut = productKeys.map(pdkey => {
      const product = fakeData.find(x => x.key === pdkey)
      product.quentity = saveCart[pdkey]

      return product
    })
    setCut(previousCut)

  }, []);



  // on hendel chnage and send data to local storage 
  const onHendelChange = (product) => {
    const sameProduct = cut.find((pd) => pd.key === product.key)
    let count = 1;
    let newCart;
    if (sameProduct) {
      count = product.quentity + 1;
      product.quentity = count;
      const otherProduct = cut.filter(x => x.key !== product.key)
      newCart = [...otherProduct, sameProduct]
    } else {

      product.quentity = count;
      newCart = [...cut, product]
    }


    setCut(newCart);
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