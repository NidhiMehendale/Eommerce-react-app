
import { useContext } from 'react';
import CartItems from "./CartItems";
import React from "react";
import classes from './Cart.module.css';

import Modal from "./Modal";
import { Button } from "react-bootstrap";
import CartContext from '../store/cart-context';
   
 
 const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;


  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({...item,amount:1});
  };

  const cartItems = (
    <ul>
      {cartCtx.items.map((item) => (
        <CartItems
          key={item.id}
          title={item.title}
          price={item.price}
          amount={item.amount}
          imageUrl={props.imageUrl}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
         
        />
      ))}
    </ul>
  );

   

   return (
    <Modal>
     <Button onClick={props.onClose} variant="outline-secondary" className={classes.button}>X</Button>
     <h3 style={{textAlign:'center'}}>Cart</h3>
     <div className={classes.cart}>    
        <span>ITEM</span>  
        <span>PRICE</span>
        <span>QUANTITY</span>
     </div>
      {cartItems}
      <span className={classes['cart-total']}>
        <span>Total</span>
        <span>{totalAmount}</span>
    </span>
     
    </Modal>

   );

 };

 export default Cart;
