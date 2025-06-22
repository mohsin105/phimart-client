import axios from 'axios';
import { useEffect, useState } from 'react';
import ProductItem from './ProductItem';
import { SwiperSlide,Swiper } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import ErrorAlert from '../ErrorAlert';
import apiClient from '../../services/api-client';


const Product = () => {
    const [products,setProducts] =useState([]);
    const [isLoading,setIsLoading] =useState(false);
    const [error,setError]=useState("");

    useEffect(()=>{
        setIsLoading(true);
        apiClient.get('/products')
        .then((res)=>setProducts(res.data.results))
        .catch((err)=>setError(err.message))
        .finally(()=>setIsLoading(false))
    }
    ,[]);
    return (
        <section className='mx-auto py-16 bg-gray-50'>
            <div className='flex justify-between items-center px-4 md:px-8'>
                <h2 className='text-3xl md:text-4xl font-bold'>Trending Products</h2>
                <a href="#" className='btn btn-secondary'>View All</a>
            </div>
            {isLoading && (
                <div className='flex justify-center py-15'>
                    <span className="loading loading-spinner loading-xl"></span>
                </div>
                )}
            {error && (
                <ErrorAlert error={error} />
            )}

            {!isLoading && !error && products.length>0 && (
                <Swiper modules={[Navigation]}
                        spaceBetween={10}
                        slidesPerView={1}
                        breakpoints={{
                            640:{slidesPerView:2},
                            1024:{slidesPerView:3}
                        }}
                navigation
                className='mt-4 px-4 container'>
                    {products.map((product)=>(
                        <SwiperSlide key={product.id} className='flex justify-center'>
                            <ProductItem key={product.id} product={product}/>
                        </SwiperSlide>
                    ))}
                </Swiper>
            )}
            {!isLoading && !error && products.length===0 && (
                <p>No products available</p>
            )}

        </section>
    );
};

export default Product;