import {useEffect, useState} from 'react'
import { getCategories } from '../utils/API'
import category from './styling/category.css'
import {Link} from 'react-router-dom'
import Error from './Error'  

const Category = ({currentCategory}) => {
    const [displayCategories, setDisplayCategories] = useState([])
    const [err, setErr] = useState(null)
useEffect(() => {
    getCategories().then((data) => {
        setDisplayCategories(data)
    })
    .catch(({response: {data: { msg },status}}) =>{
        setErr({msg, status})
    });  
} ,[])

if(err) return <Error err={err}/>
    return (

        <div>
               <h3>Categories</h3>
             <ul>
                {displayCategories.map((category, i )=>{
                    return (
                                <div key = {i} className = 'categoryCard'>
                                    <div>Title: {category.slug}</div>
                                    <div>Description : {category.description}</div>
                                    <Link to={`/category/${category.slug}`}>
                                         <button type="submit" >See reviews</button>
                                    </Link>  
                                </div>
                           
                    )
                })}
            </ul>
        </div>
    )

}
export default  Category
