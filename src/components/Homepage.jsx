import { getReviews } from "../utils/API"
import { useEffect, useState } from "react"
import homepage from './styling/homepage.css'
import {Link} from 'react-router-dom'

const Homepage = () => {
const [isLoading, setIsLoading] = useState(true)
const [reviews, setReviews] = useState([])

useEffect(() => {
    setIsLoading(true)
    getReviews().then((data)=> {
        setReviews(data)  
        setIsLoading(false)          
    })
}, [])
if(isLoading) return <p>Loading ...</p>
    return (
        <div className ="Homepage">
            
            <h3>Homepage</h3>
            <ul>
                {reviews.map((review, i )=>{
                    return (<div key = {i} className = 'reviewCard'>
                            <div>Title: {review.title}</div>
                            <div>Category: {review.category}</div>
                            <div>Designer: {review.designer}</div>
                            <div>Owner: {review.owner}</div>
                            <div>  Created at: {review.created_at}</div>
                        <Link to={`/reviews/${review.review_id}`}>
                             <img className ='reviewPics' src={review.review_img_url} alt='Review picture'/>
                        </Link>
                            <div>Votes: {`${'❤️'.repeat(review.votes)}`}</div>
                            <span className = 'voteBar'>
                            <div>❤️</div> || <div>🥴 ?</div>
                            </span>
                          
                   </div>
                    )
                })}
            </ul>
            
            </div>
    )
}

export default Homepage