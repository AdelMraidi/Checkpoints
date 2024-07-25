import React from "react";
import product from "../product";

const Image = () => {
  return (
    <div>
      <img src={product.link} alt="product" />
    </div>
  );
};

export default Image;
