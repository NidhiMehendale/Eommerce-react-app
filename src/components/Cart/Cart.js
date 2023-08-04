
import React,{ useContext} from 'react';
import CartItems from "./CartItems";
import classes from './Cart.module.css';
import Modal from "./Modal";
import CartContext from '../../store/cart-context';
 
 const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length === 0;


  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({...item,amount:1});
  };

  const onPurchase = (id) => {
    alert('Thanks for your order');
  };
  

  const cartItems = (
    <ul>
      {cartCtx.items.map((item) => (
        <CartItems
          key={item.id}
          title={item.title}
          price={item.price}
          amount={item.amount}
          imageUrl={item.imageUrl}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)} 
        />
      ))}
    </ul>
  );

   
   return (
    <Modal>
     <button onClick={props.onClose} className={classes.button}>X</button>
     <h3 className={classes['cart-text']}>Cart</h3>
      {cartItems}
      {hasItems && <p style={{textAlign:'center'}}>YOUR CART IS EMPTY</p>}
      <div className={classes['cart-total']}>
        <div style={{marginRight:'12px'}}>Total</div>
        <div>{totalAmount}</div>
    </div>
    <div style={{display:'flex',justifyContent:'center'}}>
    {!hasItems &&  <button onClick={onPurchase} className={classes.purchase}>Purchase</button> }
    </div>
    
    </Modal>

   );

 };

 export default Cart;
