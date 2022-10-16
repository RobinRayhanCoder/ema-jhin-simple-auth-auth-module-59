import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Products/Product';
import {addToDb, deleteShoppingCart, getStoredCart} from '../../utilities/fakedb'
import './Shop.css'
import { Link, useLoaderData } from 'react-router-dom';
const Shop = () => {
    const product = useLoaderData();
    const [cart , setCart] = useState([]);
    const clearCart = () =>{
        setCart([]);
        deleteShoppingCart();
    } 

    useEffect(() =>{
        console.log('Local Storage fast line',product);
        const storedCart = getStoredCart();
        const saveCart = [];
        for(const id in storedCart){
            const addedProduct = product.find(product=>product.id === id);
            if(addedProduct){
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                // console.log(addedProduct);
                saveCart.push(addedProduct);
            }
        }
        setCart(saveCart);
        // console.log('Local storage finished')
    },[product])    
       

    const handelAddToCart= (selectedProduct)=>{
        // console.log(product);
        let newCart = [];
        const exists = cart.find(product => product.id === selectedProduct.id);
        if(!exists){
            selectedProduct.quantity= 1;
            newCart= [...cart , selectedProduct];
        }
        else{
            const rest = cart.filter(product => product.id !== selectedProduct.id);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, exists];
        }
      
         setCart(newCart);
         addToDb(selectedProduct.id);
         }

    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    product.map(product=><Product 
                        key={product.id}
                        product={product}
                        handelAddToCart ={handelAddToCart}
                        ></Product>)
                }
            </div>
            <div className="cart-container">
              <Cart clearCart={clearCart} cart ={cart}>
                <Link to="/orders"><button>Review Order</button></Link>
              </Cart>
            </div>
        </div>
    );
};

export default Shop;