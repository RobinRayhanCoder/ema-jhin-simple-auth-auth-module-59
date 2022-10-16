import React from 'react';
import './Cart.css'
const Cart = ({cart ,clearCart, children}) => {
    // const {cart} = props;
    console.log(cart);
    let total = 0;
    let Shipping = 0;
    let quantity = 0;
    for(const product of cart){
        quantity =quantity + product.quantity;
        total = total + product.price * product.quantity;
        // console.log( total);
        Shipping = Shipping +product.shipping;
    }
    const tax =  parseFloat((total * 0.1).toFixed(2));
    // console.log(typeof tax)
    const grandTotal = total + Shipping +tax;
    return (
        <div className='cart'>
              <h3>Order Summary</h3>
                <p>Selected Items : {quantity}</p>
                <p>Total Price : $ {total}</p>
                <p>Total Shipping : {Shipping}</p>
                <p>Tax :{tax} </p>
                <h4>Grand Total : {grandTotal.toFixed(2)} </h4>
                    <button onClick={clearCart}>Clear All</button>
                    <br /><br />
                    {children}
                
        </div>
    );
};

export default Cart;