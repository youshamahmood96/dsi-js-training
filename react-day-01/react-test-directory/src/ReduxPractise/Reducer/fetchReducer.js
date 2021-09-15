import { FETCH_USERS } from "../ActionTypes/userActionTypes";

const initState = {
    users:[]
}
const fetchReducer = (state=initState,action)=> {
    switch (action.type) {
        case FETCH_USERS:
            return {
                ...state,
                users:action.payload
            }
        default:
            return state;
    }
}
export default fetchReducer