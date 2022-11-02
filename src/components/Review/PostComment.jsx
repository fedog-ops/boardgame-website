import userEvent from "@testing-library/user-event"
import { useState, useContext } from "react"
import { UserContext } from "../../contexts/User"
import { addComment } from "../../utils/API"

const PostComment = ({review_id}) => {
    const [isCommentSubmitted, setIsCommentSubmitted] = useState(false)

    const [newComment, setNewComment] = useState('')
    const {user, setUser} = useContext(UserContext)

const handleSubmit = (event) => {
    event.preventDefault();
    setIsCommentSubmitted(true)
    addComment(review_id, user, newComment).then((data) => {
      })
  }


    if (isCommentSubmitted) {
      return (<div className="comment">
    <p>{newComment}</p>
    <p className ='author'>Author: {user}   || Votes: </p>

    </div>)}
    return ( <form onSubmit={handleSubmit}>
       
        <label>Enter your comment:
          <input
            type="text" 
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
          />
          
        </label> 
        <p></p>
        <label>Loggin in as : {user}  
           
            <button>Submit</button>
            </label> 

      </form>)
}
export default PostComment