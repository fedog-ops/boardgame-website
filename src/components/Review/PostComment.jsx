import { useState } from "react"
import { addComment } from "../../utils/API"

const PostComment = ({review_id}) => {
    const [commentButtonClicked, setCommentButtonClicked] = useState(false)
    const [newComment, setNewComment] = useState('')
    const [username, setUsername] = useState('')
const newCommentHandler = () => {
    setCommentButtonClicked(true)
}
const handleSubmit = (event) => {
    event.preventDefault();
    addComment(review_id, username, newComment).then((data) => {
        console.log(data)
    })
  }


    if (!commentButtonClicked) return <button onClick={newCommentHandler}>Post Comment</button>
    return ( <form onSubmit={handleSubmit}>
        <p>{newComment}</p>
        <label>Enter your comment:
          <input
            type="text" 
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
          />
          
        </label> 
        <p></p>
        <label>Author:
            <input
            type="text" 
            value = {username}
            onChange={(e) => setUsername(e.target.value)}
          />
            </label>
            <button>Submit</button>
      </form>)
}
export default PostComment