import classes from './CartItems.module.css';
import { Button } from 'react-bootstrap';

const CartItems = (props) => {

  const price = `$${props.price.toFixed(2)}`;
  
  return (
    <li>   
        <div className={classes['cart-item']}>
         
          <div>  
            {props.title} 
          </div>
          <div>{price}</div>
          <div>
              <span>{props.amount}</span>
              <span> <Button variant="danger" onClick={props.onRemove}>REMOVE</Button></span> 
          </div>
        </div>
       
    </li>
  );
};


export default CartItems;
