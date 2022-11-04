import { useState, useContext, useEffect } from "react"
import {Link} from 'react-router-dom'
import { UserContext } from "../contexts/User"
import { getUsers } from "../utils/API"
import UserCard from "./UserCard"
import Error from './Error'
const UserSelect = ({currentCategory, setCurrentCategory}) => {
    const [review_id, setReview_id] = useState('')
    const [userList, setUserList] = useState([])
    const {user, setUser} = useContext(UserContext)
    const [err, setErr] = useState(null)
   
useEffect(() => {
    getUsers().then(data =>{
        setUserList(data)
      }).catch(({response: {data: { msg },status}}) =>{
        setErr({msg, status})
    })
},[])
if(err) return <Error err={err}/>
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


