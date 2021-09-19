import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../Actions/fetchUserActions';
import { deleteUser } from '../Actions/userACtions';
function AllUser() {
    const dispatch = useDispatch()
    dispatch(fetchUsers)
    const handleClick = id => {
        dispatch(deleteUser(id))
    }
    const users = useSelector(state=>{
        console.log(state);
        return state.staticUsers.users
    })
    return (
        <div>
            {   
                 users.map(({avatar,name,description,age,id})=>(<div key={id}>
                    <img src={avatar} alt="avatar" />
                    <h3>{name}</h3>
                    <p> {description} </p>
                    <h4>{age}</h4>
                    <button onClick={e=>handleClick(id)} >Delete User</button> 
                </div>))
             }
        </div>
    )
}

export default AllUser
