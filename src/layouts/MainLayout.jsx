import React from 'react';
import NavBar from './NavBar';
import { Outlet } from 'react-router';
import Footer from './Footer';

const MainLayout = () => {
    return (
        <div>
            <NavBar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default MainLayout;