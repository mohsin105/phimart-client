import { useCallback, useEffect, useState } from "react";
import apiClient from "../services/api-client";
import authApiClient from "../services/auth-api-client";

const useCart = () => {
    // const getToken=()=>{
    //     const token= localStorage.getItem('authToken');
    //     return token? JSON.parse(token): null;
    // }

    // const [authToken] =useState(getToken());

    const [authToken] =useState(JSON.parse(localStorage.getItem('authToken'))?.access);
    const [cart, setCart] = useState(null);
    const [cartId,setCartId] =useState(()=>localStorage.getItem('cartId'));
    const [isLoading,setIsLoading] =useState(false);

    // console.log("hello sdfgjuweogf");
    const createOrGetCart=useCallback(
        async()=>{
            setIsLoading(true);
            // console.log("Create or get card function ");
            try {
                const response= await authApiClient.post('/carts/');
                // const response=await apiClient.post('/carts/',{
                //     headers:{Authorization:`JWT ${authToken?.access}`}
                // })
                // console.log("Response from cart api:",response.data);
                if(!cartId)
                {
                    localStorage.setItem('cartId',response.data.id);
                    setCartId(response.data.id);
                }
                setCart(response.data);
            } catch (error) {
                console.log(error);
            }finally{
                setIsLoading(false);
            }
        }
    ,[cartId])

    const addCartItems=useCallback(
        async(product_id,quantity)=>{
            setIsLoading(true);
            if(!cartId) await createOrGetCart();
            try {
                const response= await apiClient.post(`/carts/${cartId}/items/`,
                    {product_id,quantity},
                {headers:{Authorization:`JWT ${authToken}`}})
                return response.data;
            } catch (error) {
                console.log(error);
            }finally{
                setIsLoading(false);
            }
        },
    [cartId,createOrGetCart]);

    const updateCartItemQuantity=useCallback(
        async(itemId,quantity)=>{
            // setIsLoading(true);
            try {
                await authApiClient.patch(`/carts/${cartId}/items/${itemId}/`,{quantity,});
            } catch (error) {
                console.log(error);
            }
            // finally{
            //     setIsLoading(false);
            // }
        },
        [cartId]);
    
    const deleteCartItem=useCallback(
        async(itemId)=>{
            try {
                await authApiClient.delete(`/carts/${cartId}/items/${itemId}/`)
            } catch (error) {
                console.log(error);
            }
        }
        ,[cartId]);
    
    useEffect(()=>{
        const initializeCart=async()=>{
            setIsLoading(true);
            await createOrGetCart();
            setIsLoading(false);
        }
        initializeCart();
    },[createOrGetCart]);

    return {cart,cartId,isLoading, createOrGetCart, addCartItems,updateCartItemQuantity,deleteCartItem};
};

export default useCart;