import React, { useContext } from "react";
import { UserContext } from "../Context/UserContext";
function NavBar() {
    const [user,setUser] = useContext(UserContext)
    return (
        <div>
            <h1>Total Users : {user.length}</h1>
        </div>
    )
}

export default NavBar
