
import CartItems from "./CartItems";
import React from "react";
import classes from './Cart.module.css';

import Modal from "./Modal";
import { Button } from "react-bootstrap";
   const cartElements = [
    {
    title: 'Colors',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    quantity: 2,  
    }, 
    {  
      title: 'Black',   
      price: 50,  
      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png', 
      quantity: 3,
      
      },
      {
      title: 'Yellow',
      price: 70,
      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
      quantity: 1,
      },  
    ]
 
 const Cart = (props) => {

    const cartitems = cartElements.map(item => (
        <CartItems 
          key={item.id} 
          id={item.id}
          title={item.title} 
          price={item.price}
          imageUrl = {item.imageUrl}
          quantity={item.quantity}       
        /> 
      ));

   return (
    <Modal>
     <Button onClick={props.onClose} variant="outline-secondary" className={classes.button}>X</Button>
     <h3 style={{textAlign:'center'}}>Cart</h3>
     <div className={classes.cart}>    
        <span>ITEM</span>  
        <span>PRICE</span>
        <span>QUANTITY</span>
     </div>
      {cartitems}
      <span className={classes['cart-total']}>
        <span>Total</span>
        <span></span>
    </span>
     
    </Modal>

   );

 };

 export default Cart;
