import React from 'react';
import ProductItem from '../Products/ProductItem';

const ProductList = ({products,isLoading}) => {
    if(isLoading) return(
        <>
            <div className='flex justify-center py-15'>
                <span className="loading loading-spinner loading-xl"></span>
            </div>
        </>
    )
    return (
        <div className='my-6'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {products.map((product)=>(
                    <ProductItem key={product.id} product={product}/>
                ))}
            </div>
        </div>
    );
};

export default ProductList;