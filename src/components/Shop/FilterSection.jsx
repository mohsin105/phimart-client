import React from 'react';

const FilterSection = ({
    priceRange,
    handlePriceChange,
    categories,
    selectedCategory,
    handleCategoryChange,
    searchQuery,
    handleSearchQuery,
    sortOrder,
    handleSortOrder}) => {
    return (
        <div className='flex justify-around my-4'>
            {/* Filter Based on Price Range */}
            <div className=' rounded-sm bg-gray-50 shadow-md p-4'>
                <label htmlFor="">Price Range</label>
                {/* Input field for lower limit */}
                <div>
                    <input type="number" 
                        min="0"
                        max={priceRange[1]}
                        value={priceRange[0]}
                        onChange={(e)=>handlePriceChange(0,Number(e.target.value))}/>
                    <input type="range" 
                        min="0"
                        max={priceRange[1]}
                        value={priceRange[0]}
                        step="10"
                        onChange={(e)=>handlePriceChange(0,Number(e.target.value))}/>
                </div>
                {/* Input field for upper limit */}
                <div>
                    <input type="number" 
                        min={priceRange[0]}
                        max="1000"
                        value={priceRange[1]}
                        onChange={(e)=>handlePriceChange(1,Number(e.target.value))}/>
                    <input type="range" 
                        min={priceRange[0]}
                        max="1000"
                        value={priceRange[1]}
                        step="10"
                        onChange={(e)=>handlePriceChange(1,Number(e.target.value))}/>
                </div>
                <div className='flex justify-between'>
                    <span>{priceRange[0]}</span>
                    <span>{priceRange[1]}</span>
                </div>
            </div>
            {/* Filter Based on Category */}
            <div className=' rounded-sm bg-gray-50 shadow-md p-4'>
                <label >Choose Category</label>
                <select value={selectedCategory} 
                onChange={(e)=> handleCategoryChange(e.target.value)}>
                    <option value="">Select Category</option>
                    {categories.map((category)=>(
                        <option key={category.id} value={category.id}>{category.name}</option>
                    ))}
                </select>
            </div>
            {/* Filter Based on Searching*/}
            <div className=' rounded-sm bg-gray-50 shadow-md p-4'>
                <label htmlFor="" className='mr-4'>Search</label>
                <input type="text"
                    value={searchQuery}
                    onChange={(e)=> handleSearchQuery(e.target.value)}
                    className='border rounded-sm shadow-lg ' />
            </div>
            {/* Filter Based on Sorting*/}
            <div className=' rounded-sm bg-gray-50 shadow-md p-4'>
                <label htmlFor="">Sort by </label>
                <select value={sortOrder} name="" id="" onChange={(e)=> handleSortOrder(e.target.value)}>
                    <option value="">Default</option>
                    <option value="price">Low To High</option>
                    <option value="-price">High To Low</option>
                </select>
            </div>
            
        </div>
    );
};

export default FilterSection;