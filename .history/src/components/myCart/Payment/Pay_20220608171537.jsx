

import React from 'react'
import './Pay.css'

import {useState} from 'react';
const Pay =()=>{
    const [onChangee , setOnChangee] = useState({});
    const onChangeHandler =(obj)=>{
        setOnChangee(obj);
        }
 //-------------------------------
return (
    <div>
    <form id="cc-form">
    <input type="password" name="number" placeholder='**** **** **** ****'/>
    <input type="text" name="name" placeholder='Full Name'/>
    <input type="date" name="expiry" placeholder='**/****'/>
    <input type="password" name="cvc" placeholder='***'/>
</form>
    </div>
)

}



export default Pay;