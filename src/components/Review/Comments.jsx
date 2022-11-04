import { useParams } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import {UserContext} from '../../contexts/User'
import { deleteCommentById, getComments } from "../../utils/API";
import '../styling/review_css.css'
import emojiGenerator from '../../utils/emojiMachine'

const Comments = ({review_id}) => {

const [comments, setComments] = useState([])
const {user, setUser} = useContext(UserContext)
    useEffect(()=> {
            getComments(review_id).then((data) => {
                setComments(data)
            })
    
    },[comments])

    const deleteComment = (comment_id, author) => {
       
             deleteCommentById(comment_id)
    }
    return (<div>
        {comments.map(comment => {
            return (<div key={comment.comment_id} className="comment">
                <p>{comment.body}</p>
                <p className ='author'>Author: {comment.author}   || Votes: {'⭐️'.repeat(comment.votes)}</p>
               {(user === comment.author) ?   <p onClick={() => deleteComment(comment.comment_id, comment.author)}>🗑</p>:  <p></p>} 
              

                </div>)
        })}
    </div>)
}
export default Comments