import React, { useState } from 'react';

const PasswordChangeForm = ({register,isEditing,watch}) => {
    const [isPasswordSectionOpen,setIsPasswordSectionOpen]= useState(false);
    const [showPassword,setShowPassword]= useState(false);
    return (
        <div>
            {isEditing && (
                <div className='my-4'>
                    <div>
                        <button type='button'
                            onClick={()=>setIsPasswordSectionOpen(!isPasswordSectionOpen)}
                            className='btn btn-secondary'>Change Password</button>
                    </div>
                    <div>
                        {isPasswordSectionOpen && (
                            <div className='mt-4 border-base-300'>
                                <div className='form-control'>
                                    <label htmlFor="" className='label'>Current Password</label>
                                    <div>
                                        <input 
                                            {...register("password",{required:"Current Password is Required"})}
                                            type={showPassword? "text": "password"}
                                            disabled={!isEditing}
                                            className='input input-bordered bg-base-200 w-full' />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="" className='label'>New Password</label>
                                    <div>
                                        <input 
                                            {...register('new_password',{required:"New Password is required"})}
                                            type={showPassword? "text" : "password"}
                                            disabled={!isEditing}
                                            className='input input-bordered bg-base-200 w-full' />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="" className='label'>Confirm Password</label>
                                    <div>
                                        <input 
                                            {...register('confirm_password',{
                                                required:"Confirm Password is required",
                                                validate:(value)=> value ===watch("new_password") || "Password Do Not match"
                                            })}
                                            type={showPassword? "text" : "password"}
                                            disabled={!isEditing}
                                            className='input input-bordered bg-base-200 w-full' />
                                    </div>
                                </div>
                                <div className='form-control'>

                                    <label 
                                        htmlFor=""
                                        className='label cursor-pointer'>
                                        <span>Show Password</span>
                                        <input 
                                            checked={showPassword}
                                            onChange={()=>setShowPassword(!showPassword)}
                                            type="checkbox" 
                                            className='toggle'/>
                                    </label>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default PasswordChangeForm;