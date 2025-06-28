import React from 'react';
import ReviewCard from './ReviewCard';

const ReviewList = ({reviews,user,editReview,setEditReview,editingId,setEditingId,handleUpdateReview,handleDeleteReview}) => {
    return (
        <div>
            <div className='flex gap-4'>
                <h1 className='text-xl font-semibold'>Reviews for this product</h1>
                <span className='size-8 flex items-center justify-center rounded-full bg-cyan-200'>{reviews.length}</span>
            </div>
            {reviews.map((review)=>(
                <ReviewCard 
                    key={review.id} 
                    review={review} 
                    user={user}
                    isEditing={editingId===review.id}
                    editReview={editReview}
                    setEditReview={setEditReview}
                    onEditClick={()=>{
                        setEditingId(review.id);
                        setEditReview({ratings:review.ratings, comment:review.comment});
                    }}
                    onCancelEditClick={()=>setEditingId(null)}
                    onSaveEditClick={handleUpdateReview}
                    onDeleteClick={()=>handleDeleteReview(review.id)}/>
            ))}
        </div>
    );
};

export default ReviewList;