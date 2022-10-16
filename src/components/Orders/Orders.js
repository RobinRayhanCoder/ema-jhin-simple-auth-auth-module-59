import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';

const Orders = () => {
    const {Products , initialCart} = useLoaderData();  //{Products: Products, initialCart: initialCart}
    const [cart , setCart] = useState(initialCart);
    const handleRemoveItem = (id) =>{
        const remaining = cart.filter(products => products.id !==id);
        setCart(remaining);
        removeFromDb(id);
    }
    const clearCart = () =>{
        setCart([]);
        deleteShoppingCart();
    } 
    return (
        <div className='shop-container'>
            <div className="order-container">
                {
                    cart.map(products => <ReviewItem 
                        key={products.id}
                         products ={products}
                         handleRemoveItem = {handleRemoveItem}
                         ></ReviewItem>)
                }
                {
                    cart.length === 0 && <h2>No Items For Review . Please <Link to="/"> Shop More</Link></h2>
                }
            </div>

            <div className="cart-container">
            <Cart clearCart={clearCart} cart ={cart}></Cart>
            </div>

        </div>
    );
};

export default Orders;