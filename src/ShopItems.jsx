import React from "react";
import items from "./assets/items.png"
import './ShopItems.css';
import products from "./Products.json"
import ProductCard from "./ProductCard";
import topic from "./assets/topic.png"



const ShopItems=()=>{
    return(
        <div className="backgroundpage">
            <div className="content1">
                <img src={topic} alt="topic" />
            </div>
        <div className="itemtopic">
            <img src={items} alt="items" />
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
export default ShopItems;