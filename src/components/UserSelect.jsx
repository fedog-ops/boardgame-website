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


