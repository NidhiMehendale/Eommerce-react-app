import classes from './CartItems.module.css';

const CartItems = (props) => {

  const price = `$${props.price.toFixed(2)}`;
  
  return (
    <li>   
        <div className={classes['cart-item']}>
        {props.imageUrl}
          <span>
            {props.title} 
          </span>
          <span>{price}</span>
          <span>      
            <span  style={{marginRight:'8px'}}> <button className={classes.actions} onClick={props.onRemove}>-</button></span> 
            <span 
            style={{marginRight:'9px',border:'1px solid black',width:'50px',padding:'2px 6px'}}>
            {props.amount}
            </span>
            <span> <button className={classes.actions} onClick={props.onAdd}>+</button></span> 
          </span> 
        </div>
       
    </li>
  );
};


export default CartItems;

// <span className={classes['class-button']}> <Button onClick={props.onRemove}>-</Button></span> 
// <span 
// style={{marginRight:'9px',border:'1px solid black',width:'50px',padding:'2px 6px'}}>
// {props.amount}
// </span>
// <span> <Button onClick={props.onAdd}>+</Button></span> 