import React from 'react'
import './cartProduct.css'
import { BsPatchPlusFill,BsFillPatchMinusFill } from 'react-icons/bs' 
import {TiDeleteOutline} from 'react-icons/ti'

const Card = ({ product ,addProduct,deleteProduct, decreaseProduct}) => {
    const { id, name,  price,
        image_link, product_link, 
        rating ,amount} = product;
    return (
        <div
            className='card-container'
            key={id}>
             <span className='amount'>{amount}</span>
                <h6 
                style={{margin:'1px', fontSize:'x-large'}}>
                Price : { price}$
                 
            </h6>
            <h5 style={{fontSize:'x-large'}}>{name}
            </h5>
           <span>
            <BsPatchPlusFill className='plusBtn'
                onClick={() => {
                    addProduct(product);
                    }}
                 />
                <BsFillPatchMinusFill  className='minusBtn'
                onClick={() => {
                    decreaseProduct(product);
                     }}
                 />
                <TiDeleteOutline  className='deleteBtn'
                onClick={() => {
                    deleteProduct(product);
                     }}
                 />
          </span>
              <img
                alt={name}
                src={image_link}
                style={{ width: '200px' , height:'220px' , alignSelf:'center'}}
            />
                 </div>
    )
}
export default Card;