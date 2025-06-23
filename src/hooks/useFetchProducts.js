import React, { useEffect, useState } from 'react';
import apiClient from '../services/api-client';

const useFetchProducts = (
    currentPage,
    priceRange,
    selectedCategory,
    searchQuery,
    sortOrder) => {
    const [products,setProducts] = useState([]);
    const [isLoading,setIsLoading] =useState(false);
    const [totalPages,setTotalPages]= useState(0);
    
    
    useEffect(()=>{
        const fetchProducts=async()=>{
            setIsLoading(true);
            try {
                const res=await apiClient.get(`/products/?price__gt=${priceRange[0]}&price__lt=${priceRange[1]}&page=${currentPage}&category_id=${selectedCategory}&search=${searchQuery}&ordering=${sortOrder}`);
                const data= await res.data;
                setProducts(data.results);
                setTotalPages(Math.ceil(data.count/data.results.length));
                
            } catch (error) {
                console.log(error);
            }
            finally{
                setIsLoading(false);
            }
        }
        fetchProducts();
    },[currentPage,priceRange,selectedCategory,searchQuery,sortOrder]);
    
    return {products,isLoading,totalPages};
};

export default useFetchProducts;