import { getReviewById, updateVotes } from "../utils/API";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import Comments from "./Review/Comments";
import LikeButton from "./Review/LikeButton";
import PostComment from "./Review/PostComment";
import Error from './Error'
import './styling/general.css'
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
      <p>{review_id}</p>
      <div>Title: {title}</div>
      <div>Category: {category}</div>
      <div>Designer: {designer}</div>
      <div>Owner: {owner}</div>
      <div>Created at: {review.created_at}</div>
      <p></p>
        <div className="reviewBody">Review : {review_body}</div>
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
     
    </div>
  );
};
export default ReviewById;
