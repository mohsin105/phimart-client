import React, { useEffect, useState } from 'react';
import StarRating from './StarRating';
import ReviewForm from './ReviewForm';
import { useParams } from 'react-router';
import authApiClient from '../../services/auth-api-client';
import apiClient from '../../services/api-client';
import ReviewList from './ReviewList';
import useAuthContext from '../../hooks/useAuthContext';

const ReviewSection = () => {
    const {id}=useParams();
    const [userCanReview, setUserCanReview] = useState(false);
    const [isLoading,setIsLoading] =useState(false);
    const [reviews,setReviews] = useState([]);
    const {user} = useAuthContext();
    const [editReview,setEditReview] = useState({ratings:0,comment:"Nothing"});
    const [editingId,setEditingId] = useState(null);

    const onSubmit=async(data)=>{
        console.log(data);
        try {
            const response=await authApiClient.post(`/products/${id}/reviews/`,data);
            console.log(response.data);
            fetchReviews();
        } catch (error) {
            console.log('Error submitting Review: ',error);
        }
    };

    const checkUserPermission=async()=>{
        try {
            const response= await authApiClient.get(`/orders/has-ordered/${id}`);
            // console.log(response.data);
            setUserCanReview(response.data.hasOrdered);
        } catch (error) {
            console.log("Error while checking user permission ",error);
        }
    };

    useEffect(()=>{
        checkUserPermission();
        fetchReviews();
    },[]);
    

    const fetchReviews=async()=>{
        setIsLoading(true);
        try {
            const response= await apiClient(`/products/${id}/reviews/`);
            console.log(response.data);
            setReviews(response.data);
        } catch (error) {
            console.log("Error while fetching reviews from backend api: ",error)
        }finally{
            setIsLoading(false);
        }
    };

    const handleUpdateReview=async()=>{
        try {
            const response= await authApiClient.put(`/products/${id}/reviews/${editingId}/`,editReview);
            console.log(response.data);
            setEditingId(null);
            fetchReviews();
        } catch (error) {
            console.log("Error updating a review: ", error);
        }
    };

    const handleDeleteReview=async(reviewId)=>{
        try {
            const response= await authApiClient.delete(`/products/${id}/reviews/${reviewId}/`);
            console.log(response);
            fetchReviews();
        } catch (error) {
            console.log("Error deleting the review: ", error);
        }
    };
    return (
        <div>
            {/* <StarRating/> */}
            {/* Showing All Reviews */}
            {isLoading? (
                <span className='loading loading-spinner text-primary'></span>
            ) : reviews.length===0? (
                <p>No reviews yet. be the first to review this product</p>
            ): (
                <ReviewList 
                    reviews={reviews} 
                    user={user}
                    editReview={editReview}
                    setEditReview={setEditReview}
                    editingId={editingId}
                    setEditingId={setEditingId}
                    handleUpdateReview={handleUpdateReview}
                    handleDeleteReview={handleDeleteReview}
                    />
            )}
            {/* New Review Section */}
            {userCanReview && (
                <div className='card bg-base-100 shadow-lg border border-base-200 rounded-xl'>
                    <div className='card-body'>
                        <h3 className='card-title'>Write a Review</h3>
                        <ReviewForm onSubmit={onSubmit}/>
                    </div>                
                </div>
            )}
        </div>
    );
};

export default ReviewSection;