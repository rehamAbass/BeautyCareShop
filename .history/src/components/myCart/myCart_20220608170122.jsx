import './myCart.css'
import React from 'react'
import Card from './cartProduct/cartProduct.jsx'
import { useState } from 'react'

import Pay from './Payment/Pay'


const Cart = ({ sum, group, addProduct, deleteProduct, decreaseProduct  , handleSumCount}) => {
        
        const [confirmed, setConfirmed] = useState(false);
        const [paid, setPaid] = useState(false);
        const handlePaid = (val) => {
                setPaid(val);
            }
            //--------------------------------------
    return (    
        <div className='allComp' >
              <h2 className='sum'> Sum to pay =  { sum } $ </h2>
            {(paid === true && confirmed == true)&& 
            <h2 
            style={{ fontSize: 'x-large' }}>
                THANK YOU MAN, PAID SUSSESSFULLY💳👍🏼👍🏼
            </h2>}
            {((paid === false) &&(sum > 0) &&(confirm === false))&&
            <button className='payy'
                onClick={() => {
                    handlePaid(true);
                    //  handleSumCount(true);
                      }}>
                 Payment 💳</button>}
                 
                 {(paid === true)&&<Pay  
                     onClick={() => {handleSumCount(true);}}
                 />
                 }
                 
           
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