import {useParams, Link} from 'react-router-dom'
import { useState, useEffect} from 'react'
import { getReviews } from '../utils/API'
import homepage from './styling/homepage.css'

const CategoryBySlug = () => {
    const {slug} = useParams()
    const [isLoading, setIsLoading] = useState(true)
    const [displayCategories, setDisplayCategories] = useState([])
    const [sort_by, setSort_by] = useState('created_at')
    const [order_by, setOrder_by] = useState('DESC')
    //sort and order left initally empty as API gives these defaults 
    //or hard code 'created_at' and 'DESC'
useEffect(() => {
    setIsLoading(true) 
    getReviews(sort_by, order_by).then((data) => {
        const catFiltered = data.filter(x => x.category === slug)
        // I missed out the category query for getReviews on my datbase
        if (slug === 'all') {setDisplayCategories(data)}
        else {setDisplayCategories(catFiltered) }
        setIsLoading(false)        
    })
} ,[slug, order_by, sort_by])
if(isLoading) return <p>Loading ...</p>
return <div>
    <h3>{slug} games ({displayCategories.length})</h3>
<label> Sort By:
    <select value={sort_by} onChange={(e)=>{setSort_by(e.target.value)}}>
    <option value ='category'> Category </option>
    <option value ='created_at'> Created at </option>
    <option value ='designer'> Designer </option>
    <option value ='owner'> Owner </option>
    <option value ='votes'> Votes </option>
</select></label>
<label>Order By:
<select value={order_by} onChange={(e)=>{setOrder_by(e.target.value)}}>
    <option value ='ASC'> ASC </option>
    <option value ='DESC'> DESC </option>
</select></label>

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