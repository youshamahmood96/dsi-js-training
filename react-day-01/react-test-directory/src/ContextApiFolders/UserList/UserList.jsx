import React, { useContext } from 'react'
import { UserContext } from '../Context/UserContext'
function UserList() {
    const {users} = useContext(UserContext)
    return (
        <div>
            {
                users.map((user,idx)=>(<div key={idx}>
                    <img src={user.avatar} alt="avatar" />
                    <h3>{user.name}</h3>
                    <p> {user.description} </p>
                    <h4>{user.age}</h4> 
                </div>))
            }
        </div>
    )
}

export default UserList
