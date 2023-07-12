import React, {useContext} from 'react';

import CartContext from "../store/cart-context";
import ProductForm from './ProductForm';

import classes from './ProductItems.module.css';

const ProductItems = (props) => {
  const cartCtx = useContext(CartContext);

  const price = `$${props.price.toFixed(2)}`;
  
  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      title : props.title,
      amount :amount,
      price: props.price,
    })
 };

    return (
     <div className={classes['container-grid']}>    
         <li>     
             <h3>{props.title}</h3>
             <div>
               <img src={props.imageUrl} alt={props.title} />
             </div>
             <div>
             <span>{price}</span> 
             </div>
             <div>
             <ProductForm  onAddToCart={addToCartHandler}/>       
             </div>     
         </li>
     </div>
  
    );
   

};

export default ProductItems;