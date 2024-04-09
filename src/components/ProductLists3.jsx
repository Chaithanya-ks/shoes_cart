import React from "react";
import "./shop11.css";

const ProductLists3 = (props) => {
  const handleAddToCart = (id) => {
    console.log(id);
  };
  return (
    <div className="product-card ">
      <h3>{props.name}</h3>
      <p>{props.description}</p>
      <p>Price: ${props.price}</p>
      <img src={props.imageUrl} className="product-image" />
      <button className="addbtn" onClick={() => handleAddToCart(props.id)}>
        Add to Cart
      </button>
    </div>
  );
};

export default ProductLists3;
