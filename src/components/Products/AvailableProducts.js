import React from "react";
import ProductItems from "./ProductItems";
import  './AvailableProducts.module.css';



const productsArr = [
  {
    id: 1,
    title: 'Album 1',
    price: 100,  
    imageUrl : 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
  },
  {
    id: 2,
    title: 'Album 2',
    price: 50,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
  },
  {
    id: 3,
    title: 'Album 3',
    price: 70,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
  },
  {
    id: 4,
    title: 'Album 4',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
    
  },
];

const AvailableProducts = (props) => {

  const productsList = productsArr.map(prod => (
    <ProductItems 
      key={prod.id} 
      id={prod.id}
      title={prod.title} 
      price={prod.price}
      imageUrl={prod.imageUrl}
    /> 
  ));

  return (
    <section>    
     
    <div id="music" style={{textAlign:'center'}}>
      <h2>MUSIC</h2>
    </div>
      <ul>
        {productsList}
      </ul>     
    </section>
  );
};

export default AvailableProducts;
