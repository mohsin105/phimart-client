import React from 'react';
import StarRating from './StarRating';

const EditReviewForm = ({editReview,setEditReview,onCancelEditClick,onSave}) => {
    return (
        <div className='bg-base-200 rounded-lg p-4 mt-4 space-y-4'>
            <div>
                <label className='label-text font-medium mb-1 block'>Rating</label>
                <StarRating  
                    ratings={editReview.ratings}
                    onChange={(value)=> setEditReview({...editReview,ratings:(value)})}/>
            </div>
            <div>
                <label className='label-text font-medium mb-1 block'>Comment</label>
                <textarea 
                    name="comment" 
                    id="comment"
                    value={editReview.comment}
                    onChange={(e)=> setEditReview({...editReview,comment:e.target.value})}
                    className='textarea textarea-bordered w-full min-h-[100px]'></textarea>
            </div>
            <div className='flex gap-2'>
                <button 
                    onClick={onSave}
                    className='btn btn-sm btn-success'>Save Changes</button>
                <button
                    onClick={onCancelEditClick} 
                    className='btn btn-sm btn-ghost'>Cancel</button>
            </div>
        </div>
    );
};

export default EditReviewForm;