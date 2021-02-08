import React from 'react';

import classes from './CheckoutSummury.module.css';
import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Buttton';


const checkoutSummury  = (props) => {
    return (
        <div className={classes.CheckoutSummury}>
            <h1>We hope it tastes well!</h1>
            <div style={{width: '100%', margin: 'auto'}} >
                <Burger ingredients={props.ingredients} />
            </div>
            <Button 
                btnType='Danger'
                clicked={props.checkoutCancelled}
            >
                CANCEL
            </Button>

            <Button 
                btnType='Success'
                clicked={props.checkoutContinued}
            >
                CONTINUE
            </Button>
        </div>
    )

}

export default checkoutSummury;