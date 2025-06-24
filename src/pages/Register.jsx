import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import useAuthContext from '../hooks/useAuthContext';
import SuccessAlert from '../components/SuccessAlert';
import ErrorAlert from '../components/ErrorAlert';

const Register = () => {
    const {register,handleSubmit,watch,formState:{errors}}= useForm();
    const {registerUser,errorMessage}= useAuthContext();
    const [successMessage,setSuccessMessage] = useState('');
    const onSubmit=async(data)=>{
        console.log(data);
        delete data.confirm_password;
        try {
            const response= await registerUser(data);
            if(response.success)
            {
                setSuccessMessage(response.message);
            }
        } catch (error) {
            console.log("registration failed in frontend",error);
        }
    }
    return (
        <div>
            <div>
                {successMessage && (
                    <SuccessAlert successMessage={successMessage}/>
                )}
                {errorMessage && (
                    <ErrorAlert error={errorMessage}/>
                )}
            </div>
            <form action="" onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="">Email</label>
                <input 
                    {...register("email",{required:"email field is required"})}
                    type="email" id='email'/>
                    {errors.email && (
                        <div role="alert" className="alert alert-info alert-soft">
                            <span>{errors.email.message}</span>
                        </div>
                    )}
                <label htmlFor="">First Name</label>
                <input 
                    {...register("first_name")}
                    type="text" id='first_name'/>
                <label htmlFor="">Last Name</label>
                <input 
                    {...register("last_name")}
                    type="text" id='last_name'/>
                <label htmlFor="">Address</label>
                <input 
                    {...register("address")}
                    type="text" id='address'/>
                <label htmlFor="">Phone Number</label>
                <input 
                    {...register("phone_number")}
                    type="number" id='phone_number' />
                <label htmlFor="">Password</label>
                <input 
                    {...register("password",{required:"Password is required",
                        minLength:{
                            value:"8",
                            message:"Password must be 8 characters long"
                        }
                    })}
                    type="password" id='password'/>
                <label htmlFor="">Confirm Password</label>
                <input 
                    {...register("confirm_password",{
                        required:"Confirm Password Required",
                        validate:(value)=>value===watch("password") || "Password Do Not match" })}
                    type="password" id='confirm_password'/>
                {errors.confirm_password && (
                        <div role="alert" className="alert alert-info alert-soft">
                            <span>{errors.confirm_password.message}</span>
                        </div>
                    )}
                <button type='submit'>Create Account</button>
            </form>
        </div>
    );
};

export default Register;