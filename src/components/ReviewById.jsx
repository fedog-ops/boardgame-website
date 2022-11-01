import { getReviewById, updateVotes } from "../utils/API";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Homepage from "./Homepage";

import LikeButton from "./LikeButton";

const ReviewById = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [review, setReview] = useState([]);
  const { review_id } = useParams();

  useEffect(() => {
    setIsLoading(true);
    getReviewById(review_id).then((data) => {
      setReview(data);
      setIsLoading(false);
    });
  }, [review_id]);

  const {
    title,
    category,
    designer,
    owner,
    description,
    review_img_url,
    votes,
    review_body,
  } = review;


  
  
  if (isLoading) return <p>Loading...</p>;
  return (
    <div className="reviewCard">
      <p>{review_id}</p>
      <div>Title: {title}</div>
      <div>Category: {category}</div>
      <div>Designer: {designer}</div>
      <div>Owner: {owner}</div>
      <div>Created at: {review.created_at}</div>
      <img
        className="reviewPics"
        src={review.review_img_url}
        alt="Review picture"
      />
      
        
    <LikeButton review={review}/>
                
      
      <div>Review : {review_body}</div>
    </div>
  );
};
export default ReviewById;
