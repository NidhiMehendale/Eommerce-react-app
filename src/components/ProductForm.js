import Input from "./Imput";
import { useRef } from 'react';

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
        <form  onSubmit={submitHandler}>
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
          <button>Add to Cart</button>
      
        </form>
      );

};

export default ProductForm;