import React from 'react'
import './cartProduct.css'
import { BsPatchPlusFill,BsFillPatchMinusFill } from 'react-icons/bs' 
import {TiDeleteOutline} from 'react-icons/ti'

const Card = ({ product ,addProduct,deleteProduct, decreaseProduct}) => {
    const { id, name,  price,
        image_link, product_link, 
        rating } = product;
    return (
        <div
            className='card-container'
            key={id}>
            <h1 style={{fontSize:'xx-large'}}>{name}</h1>

            <h1>Price : { price}$ 
           
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
            </h1>
              <img
                alt={name}
                src={image_link}
                style={{ width: '200px' , height:'220px' , alignSelf:'center'}}
            />
            <a href={product_link} style={{color:'blue'}}> for more details</a>
         </div>
    )
}
export default Card;