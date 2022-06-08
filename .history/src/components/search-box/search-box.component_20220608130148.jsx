
import React from 'react'
import './search-box.css'


const SearchBox = ({ className, placeholder, searchHandler, group }) => {

    return (
        <div className='search-box'>
            <input
                className={className}
                type='search'
                placeholder='Search Products'
                onChange={searchHandler}
                style={{
                     fontStyle:'unset', fontStretch: 'extra-expanded'
                , fontSize:'large', borderRadius:'15%'}}
            />
            {group.length === 0 ?
                <div className='alert2'> NO Products with this prefix </div> : ''}
        </div>
    )
}


export default SearchBox;