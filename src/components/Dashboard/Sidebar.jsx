import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { FiBarChart2, FiPackage, FiPlusCircle, FiShoppingCart, FiStar, FiTag, FiUsers } from 'react-icons/fi';
import { Link } from 'react-router';

const Sidebar = () => {
    const menuItems=[
        {to:'/dashboard', icon: FiBarChart2, label:'Dashboard'},
        { to: "/products", icon: FiPackage, label: "Products" },
        { to: "/dashboard/products/add", icon: FiPlusCircle, label: "Add Product" },
        { to: "/categories", icon: FiTag, label: "Categories" },
        { to: "/categories/add", icon: FiPlusCircle, label: "Add Category" },
        { to: "/dashboard/cart", icon: FiShoppingCart, label: "Cart" },
        { to: "/dashboard/orders", icon: FiShoppingCart, label: "Orders" },
        { to: "/reviews", icon: FiStar, label: "Reviews" },
        { to: "/users", icon: FiUsers, label: "Users" },
    ];
    return (
        <div className='drawer-side'>
            <label 
                htmlFor="drawer-toggle"
                aria-level='close-sidebar'
                className='drawer-overlay'></label>
            <aside className='menu p-4 bg-base-200 text-base-content min-h-full w-64'>
            
            {/*Sidebar header*/}
                <div className='flex items-center gap-2 mb-2 px-2'>
                    <FaShoppingCart className='size-6 '/>
                    <h1 className='text-xl font-bold'>PhiMart</h1>
                </div>
                <ul className='menu menu-md gap-2'>
                    {menuItems.map((item,index)=>(
                        <li key={index}>
                            <Link to={item.to} className='flex items-center'>
                            <item.icon className='size-4'/>
                            <span>{item.label}</span>
                            </Link>
                        </li>
                    ))}
                </ul>

                <div className='mt-auto pt-6 text-xs text-base-content/70'>
                    2025 PhiMart Admin
                </div>
            </aside>
        </div>
    );
};

export default Sidebar;