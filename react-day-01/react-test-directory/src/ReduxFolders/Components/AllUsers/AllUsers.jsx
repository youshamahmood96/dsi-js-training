import React from 'react'
import { useSelector } from 'react-redux'

function AllUsers() {
    const users = useSelector(state=>state?state.userReducer:null)
    console.log(users);  
    return (
        <div>
            hello
        </div>
    )
}

export default AllUsers
