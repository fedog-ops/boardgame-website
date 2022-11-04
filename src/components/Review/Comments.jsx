import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getComments } from "../../utils/API";
import '../styling/review_css.css'
import emojiGenerator from '../../utils/emojiMachine'

const Comments = ({review_id}) => {

const [comments, setComments] = useState([])

    useEffect(()=> {
            getComments(review_id).then((data) => {
                setComments(data)
            })
    
    },[])
    return (<div>
        {comments.map(comment => {
            return (<div key={comment.comment_id} className="comment">
                <p>{comment.body}</p>
                <p className ='author'>Author: {comment.author}   || Votes: {'⭐️'.repeat(comment.votes)}</p>

                </div>)
        })}
    </div>)
}
export default Comments