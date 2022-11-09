import {useState, useEffect, useContext} from 'react'
import { UserContext } from "../contexts/User"
import { getUsers } from '../utils/API'
const Avatar = () => {
    const {user, setUser} = useContext(UserContext)
    const [avatar, setAvatar] = useState(null)
useEffect(()=>{
    getUsers().then((data) =>{
        if (user !== 'please select a user'){
            const av = data.filter(u => u.username === user)
            //no getUserById GET request
            setAvatar(av[0].avatar_url)
        }
    })
})
return (<div className='avContainer'>
    {(avatar !== null) ? <img className='avPic' src={avatar} ></img> : <p>Select user</p>}

</div>)
}
export default Avatar