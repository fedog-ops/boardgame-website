import {useEffect, useState} from 'react'
import { getCategories } from '../utils/API'
import category from './styling/category.css'
import {Link} from 'react-router-dom'

const Category = ({currentCategory}) => {
const [displayCategories, setDisplayCategories] = useState([])
useEffect(() => {
    getCategories().then((data) => {
        setDisplayCategories(data)
    })
} ,[])

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