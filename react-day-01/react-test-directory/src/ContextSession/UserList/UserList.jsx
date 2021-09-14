import React, { useContext } from "react";
import { UserContext } from "../Context/UserContext";
// import {users} from "../../Assets/users";
function UserList() {
    const [user,setUser] = useContext(UserContext)
    const handleClick = id => {
        setUser(user.filter(usr=>usr.id!==id))
    }
  return (
    <div>
      {user.map(({ id, name, age, description, avatar }, idx) => (
        <div key={idx}>
          <img src={avatar} alt="avatar" />
          <h3>{name}</h3>
          <p> {description} </p>
          <h4>{age}</h4>
          <button onClick={e=>handleClick(id)} >Delete User</button>
        </div>
      ))}
    </div>
  );
}

export default UserList;
