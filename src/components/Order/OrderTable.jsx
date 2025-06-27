import React from 'react';
import OrderItem from './OrderItem';

const OrderTable = ({items}) => {
    return (
        <div>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map((item)=>(
                        <tr key={item.id}>
                            <OrderItem  item={item}/>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default OrderTable;