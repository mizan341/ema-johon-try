import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const cart = props.cart;
    const totalPrice = cart.reduce((total, pro)=>total+pro.price, 0);
    let total = totalPrice.toFixed(2);
    // let total = 0;
    // for (let i = 0; i < cart.length; i++) {
    //     const product = cart[i];
    //     let total1 = (total + product.price);
    //     total = total1.toFixed(2);
    //  }
     let tax = (total*0.10).toFixed(2)
    
     let before = Number(total) + Number(ship(total));
     let beforeTax = before.toFixed(2);
    let grand = Number(total) + Number(ship(total)) + Number(tax);
    let grandTotal = grand.toFixed(2);
    return (
        <div>
            <h3>Order Summery</h3>
            <p>Items ordered: {cart.length}</p>
            <p>Items Price: {total}</p>
            <p>Shipping Cost: {ship(total)}</p>
            <p>Before Tax: {beforeTax}</p>
            <p>Tax+Vat: {tax}</p>
            <h4>Grand Total: {grandTotal}</h4>
            <button className='review-button'>Review Your Order</button>

        </div>
    );
};
function ship(tt) {
    let shipping = 0;
    if (tt > 50) {
        shipping = 0;
    } else if (tt > 30) {
        shipping = 4.99;
    } else if (tt > 15) {
        shipping = 12.99;
    }
    return shipping.toFixed(2);
}

export default Cart;