import React, { useContext } from 'react'
import { UserContext } from '../Context/UserContext'

function NavBar() {
    const {users} = useContext(UserContext)
    return (
        <div>
            <h1>Total User Count : {users.length}</h1>
        </div>
    )
}

export default NavBar
