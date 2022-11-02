import userEvent from "@testing-library/user-event"
import { useState, useContext } from "react"
import { UserContext } from "../../contexts/User"
import { addComment } from "../../utils/API"

const PostComment = ({review_id}) => {
    const [commentButtonClicked, setCommentButtonClicked] = useState(false)
    const [newComment, setNewComment] = useState('')
    const {user, setUser} = useContext(UserContext)
const newCommentHandler = () => {
    setCommentButtonClicked(true)
}
const handleSubmit = (event) => {
    event.preventDefault();
    addComment(review_id, user, newComment).then((data) => {
        console.log(data)
    })
  }


    if (!commentButtonClicked) return <button onClick={newCommentHandler}>Post Comment</button>
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