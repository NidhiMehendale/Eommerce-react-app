import React from "react";
import { useContext} from 'react';
import CartContext from "../store/cart-context";
import classes from './HeaderCartButton.module.css';

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);

  const { items } = cartCtx;

  const numberOfCartItems = items.reduce((curNumber, item) => curNumber + item.amount, 0);
  

  console.log(numberOfCartItems);
  return (
    <button className={classes['button-class']} onClick={props.onClick}>
      <div>
          <div>
           Cart
        </div>
        <div className={classes['cart-number']}>
          {numberOfCartItems}
        </div>
      </div>
      
      
    </button> 
  );
};

export default HeaderCartButton;