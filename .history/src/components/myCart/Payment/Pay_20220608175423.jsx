

import React from 'react'
import './Pay.css'

import {useState} from 'react';

const Pay =( handlePaid, handleSumCount)=>{
    const [confirmed , setconfirmed] = useState({});
    const handler =(obj)=>{
         setconfirmed(obj);
        }
 //-------------------------------
return (
    <div >
       {(paid == true)&& 
            <h2 
            style={{ fontSize: 'x-large' }}>
                THANK YOU MAN, PAID SUSSESSFULLY💳👍🏼👍🏼
            </h2>}


    <form id="cc-form" >  
    <input type="password" className='inputt'
    name="number" placeholder='**** **** **** ****'/>
    <input type="text" name="name"
    className='inputt' placeholder='Full Name'/>
    <input type="date" className='inputt'
    name="expiry" placeholder='**/****'/>
    <input type="password" className='inputt'
    name="cvc" placeholder='***'/>
     <button className='payy'
                onClick={() => {
                    handlePaid(true);
                     handleSumCount(true);
                      }}>
                 Pay 💳
                 </button>
</form>
    </div>
)

}



export default Pay;