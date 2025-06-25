import React from 'react';
import StatCard from '../components/Dashboard/StatCard';
import Order from '../components/Dashboard/Order';
import { FiPackage, FiShoppingCart, FiStar, FiUsers } from 'react-icons/fi';

const Dashboard = () => {
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 my-5 gap-4'>
                <StatCard icon={FiPackage} title="Total Products" value="245"/>
                <StatCard icon={FiShoppingCart} title="Total ORders" value="545"/>
                <StatCard icon={FiStar} title="Total Rating" value="235"/>
                <StatCard icon={FiUsers} title="Total Users" value="295"/>
            </div>
            <Order/>
        </div>
    );
};

export default Dashboard;