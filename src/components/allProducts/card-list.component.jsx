
import './card-list.css'
import Card from './prod/card.component'
import React from 'react'

const CardList = ({ group ,addProduct}) => {
    return (
        <div className='card-list'>
            {group.map((p,i) => 
                (
                    <Card
                    key={i} 
                    product={p}
                     addProduct={addProduct}/>
                )
            )
            }
        </div >

    )
}

export default CardList;

