import classes from './CartItems.module.css';
import { Button } from 'react-bootstrap';

const CartItems = (props) => {

  const price = `$${props.price.toFixed(2)}`;
  
  return (
    <li >   
        <div className={classes['cart-item']}>
          <span>  
            {props.title} 
          </span>
          <span>{price}</span>
          <span>
              <span>{props.amount}</span>
              <span> <Button variant="danger" onClick={props.onRemove}>Remove</Button></span> 
          </span>
        </div>
       
    </li>
  );
};


export default CartItems;
