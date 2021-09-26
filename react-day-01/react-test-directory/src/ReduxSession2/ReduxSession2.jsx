import React from 'react'
import { Provider } from 'react-redux'
import AddUser from './Components/AddUser'
import Alluser from './Components/Alluser'
import store from './Store/store'

function ReduxSession2() {
    return (
        <Provider store={store} >
            <Alluser/>
            <AddUser/>
        </Provider>
    )
}

export default ReduxSession2
