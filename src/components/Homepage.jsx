import { getReviews } from "../utils/API"
import { useEffect, useState } from "react"
import homepage from './styling/homepage.css'
import {Link} from 'react-router-dom'

const Homepage = () => {
    //usePArmas undefined
const [isLoading, setIsLoading] = useState(true)
const [reviews, setReviews] = useState([])
const [sort_by, setSort_by] = useState('')
const [order_by, setOrder_by] = useState('')
useEffect(() => {
    setIsLoading(true)
    getReviews('category', "DESC").then((data)=> {
        setReviews(data)  
        setIsLoading(false)          
    })
}, [])
if(isLoading) return <p>Loading ...</p>
    return (
        <div className ="Homepage">
            
            <h3>Homepage</h3>
            <submit>
                <option>ASC</option>
                <option>DESC</option>
            </submit>
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
                          
                   </div>
                    )
                })}
            </ul>
            
            </div>
    )
}

export default Homepage