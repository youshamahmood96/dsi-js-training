import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { deleteUser } from '../Actions/userACtions';
function AllUser() {
    const users = useSelector(state=>{
        return state.users
    })
    const dispatch = useDispatch()
    const handleClick = id => {
        dispatch(deleteUser(id))
    }
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
