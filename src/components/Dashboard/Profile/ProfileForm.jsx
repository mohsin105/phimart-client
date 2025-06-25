import React from 'react';

const ProfileForm = ({register,errors,isEditing}) => {
    return (
        <div className='space-y-4'>
            <div className='form-control'>
                <label htmlFor="">First Name</label>
                <input 
                    {...register("first_name")}
                    type="text"  
                    id='first_name'
                    disabled={!isEditing}
                    className='input input-bordered bg-base-200 w-full'/>
            </div>
            <div className='form-control'>
                <label htmlFor="">Last Name</label>
                <input 
                    {...register("last_name")}
                    type="text"
                    id='last_name'
                    disabled={!isEditing} 
                    className='input input-bordered bg-base-200 w-full'/>
            </div>
            <div className='form-control'>

                <label htmlFor="">Address</label>
                <input 
                    {...register("address")}
                    type="text"
                    id='address' 
                    disabled={!isEditing}
                    className='input input-bordered bg-base-200 w-full'/>
            </div>
            <div className='form-control'>
                <label htmlFor="" className='label'>Phone Number</label>
                <input 
                    {...register("phone_number")}
                    type="text"
                    id='phone_number' 
                    disabled={!isEditing}
                    className='input input-bordered bg-base-200 w-full'/>
            </div>
       
        </div>
    );
};

export default ProfileForm;