import {users} from '../../Assets/users'
import { ADD_USER, DELETE_USER } from '../ActionTypes/userActionTypes';

const initialState = {
    users
}
const userReducer = (state=initialState,action) => {
    switch (action.type) {
        case ADD_USER:
            return {
                users:[...state.users,action.payload]
            };
        case DELETE_USER:
            return {
                users:state.users.filter(usr=>usr.id!==action.payload)
            }
        default:
            return state;
    }
}
export default userReducer