import React, { createContext, useState } from 'react';
import apiClient from '../services/api-client';
import useAuth from '../hooks/useAuth';

const AuthContext=createContext();

export const AuthProvider = ({children}) => {
    const allValues=useAuth();
    return (
        <>
            <AuthContext.Provider value={allValues}>{children}</AuthContext.Provider>
        </>
    );
};

export default AuthContext;