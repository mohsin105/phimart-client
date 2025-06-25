import React, { useState } from 'react';
import Navbar from '../components/Dashboard/Navbar';
import { Outlet } from 'react-router';
import Sidebar from '../components/Dashboard/Sidebar';

const DashboardLayout = () => {
    const [sideBarOpen,setSideBarOpen] = useState(false);

    const toggleSidebar=()=>{
        setSideBarOpen(!sideBarOpen);
    }
    return (
        <div className='drawer lg:drawer-open'>
            <input 
                type="checkbox" 
                name="" 
                id="drawer-toggle" 
                checked={sideBarOpen}
                onChange={toggleSidebar}
                className='drawer-toggle'
                />
            <div className='drawer-content flex flex-col'>

                <Navbar sideBarOpen={sideBarOpen}/>
                <main className='p-6'>
                    <Outlet/>
                </main>
            </div>
            <Sidebar/>
        </div>
    );
};

export default DashboardLayout;