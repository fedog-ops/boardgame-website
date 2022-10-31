import {useParams, Link} from 'react-router-dom'
import { useState, useEffect} from 'react'
import { getReviews } from '../utils/API'

const CategoryBySlug = () => {
    const {slug} = useParams()

    const [displayCategories, setDisplayCategories] = useState([])
useEffect(() => {
    getReviews().then((data) => {
        const catFiltered = data.filter(x => x.category === slug)
        // I missed out the category query for getReviews on my datbase
        setDisplayCategories(catFiltered)
    })
} ,[])

return <div>
    <h3>{slug} games</h3>
    {displayCategories.map((review, i) => {
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
  
</div>)
})}</div>
}

export default CategoryBySlug