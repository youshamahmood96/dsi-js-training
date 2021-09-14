import React, { createContext, useReducer, useState } from 'react'
import {users} from '../../Assets/users'
import userReducer from './Reducer/userReducer'

export const UserContext = createContext()
// const initialState = {
//     users
// }
function UserProvider(props) {
    const [user,setUser] = useState(users)
    // const [state,dispatch] = useReducer(userReducer,initialState)
    // const addUser = user => {
    //     dispatch({
    //         type: 'ADD_USER',
    //         payload: user
    //       });
    // }
    // const deleteUser = id => {
    //     dispatch({
    //         type: 'DELETE_USER',
    //         payload: id
    //       });
    // }
    // return (
    //     <UserContext.Provider value={{
    //         users:state.users,
    //         addUser,
    //         deleteUser
    //     }} >
    //         {props.children}
    //     </UserContext.Provider>
    // )
    return (
            <UserContext.Provider value={[user,setUser]} >
                {props.children}
            </UserContext.Provider>
        )
}

export default UserProvider
