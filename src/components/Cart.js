
import React,{ useContext, useEffect} from 'react';
import CartItems from "./CartItems";
import classes from './Cart.module.css';
import Modal from "./Modal";
import CartContext from '../store/cart-context';
import AuthContext from '../store/auth-context';

 
 const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const authCtx = useContext(AuthContext);

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
  
  // useEffect(() => {
  //   console.log('useeffect of cart')
  //   // Function to add cart items to the backend service when the user adds a product to the cart
  //   const addCartItemsToBackend = async () => {
  //     try {
  //       await fetch(`https://crudcrud.com/api/aebab6f1cc4746f7ac3b15153ac50d00/cart/${encodeURIComponent(authCtx.idToken)}`, {
  //         method: 'POST',
  //         headers: {
  //           'Content-Type': 'application/json',
  //         },
  //         body: JSON.stringify(cartCtx.items),
  //       });
  //     } catch (error) {
  //       console.error('Error while adding cart items to backend:', error);
  //     }
  //   };

  //   addCartItemsToBackend();
  // });


  // useEffect(() => {
  //   // Function to retrieve cart items from the backend service when the cart component mounts
  //   const getCartItemsFromBackend = async () => {
  //     try {
  //       const response = await fetch(`https://crudcrud.com/api/aebab6f1cc4746f7ac3b15153ac50d00/cart${encodeURIComponent(authCtx.idToken)}`);
  //       const data = await response.json();
  //       if (Array.isArray(data)) {
  //         // Assuming the data is an array of cart items with properties similar to cartCtx.items
  //         cartCtx.setCartItems(data);
  //       }
  //     } catch (error) {
  //       console.error('Error while retrieving cart items from backend:', error);
  //     }  
  //   };

  //   getCartItemsFromBackend();
  // },  [authCtx.idToken]);

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
      <button onClick={onPurchase} className={classes.purchase}>Purchase</button>
    </div>
    
    </Modal>

   );

 };

 export default Cart;
