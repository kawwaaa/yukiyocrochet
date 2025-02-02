import React from "react";
import patterns from "./assets/patterns.png"
import './ShopPatterns.css';
import products from "./Products.json"
import ProductCard from "./ProductCard";
import topic from "./assets/topic.png"


const ShopPatterns=()=>{
    return(
        <div className="backgroundpage">
            <div className="content1">
                <img src={topic} alt="topic" />
            </div>
        <div className="patterntopic">
            <img src={patterns} alt="patterns" />
            
        </div>
        <div className="products">
            {products.map(product =>{
                return <ProductCard
                    image={product.image}
                    productname={product.name}
                    price={product.price}
                />
            })}

        </div>
        </div>

    );

};
export default ShopPatterns;