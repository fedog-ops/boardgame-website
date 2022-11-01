import { getReviewById, updateVotes } from "../utils/API";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Homepage from "./Homepage";


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
const [likeIncrement, setLikeIncrement] = useState(0)
  const handleLike = () => {
    setLikeIncrement((currLikes) => currLikes + 1)
    updateVotes(review_id, 1).then((data)=> {
    }).catch((err)=>{
     setLikeIncrement((currLikes)=>currLikes-1)
    })
    }
  
  const handleDisike = () => {
    setLikeIncrement(currLikes=>currLikes-1)
   if(votes > 0) updateVotes(review_id, -1)
    }
  
  if (isLoading) return <p>Loading...</p>;
  return (
    <div className="reviewCard">
      <p>{review_id}</p>
      <div>Title: {review.title}</div>
      <div>Category: {review.category}</div>
      <div>Designer: {review.designer}</div>
      <div>Owner: {review.owner}</div>
      <div> Created at: {review.created_at}</div>
      <img
        className="reviewPics"
        src={review.review_img_url}
        alt="Review picture"
      />
      <div>Votes: {`${'❤️'.repeat(review.votes + likeIncrement)}`}</div>
        <span className = 'voteBar'>
                <button onClick={() => handleLike(1)}>❤️</button>
                <button onClick={() => handleDisike(-1)}>🥴</button>
        </span>
      <div>Review : {review_body}</div>
    </div>
  );
};
export default ReviewById;
