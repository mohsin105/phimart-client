import React from 'react';
import { useForm } from 'react-hook-form';
import StarRating from './StarRating';

const ReviewForm = ({onSubmit}) => {
    const {register, handleSubmit, watch, setValue, formState:{errors, isSubmitting}} = useForm();
    const ratingValue=watch('ratings',0);
    
    return (
        <div>
            <form action="" 
                onSubmit={handleSubmit(onSubmit)}
                className='space-y-4'>
                <div>
                    <label className='label font-medium'>
                        <span className='label-text'>Rating</span>
                    </label>
                    <StarRating onChange={(value)=> setValue('ratings',value)} ratings={ratingValue}/>
                    <input 
                        type="hidden" 
                        {...register('ratings',{required:true})}/>
                </div>
                <div className='form-control'>
                    <label className='label font-medium'>
                        <span className='label-text'> Your Review</span>
                    </label>
                    <textarea 
                        {...register("comment",{required:true})}
                        name="comment" 
                        id="comment"
                        className='textarea textarea-bordered min-h-[120px] focus:textarea-primary'></textarea>
                </div>
                
                <button 
                    type="submit"
                    className='btn btn-primary w-full md:w-auto'>Add Comment</button>
            </form>
        </div>
    );
};

export default ReviewForm;