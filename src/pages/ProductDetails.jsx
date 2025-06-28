import React, { Suspense, useEffect, useState } from 'react';
import ProductImageGallery from '../components/ProductDetails/ProductImageGallery';
import AddToCartButton from '../components/ProductDetails/AddToCartButton';
import { useParams } from 'react-router';
import apiClient from '../services/api-client';
import ReviewSection from '../components/Reviews/ReviewSection';

const ProductDetails = () => {
    const {id} = useParams();
    const [product,setProduct] =useState(null);
    const [isLoading,setIsLoading] =useState(false);

    useEffect(()=>{
        setIsLoading(true);
        apiClient.get(`products/${id}`)
        .then((res)=>{
            console.log(res.data);
            setProduct(res.data);
            setIsLoading(false);
        })
    },[id]);

    if(isLoading) return <p>Loading.. </p>
    if(!product) return <p>No product found</p>
    // console.log(product);
    return (
        <div className='w-3/4 mx-auto px-4 py-8'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14'>
                <Suspense 
                    fallback={<div className='aspect-square bg-base-300 animate-pulse rounded-lg'></div>}>

                    <ProductImageGallery images={product?.images} productName={product.name}/>
                </Suspense>
                <div className='flex flex-col'>
                    <p className="text-3xl font-bold"> {product.name}</p>
                    <p>description:  {product.description}</p>
                    <p>Product Id:  {product.id}</p>
                    <p className="text-xl font-bold">price:  {product.price}</p>
                    <p> Stock: {product.stock}</p>
                    {/* <p>cateogry: {product.category?.name}</p> */}
                    <div className='mt-auto items-end'>
                        <AddToCartButton product={product}/>
                    </div>
                </div>
            </div>
            
            <div>
                <ReviewSection/>
            </div>
        </div>
    );
};

export default ProductDetails;