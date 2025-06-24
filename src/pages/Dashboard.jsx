import React from 'react';
import StatCard from '../components/Dashboard/StatCard';
import Order from '../components/Dashboard/Order';

const Dashboard = () => {
    return (
        <div>
            Dashboard Page
            <StatCard/>
            <Order/>
        </div>
    );
};

export default Dashboard;