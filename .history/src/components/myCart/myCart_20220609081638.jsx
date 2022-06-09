import './myCart.css'
import React from 'react'
import Card from './cartProduct/cartProduct.jsx'
import { useState } from 'react'

import Pay from './Payment/Pay'


const Cart = ({ sum, group, addProduct, deleteProduct, decreaseProduct  , handleSumCount}) => {

        const [paid, setPaid] = useState(false);
        const handlePaid = (val) => {
                setPaid(val);
            }
const [confirm, setcon] = useState(false);
        const done = (val) => {
                setcon(val);
            }

            //--------------------------------------
    return (    
        <div className='allComp' >
            <h2 className='sum'> { sum } $ </h2>
                 {(confirm === true)&& <h2 
                    style={{ fontSize: 'x-large' }}>
                    THANK YOU MAN, PAID SUSSESSFULLY💳👍🏼👍🏼
                </h2>}

                 {(confirm === false)&&
                 <Pay
                 done={done}
                     handlePaid={ handlePaid}
                      handleSumCount={handleSumCount}
                 />}

                 {(confirm === false)&&<button className="payy"
                 onClick={()=>{done(true);
                     handlePaid(true);
                     handleSumCount(true);
          }}
                 >Pay 💳 </button>
            
           {(paid === false && (confirm === false)) &&
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