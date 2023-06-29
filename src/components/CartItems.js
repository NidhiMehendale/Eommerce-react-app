import classes from './CartItems.module.css';
import { Button } from 'react-bootstrap';
const CartItems = (props) => {

  return (
    <li>
      <div>
        <div  className={classes['cart-item']}>
          <span>
              <span> <img src={props.imageUrl} alt={props.title} /></span> 
              <section style={{width:'40%'}}> {props.title} </section> 
          </span>
          <span className={classes.price}>{props.price}</span>
          <span>
            <span>{props.quantity}</span>
            <span> <Button variant="danger"> REMOVE</Button></span> 
          </span>
        </div>
      </div> 
    </li>
  );
};

export default CartItems;
