import {useRef} from 'react';
import Input from '../Input/Input';
import classes from './AddButton.module.css';


const AddButton = (props) => {
    const amountInputRef = useRef();

    const submitHandler = event => {
      event.preventDefault();

      const enteredAmount = amountInputRef.current.value;
      const enteredAmountNumber = +enteredAmount;

      if (enteredAmount.trim().length === 0 ||
        enteredAmountNumber < 1 ||
        enteredAmountNumber > 5
      ) {
        return;
      }
      props.onAddToCart(enteredAmountNumber);
    };
    return (
      <form className={classes.form} onSubmit={submitHandler}>
        <Input 
            ref={amountInputRef}
            label='Amount' input = {{
            id: 'amount_' + props.id, // this changed!
            type: 'number',
            min: '1',
            max: '5',
            step: '1',
            defaultValue: '1'
        }}/>
    </form>
  )
};

export default AddButton;