import React from 'react';
import { useForm } from 'react-hook-form';
import useAuthContext from '../hooks/useAuthContext';
import { useNavigate } from 'react-router';

const Login = () => {
    const {register,handleSubmit,formState:{errors}}=useForm();
    const {user,loginUser,errorMessage}= useAuthContext();
    const navigate=useNavigate();

    const onSubmit=async(data)=>{
        try {
            const response= await loginUser(data);
            if(response.success) navigate("/dashboard");
        } catch (error) {
            console.log("Login Error: ", error);
        }
    };

    return (
        <div className='card-body'>
            <h1 className='text-4xl'>Login Page</h1>
            <form action="" onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="">Email</label>
                <input 
                    {...register("email",{required:"Email is required"})}
                    type="email" 
                    id='email'/>
                <label htmlFor="">Password</label>
                <input 
                    {...register("password",{required:true})}
                    type="password" 
                    id='password'/>
                <button type='submit'>Login</button>
            </form>
            
        </div>
    );
};

export default Login;