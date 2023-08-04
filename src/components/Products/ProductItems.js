import React, {useContext} from 'react';

import CartContext from "../../store/cart-context";
import ProductForm from './ProductForm';
import './ProductItems.module.css';


const ProductItems = (props) => {
  const cartCtx = useContext(CartContext);
 
  const price = `$${props.price.toFixed(2)}`;
  
  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      title : props.title,
      amount :amount,
      price: props.price,
      imageURL: props.imageURL,
    })

    
 };

    return (
     <div>    
         <li>     
             <h3>{props.title}</h3>
             <div>
               <img src={props.imageUrl} alt={props.title} />
             </div>
             <div>
             <span>{price}</span> 
             </div>      
             <ProductForm  onAddToCart={addToCartHandler}/>                
         </li>
     </div>
  
    );
   

};

export default ProductItems;