import { commonApI } from "./commonAPI"
import { SERVER_URL } from "./server_url"

// add component Upload video store video in http://localhost:3000/videos
export const uploadReviewAPI=async(review)=>{
    // send response to add component
    return await commonApI("POST",`${SERVER_URL}/allReviews`,review)
}

// get Recipe api called  by view http://localhost:3000/Recipe
export const getAllReviewAPI=async()=>{
    return await commonApI("GET",`${SERVER_URL}/allReviews`,"")
}

// Delete Recipe from videoCard by its Id to http://localhost:3000/Recipe
export const removeReviewAPI=async(reviewId)=>{
    return await commonApI("DELETE",`${SERVER_URL}/allReviews/${reviewId}`,{})
}
