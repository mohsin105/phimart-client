import React, { useEffect, useState } from 'react';
import OrderCard from '../components/Order/OrderCard';
import authApiClient from '../services/auth-api-client';

const Orders = () => {
    const [orders,setOrders] =useState([]);
    
    useEffect(()=>{
        authApiClient('/orders/')
        .then((res)=> setOrders(res.data));
    }
    ,[]);

    const handleCancelOrder=async(orderId)=>{
        try {
            const response= await authApiClient.post(`/orders/${orderId}/cancel/`);
            console.log(response);
            if(response.status===200)
            {
                setOrders((prevOrders=>prevOrders.map((order)=>order.id===orderId? {...order,status:'Canceled'} : order)));
            }
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div className='container mx-auto px-8 py-4'>
            <h1 className='text-2xl font-bold mb-6'>Order Information</h1>
            
                {orders.map((order)=>(
                    <OrderCard 
                        key={order.id} 
                        order={order}
                        onCancel={handleCancelOrder}/>
                ))}
            
        </div>
    );
};

export default Orders;