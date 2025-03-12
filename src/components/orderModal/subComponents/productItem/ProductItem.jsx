import React from "react";
import "./productItem.css";
const ProductItem = ({ id, name, price, quantity }) => {
  return (
    <li key={id} className="container-item">
      <span className="item-name">• {name}</span>
      <div className="container-price">
        <span className="item-quantity">x{quantity}</span>
        <span>${Number(price) * Number(quantity)}</span>
      </div>
    </li>
  );
};

export default ProductItem;
