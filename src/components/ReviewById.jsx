import { getReviewById, updateVotes } from "../utils/API";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import Comments from "./Review/Comments";
import LikeButton from "./Review/LikeButton";
import PostComment from "./Review/PostComment";
import Error from './Error'
import './styling/reviews.css'
const ReviewById = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [review, setReview] = useState([]);
  const { review_id } = useParams();
  const [err, setErr] = useState(null)

  useEffect(() => {
    setIsLoading(true);
    getReviewById(review_id).then((data) => {
      setReview(data);
      setIsLoading(false);
    }).catch(({response: {data: { msg },status}}) =>{
      setErr({msg, status})
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


  
  if(err) return <Error err={err}/>
  if (isLoading) return <p>Loading...</p>;
  return (
    <div>
    <div className="soloReviewCard">
     
      <div className='title'><b>Title:</b> {title}</div>
      <p></p>
      <div><b>Category:</b> {category}</div>
      <div><b>Designer:</b> {designer}</div>
      <div><b>Owner:</b> {owner}</div>
      <p></p>
        <div className="reviewBody"><b>Review:</b> <p></p>{review_body}</div>
        <p></p>
        <img
        className="reviewPics"
        src={review.review_img_url}
        alt="Review picture"
      />
      
  
    <LikeButton review={review}/>
       </div>         
      <div className="soloReviewCard">
        <PostComment review_id={review.review_id}/>
        <Comments review_id={review.review_id}/>
      </div>
     <div className="soloReviewCard">Created at: {Date(review.created_at)}</div>
    </div>
  );
};
export default ReviewById;
