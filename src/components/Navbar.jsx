import { useState, useContext, useEffect } from "react"
import {Link} from 'react-router-dom'
import { UserContext } from "../contexts/User"
import { getUsers } from "../utils/API"

const Navbar = ({currentCategory, setCurrentCategory}) => {
    const [review_id, setReview_id] = useState('')
    const [userList, setUserList] = useState([])
    const {user, setUser} = useContext(UserContext)
   
useEffect(() => {
    getUsers().then(data =>{
        setUserList(data)
      })
},[])

    return ( <div>
                 <Link to='/'>
                    <button type="submit" >Home</button>
                </Link>  
                <Link to='/category'>
                    <button type="submit" >Categories</button>
                </Link>
<p></p>

        <form>
        <label>Review selector</label>
            <input
            type="text"
            required
            value = {review_id}
            onChange={(event)=> setReview_id(event.target.value)}
            id="review-search"
            placeholder="1-24"
        />
     <Link to={`/reviews/${review_id}`}>
             <button type="submit" >Search</button>
     </Link>  
   
</form> 
<label>User login</label>
<select value={user} onChange={(event) => setUser(event.target.value)}>
        <option value='please select a user'>Please select a user</option> 
        {userList.map((user, i) => {
            return (<option key = {i} value={user.username}>{user.username}</option>)
        })}
        
       
</select > 
<img />
</div>
    )
}

export default Navbar 


/* */