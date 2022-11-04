import userEvent from "@testing-library/user-event";
import { useState, useContext } from "react";
import { UserContext } from "../../contexts/User";
import { addComment } from "../../utils/API";
import Error from "../Error";

const PostComment = ({ review_id }) => {
  const [isCommentSubmitted, setIsCommentSubmitted] = useState(false);
  const [err, setErr] = useState(null);
  const [newComment, setNewComment] = useState('');
  const { user, setUser } = useContext(UserContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(newComment)
    if(newComment !== '' && user !== 'please select a user'){
    addComment(review_id, user, newComment)
      .then((data) => {
        setIsCommentSubmitted(true)
        
        const sentTime = setTimeout(() => {
          setIsCommentSubmitted(false)
          setNewComment('')
        }, 1000)
        ;})
      .catch(
        ({response: {data: { msg },status}}) => {
          setIsCommentSubmitted(false)
          setErr({ msg, status });
        }
      );}
  };

  if (isCommentSubmitted) {
    return (
       <div className="comment">
        <p>Sent</p>
          </div>
    );
  }

  return (
    
   
    <form onSubmit={handleSubmit}>
    <div> {err ? <Error err={err} /> : '' } </div>
      
        <input className="comment"
        placeholder="Enter your comment..."
          type="text"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        />
    
      <p></p>
      <label>
        Loggin in as : {user}
        <button>Submit</button>
      </label>
    </form>
   
  );
};
export default PostComment;
