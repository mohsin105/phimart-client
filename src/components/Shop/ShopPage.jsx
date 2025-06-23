import React, { useEffect, useState } from 'react';
import ProductList from './ProductList';
import Pagination from './Pagination';
import useFetchProducts from '../../hooks/useFetchProducts';
import FilterSection from './FilterSection';
import useFetchCategories from '../../hooks/useFetchCategories';

const ShopPage = () => {
    const [currentPage,setCurrentPage] = useState(1);
    const [priceRange,setPriceRange]= useState([0,1000]);
    const categories=useFetchCategories();
    const [selectedCategory,setSelectedCategory] =useState(""); //null dile kono product show kore na initially. empty string better
    const [searchQuery,setSearchQuery] = useState("");
    const [sortOrder, setSortOrder] = useState("");
    const {products,isLoading,totalPages}= useFetchProducts(currentPage,priceRange,selectedCategory,searchQuery, sortOrder);
    
    const handlePriceChange=(index,value)=>{
        setPriceRange((prev)=>{
            const newRange=[...prev];
            newRange[index]=value;
            return newRange;
        })
        setCurrentPage(1);
    };
    return (
        <div>
            <FilterSection
                priceRange={priceRange}
                handlePriceChange={handlePriceChange}
                categories={categories}
                selectedCategory={selectedCategory}
                handleCategoryChange={setSelectedCategory}
                searchQuery={searchQuery}
                handleSearchQuery={setSearchQuery}
                sortOrder={sortOrder}
                handleSortOrder={setSortOrder}
                />
            <ProductList products={products} isLoading={isLoading}/>
            <Pagination totalPages={totalPages} currentPage={currentPage} handlePageChange={setCurrentPage}/>
        </div>
    );
};

export default ShopPage;