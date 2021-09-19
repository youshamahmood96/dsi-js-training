import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUsers } from '../../Actions/fetchActions'
import { deleteUser } from '../../Actions/userActions'

function AllUser() {
    const users = useSelector(state=>{
        return state.users.users
    })
    const dispatch = useDispatch()
    const handleClick = id => {
        dispatch(deleteUser(id))
    }
    useEffect(()=>{
        dispatch(fetchUsers)
    },[dispatch])
    const fetchedUsers = useSelector(state=>{
        return state.fetchApi.users
    })
    console.log(fetchedUsers);
    return (
        <div>
            {fetchedUsers && fetchedUsers[0] && fetchedUsers[0].name}
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
