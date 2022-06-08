

import React from 'react'
import './Pay.css'
import { CreditCardInput, LiteCreditCardInput } from "react-native-credit-card-input";
import {useState} from 'react';
const Pay =()=>{

    const [onChangee , setOnChangee] = useState({});


    
return (
<div>
<CreditCardInput onChange={(obj)=>{onChangeHandler(obj)}} />
</div>
)


}



export default Pay;