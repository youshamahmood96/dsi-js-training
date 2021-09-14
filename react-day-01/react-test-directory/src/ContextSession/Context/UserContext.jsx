import React, { createContext, useState } from 'react'
import {users} from '../../Assets/users'

export const UserContext = createContext()

function GlobalState(props) {
    const [user,setUser] = useState(users)
    return (
        <UserContext.Provider value={[user,setUser]} >
            {props.children}
        </UserContext.Provider>
    )
}

export default GlobalState
