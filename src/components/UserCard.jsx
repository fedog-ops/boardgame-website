import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../contexts/User";

const UserCard = ({ userIndivudal }) => {
  const { user, setUser } = useContext(UserContext);
  return (
<Link to='/category/all'>
      <flex
        onClick={(event) => {
          setUser(userIndivudal.username);
        }}
      >
        <img className="userAvatar" src={userIndivudal.avatar_url}></img>
        <div>{userIndivudal.username}</div>
      </flex>
</Link>
  );
};
export default UserCard;
