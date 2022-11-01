import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getComments } from "../../utils/API";

const Comments = ({review_id}) => {

const [comments, setComments] = useState([])

    useEffect(()=> {
            getComments(review_id).then((data) => {
                setComments(data)
            })
    },[])
    return (<div>
        <h2>Comments:</h2>
        {comments.map(comment => {
            return (<div className="comment">
                <p>{comment.body}</p>
                <p>Author: {comment.author}   || Votes: {'💜'.repeat(comment.votes)}</p>

                </div>)
        })}
    </div>)
}
export default Comments