

import React from 'react'
import './Pay.css'

import {useState} from 'react';
const Pay =(handlePaid, handleSumCount)=>{
    const [onChangee , setOnChangee] = useState({});
    const onChangeHandler =(obj)=>{
        setOnChangee(obj);
        }
 //-------------------------------
return (
    <div>
    <form id="cc-form">
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
                 </button>}
</form>
    </div>
)

}



export default Pay;