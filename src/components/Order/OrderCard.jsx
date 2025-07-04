import React, { useState } from 'react';
import OrderTable from './OrderTable';
import useAuthContext from '../../hooks/useAuthContext';
import authApiClient from '../../services/auth-api-client';

const OrderCard = ({order,onCancel}) => {
    const {user} = useAuthContext();
    const [status,setStatus] =useState(order.status);
    
    const handleStatusChange=async(event)=>{
        const newStatus=event.target.value;
        try {
            const response= await authApiClient.patch(`/orders/${order.id}/update_status/`,{status:newStatus});
            console.log(response);
            if(response.status===200)
            {
                setStatus(newStatus);
                alert(response.data.status);
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className='bg-white border-2 rounded-lg  mb-8 p-4 shadow-xl'>
            {/* order information section and status section  */}
            <div className=' bg-gray-100 p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4'>
                <div>
                    <h2 className='text-lg font-bold'>Order: {order.id}</h2>
                    <p className='text-gray-600 text-sm'> Placed On: {order.created_at}</p>
                </div>
                <div className='flex gap-2'>
                    {user.is_staff ? (
                        <select 
                            value={status}
                            onChange={handleStatusChange}
                            className='px-3 py-1 rounded-full text-white text-sm font-medium bg-blue-500'>
                            <option value="Not Paid">Not Paid</option>
                            <option value="Ready To Ship">Ready To Ship</option>
                            <option value="Shipped">Shipped</option>
                            <option value="Delivered">Delivered</option>
                            <option value="Canceled">Canceled</option>
                        </select>
                    ): (
                        <span 
                            className={`px-3 py-1 rounded-full text-white ${order.status==='Not Paid'? "bg-red-500" : "bg-green-500"} flex items-center`}> {order.status}
                        </span>
                        )}
                    {order.status !='Delivered' && order.status != 'Canceled' && !user.is_staff  && (
                        <button 
                            onClick={()=> onCancel(order.id)}
                            className='btn btn-warning text-blue-700 hover:underline'> 
                            Cancel
                        </button>
                    )}
                    
                    
                </div>
            </div>
            {/* The Actual order items in tabular format */}
            <div className='p6'>
                
                <h3 className='font-medium text-lg mb-4'>Order Table</h3>
                <OrderTable items={order.items}/>
            </div>
            {/* Total bill, summary and pay now button section */}
            <div className='border-t p-6 flex flex-col items-end'>
                <div className='space-y-2 w-full max-w-[200px]'>
                    <div className='flex justify-between'>
                        <span>SubTotal</span>
                        <span>{order.total_price.toFixed(2)}</span>
                    </div>
                    <div className='flex justify-between'>
                        <span>Shipping</span>
                        <span>$ 0.00</span>
                    </div>
                    <div className='flex justify-between font-bold border-t pt-2'>
                        <span>Total</span>
                        <span>{order.total_price.toFixed(2)}</span>
                    </div>
                </div>
                <button
                    className="mt-4 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors"
                >Pay Now</button>
            </div>
        </div>
    );
};

export default OrderCard;