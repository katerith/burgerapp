import React, { Component } from 'react';

import Aux from '../../../hoc/Auxiliary/Auxiliary';
import Button from '../../UI/Button/Buttton'

class OrderSummury extends Component {

    render() {
        const ingredientSummury = Object.keys(this.props.ingredients)
        .map( igkey => {
            return (
                <li key={igkey}>
                    <span style={{textTransform: 'capitalize'}}>
                        {igkey}
                    </span>
                        : {this.props.ingredients[igkey]}
                </li>
            )
        })

        return (
            <Aux>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients</p>
            <ul>
                {ingredientSummury}
            </ul>
            <p><strong>Total Price: {this.props.price.toFixed(2)}</strong></p>
            <p>Continue to Checkout?</p>
            
            <Button
                btnType='Danger'
                clicked={this.props.purchaseCancelled}
            >
                CANCEL
            </Button>

            <Button
                btnType='Success'
                clicked={this.props.purchaseContinued}
            >
                CONTINUE
            </Button>

        </Aux>
        )
    }
}

export default OrderSummury;
