import React from 'react';
import authApiClient from '../../services/auth-api-client';

const CartSummary = ({itemCount,totalPrice,cartId}) => {
    const shipping= totalPrice>100? 0: 10;
    const tax= totalPrice*.1;
    const ordertotal=totalPrice+shipping+tax;

    const createOrder=async()=>{
        try {
            const order= await authApiClient.post('/orders/',{cart_id:cartId});
            console.log(order);
            
            if(order.status===201)
            {
                alert("Order Created Successfully");
                localStorage.removeItem("cartId");
            }
        } catch (error) {
            console.log(error);
        }
    }
    
    return (
        <div className='card bg-base-100 shadow-xl'>
            <div className='card-body'>
                <h2 className='text-xl font-semibold mb-4'> CartSummary</h2>
                <div className='space-y-2'>
                    <div className='text-md font-bold'>
                        <span className='text-gray-500 '>Number of Items: </span>
                        <span>  {itemCount}</span>
                    </div>
                    <div className='flex justify-between'>
                        <span className='text-gray-500'>Product Total Price:  </span>
                        <span>{totalPrice.toFixed(2)}</span>
                    </div>
                    <div className='flex justify-between'>
                        <span className='text-gray-500'>Shipping </span>
                        <span>{shipping}</span>
                    </div>
                    <div className='flex justify-between'>
                        <span className='text-gray-500'>Estimated Tax</span>
                        <span>{tax.toFixed(2)}</span>
                    </div>
                    <div className='border-t border-gray-200 pt-2 mt-2'>
                        <div className='flex justify-between'> 
                            <span className='text-gray-500'>Order Total</span>
                            <span>{ordertotal.toFixed(2)}</span>
                        </div>
                    </div>
                    <div className='card-actions mt-4'>
                        <button
                            disabled={itemCount===0}
                            onClick={createOrder}
                            className='btn btn-primary w-full'> 
                            Proceed To CheckOut
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartSummary;