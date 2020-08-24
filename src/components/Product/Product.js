import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./Product.css";
const Product = (props) => {
    const element = <FontAwesomeIcon icon={faShoppingCart} />;
    return (
         
        <div className = 'product'>
            <div className = 'product-cont'>
                <img src={props.product.img}/>
                <div div className = 'product-name'>
                    <h4>{props.product.name}</h4>
                    <p>By: {props.product.seller}</p>
                    <h3>$ {props.product.price}</h3>
                    <p>only {props.product.stock} left in stock - order soon</p>
                    < button onClick ={()=>props.addHandler(props.product)} className = 'cart-button' >{element}  add to cart </button>
                </div>
            </div>
        </div>
    );
};

export default Product;