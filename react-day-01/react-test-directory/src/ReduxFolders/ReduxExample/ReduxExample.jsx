import React from 'react';
import { Provider } from 'react-redux'
import AddUser from '../Components/AddUser/AddUser';
import AllUsers from '../Components/AllUsers/AllUsers';
import store from '../Store/Store';

const ReduxExample = () => {
    return (
        <Provider store={store}>
            <AllUsers />
            <AddUser />
        </Provider>
    );
};

export default ReduxExample;