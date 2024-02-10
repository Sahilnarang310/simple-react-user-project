import React from "react";
import classes from './Button.module.css';

const Button =()=>{
    return(
        <button
        className={classes.button}
        type={PaymentResponse.type || 'button'}
        onClick={PaymentResponse.onClick}
        >
        {PaymentResponse.children}
        </button>
    );

};
export default Button;