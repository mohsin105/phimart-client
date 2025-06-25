import React from 'react';

const ProfileButton = ({isEditing,setIsEditing, isSubmitting}) => {
    return (
        <div>
            {isEditing? (
                <div>
                    <button 
                        type="submit"
                        disabled={isSubmitting}
                        className='btn btn-info px-8'>
                            {isSubmitting? "Submitting..." : "Submit Changes"}
                    </button>
                    <button 
                        type='button'
                        className='btn btn-outline px-8'
                        onClick={()=>setIsEditing(false)}>Cancel</button>
                </div>
            ) : (
                <button 
                    type='button' 
                    className='btn btn-primary px-8'
                    onClick={()=>setIsEditing(true)}>Update Profile
                </button>
            )}
            
        </div>
    );
};

export default ProfileButton;