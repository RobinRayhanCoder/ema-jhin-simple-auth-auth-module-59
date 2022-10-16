import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './Product.css'

const Product = (props) => {
    const {name, img, price ,ratings, seller} =props.product;
   
    return (
        <div className='product'>
            <img src={img} alt="" />
         <div className='product-info'>
            <p className='productName'>{name}</p>
            <p>Price :$ {price}</p>
            <p><small>Seller: {seller}</small></p>
            <p><small>Rating : {ratings} stars</small></p>
         </div>
         <button onClick={()=>props.handelAddToCart(props.product)} className='btn-cart'>
             <h4 className='btn-text'>Add to Cart</h4>  
             <FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon>   
         </button>
        </div>
    );
};

export default Product;