import React from 'react'
import AddUser from './Components/AddUser'
import AllUser from './Components/AllUser'
import { Provider } from 'react-redux'
import store from './Store/store'
function ReduxSession1() {
    return (
        <Provider store={store} >
            <AllUser/>
            <AddUser/>
        </Provider>
    )
}

export default ReduxSession1
