import React from 'react';

const Cart = ({cart}) => {
    return (
        <div>
            <h2>This is order</h2>
            <h4>Selected items: {cart.length}</h4>
        </div>
    );
};

export default Cart;