import React from 'react';
import { FaMinus, FaPlus } from 'react-icons/fa';
import { MdDeleteForever } from 'react-icons/md';

const CartItemList = ({items,handleUpdateQuantity,handleRemoveItem}) => {
    if(items.length===0) return (
        <div>Cart is Currently Empty</div>
    )
    return (
        <div className='space-x-4'>
            <div>
                <h2 className='text-xl font-semibold'>CartItemList</h2>
            </div>
            <div className='overflow-x-auto'>
                <table className='table w-full'>
                    <thead >
                        <tr>
                            <th>Product name</th>
                            <th>Unit Price</th>
                            <th>Update Quantity</th>
                            <th>Total Price</th>
                            <th>Remove Item</th>
                        </tr>
                    </thead>
                    <tbody>
                        {items.map((item)=>(
                            <tr key={item.id}>
                                <td>{item.product.name}</td>
                                <td>{item.product.price}</td>
                                <td>
                                    <div className='flex items-center join'>

                                        <button 
                                            // disabled={item.quantity}
                                            onClick={()=>handleUpdateQuantity(item.id,Math.max(1,item.quantity-1))}
                                            className='btn btn-md btn-outline join-item'>
                                                <FaMinus/></button>
                                        <input 
                                            type="number"
                                            min={1}
                                            value={item.quantity} 
                                            className='input input-bordered input-md join-item w-12 text-center'/>
                                        <button
                                            onClick={()=>handleUpdateQuantity(item.id,item.quantity+1)}
                                            className='btn btn-md btn-outline join-item'
                                            ><FaPlus/></button>
                                    </div>
                                </td>
                                <td className='text-right font-medium'>{item.total_price}</td>
                                <td className='text-center'>
                                    <button 
                                        className='btn btn-ghost btn-md btn-circle'
                                        onClick={()=>handleRemoveItem(item.id)}>
                                            <MdDeleteForever/>
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default CartItemList;