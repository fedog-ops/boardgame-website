import { getReviews } from "../utils/API"
import { useEffect, useState } from "react"
import header from './styling/header.css'

const Homepage = () => {
    
const [reviews, setReviews] = useState([])

useEffect(() => {
    getReviews().then((data)=> {
        setReviews(data)
    })
})
console.log(reviews)
    return (
        <div className ="Homepage">
            
            <h3>Homepage</h3>
            <ul>
                {reviews.map((review )=>{
                    return (<div className = 'reviewCard'>
                            <div>Title: {review.title}</div>
                            <div>Category: {review.category}</div>
                            <div>Designer: {review.designer}</div>
                            <div>Owner: {review.owner}</div>
                            <div>  Created at: {review.created_at}</div>
                             <img className ='reviewPics' src={review.review_img_url} alt='Review picture'/>
                            <div>Votes: {review.votes}</div>
                          
                   </div>
                    )
                })}
            </ul>
            
            </div>
    )
}

export default Homepage