import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import ProfileForm from '../components/Dashboard/Profile/ProfileForm';
import PasswordChangeForm from '../components/Dashboard/Profile/PasswordChangeForm';
import ProfileButton from '../components/Dashboard/Profile/ProfileButton';
import useAuthContext from '../hooks/useAuthContext';
import ErrorAlert from '../components/ErrorAlert';
import { useNavigate } from 'react-router';

const Profile = () => {
    const {register,handleSubmit,setValue,watch,formState:{errors,isSubmitting}} = useForm();
    const [isEditing,setIsEditing]= useState(false);
    const {user, errorMessage,updateUserProfile,changePassword} = useAuthContext();
    const navigate=useNavigate();
    useEffect(()=>{
        Object.keys(user).map((key)=>setValue(key,user[key]));
    },[user,setValue]);
    
    const onSubmit=async(data)=>{
        console.log(data)
        try {
            const profilePayLoad={first_name:data.first_name,
                last_name:data.last_name,
                address:data.address,
                phone_number:data.phone_number
            }
            await updateUserProfile(profilePayLoad);

            if(data.new_password && data.confirm_password)
            {
                const passwordPayLoad={current_password:data.current_password,
                    new_password:data.new_password
                }
                await changePassword(passwordPayLoad);
            }

            alert("Profile Updated");
            // navigate('/profile');
            isEditing(false);
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div className='card w-full max-w-2xl mx-auto bg-base-100 shadow-xl'>
            
            <div className='card-body'>
                {errorMessage && (
                    <ErrorAlert error={errorMessage}/>
                )}
            
                <h2 className='card-title text-2xl mb-4'>Profile Information</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <ProfileForm 
                        register={register} 
                        isEditing={isEditing} 
                        errors={errors}/>
                    <PasswordChangeForm 
                        register={register} 
                        isEditing={isEditing} 
                        watch={watch} 
                        errors={errors}/>
                    <ProfileButton 
                        isEditing={isEditing} 
                        setIsEditing={setIsEditing} 
                        isSubmitting={isSubmitting}/>
                </form>
            </div>
        </div>
    );
};

export default Profile;