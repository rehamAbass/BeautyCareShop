import './myCart.css'
import React from 'react'
import Card from './cartProduct/cartProduct.jsx'
import { useState } from 'react'

const Cart = ({ sum, group, addProduct, deleteProduct, decreaseProduct  , handleSumCount}) => {

        const [paid, setPaid] = useState(false);
        const handlePaid = (val) => {
                setPaid(val);
            }
            //--------------------------------------
    return (    
        <div className='allComp' >
              <h2> sum to pay: { sum } $ </h2>
            {(paid === true)&& 
            <h2 style={{ color: 'lightBlue', fontSize: 'xx-large' }}>
                THANK YOU MAN, PAID SUSSESSFULLY💳👍🏼👍🏼
            </h2>}
            {(paid === false) &&
            <button className='paybtn'
                onClick={() => { handlePaid(true); handleSumCount(true); }}>
                💳 PAY MAN ! she deserve it 💋 </button>}
           {(paid === false) &&
            <div className='myCart' > {
                group.map((p, index) => (<
                                Card key = { index }
                                product = { p }
                                addProduct = { addProduct }
                                deleteProduct = { deleteProduct }
                                decreaseProduct = { decreaseProduct }
                                />)
                            )
            }
            </div>}

            </div>
                    )
                }


                export default Cart;