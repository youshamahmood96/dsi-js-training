import React from 'react'
import { Provider } from 'react-redux'
import AddUser from './Components/AddUser/AddUser'
import AllUser from './Components/AllUser/AllUser'
import store from './Store/store'

function ReduxPractise() {
    return (
        <Provider store={store} >
            <AllUser/>
            <AddUser/>
        </Provider>
    )
}

export default ReduxPractise
