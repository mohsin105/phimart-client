import React, { Suspense, useEffect, useState } from 'react';
import useCartContext from '../hooks/useCartContext';
import CartItemList from '../components/Cart/CartItemList';
import CartSummary from '../components/Cart/CartSummary';

const Cart = () => {
    const {cart,cartId,isLoading,createOrGetCart,updateCartItemQuantity,deleteCartItem}= useCartContext();
    const [localCart,setLocalCart] =useState(cart);

    
    useEffect(()=>{
        if(!cart && !isLoading) createOrGetCart();
        console.log('cart: ',cart);
    },[createOrGetCart,cart,isLoading]);

    useEffect(()=>{
        setLocalCart(cart);
        console.log("Local Cart: ",localCart)
    }
    ,[cart]);

    

    const handleUpdateQuantity=async(itemId,newQuantity)=>{
        const prevLocalCartCopy=localCart;
        //local Storage state update
        setLocalCart((prevLocalCart)=>{
            const updatedItems=prevLocalCart.items.map((item)=>
                item.id===itemId
                ? {...item,
                    quantity:newQuantity,
                    total_price:item.product.price*newQuantity
                } : item);
            return {
                ...prevLocalCart,
                items:updatedItems,
                gross_total_price: updatedItems.reduce((sum,item)=> sum+item.total_price , 0)
            }
        })
        //backend API DB update
        try {
            const response= await updateCartItemQuantity(itemId,newQuantity);
        } catch (error) {
            console.log(error);
            setLocalCart(prevLocalCartCopy);
        }
    };

    const handleRemoveItem=async(itemId)=>{
        //frontend local storage stage update
        const prevLocalCartCopy=localCart;
        setLocalCart((prevLocalCart)=>{
            const updatedItems=prevLocalCart.items.filter((item)=> item.id!=itemId)
            return {
                ...prevLocalCart,
                items:updatedItems,
                gross_total_price:updatedItems.reduce((sum,item)=> sum+item.total_price,0)
            }
        })
        //backend API DB Update
        try {
            const response= await deleteCartItem(itemId);
        } catch (error) {
            console.log(error);
            setLocalCart(prevLocalCartCopy);
        }
    };

    if(isLoading) return(
        <p>Loading...</p>
    )
    if(!localCart) return (
        <p>No cart Found</p>
    )
    return (
        <div className='container mx-auto px-4 py-8'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                {/* {JSON.stringify(cart)} */}
                <Suspense 
                    fallback ={<div className='aspect-square bg-base-300 animate-pulse rounded-lg'></div>}>
                    <CartItemList 
                        items={localCart.items}
                        handleUpdateQuantity={handleUpdateQuantity}
                        handleRemoveItem={handleRemoveItem}/>
                </Suspense>
                <CartSummary 
                    itemCount={localCart.items.length}
                    totalPrice={localCart.gross_total_price}
                    cartId={cartId}/>
            </div>
        </div>
    );
};

export default Cart;