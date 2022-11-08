import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../contexts/User";

const UserCard = ({ userIndivudal }) => {
  const { user, setUser } = useContext(UserContext);
  return (
<Link to='/category/all'>
      <div
        onClick={(event) => {
          setUser(userIndivudal.username);
        }}
        className ='userCard'
      >
        <img className="userAvatar" src={userIndivudal.avatar_url}></img>
        <div className="userName">{userIndivudal.username}</div>
      </div>
</Link>
  );
};
export default UserCard;
