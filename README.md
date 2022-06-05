# steps to run the code :


##   open the terminal by clicking : ctrl + shift + ~

##   press : npm install 

##   press : npm start


import './myCart.css'
import React from 'react'
import Card from './cartProduct/cartProduct.jsx'
import {useState} from 'react'

const Cart =({sum , group,addProduct,deleteProduct, decreaseProduct})=>{

    const [paid , setPaid] = useState(false);
    const handlePaid =(val)=>{
        setPaid(val);
    }
    return(
        <div className='allComp'>
        
         { sum >0 &&  
         <div className='alertPay' >sum to pay :    {sum}$ 
         </div>
         }
           
         {(paid === true) &&
          <h2>
          <h2 style={{color:'lightBlue' , fontSize:'xx-large'}} >
                       THANK YOU MAN , PAID SUSSESSFULLY 💳👍🏼👍🏼 
          </h2>
          }
        
          }
         {(paid === false && sum >0 )&&
             <button   className='paybtn'
               onClick={()=>{handlePaid(true)}}> 
               💳PAY MAN ! SHE DESERVE IT 
             </button>
           }
        {group.length === 0 && 
        <div className='alert1'> EMPTY Cart 
        </div> 
        }
        
          <div className='myCart'>
           {group.map((p,index)=>(
              <Card
                 key ={index}
                 product={p} 
                 addProduct={addProduct}
                 deleteProduct={deleteProduct} 
                 decreaseProduct={decreaseProduct}
              />)
            )}
         </div>
      </div>
    )}


export default Cart;#   B e a u t y C a r e S h o p  
 