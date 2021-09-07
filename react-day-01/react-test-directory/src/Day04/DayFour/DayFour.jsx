import React from 'react'
import UserProvider from '../Context/UserContext'
import ShowUser from '../ShowUser/ShowUser'
import NavBar from '../../ContextApiFolders/NavBar/NavBar'
import AddUser from '../AddUser/AddUser'
function DayFour() {
    return (
        <UserProvider>
            <NavBar/>
            <ShowUser/>
            <AddUser/>
        </UserProvider>
    )
}

export default DayFour
