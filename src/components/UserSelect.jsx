import { useState, useContext, useEffect } from "react"
import {Link} from 'react-router-dom'
import { UserContext } from "../contexts/User"
import { getUsers } from "../utils/API"
import UserCard from "./UserCard"
const UserSelect = ({currentCategory, setCurrentCategory}) => {
    const [review_id, setReview_id] = useState('')
    const [userList, setUserList] = useState([])
    const {user, setUser} = useContext(UserContext)
   
useEffect(() => {
    getUsers().then(data =>{
        setUserList(data)
      })
},[])

    return ( <div>
{/* <label>User login</label>
<select value={user} onChange={(event) => setUser(event.target.value)}>
        <option value='please select a user'>Please select a user</option> 
        {userList.map((user, i) => {
            return (<option key = {i} value={user.username}>{user.username}</option>)
        })}
        
       
</select >  */}
{/* <img /> 
<Link to='/category/all'>
                    <button type="submit" >Enter</button>
                </Link>   */}

<main>
    <h2>Users</h2>
    <ul className ='userList'> 
        {userList.map(userIndivudal =>{
            return <UserCard key={userIndivudal.username} userIndivudal={userIndivudal}/>;
        })}
    </ul>
</main>

</div>
    )
}

export default UserSelect 


{/* <form>
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
    <form/> */}