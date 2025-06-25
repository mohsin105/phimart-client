import React from 'react';
import { FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-router";
import useAuthContext from '../../hooks/useAuthContext';

const Navbar = ({sideBarOpen}) => {
    const {user, logOutUser}=useAuthContext();
    return (
        <div className='navbar bg-base-100 border-b'>
            <div className='flex-none lg:hidden'>
                <label htmlFor="">
                    {sideBarOpen? (
                        <FiX/>
                    ) :(
                        <FiMenu />
                    )}
                </label>
            </div>
            <div className='flex-1'>
                <h2 className='text-3xl font-bold'>DashBoard</h2>
            </div>
            <div className="flex-none">
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img
                                alt="User avatar"
                                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                            />
                        </div>
                    </label>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                    >
                        <li>
                        <Link href="/profile" className="justify-between">
                            Profile
                            <span className="badge">New</span>
                        </Link>
                        </li>
                        <li>
                        <Link href="/settings">Settings</Link>
                        </li>
                        <li>
                        <button type='button' onClick={logOutUser}>Logout</button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;