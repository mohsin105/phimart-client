import React from 'react';

const StatCard = ({icon:Icon,title,value}) => {
    return (
        <div className='card bg-base-100 shadow-sm p-4'>
            <div className='card-body'>
                <div className='flex items-center gap-2'>
                    <Icon className='size-5 text-primary'/>
                    <h2 className='text-sm font-medium'>{title}</h2>
                </div>
                <p className='text-2xl font-bold mt-2'>{value}</p>
            </div>
        </div>
    );
};

export default StatCard;