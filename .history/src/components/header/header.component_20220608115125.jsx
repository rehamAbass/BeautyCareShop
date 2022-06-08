import React from 'react'
import './header.css'
import Music from './music/music.component';
import fatme from './fatme.jpeg'
import CartIcon from './cartIcon/cartIcon.component';
import {BsWhatsapp} from 'react-icons/bs'
import {AiTwotoneShop} from 'react-icons/ai'

const Header = ({counter, handleCart}) => {
    return (
        <div className='headClass'>
            <img className='myImg' src={fatme} alt='me'
            />
            <AiTwotoneShop 
                onClick={() => { 
                     handleCart(false)}}
            />
            <h4 className='title' >
                <marquee direction='left' loop='2' >Fatima Beauty Care Shop</marquee>
            </h4>
            <CartIcon 
            counter={counter}
             handleCart={handleCart}  
            /> 

            <Music />


            <a  className='whatsApp'  aria-label="whats"
                target="_blank" rel="noopener"
                href="https://api.whatsapp.com/send?phone=972543656019&text=hello%20Fatima%20from%20your%20BeautyCareShop%20Website%20💄"
              >
              <BsWhatsapp/>
            </a>
        </div>
    )
}

export default Header;


