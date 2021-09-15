import {users} from '../../Assets/users'
import { ADD_USER, DELETE_USER, FETCH_USERS } from '../ActionTypes/userActionTypes';
const initState = {
    users,
}
const userReducer = (state=initState,action) => {
    switch (action.type) {
        case ADD_USER:
            return{
                ...state,
                users:[...state.users,action.payload]
            }
        case DELETE_USER:
            return{
                ...state,
                users:state.users.filter(usr=>usr.id!==action.payload)
            }
        case FETCH_USERS:
            return {
                ...state,
                fetchedUsers:action.payload
            }
        default:
            return state;
    }
}

export default userReducer