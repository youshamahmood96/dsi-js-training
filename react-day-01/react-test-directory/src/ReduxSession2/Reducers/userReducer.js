import { users } from "../../Assets/users";
import { userActions } from "../ActionTypes/userACtionTypes";

const initialState = {
    users
}

const userReducer = (state=initialState,action) => {
    switch (action.type) {
        case userActions.SHOW_USER:
            return {
                ...state
            }
        case userActions.DELETE_USER:
            return{
                ...state,
                users:state.users.filter(user=>user.id!== action.payload)
            }
        case userActions.ADD_USER:
            return{
                ...state,
                users:[...state.users,action.payload]
            }
        default:
            return state;
    }
}
export default userReducer