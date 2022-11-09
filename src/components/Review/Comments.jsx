import { useEffect, useState, useContext } from "react";
import { UserContext } from "../../contexts/User";
import { deleteCommentById, getComments } from "../../utils/API";
import "../styling/reviews.css";
import Error from "../Error";

const Comments = ({ review_id }) => {
  const [comments, setComments] = useState([]);
  const { user, setUser } = useContext(UserContext);
  const [err, setErr] = useState(null);
  useEffect(() => {
    getComments(review_id)
      .then((data) => {
        setComments(data);
      })
      .catch(
        ({
          response: {
            data: { msg },
            status,
          },
        }) => {
          setErr({ msg, status });
        }
      );
  }, [comments]);

  const deleteComment = (comment_id, author) => {
    deleteCommentById(comment_id);
  };
  if (err) return <Error err={err} />;
  return (
    <div>
      {comments.map((comment) => {
        return (
          <div key={comment.comment_id} className="comment">
            <p className="commentBody">{comment.body}</p>
            <p className="author">
              Author: {comment.author} || Votes: {"⭐️".repeat(comment.votes)}
            </p>
            {user === comment.author ? (
              <button
                onClick={() =>
                  deleteComment(comment.comment_id, comment.author)
                }
              >
                Delete comment: 🗑
              </button>
            ) : (
              <p></p>
            )}
          </div>
        );
      })}
    </div>
  );
};
export default Comments;
