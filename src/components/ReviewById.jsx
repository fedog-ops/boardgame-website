import { getReviewById } from "../utils/API";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Homepage from "./Homepage";

const ReviewById = () => {
  const [loading, setLoading] = useState(true);
  const [review, setReview] = useState([]);
  const { review_id } = useParams();

  useEffect(() => {
    setLoading(true);
    getReviewById(review_id).then((data) => {
      setReview(data);
      setLoading(false);
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
  if (loading) return <p>Loading...</p>;
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
      <div>Votes: {review.votes}</div>
      <div>Review : {review_body}</div>
    </div>
  );
};
export default ReviewById;
