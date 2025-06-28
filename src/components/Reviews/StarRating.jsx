import React from 'react';
import { FaStar } from 'react-icons/fa';

const StarRating = ({onChange, ratings}) => {
    return (
        <div className='flex space-x-1'>
            {[...Array(5)].map((_,i)=>{
                const value=i+1;
                return(

                    <FaStar 
                        key={value}
                        size={24}
                        onClick={()=>onChange(value)}
                        className={`cursor-pointer transition-colors duration-200 ${value<=ratings? 'text-yellow-300': ' text-gray-300 ' }hover:text-yellow-300`}
                    />
                )
            })}
        </div>
    );
};

export default StarRating;