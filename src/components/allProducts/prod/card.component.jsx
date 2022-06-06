import React from 'react'
import './card.css'
import { BsCircleFill,BsPatchPlusFill } from 'react-icons/bs' 

const Card = ({ product ,addProduct}) => {
    const { id, name, brand, price,
        image_link, product_link, description,
        rating, product_type, product_api_url,product_colors } = product;
    return (
        <div
            className='card'
            key={id}>
            <h3 style={{fontSize:'x-large'}}>{name}</h3>
            <h3 style={{fontFamily:'Helvetica Neue'}}>Price : { price}$ 
            <BsPatchPlusFill className='plusbBtn'
                onClick={() => {
                    addProduct(product);}}
            />
            </h3>
              <img
                alt={name}
                src={image_link}
                style={{ width: '230px' , height:'200px' , alignSelf:'center'}}
            />
         
            <p>{description}</p>
            <p  style={{  fontFamily:'Helvetica Neue',
             fontSize:'small'}} >
            {product_colors.length > 0 ? ' Available Colors :' :''}
            
            {product_colors.length > 0 && product_colors.map(
                (color, i) => (
                    <span key={i} style={{flexDirection:'row'}}>
                    <BsCircleFill
                            style={{ color: color.hex_value }} />
                    </span>
                )
                )}
                </p>
            <a href={product_link} 
             style={{ color: 'blue', fontFamily:'Helvetica Neue',
             fontSize:'small'}}>more Info..</a>
        </div>
    )
}
export default Card;