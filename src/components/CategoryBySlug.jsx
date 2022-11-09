import {useParams, Link} from 'react-router-dom'
import { useState, useEffect} from 'react'
import { getReviews } from '../utils/API'
import Error from './Error'
import reviews from './styling/reviews.css'

const CategoryBySlug = () => {
    const {slug} = useParams()
    const [isLoading, setIsLoading] = useState(true)
    const [displayReviews, setDisplayReviews] = useState([])
    const [sort_by, setSort_by] = useState('created_at')
    const [order_by, setOrder_by] = useState('DESC')
    const [err, setErr] = useState(null)
   

    //temp error handler until database can filter categories
   
   
useEffect(() => {
    setIsLoading(true) 
    getReviews(sort_by, order_by).then((data) => { 
        // I missed out the category query for getReviews on my datbase
        //temp error handler for if the cat url is incorrect
    const allSlugs = ['all', 'strategy', 'hidden-roles', 'dexterity', 'push-your-luck', 'roll-and-write', 'deck-building']
    if (!allSlugs.includes(slug)) {setErr({msg:'Category does not exist', status: 400})}
    
        const catFiltered = data.filter(x => x.category === slug)
        
        if (slug === 'all') {setDisplayReviews(data)}
        else {setDisplayReviews(catFiltered) }
        setIsLoading(false)        
    }).catch(({response: {data: { msg },status}}) =>{
        setErr({msg, status})
    })
} ,[ slug, order_by, sort_by])

if(err) return <Error err={err}/>
if(isLoading) return <p>Loading ...</p>
return <div>
    <h3>{slug} games ({displayReviews.length})</h3>
<label className='dropDownBox'> Sort By:
    <select value={sort_by} onChange={(e)=>{setSort_by(e.target.value)}}>
    <option value ='category'> Category </option>
    <option value ='created_at'> Created at </option>
    <option value ='designer'> Designer </option>
    <option value ='owner'> Owner </option>
    <option value ='votes'> Votes </option>
</select></label>
<label className='dropDownBox'>Order By:
<select value={order_by} onChange={(e)=>{setOrder_by(e.target.value)}}>
    <option value ='ASC'> ASC </option>
    <option value ='DESC'> DESC </option>
</select></label>
<div className='reviewList'>
    {displayReviews.map((review, i) => {
    return (<div key = {i} className = 'reviewCard'>
    <div className ='reviewContents'>Title: {review.title}</div>
    <div>Category: {review.category}</div>
    <div>Designer: {review.designer}</div>
    <div>Owner: {review.owner}</div>
    <div>  Created at: {review.created_at}</div>
    <Link to={`/reviews/${review.review_id}`}>
                             <img className ='reviewPics' src={review.review_img_url} alt='Review picture'/>
                        </Link>
                            <div className ='reviewContents'>Votes: {`${'❤️'.repeat(review.votes)}`}</div>
                      
</div>)
})}</div>
</div>
}

export default CategoryBySlug