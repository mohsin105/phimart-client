import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { FaLeaf } from "react-icons/fa";

const useAuth = () => {
    const [user,setUser] =useState(null);
    const [errorMessage,setErrorMessage] =useState("");

    const getToken=()=>{
        const token=localStorage.getItem("authToken");
        return token? JSON.parse(token) :null;
    }

    const [authToken,setAuthToken] =useState(getToken());

    useEffect(()=>{
        if(authToken)fetchCurrentUser();
    },[authToken]);

    const fetchCurrentUser=async()=>{
        try {
            const response=await apiClient.get("/auth/users/me",{
                headers:{Authorization:`JWT ${authToken?.access}`}
            })
            console.log(response.data);
            setUser(response.data);
        } catch (error) {
            console.log("Error while fetching current user", error);
        }
    };

    const loginUser=async(userData)=>{
        try {
            const response= await apiClient.post("/auth/jwt/create",userData)
            console.log(response.data);
            setAuthToken(response.data);
            localStorage.setItem("authToken",JSON.stringify(response.data)); 
            console.log("Auth token and localStorage e authToken set hobar kotha")  
            return{success:true};

        } catch (error) {
            setErrorMessage(error.response.data?.detail);
            return{success:false}
        }
    }

    const registerUser=async(userData)=>{
        setErrorMessage("");
        try {
            await apiClient.post("/auth/users/",userData)
            return{success:true,message:"Registration Successfull. Check Your email to activate account"}
        } catch (error) {
            if(error.response && error.response.data)
            {
                const registrationErrorMessage=Object.values(error.response.data).flat().join('\n');
                setErrorMessage(registrationErrorMessage);
                return{success:false,message:"Registration failed in backend"}
            }
            setErrorMessage("registration failed in backend for some reason. please try again");
            return{success:false,message:"registration failed in backend for some reason. please try again"};

        }
    };


    const logOutUser=()=>{
        setUser(null);
        setAuthToken(null);
        localStorage.removeItem("authToken");
    }

    const updateUserProfile=async(userData)=>{
        setErrorMessage('');
        try {
            await apiClient.put("auth/users/me/",userData,{
                headers:{Authorization:`JWT ${authToken?.access}`}
            })
        } catch (error) {
            console.log(error);
            handleApiError(error);
        }
    };

    const changePassword=async(userData)=>{
        setErrorMessage("");
        try {
            await apiClient.post("auth/users/reset_password/",userData,{
                headers:{Authorization:`JWT ${authToken?.access}`}
            })
        } catch (error) {
            console.log(error);
            handleApiError(error);
        }
    }

    const handleApiError=(error, defaultMessage="Something went wrong is the server end")=>{
        if(error.response && error.response.data)
        {
            const apiErrorMessage=Object.values(error.response.data).flat().join('\n');
            setErrorMessage(apiErrorMessage);
        }
        setErrorMessage(defaultMessage);
        return {success:false, message:defaultMessage};
    }

    return {user,loginUser,errorMessage,registerUser,logOutUser,updateUserProfile,changePassword};
};

export default useAuth;