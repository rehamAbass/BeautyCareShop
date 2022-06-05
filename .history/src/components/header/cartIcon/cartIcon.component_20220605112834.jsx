import React from 'react'
import './cart.css'
import { BiCart } from  "react-icons/bi";
const CartIcon = ({ counter,handleCart}) => {
    
    return (
        <div className='cart-container'>
            <span className='counter'>{counter}</span>
            <BiCart
                    className='cartIcon'
                    onClick={() => { 
                      handleCart(true);
                     }}
                />
        </div>
    )
}
export default CartIcon;