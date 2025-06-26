import React from 'react';

const CartSummary = ({itemCount,totalPrice}) => {
    const shipping= totalPrice>100? 0: 10;
    const tax= totalPrice*.1;
    const ordertotal=totalPrice+shipping+tax;
    return (
        <div>
            CartSummary
            <div>
                <span>Number of Items:  {itemCount}</span>
            </div>
            <div>
                <span>Product Total Price:  </span>
                <span>{totalPrice}</span>
            </div>
            <div>
                <span>Shipping </span>
                <span>{shipping}</span>
            </div>
            <div>
                <span>Estimated Tax</span>
                <span>{tax}</span>
            </div>
            <div>
                <span>Order Total</span>
                <span>{ordertotal.toFixed(2)}</span>
            </div>
            <div>
                <button>Proceed To CheckOut</button>
            </div>
        </div>
    );
};

export default CartSummary;