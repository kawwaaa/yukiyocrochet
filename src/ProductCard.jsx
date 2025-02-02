import React from 'react';
import "./ProductCard.css"

const ProductCard = ({image,productname,price}) => {
  return (



    <div className="productcard">
        <img src={image} alt="" />
        <h3>{productname}</h3>
        <p>USD {price}</p>
        
    </div>


  );
};

export default ProductCard;