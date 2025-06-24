import React from 'react';
import { Route, Routes } from 'react-router';
import Home from '../pages/Home';
import About from '../pages/About';
import MainLayout from '../layouts/MainLayout';
import Shop from '../pages/Shop';
import Login from '../pages/Login';
import PrivateRoute from '../components/PrivateRoute';
import Dashboard from '../pages/Dashboard';
import DashboardLayout from '../layouts/DashboardLayout';
import Register from '../pages/Register';

const AppRoutes = () => {
    return (
        <Routes>
            <Route element={<MainLayout/>}>
                <Route path="/" element={<Home/>}/>
                <Route path="about" element={<About/>}/>
                <Route path="shop" element={<Shop/>}/>
                <Route path="login" element={<Login/>}/>
                <Route path="register" element={<Register/>}/>
                <Route path='dashboard' element={
                    <PrivateRoute>
                        <DashboardLayout/>
                    </PrivateRoute>
                }>
                    <Route index element={<Dashboard/>}/>
                </Route>
            </Route>
        </Routes>
    );
};

export default AppRoutes;