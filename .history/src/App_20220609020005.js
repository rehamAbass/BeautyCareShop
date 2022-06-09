
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
  const [imgs, setImgs] = useState([])

  //==========================================================================
  const   getDataFromDB= async ()=> {
    const response = await axios.get("http://localhost:8000/products/");
    setCartProducts(response.data);
    console.log("cart in fetch = ", cartProducts);
  }   
  //===========================================================
  const deleteProd = async (id) => {
    let response = await axios.delete(
      `http://localhost:8000/product/${id}`
    );
  }
  //=============================================================
  const saveProd = async (p) => {  
    const response = await axios.post(
      "http://localhost:8000/product",p
    );
  }
  //=============================================
   const  updateProd = async (p) => {  
    const response = await axios.put(
      `http://localhost:8000/product/${p.id}`,p
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
         price:user.price,
        image_link:user.image_link,
         product_link:user.product_link,
         description:user.description,
          product_colors:user.product_colors,
        amount:0
         }))

         getDataFromDB();
        setFilteredProducts(users);
        setProducts(users);
        setImgs(users.map((u)=>(u.image_link)));
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
       updatePro.amount =updatePro.amount +1;
        let newarray = cartProducts.map(p=>( p.id === product.id ? updatePro:p )) ;
        setCartProducts(newarray); 
        updateProd(updatePro);
     }else{
        let newProductToAdd = {...product, amount:1};
        let newCart = [...cartProducts,newProductToAdd ];
         setCartProducts(newCart);
        //  saveProd(product);
        saveProd(newCart);
     }
     getDataFromDB();
      }
  //=================================================================================
  const deleteProduct = (product) => {
    let newArr = cartProducts.filter(p => p.id !== product.id);
    setCartProducts(newArr);
    deleteProd(product.id);
  }
 //===================================================================================
   const decreaseProduct=(product)=>{
     if(product.amount >1){
       let update = product;
       update.amount =update.amount -1;
        let newarray = cartProducts.map(p=>(p.id === product.id ? update:p )) ;
        updateProd(update);
     setCartProducts(newarray);
     }else{ // amount was  === 1 
        let newArr = cartProducts.filter(p=> p.id !== product.id);
         setCartProducts(newArr);

         deleteProd(product.id);
     }
      }
 //===================================================================================
useEffect(()=>{
  let all =0;
  let summ=0;
  console.log("cart in useeffect = ", cartProducts);
  // for(let p in cartProducts){
    cartProducts.map( p =>{ 
     all = all+p.amount;
    summ = summ+ (p.amount * p.price);    
})
let a = summ * 1000; // 82.4325555 => 82432.5555
let b = Math.floor(a); //82432
let c = b/1000;// 82.432
    setSum(c);
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
 const handleSumCount = ()=>{
  setSum(0);
  setCartProducts([]);
  setCartCounter(0);
  
 }
 //=========================================================================================
  return (
    <div className="App">
      <header className="App-header">
        <Header counter ={cartCounter} 
        imgs={imgs}
        handleCart = {HandleCart}/>
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
            decreaseProduct={decreaseProduct}
              handleSumCount={handleSumCount}
            />
          }
      </header>
    </div>
  )
}

export default App;
