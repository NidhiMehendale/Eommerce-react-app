import Input from "../Cart/Input";
import { useRef } from 'react';
import classes from './ProductForm.module.css';

const ProductForm = (props) => {
   
  const amountInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;
    console.log(enteredAmount);
    console.log(enteredAmountNumber);

    props.onAddToCart(enteredAmountNumber);
  };

    return (
        <form className={classes.form} onSubmit={submitHandler}>
          <Input
            ref={amountInputRef}
            label='Amount'
            input={{
              id: 'amount_' + props.id,
              type: 'number',
              step: '1',
              defaultValue: '1',
            }}
          />
          <button>Add</button>
      
        </form>
      );

};

export default ProductForm;