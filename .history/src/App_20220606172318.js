
// import React from 'react'
import CardList from './components/allProducts/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import './App.css'
import axios from "axios";
import React, { Component } from "react";
import Header from './components/header/header.component.jsx'
import { useState, useEffect } from 'react';
import Cart from './components/myCart/myCart.jsx'

const App = () => {
  const [products, setProducts] = useState([]);
  const [cartProducts, setCartProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [searchString, setSearchString] = useState('');
  const [showCart, setShowCart] = useState(false);
    const [cartCounter, setCartCounter] = useState(0);
      const [Sum, setSum] = useState(0);

  //==========================================================================
    getDataFromDB= async ()=> {
    const response = await axios.get("http://localhost:8000/products");
    setCartProducts(response);
  }   
  //===========================================================
  deleteProd = async (id) => {
    let response = await axios.delete(
      `http://localhost:8000/product/${id}`
    );
  }
  //=============================================================
  saveProd = async (p) => {  
    const response = await axios.post(
      "http://localhost:8000/product",p
    );
  }

    updateProd = async (p) => {  
    const response = await axios.put(
      "http://localhost:8000/product",p
    );
  }
  //============================================================================
  useEffect(() => {
    fetch('http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline')
      .then((res) => res.json())
      .then((users) => {
       
        users = users.map(user => (
         {id:user.id,
         name:user.name,
         brand:user.brand,
         price:user.price,
        image_link:user.image_link,
         product_link:user.product_link,
         description:user.description,
        rating:user.rating,
         product_type:user.product_type,
          product_api_url:user.product_api_url,
          product_colors:user.product_colors,
        amount:0
         }))
       
      }).then(() => {
       await getDataFromDB();
        setFilteredProducts(users);
        setProducts(users);
      })
  }, []); // it runs only one time - no need to call it in each render because [] is empty !!
  //=========================================================================================
  useEffect(() => {
    let filteredgroup = products.filter((p) => p.name.toLowerCase().includes(searchString));
    setFilteredProducts(filteredgroup);
  }, [products, searchString])

  //========================================================================================
  const onSearchChanged = (event) => {
    let input = event.target.value.toLowerCase();
    setSearchString(input);
  }
  //=========================================================================================
  const addProduct=(product)=>{
        let updatePro = cartProducts.filter(p=> p.id === product.id);
     if(updatePro.length>0){
       // it means that YES the product exists before in Cart! just increase the amount of it:
       updatePro = updatePro[0];
       updatePro.amount +=1;
        let newarray = cartProducts.map(p=>( p.id === product.id ? updatePro:p )) ;
        setCartProducts(newarray);
     }else{
        let newProductToAdd = {...product, amount:1};
         setCartProducts([...cartProducts,newProductToAdd ]);
         saveProd(product);
         updateProd();
     }
     
      }
  //=================================================================================
  //    , 
  const deleteProduct = (product) => {
    let newArr = cartProducts.filter(p => p.id !== product.id);
    setCartProducts(newArr);
    deleteProd(product.id);
  }
 //===================================================================================
   const decreaseProduct=(product)=>{
       
     if(product.amount >1){
       let update = product;
       update.amount -=1;
        let newarray = cartProducts.map(p=>(p.id === product.id ? update:p )) ;
     setCartProducts(newarray);
     }else{ // amount was  === 1 
        let newArr = cartProducts.filter(p=> p.id !== product.id);
         setCartProducts([newArr ]);
     }
      }
 //===================================================================================
useEffect(()=>{
  console.log("useEffect, cartProduct changes, so counter changes");
  let all =0;
  let summ=0;
  for(let p of cartProducts){ 
     all = all+p.amount;
    summ = summ+ (p.amount * p.price);
}
    setSum(summ);
    setCartCounter(all);
},[cartProducts]);

//====================================================================================
  useEffect(()=>{
    console.log("open Cart = ",showCart);
  },[showCart])
 //=========================================================================================
const HandleCart =(val)=>{
  setShowCart(val);
}
 
 //=========================================================================================
  return (
    <div className="App">
      <header className="App-header">
        <Header counter ={cartCounter} handleCart = {HandleCart}/>
        {showCart === false && 
          <div>
           <SearchBox
          className='search-box2'
          searchHandler={onSearchChanged}
          group={filteredProducts}
        />
            <CardList
              group={filteredProducts}
               addProduct={addProduct} />
        </div>
        
        }
          {(showCart === true) &&
            <Cart sum ={Sum} group={cartProducts}
           addProduct={addProduct}
            deleteProduct={deleteProduct}
            decreaseProduct={decreaseProduct}/>
          }
      </header>
    </div>
  )
}

export default App;
