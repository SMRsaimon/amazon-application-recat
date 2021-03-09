import React from "react";
import { useParams } from "react-router-dom";
import fakeData from "../../ema-john-simple-resources-master/fakeData";
import Shop from "../Header/Shop/Shop";
import "./productDetails.css";

const ProductDetails = () => {
  let { productKey } = useParams();

  const targetProduct = fakeData.find((pd) => pd.key === productKey);

  return (
    <div>
      <Shop disableAdtoCut={false} products={targetProduct}></Shop>
    </div>
  );
};

export default ProductDetails;
