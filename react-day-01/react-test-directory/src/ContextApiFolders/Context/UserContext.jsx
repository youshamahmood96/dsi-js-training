import React, { createContext, useReducer, useState } from 'react'
import {users} from '../../Assets/users'
import { ADD_USER } from './ActionTypes/userActions'
import userReducer from './Reducer/userReducer'

export const UserContext = createContext()
const initialState = {
    users
}
function UserProvider(props) {
    const [user,setUser] = useState(users)
    const [state,dispatch] = useReducer(userReducer,initialState)
    const addUser = user => {
        dispatch({
            type: ADD_USER,
            payload: user
          });
    }
    return (
        <UserContext.Provider value={{
            users:state.users,
            addUser
        }} >
            {props.children}
        </UserContext.Provider>
    )
}

export default UserProvider
