

import React from 'react'
import {
  CardHolder,
  CardNumber,
  CardSecurityCode,
  ValidThruMonth,
  ValidThruYear,
} from 'react-credit-card/form' 


import Card from "react-credit-card/card";


const Pay =()=>{

return (
<div>
<Card />
<form>
    <CardNumber placeholder="Card Number" />
    <CardHolder placeholder="Card Holder" />
    <ValidThruMonth />
    <ValidThruYear />
    <CardSecurityCode placeholder="CVV" className="input-text semi" />
    <button>Submit</button>
</form>
</div>
)


}



export default Pay;