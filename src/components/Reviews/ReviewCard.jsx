import React from 'react';
import { FaStar } from 'react-icons/fa';
import EditReviewForm from './EditReviewForm';

const ReviewCard = ({review,user,setEditReview,editReview,onEditClick,isEditing,onCancelEditClick,onSaveEditClick,onDeleteClick}) => {
    return (
        <div className='card-body bg-cyan-50 shadow-xl border-2 border-base-200 my-2'>
            <div className='flex justify-between'>
                <div>
                    <p className='font-semibold'>{review.user.name}</p>
                    {/* Showing Ratings icons */}
                    <div className='flex gap-2'>
                        {[...Array(5)].map((_,i)=>(
                            <FaStar 
                                key={i+1} 
                                className={`${i+1<=review.ratings?"text-yellow-300" :"text-gray-300"}`}/>
                        ))}
                    </div>
                </div>

                {user && user.id === review.user.id && (
                    <div className='flex gap-2'>
                        <button 
                            onClick={onEditClick}
                            className='btn btn-primary'>Edit</button>
                        <button 
                            onClick={onDeleteClick}
                            className='btn btn-error'>Delete</button>
                    </div>
                )}
            </div>
            {isEditing? (

                <EditReviewForm 
                    editReview={editReview} 
                    setEditReview={setEditReview}
                    onCancelEditClick={onCancelEditClick}
                    onSave={onSaveEditClick}
                    />
            ): (

                <div>
                    <p>{review.comment}</p>
                </div>
            )}
            {/* Comment */}
            
        </div>
    );
};

export default ReviewCard;