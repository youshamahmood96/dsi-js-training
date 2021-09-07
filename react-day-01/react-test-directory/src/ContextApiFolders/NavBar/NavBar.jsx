import React, { useContext } from 'react'
import { UserContext } from '../../Day04/Context/UserContext'

function NavBar() {
    const [user] = useContext(UserContext)
    return (
        <div>
            <h1>Total User Count : {user.length}</h1>
        </div>
    )
}

export default NavBar
