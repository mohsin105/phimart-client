import React from 'react';

const OrderItem = ({item}) => {
    return (
        <>
                <td>{item.product.name}</td>
                <td>{item.price}</td>
                <td>{item.quantity}</td>
                <td>{item.total_price}</td>
        </>
    );
};

export default OrderItem;